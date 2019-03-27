var num=549857;
var rev=0;
var remn=0;
while(num>0)
{
    remn=num%10;
    rev=rev*10+remn;
    num=parseInt(num/10);

}
console.log(rev);