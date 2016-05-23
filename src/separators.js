<script>
'use strict';

function thousands_separators(str)
{var newStr = "";
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
   for(var i = str.indexOf(".")-1;i>=0;i--){
 if(count % 3 == 0 && count != 0){
   newStr = str.charAt(i) + "," + newStr;
 }else{
   newStr = str.charAt(i) + newStr; 
 }
 count++;
   }
   str = newStr + (str + "00").substr((str + "00").indexOf("."),3);
  
 }
}


alert (thousands_separators(100));
alert (thousands_separators(1000));
alert(thousanda_separators(1000000));
alert(thousands_separators(1000.0));
alert(thousands_separators(100.2342));
</script>
