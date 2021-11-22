let email = document.querySelector("#email")
let pwd = document.querySelector("#pwd")


let start = ()=>{

    validate()

    localStorage.setItem("email", JSON.stringify(email.value) )
    localStorage.setItem("pwd",JSON.stringify(pwd.value) )

    console.log(JSON.parse(localStorage.getItem("email")) ); 
    console.log(JSON.parse(localStorage.getItem("pwd")));
}

let validate = ()=>{
    let vemail = email.value;
    let vpwd = pwd.value;
    if(vemail == ""){
        alert("email must be filled out.")
    }

    if(vpwd == ""){
        alert("password must be filled out")
    }
}