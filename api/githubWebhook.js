const crypto = require('crypto')

module.exports = async (req, res) => {

    const signature = req.headers['x-hub-signature-256'];
    const hmac = crypto.createHmac('sha256', process.env.GITHUB_WEBHOOK_SECRET);
    const digest = 'sha256=' + hmac.update(JSON.stringify(req.body)).digest('hex');

    if (signature !== digest) {
        res.status(403).send('Authentication failed');
        return;
    }

    //Logic

    res.status(200).send("Webhook received!");
}