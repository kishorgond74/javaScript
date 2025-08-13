// singleton

// object literals

const mySym = Symbol("key1")



const JsUser = {
    name: "Kishor",
    "full name": "Kishor Gond",
    [mySym]: "mykey1",
    age: 21,
    location: "Nanded",
    email: "gondkishor2@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym])

JsUser.email = "gondk3349@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "kishorgond@gmail.com"
// console.log(JsUser)

JsUser.greetings = function(){
    console.log("Hello JS User");
}
JsUser.greetingstwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greetings())
console.log(JsUser.greetingstwo())