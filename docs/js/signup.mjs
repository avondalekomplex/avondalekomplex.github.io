/**
 * signup.mjs
 */

"use strict";

import { UserData } from "./data/userdata.mjs";
import { User } from "./model/user.mjs";

(function() {
    let userData = null;
    const users = localStorage.getItem("users");
    if(users == null) {
        const users = [];
        userData = new UserData(users);
        localStorage.setItem("users", JSON.stringify(users));
    } else {
        const arrUsers = JSON.parse(users);
        userData = new UserData(arrUsers);
    }

    const registerNewUser = function() {
        const customername = document.querySelector("#customername").value;
        const email = document.querySelector("#email").value;
        const username = document.querySelector("#username").value;
        const password = document.querySelector("#password").value;

        const newUser = new User(
            customername, email, username, password);
        console.log(newUser);
        console.log(userData.users);
        userData.users.push(newUser);
        localStorage.setItem("users", JSON.stringify(userData.users));
        localStorage.setItem("customerName", customername);
        window.location = "index.html?cn="+customername;
    }

    // Sign-up and Register a new user
    const formSignUp = document.querySelector("#formSignUp");
    formSignUp.addEventListener("submit", event => {
        event.preventDefault();
        registerNewUser();
    });

})();