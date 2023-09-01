const axios = require('axios');
const { Client } = require('pg');
const sleep = require('util').promisify(setTimeout);

const client = new Client({
    connectionString: process.env.CONN_STRING,
});

async function fetchReadme(owner, repo) {
    const checkQuery = `SELECT readme_fetched FROM github_repositories WHERE name = $1`;
    const { rows } = await client.query(checkQuery, [repo]);
    if (rows.length > 0 && rows[0].readme_fetched) {
        console.log(`Skipping already fetched repo: ${repo}`);
        return null;
    }

    try {
        const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}/readme`, {
            headers: { 'Accept': 'application/vnd.github.VERSION.raw' }
        });
        const updateQuery = `UPDATE github_repositories SET readme_fetched = TRUE WHERE name = $1`;
        await client.query(updateQuery, [repo]);
        return response.data;
    } catch (error) {
        console.error(`Error fetching README for ${repo}:`, error);
        return null;
    }
}

module.exports = async (req, res) => {
    await client.connect();

    try {
        const response = await axios.get('https://api.github.com/users/meetg94/repos?per_page=70');
        const repos = response.data;

        for (const repo of repos) {
            const insertQuery = `INSERT INTO github_repositories (github_id, name, description, github_url) 
            VALUES ($1, $2, $3, $4) ON CONFLICT (github_id) DO NOTHING`;
            await client.query(insertQuery, [repo.id, repo.name, repo.description, repo.html_url]);
        }

        for (const repo of repos) {
            await sleep(3000);
            const readmeContent = await fetchReadme('meetg94', repo.name);
            if (readmeContent) {
                console.log(`README content for ${repo.name}:`, readmeContent);
            }
        }

        res.status(200).json(repos);
    } catch (error) {
        console.log("Error occured:", error);
        res.status(500).json({ error: 'An error occured while fetching data.' });
    } finally {
        await client.end();
    }
};