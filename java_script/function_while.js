var num = 549857;
var rev = 0;
var remn = 0;
num2 = revr(num);
console.log(num2);

function revr(x) {
    while (x > 0) {
        remn = x % 10;
        rev = rev * 10 + remn;
        x = parseInt(x / 10);

    }
    return rev;
}
