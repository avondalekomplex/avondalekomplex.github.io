/**
 * index.mjs
 * 
 * @author ekalu
 * @since 2024-10-21
 */

(function() {
    const customerName = localStorage.getItem("customerName");
    if(customerName != null) {
        document.querySelector("#spnWelcomeMsg").innerHTML = "Welcome, " + customerName;
        document.querySelector("#lnkSignIn").style.display = "none";
        document.querySelector("#lnkSignOut").style.display = "inline";
        document.querySelector("#lnkSignOut").addEventListener("click", (event) => {
            event.preventDefault();
            localStorage.removeItem("customerName");
            window.location = "index.html";
        });
    } else {
        document.querySelector("#spnWelcomeMsg").innerHTML = "Welcome, Guest";
        document.querySelector("#lnkSignIn").style.display = "inline";
        document.querySelector("#lnkSignOut").style.display = "none";
    }
})();
