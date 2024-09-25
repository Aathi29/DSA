function moveZero(a,n){
    var count=0;
    for(let i=0;i<n;i++){
        if(a[i]!=0){
            a[count++]=a[i];
        }
    }
    while(count<n){
        a[count++]=0;
    }
}

function printArray(a,n){
    for(let i=0;i<n;i++){
        console.log(a[i]);
    }
}

var a=[1,0,2,0,4,5];
var n=a.length;
moveZero(a,n);
printArray(a,n);