//To check an array is sorted or not.

function sortedArray(arr,n){
    if(n==0 || n==1) {
        return true;
    }
    for(let i=1;i<n;i++){
        if(arr[i-1]>arr[i]){
            return false;
        }
    }
    return true;
}
let arr = [2,3,4,5];
var n = arr.length;

if(sortedArray(arr,n)){
    console.log("Sorted Array");
}
else{
    console.log("Not Sorted Array");
}