
'use strict';

function thousands_separators(num)
{var str=num.toString();
var newStr = "";
var count = 0;

if(str.indexOf(".")==-1)
{
   for(var i=str.length-1;i>=0;i--)
   {
 	if(count % 3 == 0 && count != 0)
	{
   		newStr = str.charAt(i) + "," + newStr;
        }
      else
        {
   		newStr = str.charAt(i) + newStr;
        }
    count++;
  }
   
}
else
{
    for(var i = str.indexOf(".")-1;i>=0;i--)
  {
     if(count % 3 == 0 && count != 0)
     {
   	newStr = str.charAt(i) + "," + newStr;
     }
    else
     {
   	newStr = str.charAt(i) + newStr; 
     }
 	count++;
  }
   str = newStr + (str + "00").substr((str + "00").indexOf("."),3);
  
}
	
}




