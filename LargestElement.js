let arr = [2,65,1,98,200,38,45]
var largest=arr[0];
var smallest=arr[0];

for(let i=0;i<arr.length;i++){
    if(arr[i]>largest){
        largest=arr[i];
    }
    if(arr[i]<smallest){
        smallest=arr[i];
    }
}
console.log(largest);
console.log(smallest);