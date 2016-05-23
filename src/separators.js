'use strict';

function thousands_separators(num) {
  var b=parselnt(num).toString();
  var len=b.lenth,r=len%3;
  if(len<=3)
    {return b;}
  else
  {return b.slice(0,r)+","+b.slice(r,len).match(/\d{3}/g).jion(",");}

}

alert (thousands_separators(100));
alert (thousands_separators(1000));
alert(thousanda_separators(1000000));
alert(thousands_separators(1000.0));
alert(thousands_separators(100.2342));

