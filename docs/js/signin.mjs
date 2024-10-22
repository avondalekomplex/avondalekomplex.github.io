/**
 * signin.mjs
 */
"use strict";

import { UserData } from "./data/userdata.mjs";

(function() {
    let userData = null;
    const users = localStorage.getItem("users")
    if(users == null) {
        const users = [];
        userData = new UserData(users);
        localStorage.setItem("users", JSON.stringify(users));
    } else {
        const arrUsers = JSON.parse(users);
        userData = new UserData(arrUsers);
    }
    const formLogin = document.querySelector("#formLogin");
    formLogin.addEventListener("submit", (event) => {
        event.preventDefault();
        const username = document.querySelector("#username").value;
        const password = document.querySelector("#password").value;
        let validUserCredentials = false;
        for (const user of userData.users) {
            if (user.username === username && user.password === password) {
                localStorage.setItem("customerName", user.customername);
                validUserCredentials = true;
                window.location = "index.html?cn=" + user.customername;
            }
        }
        if (!validUserCredentials) {
            document.querySelector("#divInvalidUserMsg").style.display = "block";
        }
    });
})();