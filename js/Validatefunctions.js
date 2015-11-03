
function PageQuery(q) {
if(q.length > 1) this.q = q.substring(1, q.length);
else this.q = null;
this.keyValuePairs = new Array();
if(q) {
for(var i=0; i < this.q.split("&").length; i++) {
this.keyValuePairs[i] = this.q.split("&")[i];
}
}
this.getKeyValuePairs = function() { return this.keyValuePairs; }
this.getValue = function(s) {
for(var j=0; j < this.keyValuePairs.length; j++) {
if(this.keyValuePairs[j].split("=")[0] == s)
return this.keyValuePairs[j].split("=")[1];
}
return false;
}
this.getParameters = function() {
var a = new Array(this.getLength());
for(var j=0; j < this.keyValuePairs.length; j++) {
a[j] = this.keyValuePairs[j].split("=")[0];
}
return a;
}
this.getLength = function() { return this.keyValuePairs.length; } 
}


function queryString(key){
var page = new PageQuery(window.location.search); 
return unescape(page.getValue(key)); 
}


function displayItem(key){
		if(queryString(key)=='false') 
		{
		return false
		}
		else
		{
		return true
		}
}


function currency()
{
		
					if(location.search)
					
							if(!displayItem('currency'))
							window.location.href=window.location.href.split('#')[0]+'&currency='+document.getElementById('Currency').value
							else
							{
							var start=location.search.indexOf("?currency=");
							if (start<0) 
							window.location.href=window.location.href.split('&currency=')[0]+'&currency='+document.getElementById('Currency').value
							else
							window.location.href=window.location.href.split('?currency=')[0]+'?currency='+document.getElementById('Currency').value
							}
							
					else
					window.location.href=window.location.href+'?currency='+document.getElementById('Currency').value
					
}


var message="Function Disabled!";

///////////////////////////////////
function clickIE4(){
if (event.button==2){
//alert(message);
return false;
}
}

function clickNS4(e){
if (document.layers||document.getElementById&&!document.all){
if (e.which==2||e.which==3){
//alert(message);
return false;
}
}
}

/*if (document.layers){
document.captureEvents(Event.MOUSEDOWN);
document.onmousedown=clickNS4;
}
else if (document.all&&!document.getElementById){
document.onmousedown=clickIE4;
}

document.oncontextmenu=new Function("return false")*/

function subscribeme()
	{
							
							if (document.frm_Subscribe.txtEmail.value=="" || document.frm_Subscribe.txtEmail.value=="E-mail Address")
	{
	alert('Please Enter Your EmailID')
	document.frm_Subscribe.txtEmail.focus();
	return false;
	}
							
							
							if(!chkEmail(document.frm_Subscribe.txtEmail,"Email",false))return false;
							document.frm_Subscribe.submit();
	}
	function submitLink()
	{
		if ((document.cboSearch.cats.value.indexOf('books.asp')!=-1) || (document.cboSearch.cats.value.indexOf('accessories.asp')!=-1))
		{
			document.cboSearch.action=document.cboSearch.cats.value;
			document.cboSearch.submit();
		}
		else
		{
			document.cboSearch.submit();
		}
	}

function clear_words()
	{
		//alert("hi")
	if(!chkTxtBox(document.cboSearch_product.psearch,"Product Title or Description"))return;
	
	document.cboSearch_product.action="categories.asp";
	document.cboSearch_product.submit();
	}
function trim(strText)
{
	if (strText.length > 0)
	{
		while (strText.indexOf(" ")==0)
		{
			strText = strText.replace(" ","")
		}

		while (strText.lastIndexOf(" ")==strText.length-1 && strText.length > 0)
		{
			strText = strText.substring(0,(strText.length-1))
		}
	}
	return strText;
}

	
function ltrim(strText)
{
	while (strText.indexOf(" ")==0)
	{
	strText=strText.replace(" ","")
	}
	return strText;
}
 
//function to compare 2 dates. This function takes in 2 parameters (i.e dates ) and 
//the format of both the parameters is mm/dd/yy .This function returns the difference in days
function jsDateDiff( start, end) 
{
    var iOut = 0;

    var bufferA = Date.parse( start ) ;
    var bufferB = Date.parse( end ) ;
    	
    var number = bufferB-bufferA ;
    
    iOut = parseInt(number / 86400000) ;
    return iOut ;
}

function openWin(strURL,strWinName,winWidth,winHeight)
{
	var chngpass;
	winTop=0
	winLeft=0
	winLeft=Math.floor((Math.abs(screen.availWidth-winWidth))/2);
	winTop=Math.floor((Math.abs(screen.availHeight-winHeight))/2);

	strWin=window.open(strURL,strWinName,'top='+ winTop + ',left=' + winLeft + ',width=' + winWidth + ',height=' + winHeight + ',toolbar=no menubar=no,location=no,directories=no,status=no,resizable=no,scrollbars=yes');
	return strWin;
}

function confDelete(section,message)
{
	strSection = section
	strMessage = message.substr(0,50) 
	if (message.length>50)
	{
		strMessage = strMessage + "..."
	}

	if (section!="" && message!="")
	{
		return confirm("Proceed with deletion of '" + strSection + "'\n '" + strMessage + "'?" ) 
	}
	else
	{
		return confirm("Proceed with deletion?") 
	}
}

//function to validate a User Name TextBox
function chkUserName(txtElement,fieldName)
{
	if(ltrim(txtElement.value).length == 0)
	{
		alert("Please enter '" + fieldName + "'");
		txtElement.focus();
		return false;
	}
	if(txtElement.value.indexOf(" ") != -1)
	{
		alert("Please enter a valid '" + fieldName + "'");
		txtElement.focus();
		return false;
	}
	return true;
}

function chkPassword(txtElement,fieldName)
{
	var checkstring = /[^-_()&+*\"\'@!%\/?:=~#a-zA-Z0-9]/
	if(txtElement.value.length == 0)
	{
		alert("Please enter '" + fieldName + "'");
		txtElement.focus();
		return false;
	}
	if(txtElement.value.search(checkstring)!=-1)
	{
		alert("Please enter a valid password.\nIt can only include numbers, upper and lower case letters\nor the following special characters . - _ ( ) & + * \" ' @ ! % / ? : = ~ # ");
		txtElement.focus();
		return false;
	}
	return true;
}


//function to validate Date (only month and year)
function chkMMYY(txtMMElement,txtYYElement,fieldName,allowEmpty)
{	
	if(allowEmpty == false)
	{
		if (txtMMElement.selectedIndex==0)
		{
			alert("Select a Month  for '" + fieldName + "'")
			txtMMElement.focus()
			return false
		}
		if (txtYYElement.selectedIndex==0)
		{
			alert("Select a Year for '" + fieldName + "'")
			txtYYElement.focus()
			return false
		}
	}

	if( allowEmpty == true && txtMMElement.selectedIndex==0 && txtYYElement.selectedIndex==0)
	{
		//empty value is allowed
		return true;
	}
	else
	{
		var i=0;
		var j=0;
		var strDate = "" + txtMMElement[txtMMElement.selectedIndex].value;
		strDate = strDate + "/" + "1" ;
		strDate = strDate + "/" + txtYYElement[txtYYElement.selectedIndex].value;

		j= strDate.indexOf("/",i);
		var strMnth=strDate.substring(i,j);
		
		i=strMnth.length + 1;
		j= strDate.indexOf("/",i);
		var strDay=strDate.substring(i,j);
		
		j=j+3;
		i=strDate.length
		var strYear=strDate.substring(j,i);

		strMnth--;
		dtDate=new Date(strYear,strMnth,strDay);
		var dtDay=dtDate.getDate();
		var dtMnth=dtDate.getMonth();
		var dtYear=dtDate.getYear();

		if (strYear == "")
		{
			alert("Invalid '" + fieldName + "'")
			txtMMElement.focus()
			return false;
		}
		
		if((strDay!=dtDay) || (strMnth!=dtMnth) || (strYear!=dtYear))
		{
			alert("Invalid '" + fieldName + "'")
			txtMMElement.focus()
			return false;	
		}
		return true;
	}
}

//function to validate Date
function chkDDMMYY(txtDDElement,txtMMElement,txtYYElement,fieldName,allowEmpty)
{	
	if(allowEmpty == false)
	{
		if (txtDDElement.selectedIndex==0)
		{
			alert("Select a Day for '" + fieldName + "'")
			txtDDElement.focus()
			return false
		}
		if (txtMMElement.selectedIndex==0)
		{
			alert("Select a Month  for '" + fieldName + "'")
			txtMMElement.focus()
			return false
		}
		if (txtYYElement.selectedIndex==0)
		{
			alert("Select a Year for '" + fieldName + "'")
			txtYYElement.focus()
			return false
		}
	}

	if( allowEmpty == true && txtDDElement.selectedIndex==0 && 
		txtMMElement.selectedIndex==0 && txtYYElement.selectedIndex==0)
	{
		//empty value is allowed
		return true;
	}
	else
	{
		var i=0;
		var j=0;
		var strDate = "" + txtMMElement[txtMMElement.selectedIndex].value;
		strDate = strDate + "/" + txtDDElement[txtDDElement.selectedIndex].value;
		strDate = strDate + "/" + txtYYElement[txtYYElement.selectedIndex].value;

		j= strDate.indexOf("/",i);
		var strMnth=strDate.substring(i,j);
		
		i=strMnth.length + 1;
		j= strDate.indexOf("/",i);
		var strDay=strDate.substring(i,j);
		
		j=j+3;
		i=strDate.length
		var strYear=strDate.substring(j,i);

		strMnth--;
		dtDate=new Date(strYear,strMnth,strDay);
		var dtDay=dtDate.getDate();
		var dtMnth=dtDate.getMonth();
		var dtYear=dtDate.getYear();

		if (strYear == "")
		{
			alert("Invalid '" + fieldName + "'")
			txtDDElement.focus()
			return false;
		}
		
		if((strDay!=dtDay) || (strMnth!=dtMnth) || (strYear!=dtYear))
		{
			alert("Invalid '" + fieldName + "'")
			txtDDElement.focus()
			return false;	
		}
		return true;
	}
}

//function to validate an Email
function chkEmail(txtElement,fieldName,allowEmpty)
{
	var exclude=/[^@\-\.\w\_]|^[_@\.\-]|[\._\-]{2}|[@\.]{2}|(@)[^@]*\1/;
	var check=/@[\w\-]+\./;
	var checkend=/\.[a-zA-Z]{2,3}$/;
	var strEmail = txtElement.value
	var email_array=strEmail.split(",");

	if(allowEmpty == false && txtElement.value.length == 0)
	{
		alert("Please enter '" + fieldName + "'");
		txtElement.focus()
		return false;
	}

	if(allowEmpty == true && txtElement.value.length == 0)
	{
		//empty value is allowed
		return true;
	}
	else 
	{
		var email_num=0;
		var checkEmail;
		while (email_num < email_array.length)
		{ 
			var trimemail = trim(email_array[email_num]);
			if(((trimemail.search(exclude) != -1) || 
			(trimemail.search(check)) == -1)   ||	
			(trimemail.search(checkend) == -1))
			{
				checkEmail = "false";
			}
			else
			{
				checkEmail = "true";
			}
			email_num++;

			if(checkEmail == "false")
			{
				alert("Incorrect email address!");
				txtElement.focus()
				return false;
			}
		}
	}
	return true;
}

/*
	Notes:
	'exclude' checks 5 conditions:
	a) characters that should not be in the address
	b) characters that should not be at the start
	c) & d) characters that shouldn't be together
	e) there's not more than one '@'
	'check' checks there's at least one '@', later followed by at least one '.'
	'checkend' checks the address ends with a period followed by 2 or 3 alpha characters
	N.B. Javascript 1.2 only works with version 4 browsers and higher.
*/	

function chkPinPhoneFax(txtElement,fieldName,allowEmpty)
{
	if(allowEmpty==false && txtElement.value.length == 0)
	{
		alert("Please enter '" + fieldName + "'");
		txtElement.focus();
		return false;
	}

	if(txtElement.value.search("[^0-9 ,/+-]")!=-1)
	{
		alert("Please enter a valid " + fieldName + ".\nIt can only include numbers and the following special characters:\n space , / + -");
		txtElement.focus();
		return false;
	}
	return true;
}


//function to validate a Numeric Field
function chkNumeric(txtElement,fieldName,minValue,maxValue,allowEmpty)
{
	if(allowEmpty==false && txtElement.value.length == 0){
		alert("Please enter '" + fieldName + "'");
		txtElement.focus();
		return false;
	}
	if(isNaN(txtElement.value))	{
		alert("Please enter a valid '" + fieldName + "'");
		txtElement.focus();
		return false;
	}
	if(minValue != 0 && parseFloat(txtElement.value) < minValue){
		alert("'" + fieldName + "' should not be less than " + minValue);
		txtElement.focus();
		return false;
	}
	if(maxValue != 0 && parseFloat(txtElement.value) > maxValue){
		alert("'" + fieldName + "' should not be greater than " + maxValue);
		txtElement.focus();
		return false;
	}
	return true;
}



//function to validate a TextArea
function chkTxtArea(txtElement,fieldName)
{
	if(ltrim(txtElement.value).length == 0)
	{
		alert("Please enter '" + fieldName + "'");
		txtElement.focus();
		return false;
	}
	/*if(txtElement.value.length > maxAllowedLength)
	{			
		alert("You have entered " + txtElement.value.length + " characters in the " + fieldName + ". \nThe Maximum number of characters allowed for this field is " + maxAllowedLength);
		//Truncate Statement
		txtElement.value = txtElement.value.substring(-1,maxAllowedLength);
		return false;
	}*/
	return true;
}


//function to validate a TextBox Input
function chkTxtBox(txtElement,fieldName)
{
	if(ltrim(txtElement.value).length == 0)
	{
		alert("Please enter '" + fieldName + "'");
		txtElement.focus();
		return false;
	}
	return true;
}

//checking if a checkbox is selected
function chkCheckBox(chkElement,fieldName,isAlert) 
{ 
	if(isNaN(chkElement.length)) //ie if its not a group
	{ 
		if(!chkElement.checked) 
		{
			if (isAlert)
			{
				alert("Please select  '" + fieldName + "'")
			}
			return false;
		}
		else
		{
			return true;
		}
	}
	else      //ie if it is a group
	{	var isChecked=false
		for(i=0;i<chkElement.length;i++)  //
		{
			isChecked = isChecked || chkElement[i].checked
		}
		if (!isChecked)
		{
			if (isAlert)
			{
				alert("Please choose  '" + fieldName + "'")
			}
				return false;
		}
		else
		{
			return true;
		}
	}
}


function chkRadio(optElement,fieldName)
{
	if(isNaN(optElement.length))
	{ 
		if(!optElement.checked) 
		{
			alert("Please select a '" + fieldName + "'")
		
			return false;
		}
		else
		{
			return true;
		}
	}
	else
	{	var isChecked=false
		for(i=0;i<optElement.length;i++)  //
		{
			isChecked = isChecked || optElement[i].checked					 
			
		}
		if (!isChecked)
		{
			alert("Please select a '" + fieldName + "'")
			optElement[0].focus();
			return false
		}
		else
		{
			return true;
		}
	}
}	


//checking if a dropdown listbox is selected. 
//ASSUMPTION: a dropdown  listbox i considered to be not selected if its first element is currently selected
function chkDDList(lstElement,fieldName)
{
	if (lstElement.selectedIndex<=0)
	{
		alert("Please select '" + fieldName + "'")
		lstElement.focus()
		return false;
	}
	else
	{
		return true;
	}
}

function dateStatus(drpDay,drpMonth,drpYear,mode) 
{
/*
   function Name : dateStatus    
   parameters: 
   drpDay   : Name of the DropDown DAY
   drpMonth : Name of the DropDown Month
   drpYear  : Name of the DropDown Year
   mode     : -- Greater : if you that the date entered 
													 by the user should be greater
													 or equal to current Date
													 
							-- Lesser  : if you that the date entered 
													 by the user should be Less
													 or equal to current Date	
	 
	 returns: integer (-1, 0, 1)
 
   Limitation : is customised to work only when we are using 
				dropdowns to select day , month, year 
	
   -- Returns -1 if the date passed is behind todays date
   -- Returns 0 if the date passed is equal to todays date
      or if dateType is not 1 to 7
   -- Returns 1 if the date passed is ahead of todays date   
*/

	var d,m,y,dmy;
	d = drpDay[drpDay.selectedIndex].value;
	if(d < 10) 
	{
		d = "0" + d;
	}	
	
	m = drpMonth[drpMonth.selectedIndex].value;
				
	y = (parseInt(drpYear[drpYear.selectedIndex].value)) ;
	
	dmy = d + "/" + m + "/" + y;
	
	var dateString = new String(dmy); // assigning value to datestring 
	var now = new Date();
    var today = new Date(now.getYear(),now.getMonth(),now.getDate());
    var century = parseInt(now.getYear()/100)*100;
    var date = new Date(dateString.substring(6,10),dateString.substring(3,5)-1,dateString.substring(0,2));
      
  if (mode=="lesser") 
    {
    	if (date > today)
			{
			  alert('Please enter date ' + mode + ' than or equal to current Date');
				return false;        
			}
		else
			{
				     return true;		
			}

	}		
		
	if (mode=="greater") 
	{
    	 if (date < today)
			{
			  alert('Please enter date ' + mode + ' than or equal to current Date');
				return false;        
			}
         else
			{
				     return true;		
			}
	}      
 } 
 
 function IsNumeric(sText)
{
   var ValidChars = "0123456789.";
   var IsNumber=true;
   var Char;

 
   for (i = 0; i < sText.length && IsNumber == true; i++) 
      { 
      Char = sText.charAt(i); 
      if (ValidChars.indexOf(Char) == -1) 
         {
         IsNumber = false;
         }
      }
   return IsNumber;
   
   }
    function IsNumericWithSpace(sText)
{
   var ValidChars = "0123456789. ";
   var IsNumber=true;
   var Char;

 
   for (i = 0; i < sText.length && IsNumber == true; i++) 
      { 
      Char = sText.charAt(i); 
      if (ValidChars.indexOf(Char) == -1) 
         {
         IsNumber = false;
         }
      }
   return IsNumber;
   
   }
   function IsNumericNoDot(sText)
{
   var ValidChars = "0123456789";
   var IsNumber=true;
   var Char;

 
   for (i = 0; i < sText.length && IsNumber == true; i++) 
      { 
      Char = sText.charAt(i); 
      if (ValidChars.indexOf(Char) == -1) 
         {
         IsNumber = false;
         }
      }
   return IsNumber;
   
   }
   
function GetDecimalDelimiter(nCountryCode)
{

       var sRet='';

       switch (nCountryCode)
       {

            case 3:   
                           
                           sRet = '#';
                           break;
            
            case 2:   
                           
                           sRet = ',';
                           break;
            default:
                           sRet = '.';
                           break;
 
        }

      return sRet;

}

function GetCommaDelimiter(nCountryCode)
{

       var sRet='';

       switch (nCountryCode)
       {
            
            case 3:   
                           
                           sRet = '*';
                           break;
            case 2:   
                           
                           sRet = ',';
                           break;
            default:
                           sRet = ',';
                           break;
 
        }

      return sRet;

}

function FormatClean(num)
{
     var sVal='';
     var nVal = num.length;
     var sChar='';
     
   try
   {
       for(i=0;i<nVal;i++)
      {
         sChar = num.charAt(i);
         nChar = sChar.charCodeAt(0);
         if ((nChar >=48) && (nChar <=57))  { sVal += num.charAt(i);   }
      }
   }
    catch (exception) { AlertError("Format Clean",e); }
    return sVal;
}
 

function FormatCurrency(num,nCountryCode)
{       
        var sVal='';
        var minus='';
        var Decimal='';
        Decimal = GetDecimalDelimiter(nCountryCode);
        if (num.lastIndexOf("-") == 0) { minus='-'; }
        if (num.lastIndexOf(Decimal) < 0) { num = num + '00'; }
        num = FormatClean(num);
        sVal = minus + FormatDollar(num,GetCommaDelimiter(nCountryCode)) + GetDecimalDelimiter(nCountryCode) + FormatCents(num); 
        return sVal;
}

function FormatNumber(num,nCountryCode)
{       
        var sVal='';
        var minus='';
        var CommaDelimiter='';

        try 
       {

           CommaDelimiter = GetCommaDelimiter(nCountryCode);

           if (num.lastIndexOf("-") == 0) { minus='-'; }

           num = FormatClean(num);

           num = parseInt(num);

           var samount = new String(num);
             
           for (var i = 0; i < Math.floor((samount.length-(1+i))/3); i++)
          {
             samount = samount.substring(0,samount.length-(4*i+3)) + CommaDelimiter + samount.substring(samount.length-(4*i+3));
           }

        }
         catch (exception) { AlertError("Format Number",e); }
        return minus + samount;
}

function FormatCents(amount)
{
     var cents = '';

      try
      {
           amount = parseInt(amount);
           var samount = new String(amount);

           if (samount.length == 0) { return '00'; }
           if (samount.length == 1) { return '0' + samount; }
           if (samount.length == 2) { return samount; }
         
           cents =  samount.substring(samount.length -2,samount.length);
          
      }
      catch (exception) { AlertError("Format Cents",e); }
      return cents;
}

function FormatDollar(amount,CommaDelimiter)
{
   try 
   {
  
        amount = parseInt(amount);

        var samount = new String(amount);

        if (samount.length < 3) { return 0; }  

        samount =  samount.substring(0,samount.length -2);
             
        for (var i = 0; i < Math.floor((samount.length-(1+i))/3); i++)
        {
           samount = samount.substring(0,samount.length-(4*i+3)) + CommaDelimiter + samount.substring(samount.length-(4*i+3));
         }

   }
    catch (exception) { AlertError("Format Comma",e); }
    return samount;
}

 function AlertError(MethodName,e)
 {
            if (e.description == null) { alert(MethodName + " Exception: " + e.message); }
            else {  alert(MethodName + " Exception: " + e.description); }
 }
 function setAgain(val,initial,tobeChange)
{
	if(val.value!=initial || val.value=="")
	{
		val.value=tobeChange;
	}
}

