// ###################################### start
// function userCreator1(name, score){
// 		const newUser = Object.create(userFunctionStore);
// 		newUser.name = name;
// 		newUser.score = score;
// 		newUser.increment= function(){this.score++},
// 		newUser.login: function(){console.log('login!')}
// 		return newUser;
// }
//
// const user1 = userCreator1('Alex',2);
// const user2 = userCreator1('Tom', 3);
// console.log(user1)
// user1.increment();


// #####################################  define custome object
// function userCreator2(name, score){
// 		const newUser = Object.create(userFunctionStore);
// 		newUser.name = name;
// 		newUser.score = score;
// 		return newUser;
// }
//
// const userFunctionStore = {
// 				increment: function(){this.score++},
// 				login: function(){console.log('login!')}
// }
//
// const user3 = userCreator2('Alex',2);
// const user4 = userCreator2('Tom', 3);
// console.log(user3)
// user3.increment();

// automate it with new/this JavaScript feature
// #1
function UserCreator3(name, score){
		this.name = name
		this.score = score
}
// #2
UserCreator3.prototype.increment = function(){
		this.score++;
}
// #3
UserCreator3.prototype.login = function(){
		console.log('login!')
}
// #4
const user5 = new UserCreator3('JJ', 5);
// #5
user5.increment();

console.log(user5)

