
'use strict';

function thousands_separators(num)
{
	var str=num.toString();
        str += ''; 
        var x = str.split('.');
        var x1 = x[0], x2 = x.length > 1 ? '.' + x[1] : '';
        var rgx = /(\d+)(\d{3})/; 
        while (rgx.test(x1)) 
        {  x1 = x1.replace(rgx, '$1' + ',' + '$2'); }
        return x1 + x2;


}




