function smaller(arr) {
    let res = [];
    console.log(arr);
    arr.map(function (ele) {
        console.log(ele);
        res.push(ele - 1);
    });
    console.log(res);
    return res;
}
