const USERNAME = "username";
const ID = "123456789";
const PASSWORD = "password";

const enterButton = document.querySelector('#frmlogin input[title="כניסה"]');

if (enterButton) {
    document.querySelector('#frmlogin input[name="txtUser"]').value = USERNAME;
    document.querySelector('#frmlogin input[name="txtId"]').value = ID;
    document.querySelector('#frmlogin input[name="txtPass"]').value = PASSWORD;
    enterButton.click();
}
