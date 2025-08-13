// singleton

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Kishor",
    "full name": "Kishor Gond",
    age: 21,
    location: "Nanded",
    email: "gondkishor2@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser."full name");


