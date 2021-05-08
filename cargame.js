function productDigit(x)
{
    let product = 1;
 if(x<-1||x>=32767){
     console.log('INVALID INPUT')
     return -1;
 }
    while (x != 0)
    {
        product = product * (x % 10);
        x = Math.floor(x / 10);
    }
    return product;
}
 
 
let x=parseInt(prompt('ENTER THE DISTANCE TRAVLLED IN KILOMETRE'));
console.log(x);
const result=productDigit(x);
console.log('THE AMOUNT U WIN:'+result);
 