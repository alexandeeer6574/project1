var arr=[1,2,3,4,5,6,7,8,9,10];
console.log(arr);
function arraySum(array){
    var sum=0;
    for(var i=0; i<array.length;i=i+1){
        sum+=array[i];
    }
    console.log(sum);
}
arraySum(arr);
for(var i=0; i<10;i=i+2)
    if(i%2==0){
        i=i+1;
    }
console.log(i);