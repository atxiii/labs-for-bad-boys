const express = require('express');
const bodyParser = require('body-parser')
const inviteCode  = require('./secret.js')
const app =  express()
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
		// res.send(req.body)
		let user = req.body;
		if(user.isAdmin && user.inviteCode !== inviteCode){
				res.send('No invite code? No admin!');
		}else{
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
