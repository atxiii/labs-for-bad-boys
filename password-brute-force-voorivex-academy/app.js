const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');
const crypto = require('crypto');
const { flag } = require('./flag')
const path = require('path');

const app = express();
const sequelize = new Sequelize('sqlite::memory:');
const Secret = sequelize.define('SECRET', {
    username: { type: DataTypes.STRING, unique: true },
    secret: DataTypes.STRING
});
sequelize.sync();
app.use(express.json());
app.use(express.static('public'));

async function generate_secret() {
    let secret = crypto.randomInt(10000, 99999);
    return await Secret.upsert({ username: 'admin', secret });
}

app.get('/', async (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});


app.get('/rAndom', async (req, res) => {
    res.download('./app.js')
});


app.get('/generate-secret', async (req, res) => {
    await generate_secret()
    res.send({ status: 'ok' });
});

app.get('/d', async (req, res)=>{
	  	const users = await Secret.findOne();
				res.send(JSON.stringify(users))
})

app.post('/admin', async (req, res) => {
    const { secret, username } = req.body

    // secret = [1,2,3] => sql query =>  IN (1,2,3)
    if (secret && username) {
					const users = await Secret.findOne({ where: { username, secret } });
								if (users) res.send(flag);
        else {
            await Secret.destroy({ where: { username } });
            await generate_secret()
            res.send('Invalid secret provided.');
        }
    } else {
        res.send('Required parameters \'secret\' and \'username\' not found.');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
