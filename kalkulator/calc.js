wynik=0;
dzialanie="+";
var element = document.getElementById("typicalbutton");
var positionInfo = element.getBoundingClientRect();
var width = positionInfo.width;
document.getElementById("wynik").style.width=width;
function wyswietlwynik()
{
    document.getElementById("wynik").value=wynik;
}
function str(x)
{
    if(document.getElementById('wynik').value==wynik)
    {
        document.getElementById('wynik').value=x;
    }
    else
    {
    document.getElementById("wynik").value+=x;
    }
}
function task(x)
{
    dzialanie=x;
    wynik=document.getElementById("wynik").value;
}

function result()
{
    kek=document.getElementById('wynik').value;
    let val=0;
    switch(dzialanie)
    {
        case '+':
            val=1;
            val*=wynik;
            val+=1*kek;
        break;
         case '-':
            val=wynik-kek;
        break;
         case '*':
            val=wynik*kek;
        break;
          case '/':
            val=wynik/kek;
        break;
         case '^':
            val=Math.pow(wynik,kek);
        break;
        case '%':
            val=wynik%kek;
        break;
    }
    wynik=val;
    wyswietlwynik();
}
function C()
{
    document.getElementById('wynik').value='';
    wynik=0;
}
function rewerse()
{
    document.getElementById('wynik').value*=-1;
}
function bs()
{
    document.getElementById('wynik').value=document.getElementById('wynik').value.slice(0,-1);
}