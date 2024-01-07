let button = document.querySelector("button");
let showAge = document.getElementById("show_age");
let dateOfBirth = document.querySelector("input");
button.addEventListener("click",(e)=>{
    e.preventDefault();
    const today = new Date();
    const dob = new Date(dateOfBirth.value)
    let age = today.getFullYear() - dob.getFullYear();
    const month = today.getMonth() - dob.getMonth();
    const date = today.getDate() - dob.getDate();
    if(dateOfBirth.value ==""){
        alert("Please enter birthdate");
    }else if(age < 0 || (age === 0 && today.getMonth() < dob.getMonth()) || (age ===0 && today.getDate() < dob.getDate())){
        alert("Please enter valid birthdate");
        console.error("The given birthdate is not valid")
    } else {
        if(today.getMonth() < dob.getMonth() || today.getDate() < dob.getDate()){
            age--;
        }

        showAge.innerText = `Your age is ${age} years old`
    }
  
})