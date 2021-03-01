function sleep(num) {
    var now = new Date();
    var stop = now.getTime() + num;
    while(true) {
        now = new Date();
        if(now.getTime() > stop) return;
    }
}
function wypisz(v1,v2,v3)
{
    document.getElementById("wynik").innerHTML=v1+" "+v2+" "+v3;
}
function kalkulator(v1=1, znak, v2=1)
{
    let val=0;
    switch(znak)
    {
        case '+':
            val=1;
            val*=v1;
            val+=1*v2;
        break;
         case '-':
            val=v1-v2;
        break;
         case '*':
            val=v1*v2;
        break;
          case '/':
            val=v1/v2;
        break;
         case '^':
            val=Math.pow(v1,v2);
        break;
    }
    document.getElementById("wynik").innerHTML=val;
}
function show()
{
    if(document.getElementById('sekret').style.display=='inline')
    {
        document.getElementById('sekret').style.display="none";
    }
    else
    {
        document.getElementById('sekret').style.display='inline';
    }
}
function dodajsyfa()
{
    document.getElementById('wynik').innerHTML+="█";
}
function linka(ilosc)
{
    for(i=0;i<ilosc;i++)
    {
        dodajsyfa();
        sleep(1);
    }
}