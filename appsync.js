console.log("Start");

function loginUser(email, password) {
    setTimeout(() => {
        console.log("Now we have the data");
        return { userEmail: email };
    }, 1500);
}
const usr = loginUser('tanV@goomail.com', 76534);
console.log(usr);
console.log("Finish");