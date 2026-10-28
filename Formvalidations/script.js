let nameTextBox = document.getElementById("name");
let numberTextBox = document.getElementById("number");
let emailTextBox = document.getElementById("email");
let passwordTextBox = document.getElementById("password");
let cPasswordTextBox = document.getElementById("cPassword");


function reg(e){
    e.preventDefault();

    let name = nameTextBox.value;
    let number = numberTextBox.value;
    let email = emailTextBox.value;
    let password = passwordTextBox.value;
    let cPassword = cPasswordTextBox.value;

    if(name==""||email==""||number==""||password==""||cPassword==""){
        alert("please fill all details");
        return;
    }

    let numberCheck = /^[6-9][0-9]{9}$/
    let numberResult = numberCheck.test(number);

    if(numberResult==false){
        alert("enter the number correctly")
        return;
    }

    let emailCheck =/^[a-z][a-z0-9.]{0,19}@gmail[.]com$/
    let emailResult = emailCheck.test(email)

    if(emailResult==false){
        alert("check the email you entered")
        
        return;
    }

    let passwordCheck= /^(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])(?=.*\W).{6,25}$/
    let passwordResult = passwordCheck.test(password)

    if(password!=cPassword){
        alert("Check your password");
    }

    let obj ={
        name,
        number,
        email,
        password
    }

    let str =  JSON.stringify(obj)
    localStorage.setItem("userOBJ",str)

    console.log(obj);

    alert("Register Success")









































}