const eyeleft = document.getElementById("eye-left")
const eyeright = document.getElementById("eye-right")
const user = document.getElementById("user")
const password = document.getElementById("password")
const btn = document.getElementById("btn")
const org = document.getElementById("org")
const boxinp1 = document.getElementById("boxinp1")
const boxinp2 = document.getElementById("boxinp2")

user.addEventListener("click", () => {

    eyeleft.style.top = '65%'
    eyeright.style.top = '65%'
    boxinp1.style.border = "#e5dff9"


})

password.addEventListener("click", () => {

    eyeleft.style.top = '55%'
    eyeright.style.top = '55%'
    boxinp2.style.border = "#e5dff9"

})

btn.addEventListener("click", () => {
    eyeleft.style.top = '60%'
    eyeright.style.top = '60%'

    let val2 = password.value
    let val1 = user.value
    





    switch (true) {
        case val1.length <= 3 || val1 == "": alert("The username is too short.");
            boxinp1.style.border = "1px solid red"
            break;
        case val1.length >= 15: alert("the username is too long ..")
            break;
        case val2.length <= 5 || val2 == "": alert("The password is not secure. ..");
            boxinp2.style.border = "1px solid red"

            break;
        case val2.length >= 15: alert("the Password is too long ..")
            break;

        // case val2 == "!" && val2 == "%" && val2 == "&" && val2 == "(":
        //     alert("you can't use ! % ( & ")
        //     break;

        default: alert("welcome"); location.reload()
    }




})



