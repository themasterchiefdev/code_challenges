function halvingSum(param) {
    if (isNaN(param)) {
        return;
    }
    let result = param;
    let sum=0;
    let funcResult;
    while (result !== 0 && !(result <1) ) {
        result = result / 2;
        sum=sum+parseInt(result);
    }
    funcResult=sum+param;
    return funcResult;
}
console.log(halvingSum(127));
console.log(halvingSum(25));
console.log(halvingSum('abc'));
