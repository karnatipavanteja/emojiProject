
let arr=[1,2,3,4,5];
let target=9;
console.log(findTarget(arr,target));
function findTarget(arr,target){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if(arr[i]+arr[j]==target){
                return [arr[i], arr[j]]
            }
        }
    }
}