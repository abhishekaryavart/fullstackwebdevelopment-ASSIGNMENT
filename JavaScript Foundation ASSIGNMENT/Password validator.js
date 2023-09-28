//GET THE ELEMENT
const fpass=document.getElementById("fpassword")
const cnfpass=document.getElementById("cnfpassword")
const button=document.getElementById("button");
 const message1=document.getElementById("mess1");
const message2=document.getElementById("mess2");

//CHECK THE ELEMENT

console.log(fpass);
console.log(cnfpass);
console.log(mess1);







button.addEventListener("click", function () {
    const password1 = fpass.value;
    const password2 = cnfpass.value;


if(password1,password2 == ""){
    mess1.textContent="**Please Enter Password**";
    return true;
}



    if (password1 === password2) {
        mess1.textContent = "**Passwords match !";
    } else {
        mess1.textContent = "**Passwords do not match !";
    }
});

