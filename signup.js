let firstName = document.querySelector("#firstName")
let lastName = document.querySelector("#lastName")
let email = document.querySelector("#email")
let pwd = document.querySelector("#pwd")
let cnpwd = document.querySelector("#cnpwd")


let start = ()=>{

    validate()

    localStorage.setItem("firstName",JSON.stringify(firstName.value) )
    localStorage.setItem("lastName",JSON.stringify(lastName.value) )
    localStorage.setItem("email",JSON.stringify(email.value))
    localStorage.setItem("pwd",JSON.stringify(pwd.value) )

    console.log(JSON.parse(localStorage.getItem("firstName")) ); 
    console.log(JSON.parse(localStorage.getItem("lastName")) ); 
    console.log(JSON.parse(localStorage.getItem("email")) );
    console.log(JSON.parse(localStorage.getItem("pwd")) );
   
}

let validate = ()=>{
    let vfname = firstName.value
    let vlname = lastName.value
    let vemail = email.value
    let vpwd = pwd.value
    let vcpwd = cnpwd.value

    if(vfname == ""){
        alert("first name must be filled out.")
    }

    if(vlname == ""){
        alert("last name must be filled out.")
    }

    if(vemail == ""){
        alert("email must be filled out.")
    }

    if(vpwd == "" || vcpwd == ""){
        alert("password must be filled out.")
    }

    if(vpwd != vcpwd)
    {
        alert("password and confirm password must be same")
    }
    
}