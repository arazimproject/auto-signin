const loginButton = document.querySelector(
    '.login > a[href="https://moodle.tau.ac.il/login/index.php"]'
);
if (loginButton) {
    loginButton.click();
} else {
    console.log("No login button");
}
