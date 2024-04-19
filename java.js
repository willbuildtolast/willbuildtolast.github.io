let changed = false;
let email = document.getElementById("email");

function changeEmail(){
    if (!changed){
        email.textContent = "WZ2258@NYU.EDU";
    }
    else{
        email.textContent = "Click Here to See";
    }
    changed = !changed;
}

email.addEventListener("click", changeEmail);

