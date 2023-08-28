const axios = require('axios');

module.exports = async (req, res) => {
    try {
        const response = await axios.get('https://api.github.com/meetg94/repos')
        const repos = response.data;

        const filteredRepos = repos.filter(repo => repo.description);
        res.status(200).json(respos);
    } catch (error) {
        res.status(500).json({ error: 'An error occured while fetching data.'});
    }
};