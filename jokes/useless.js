let typiarze=new Array(5);
let numer=0;
function kekw()
{
    window.alert("kekw")
}
function silniakalk(wartosc)
{
    if(wartosc==1)
    {
        return 1;
    }
    else 
    {
        let val=wartosc-1;
        let x=silniakalk(val)*wartosc;
        console.log(x);
        return x;
    }
}

function silnia(wartosc)
{
    document.getElementById("wynik").innerHTML=silniakalk(wartosc);
}
function zamiensilniewnapis(napis)
{
    document.getElementById("wynik").innerHTML=napis;
}

function wypisztabelke()
{
    let tabelka=new Array(5)
    for (i=0; i<5; i++)
    {
        tabelka[i]=i;
    }
    for(i in tabelka)
    {
        document.write(i+"<br\>");
    }
}
function dodajtypa(imie, wzrost)
{
    if(numer<5)
    {
    typiarze[numer]={name:imie,size:wzrost};
    numer+=1;
    }
    else
    {
        window.alert("nie dodawaj typa bo umrze program");
    }
}
function wypisztypiarzy()
{
    for(i=0;i<5;i++)
    {
        document.write(typiarze[i]['imie']+"<br/>");
    }
}