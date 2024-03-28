const USERNAME = "username";
const ID = "123456789";
const PASSWORD = "password";

if (document.getElementById("Ecom_User_ID")) {
    document.getElementById("Ecom_User_ID").value = USERNAME;
    document.getElementById("Ecom_User_Pid").value = ID;
    document.getElementById("Ecom_Password").value = PASSWORD;
    setTimeout(() => document.getElementById("loginButton").click(), 300);
} else {
    document.querySelector('input[name="user_name"]').value = USERNAME;
    document.querySelector('input[name="id_number"]').value = ID;
    document.querySelector('input[name="password"]').value = PASSWORD;
    document.querySelector("div.btn_wrapper > button:nth-child(1)").click();
}
