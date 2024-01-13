let calculator={
    a:0,
    b:0,
    read:function(){
        calculator.a=parseFloat(prompt("enter the first value"));
        calculator.b=parseFloat(prompt("enter the second value"));
    },
    sum:function(){
        return calculator.a+calculator.b;
    },
    mul:function (){
        return calculator.a*calculator.b;
    }

};
calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());