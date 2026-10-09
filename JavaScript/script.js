function sumOfn(){
    let n = prompt("eneter a number");
    let sum =0;
    for(let i=0;i<=Number(n);i++){
        sum+=i;
    }

    console.log("sum of numbers: "+sum);
}

function fact(){
    let n =prompt("enter a number");
    let fact =1;
    for(let i=1;i<=Number(n);i++){
        fact*=i;
    }

    console.log("factorial: "+fact);
}