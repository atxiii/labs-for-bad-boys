const express = require('express');
const bodyParser = require('body-parser')
const inviteCode  = require('./secret.js')
const app =  express();

// [client] --[f]--  [server]
// [stringify ] -> [-> json] -> server
app.use(bodyParser.json());

const port = 3000
const baseUser = {'picture': 'default.png'}

function createAdmin(user){
		const newAdmin = {}
		newAdmin.name = user.name
		newAdmin.role = 'Office Manager'
		console.log(newAdmin)
		return newAdmin;
}

function createUser(user){
		const newUser = {}
		newUser.name = user.name
		console.log(newUser)
		return newUser;
}

app.post('/', (req, res)=>{
	let user = req.body;
	console.log(req.body);
	// req.body => __proto__
	// ..
	if(user.isAdmin && user.inviteCode !== inviteCode){
		res.send('No invite code? No admin!');
	}else{
		// user => {__proto__:{"isAdmin"}}
		let newUser= Object.assign(baseUser, user);
		if(newUser.isAdmin) createAdmin(newUser);
		else createUser(newUser);
		res.send('Successfully created '+ `${newUser.isAdmin ? 'Admin': 'User'}`)
	}
})


app.get('/',(req,res)=>{
	res.send('Hello')
})

app.listen(port, ()=>{
			console.log(`App listening on port ${port}`)
})
