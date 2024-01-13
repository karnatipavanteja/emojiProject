// Q1 

let user={};
user.name="john";
user.surName="smith";
user.name="Pete";
delete user.name;
console.log(user);
// Q2 

let myObj={};
function objcheck(obj){
    if(Object.keys(obj).length==0){
        console.log("true");
    }else{
        console.log("false");
    }
}
objcheck(myObj);
// Q3 

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }
let sum=0;
  if(Object.keys(salaries).length!=0){
    sum=Object.values(salaries).reduce((acc,current)=>{
        return acc+current;
    })
  }
  console.log(sum);

