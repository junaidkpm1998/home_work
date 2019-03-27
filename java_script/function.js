var num1=956;
var num2=764;

num3=add(num1,num2);

console.log(num3);
num4=sub(num2,num1);
console.log(num4);
num5=mul(num1*num2);
console.log(num5);
function add(x,y)
{
    z=x+y;
    return z;
}
function sub(x,y)
{
    z=x-y;
    return z;
}
function mul(x,y)
{
    z=x*y;
    return z;
}