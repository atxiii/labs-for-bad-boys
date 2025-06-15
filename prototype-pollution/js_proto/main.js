let x = {
	"name":"catfather",
	"role": "default"
}

const y = {
	role : "admin"
}

Object.assign(y,x);


// console.log(`y`, y)
// console.log(`x`, x)


// JSON.stringify(x)

const x2 = JSON.parse("{\"name\":\"catfahter\",\"__proto__\":{\"role\":\"admin\"}}");
console.log(x2)


// ###################################### start

// #1

// function userCreator1(name, score){
// 		const newUser = Object.create({});

// 		newUser.name = name;
// 		newUser.score = score;
// 		newUser.increment= function(){
// 			this.score++;
// 			console.log('this in increament',this)
// 		};
// 		newUser.login = function(){console.log('login!')}
// 		console.log('this in user',this)
// 		return newUser;
// }

// // #2
// const user1 = userCreator1('Alex',2);
// // #3
// const user2 = userCreator1('Tom', 3);
// // #4
// console.log(user1)
// user1.increment();

/// Memory
// 1 - ->[f]->
// 2- user1
// name = alex
// score = 2
// user1 -> {
//   name : alex
//	 score : 2
//  increment : ->[f]->
//  login : ->[f]->
//   -----------
//    __proto__ -> object_base [[prototype]]
//}

//

// #####################################  define custome object
// #1
// function userCreator2(name, score){
// 		// 3.1
// 		const newUser = Object.create(userFunctionStore);
// 		console.log(newUser);
// 		// 3.2
// 		newUser.name = name;
// 		// 3.3
// 		newUser.score = score;
// 		// 3.4
// 		return newUser;
// }
// // #2
// const userFunctionStore = {
// 		increment: function(){this.score++},
// 		login: function(){console.log('login!')}
// }
// // #3
// const user3 = userCreator2('Alex',2);
// // #4
// const user4 = userCreator2('Tom', 3);
// // #5
// user3.increment();


// automate it with new/this JavaScript feature
// window
// #1
// function UserCreator3(name, score){
// 		// this -> {}
// 		this.name = name
// 		this.score = score
// 		// prototype {

// 		//  }
// 		// return this
// 		console.log('this', this)
// }
// // console.log('global this',this)
// // // #2
// UserCreator3.prototype.increment = function(){
// 		this.score++;
// }
// // // #3
// UserCreator3.prototype.login = function(){
// 		console.log('login!')
// }
// // // #4
// const user5 = new UserCreator3('JJ', 5);
// // // #5
// user5.increment();

// console.log(user5)


//1 ->[f]->
//2 UseCreator3 -> prototype - > increament -> -[f]->
//3 UseCreator3 -> prototype - > login -> -[f]->
//4  => name= jj , score = 5
// this -> {name: jj , score: 5, proto -> prototype { increament , login } }
// return this -> {name: jj , score: 5, proto -> prototype { increament , login } }



// function UserCreator8(name, score){
// 	this.name = name;
// 	this.score = score;
// 	console.log('this in userCreator' ,this)
// }
// UserCreator8.prototype.increament = function(){
// 		this.score++;
// 		console.log('this in increament',this)
// };
// const user8 = new UserCreator8("MM", 3);

// user8.increament();
