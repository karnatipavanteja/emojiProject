const n=5

for(let i=0;i<n;i++){
    let string = ""


for(let col=0;col<n-1-i;col++){
    string+=" "
    
}

for(let j=0;j<(i*2)+1;j++){
    string+=j+1

}
console.log(string)
}
const r = 9;


for (let k = 0; k < r / 2; k++) {
    let s = "";
    for (let c = 0; c < r / 2 - k; c++) {
        s += " ";
    }
    for (let l = 0; l < k + 1; l++) {
        s += l + 1;
    }
    console.log(s);
}


for (let m = r / 2 + 1; m < r; m++) {
    let t = "";
    for (let q = 0; q < (m - 4) ; q++) {
        t += " ";
    }
    for (let p = 0; p < (r - m); p++) {
        t += p + 1;
    }
    console.log(t);
}
const x=9
for(let p=0;p<x;p++){
    let s=""
    for(let e=p+1;e>0;e--){
        s+=e
    }
    console.log(s)
}
console.log()
let y = 5;

for (let h = 0; h < 5; h++) {
    let s = "";

    for (let w = 0; w < h; w++) {
        s += " ";
    }

    for (let b = 1; b <= 9 - h * 2; b++) {
        s += b;
    }

    console.log(s);
}



