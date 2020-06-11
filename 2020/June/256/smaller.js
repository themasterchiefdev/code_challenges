// https://dev.to/thepracticaldev/daily-challenge-256-how-many-are-smaller-than-i-p15

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
