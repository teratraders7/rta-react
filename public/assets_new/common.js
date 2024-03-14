
 
//------------------------------------------------------------------------------
function checkEmail(obj) {

    var Reg=/^[a-zA-Z0-9\_\-\']+(\.[a-zA-Z0-9\_\-\']+)*@[a-zA-Z0-9-]+(\.[a-zA-Z]{2,3}|(.+))?(\.[a-zA-Z]{2,4})$/g;
    Reg.lastIndex = 0;
    if((obj!=null && obj.value.length>0) && (!Reg.test(obj.value) || obj.value.indexOf(" ")!=-1)) {
        return false;
    }
   return true;
}

//------------------------------------------------------------------------------
    // Validate P.O.BOX must not Includes Zero.
    function isValidPOBox(obj) {
        if (!isNumber(obj.value) || isBlankOrNull(obj.value))  {
            return false;
        }
        var isValidPoBox = false;
        for(i=0; i<obj.value.length; i++) {
            if (obj.value.charAt(i) != '0')  {
                isValidPoBox = true;
                break;
            }
        }
        return isValidPoBox;
    }
    
// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- //
function checkEmailJQuery(obj) {

    var Reg=/^[a-zA-Z0-9\_\-\']+(\.[a-zA-Z0-9\_\-\']+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,4})$/g;
    Reg.lastIndex = 0;
    if((obj!=null && obj.val().length>0) && (!Reg.test(obj.val()) || obj.val().indexOf(" ")!=-1)) {
        return false;
    }
   return true;
}

//------------------------------------------------------------------------------
function nowSearching(msg, elementId) {
    if (elementId == null) {
        return;
    }

    var messageElement = document.getElementById(elementId);
    if (messageElement == null) {
        return;
    }

    messageElement.innerHTML = "<STRONG><font color='Blue' style='font-size:12px;'>"
                             + msg
                             + "</font></STRONG>"; 
}

//------------------------------------------------------------------------------
function createXMLHttpRequest() {
    if (window.XMLHttpRequest) {
      // code for IE7+, Firefox, Chrome, Opera, Safari
      return new XMLHttpRequest();

    } else if (window.ActiveXObject) {
      // code for IE6, IE5
      return new ActiveXObject("Microsoft.XMLHTTP");

    } else {
      return null;
    }
}

/*------------------------------------------------------------------------------
  -- Clear HTML form elemns.
  -- @param form: HTML form to be cleared.
  -- @param resetHiddenFields: boolean, if true all hidden fields will be cleared.
  ------------------------------------------------------------------------------
*/
function clearForm(form, resetHiddenFields) {
    for (var i = 0, j = form.elements.length; i < j; i++) {
        type = form.elements[i].type;

        if (type == 'checkbox' || type == 'radio') {
            form.elements[i].checked = false;

        } else if (type == 'hidden' && resetHiddenFields) {
            form.elements[i].value = '';

        } else if (type == 'password' || type == 'text') {
            form.elements[i].value = '';

        } else if (type == 'select-one') {
            form.elements[i].selectedIndex = 0;
        }
    }

    var divObject = document.getElementById("gridPane");
    if(divObject!=null){
        var rows = divObject.getElementsByTagName("tr");
        while(rows.length>1){
            rows[1].removeNode(true);
        }
    }
}

/*------------------------------------------------------------------------------
  -- Open new window ( Common Implementation )
  --
  -- @param url: New window URL.
  -- @param width: New window width.
  -- @param height: New window height
  -- @param parentFormToSubmit: if this parameter was not null, the new window
            will be opened using post submit method and this form input fields
            will be submited to this new window
  -- @param scroll View wndow scroll flag, default is 'no'
  ------------------------------------------------------------------------------
*/
function openCommonWindow(url, width, height, winName, parentFormToSubmit, scroll) {

    width = isBlankOrNull(width) ? 600 : width;
    height = isBlankOrNull(height) ? 600 : height;
    scroll = (scroll == null) ? 'no' : scroll;
    winName = isBlankOrNull(winName) ? ('newWindow_' + new Date().getTime()) : winName;

    var winLeft = (screen.width  - width) / 2;
    if(height > 500){
        var winTop = 0;
    }else{
        var winTop = (screen.height - height) / 2;
    }

    var settings =  'height=' + height
                 + ',width=' + width
                 + ',top=' + winTop
                 + ',left=' + winLeft
                 + ',scrollbars=' + scroll
                 + ',resizable=no';
    
    // Open window using GET HTTP method
    if (parentFormToSubmit == null) {
        win = openWindow(url, winName, settings);

    // Open window using POST HTTP method
    } else {
        win = window.open("", winName, settings);
        var oldAction = parentFormToSubmit.action;
        var oldTarget = parentFormToSubmit.target;
        
        url = appendCSRFTokenToURL( url );
        
        parentFormToSubmit.action = url;
        parentFormToSubmit.target = winName;
        parentFormToSubmit.submit();

        parentFormToSubmit.action = oldAction;
        parentFormToSubmit.target = oldTarget;
    }

    if (parseInt(navigator.appVersion) >= 4) {
        win.window.focus();
    }
}

/*------------------------------------------------------------------------------
  -- Open new modal dialog window.
  --
  -- @param url: New window URL.
  -- @param width: New window width.
  -- @param height: New window height
  ------------------------------------------------------------------------------
*/
function openDialog(url, width, height, scroll) {
    width = isBlankOrNull(width) ? 600 : width;
    height = isBlankOrNull(height) ? 600 : height;
    scroll = (scroll == null) ? 'no' : scroll;

    var winLeft = (screen.width  - width) / 2;
    if(height > 500){
        var winTop = 0;
    }else{
        var winTop = (screen.height - height) / 2;
    }

    var settings = "dialogHeight: " + height + "px;"
                 + "dialogWidth: " + width + "px;"
                 + "edge: Sunken;"
                 + "center:Yes;"
                 + "dialogTop: " + winTop + "px;"
                 + "dialogLeft: " + winLeft + "px;"
                 + 'scrollbars=' + scroll
                 + "help:No;"
                 + "resizable:No;"
                 + "status:No;"
                 + "scroll: " + scroll + ";";

    window.showModalDialog(url, self, settings);
}

/*------------------------------------------------------------------------------
  -- Open new lookup window.
  --
  -- @param url: New window URL.
  -- @param jsFunction: Opener Java-Script function name to be called by the 
                        lookup to pass user selection.
  -- @param width: New window width.
  -- @param height: New window height
  ------------------------------------------------------------------------------
*/
function openLookup(url, jsFunction, width, height, winName, scroll) {
    url += (url.indexOf('?') == -1) ? '?' : '&';
    url += 'jsFunction=' + jsFunction;

    openCommonWindow(url, width, height, winName, null, scroll, true);
}

/*------------------------------------------------------------------------------
  -- Trim empty spaces from string object. If str is null, null value will be 
  -- returned.
  -- @param str: String object to be trimed. 
  ------------------------------------------------------------------------------
*/
function trim(str) {
    if (str == null || str == '' || str.length == 0) {
        return null;
    }
    
    if (isNumber(str)) {
        return str;
    }
    
    var newStr = '' + str;
    return newStr.replace(/^\s+|\s+$/g, '') ;
}

/*------------------------------------------------------------------------------
  -- Check if this text value is null or contains only spaces.
  -- @param str: Value to be tested.
  ------------------------------------------------------------------------------
*/
function isBlankOrNull(value) {
    if (value == null || value == '') {
        return true;
    }
    
    if (trim(value).length == 0) {
        return true;
    }
    
    return false;
}

/*------------------------------------------------------------------------------
  -- Get selected radio button value. If no radio button was selected, null 
  -- value will be returned.
  -- @param rb: radio button field.
  ------------------------------------------------------------------------------
*/
function getSelectedRadioButtonValue(rb) {
    // No radio buttons
    if (rb == null) {
        return null;
    }
    
    // Only one radio button 
    if (rb.value != null && rb.checked != null) {
        if (rb.checked) {   
            return rb.value;
        } else {
            return null;
        }
    }
    
    // More than one radio
    for (var i = 0; i < rb.length; i++)  {
        if (rb[i].checked) {
            return rb[i].value;
        }
    }
    
    // No radio buttons was selected
    return null;
}

/*------------------------------------------------------------------------------
  -- Get selected radio button index. If no radio button was selected, -1
  -- value will be returned.
  -- @param rb: radio button field.
  ------------------------------------------------------------------------------
*/
function getSelectedRadioButtonIndex(rb) {
    // No radio buttons
    if (rb == null) {
        return -1;
    }
    
    // Only one radio button
    if (rb.value != null) {
        if (rb.checked) {
            return 0;
        } else {
            return -1;
        }
    }
    
    // More than one radio
    for (var i = 0; i < rb.length; i++)  {
        if (rb[i].checked) {
            return i;
        }
    }
    
    // No radio buttons was selected
    return -1;
}

/*------------------------------------------------------------------------------
  -- Get selected radio button index. If no radio button was selected, -1
  -- value will be returned.
  -- @param rb: radio button field.
  ------------------------------------------------------------------------------
*/
function resetRadioButton(rb) {
    // No radio buttons
    if (rb == null) {
        return;
    }
    
    // Only one radio button
    if (rb.value != null) {
        rb.checked = false;
    }
    
    // More than one radio
    for (var i = 0; i < rb.length; i++)  {
        rb[i].checked = false;
    }
}

/*------------------------------------------------------------------------------
  -- Check if the key event is due pressing ENTER key.
  -- @param e: Key event.
  -- @return true if the key event is due pressing ENTER key.
  ------------------------------------------------------------------------------
*/
function isEnterKey(e) {
    IE4 = (document.all);
    NS4 = (document.layers);

    whichASC = (NS4) ? e.which : event.keyCode;
    return (whichASC == 13);
}

function doNext(elment){
    var f = elment.form;	
    for (var i=0,j=0; i<f.length; j++, i++){
		if (elment == f[i] && j+1<f.length   ){
           if( f[j+1].type !='hidden'){
               f[j+1].focus();
               f[i].focus();
               break;
           }else{
              i--;
           }
        }
    }
}
/*------------------------------------------------------------------------------
  -- Check if the txt value is a valid number.
  -- @param txt: text value to be parsed
  -- @return true if the text value is a valid number.
  ------------------------------------------------------------------------------
*/
    function isNumber(txt) {
        if (txt != null && txt.length > 0) {
            var re = /^\d+$/;///^\d*$/;
            
            if (! re.test(txt)) {
                return false;            
            }
        }

	    return true;
    }
//------------------------------------------------------------------------------
    function setFieldLabelOnFocus(field, label) {
        if (label == null || label == 'null' || isBlankOrNull(label)) {
            return;
        }
        
        if (field.value != label) {
            return;
        }
        
        field.value = '';
    }

//------------------------------------------------------------------------------
    function setFieldLabelOnBlur(field, label) {
        if (label == null || label == 'null' || isBlankOrNull(label)) {
            return;
        }

        if (! isBlankOrNull(field.value)) {
            return;
        }
        
        field.value = label;
    }

//------------------------------------------------------------------------------
   function validateDate(item, title, lang, dateLabel) {
        if (dateLabel != null && item.value == dateLabel) {
            return true;
        }
        
        if (lang == null){
            lang = 'en';
        }

        inputObj = item;
        tempDate = trim(inputObj.value);
        if(isBlankOrNull(tempDate)){
            inputObj.value = "";//if item has spaces clean them
            return true;
        }
        if( tempDate.length != 8 & tempDate.length != 10 ) {
            if(lang=='ar'){
                alert(' dd-mm-yyyy :'+ title + ' €Ì— ’«·Õ „À«·');
            }else{
                alert(title + ' is not valid : dd-mm-yyyy');
            }
            inputObj.value = "";
            inputObj.focus();
            return false;
        }
        if(tempDate.length == 8){
            if (isNaN(tempDate)) {
                if(lang=='ar'){
                    alert(' dd-mm-yyyy :'+ title + ' €Ì— ’«·Õ „À«·');
                }else{
                    alert(title + ' is not valid : dd-mm-yyyy');
                }
                
                inputObj.value = "";
                inputObj.focus();
                return false;
            }
            tempDate = tempDate.substring(0,2) 
                       + "-" 
                       + tempDate.substring(2,4)
                       + "-"
                       + tempDate.substring(4,8);
            inputObj.value = tempDate;
        }
        if(tempDate.length == 10){
            if ( !isNaN(tempDate)){
                if(lang=='ar'){
                    alert(' dd-mm-yyyy :'+ title + ' €Ì— ’«·Õ „À«·');
                }else{
                    alert(title + ' is not valid : dd-mm-yyyy');
                }
                
                inputObj.value = "";
                inputObj.focus();
                return false;
            }
            if(tempDate.substring(2,3) != tempDate.substring(5,6) ){
                if(lang=='ar'){
                    alert(' dd-mm-yyyy :'+ title + ' €Ì— ’«·Õ „À«·');
                }else{
                    alert(title + ' is not valid : dd-mm-yyyy');
                }
                
                inputObj.value = "";
                inputObj.focus();
                return false;
            }
            tempDate = tempDate.substring(0,2) 
                       + "-" 
                       + tempDate.substring(3,5)
                       + "-"
                       + tempDate.substring(6,10);
            inputObj.value = tempDate;
        }
        
        /*
        * s1 is the first separator
        * s2 is the second separator
        * ds is the day substring of the date
        * ms is the month substring of the date
        * ys is the year substring of the date
        * yn is the year number
        * vf means valid format
        * vd means valid day
        * vm means valid month
        * vy means valid year
        */

        var aDate = item.value;
        
        var s1 	= aDate.indexOf("-");
        var s2 	= aDate.lastIndexOf("-");
        var ds	= new Number(aDate.substring(0,s1));
        var ms	= new Number(aDate.substring(s1+1,s2));
        var ys	= aDate.substring(s2+1);
        var yn	= new Number(ys);
        var vf	= true;
        var vd 	= true;
        var vm 	= true;
        var vy	= true;        
        
        if(s1 == -1 || s2 == -1 || s1 == s2)
        {
            if(lang=='ar'){
                alert(' dd-mm-yyyy :'+ title + ' €Ì— ’«·Õ „À«·');
            }else{
                alert(title + ' is not valid : dd-mm-yyyy');
            }
            
            inputObj.value = "";
            item.focus();
            return false;
        }
        if(!(vf && (ds.valueOf() <= 31 && ds.valueOf() > 0)))
        {
            if(lang=='ar'){
                alert(' dd-mm-yyyy :'+ title + ' €Ì— ’«·Õ „À«·');
            }else{
                alert(title + ' is not valid : dd-mm-yyyy');
            }
            
            item.value = "";
            item.focus();    
            return false;
        }
        if(!(vd && (ms.valueOf() <= 12 && ms.valueOf() > 0)))
        {
            if(lang=='ar'){
                alert(' dd-mm-yyyy :'+ title + ' €Ì— ’«·Õ „À«·');
            }else{
                alert(title + ' is not valid : dd-mm-yyyy');
            }   
            
            item.value = "";
            item.focus();    
            return false;
        }
        if(!(vm && ys.length == 4))
        {
            if(lang=='ar'){
                alert(' dd-mm-yyyy :'+ title + ' €Ì— ’«·Õ „À«·');
            }else{
                alert(title + ' is not valid : dd-mm-yyyy');
            } 
            
            item.value = "";
            item.focus();    
            return false;
        }
        
        if ((ms.valueOf() == 1 || ms.valueOf() == 3 || ms.valueOf() == 5 || ms.valueOf() == 7 || ms.valueOf() == 8 || ms.valueOf() == 10 || ms.valueOf() == 12)
                && (ds.valueOf() > 31 || ds.valueOf() < 1)) {
            if(lang=='ar'){
                alert(' dd-mm-yyyy :'+ title + ' €Ì— ’«·Õ „À«·');
            }else{
                alert(title + ' is not valid : dd-mm-yyyy');
            }   
            
            item.value = "";
            item.focus();    
            return false;
        }
        
        if ((ms.valueOf() == 4 || ms.valueOf() == 6 || ms.valueOf() == 9 || ms.valueOf() == 11)
                && (ds.valueOf() > 30 || ds.valueOf() < 1)) {
            if(lang=='ar'){
                alert(' dd-mm-yyyy :'+ title + ' €Ì— ’«·Õ „À«·');
            }else{
                alert(title + ' is not valid : dd-mm-yyyy');
            }     
            
            item.value = "";
            item.focus();    
            return false;
        }
        
        if (ms.valueOf() == 2) {
            if (ds.valueOf() < 1) {
                if(lang=='ar'){
                    alert(' dd-mm-yyyy :'+ title + ' €Ì— ’«·Õ „À«·');
                }else{
                    alert(title + ' is not valid : dd-mm-yyyy');
                }    
                
                item.value = "";
                item.focus();    
                return false;
            }
        
            if (LeapYear(yn.valueOf()) == true) {
                if (ds.valueOf() > 29) {
                    if(lang=='ar'){
                        alert(' dd-mm-yyyy :'+ title + ' €Ì— ’«·Õ „À«·');
                    }else{
                        alert(title + ' is not valid : dd-mm-yyyy');
                    }  
                    
                    item.value = "";
                    item.focus();    
                    return false;
                }
            } else {
                if (ds.valueOf() > 28) {
                    if(lang=='ar'){
                        alert(' dd-mm-yyyy :'+ title + ' €Ì— ’«·Õ „À«·');
                    }else{
                        alert(title + ' is not valid : dd-mm-yyyy');
                    }     
                    
                    item.value = "";
                    item.focus();    
                    return false;
                }
            }
        }
    return true;
  }
  
//------------------------------------------------------------------------------
  function LeapYear(intYear) {
    if (intYear % 100 == 0) {
        if (intYear % 400 == 0) { return true; }
    } else {
        if ((intYear % 4) == 0) { return true; }
    }
    return false;
}
//------------------------------------------------------------------------------
function reformatDate(dateObj) {
    if(dateObj!=null && dateObj.length>0){        
          var dateLen          =  dateObj.length;
          var dashIndexOf      =  dateObj.indexOf('-');
          var dashLastIndexOf  =  dateObj.lastIndexOf('-');
          
          var day       =  dateObj.substring(0,dashIndexOf);
          var month     =  dateObj.substring(dashIndexOf+1,dashLastIndexOf);
          var year      =  dateObj.substring(dashLastIndexOf+1,dateLen);
          return  new Date(year,month-1,day);        
    }
}
//------------------------------------------------------------------------------
function doModal(url,w,h){
    
    if(w == null || w == '')
        w = 600;
    if(h == null || h == '')
        h = 600;
    openCommonWindow(url, w, h, '', null, 'no', false) ;
    
}

/*------------------------------------------------------------------------------
  -- For pages which contain more than one pagination.  
  -- We will give this method tabular id.
  -- Return array of selected index;
  ------------------------------------------------------------------------------
*/
function getTableSelectedIndex(tableId){
    return tableSelectedIndex[tableId];
}

/*------------------------------------------------------------------------------
  -- Chek if this date after current date.
  -- @param fieldDate: Date to be checked.
  -- @return true if this date after current date.
  ------------------------------------------------------------------------------
*/
function isAfterToday(fieldDate) {        
    if(fieldDate==null || fieldDate.length==0){
        return false;
    }
    
    var enteredDate=reformatDate(fieldDate);
    var sysDate = getCurrentDate();

    if(enteredDate.getTime() > sysDate.getTime()) {            
        return true;
    }

    return false;
}

/*------------------------------------------------------------------------------
  -- Chek browser version
  ------------------------------------------------------------------------------
*/
function isChromeBrowser() {
    return navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
}

function isFirefoxBrowser() {
    return navigator.userAgent.toLowerCase().indexOf('firefox') != -1
}

function isSafariBrowser() {
    return navigator.userAgent.toLowerCase().indexOf('safari') != -1
}
function isIe11() {
    return navigator.userAgent.toLowerCase().indexOf('rv:11.0')> -1 ;
}
function isIe10() { 
    return navigator.userAgent.toLowerCase().indexOf('mozilla')> -1 ;
}
//------------------------------------------------------------------------------
function getCurrentDate() {
    var sysDate = new Date();
    var fullYear = sysDate.getFullYear();
    
    //if(isChromeBrowser() || isFirefoxBrowser()) {
        //fullYear += 1900;
    //}
    return new Date(fullYear, sysDate.getMonth(), sysDate.getDate());
}

/*------------------------------------------------------------------------------
  -- Chek if this date before current date.
  -- @param fieldDate: Date to be checked.
  -- @return true if this date before current date.
  ------------------------------------------------------------------------------
*/
function isBeforeToday(fieldDate) { 
    if(fieldDate==null || fieldDate.length==0){
        return false;
    }

    var enteredDate=reformatDate(fieldDate);
    var sysDate = getCurrentDate();

    if(enteredDate.getTime() < sysDate.getTime()) {            
        return true;
    }

    return false;
}

//------------------------------------------------------------------------------
function isBeforeOrEqualToday(dateValue) {
    if(dateValue==null || dateValue.length==0){
        return false;
    }

    var enteredDate = reformatDate(dateValue);
    var currentDate = getCurrentDate();

    if (enteredDate.getTime() > currentDate.getTime()) {
        return false;
    }

    return true;
}  

//------------------------------------------------------------------------------
function isEqualToday(dateValue) {
    if(dateValue==null || dateValue.length==0){
        return false;
    }

    var enteredDate = reformatDate(dateValue);
    var currentDate = getCurrentDate();

    return enteredDate.getTime()==currentDate.getTime();
}  

//------------------------------------------------------------------------------
    function IsEmpty(aTextField) {
        var iLen = aTextField.value.length;
        for(i=0; i<iLen; ++i) {
            if ((aTextField.value.charAt(i)!=' ') && (aTextField.value.charCodeAt(i)!=13) && (aTextField.value.charCodeAt(i)!=10))
                return false;
        }
 
       return true; 
    }	
//------------------------------------------------------------------------------
    function validateTime(item,title) {
        var myTime = item.value;
        
        if ((!IsEmpty(item)) && (myTime.length < 4 || myTime.length > 5) ) {
            alert('hh:mm √Ê hhmm ÌÃ» √‰ ÌﬂÊ‰ '+title+' ⁄·Ï «·‘ﬂ· «· «·Ì ');
            item.select();
            return false;
        } else if (!IsEmpty(item)) {
            var sep = myTime.substring(2,3)            
            if ((myTime.length==5) && (sep != ':')) {
                alert('hh:mm √Ê hhmm ÌÃ» √‰ ÌﬂÊ‰ '+title+' ⁄·Ï «·‘ﬂ· «· «·Ì ');
                item.select();
                return false;                
            } else if (myTime.length==4) {
                item.value = myTime.substring(0,2) + ':' + myTime.substring(2,4);
                myTime     = item.value
            }

            var hour = parseFloat(myTime.substring(0,2));
            if (isNaN(hour) || hour < 0 || hour > 24) {
                alert('ÌÃ» √‰  ﬂÊ‰ «·”«⁄«  „Õ’Ê—… »Ì‰ 01 - 24');
                item.select();
                return false;                                
            }
            var minute = parseFloat(myTime.substring(3,5));
            if (isNaN(minute) || minute < 0 || minute > 59) {
                alert('ÌÃ» √‰  ﬂÊ‰ «·œﬁ«∆ﬁ „Õ’Ê—… »Ì‰ 00 - 59');
                item.select();
                return false;                
            } 
        }
        return true;
   }
//------------------------------------------------------------------------------
function validateMobile(obj,title,lang, useBootstrap){
    if(lang==null){
        lang='ar';
    }
    if(title==null){
        title='Mobile';
    }
    if(useBootstrap == null){
        useBootstrap = false;
    }
    if( obj.value != "" ) {
        if( isNaN(obj.value) ) {
            if(lang=='ar'){

               showAlert(useBootstrap,"ÌÃ» √‰ Ì ﬂÊ‰ "+title+" „‰ √—ﬁ«„");

            }else{
               showAlert(useBootstrap,"Mobile must be number");
            }
            obj.select();
            return false;
        }
        if(obj.value.length  != 10 && obj.value.length != 12){
            if(lang=='ar'){
                showAlert(useBootstrap,""+ title+" «·„œŒ· €Ì— ’ÕÌÕ° ÌÃ» √‰ Ì»œ√ «·—ﬁ„ » 050 , 052, 054 , 055, 056 , 058, 97154, 97150,  97152, 97155 ,97156 √Ê 97158");
            }else{
                showAlert(useBootstrap,"Mobile number entered is not valid, number must begin with 050, 052 , 054 ,055 , 056 ,058 , 97150 , 97154 ,97156 ,97156 or 97158");
            }
            obj.select();
            return false;
        }
        numPrefix = "";
        if(obj.value.length == 12){
            numPrefix = obj.value.substring(0,5);
            if(numPrefix != "97150" && numPrefix != "97152" && numPrefix != "97154" && numPrefix != "97155" && numPrefix != "97156" && numPrefix != "97158"){
                 if(lang=='ar'){
                    showAlert(useBootstrap,' '+ title+' «·„œŒ· €Ì— ’ÕÌÕ° ÌÃ» √‰ Ì»œ√ «·—ﬁ„ » 97150 ,  97152, 97154 , 97155, 97156 √Ê 97158');
                }else{
                    showAlert(useBootstrap,'Mobile number entered is not valid, number must begin with 97150, 97152 , 97154 ,97155 ,97156 or 97158');
                }
                obj.select();
                return false;
            }
        } else if(obj.value.length == 10) {
            numPrefix = obj.value.substring(0,3);
            mobileNo  = obj.value.substring(3,obj.length);
            if(numPrefix != "050" && numPrefix != "052" && numPrefix != "054" && numPrefix != "055" && numPrefix != "056" && numPrefix != "058" ){
                if(lang=='ar'){
                    showAlert(useBootstrap,''+ title+' «·„œŒ· €Ì— ’ÕÌÕ° ÌÃ» √‰ Ì»œ√ «·—ﬁ„ » 050 , 052 ,054 , 055 ,056 √Ê 058');
                }else{
                    showAlert(useBootstrap,'Mobile number entered is not valid, number mus begin with 050 ,052 , 054 ,055 ,056 or 058');
                }
                obj.select();
                return false;
            }    
            if(numPrefix == "050") {
                obj.value = "97150" + mobileNo;
            } else if(numPrefix == "054") {
                obj.value = "97154" + mobileNo;
            } else if(numPrefix == "055") {
                obj.value = "97155" + mobileNo;    
            } else if(numPrefix == "056") {
                obj.value = "97156" + mobileNo;
            } else if (numPrefix == "052") {
                obj.value = "97152" + mobileNo;
            }else if(numPrefix == "058") {
                obj.value = "97158" + mobileNo;
            }
            
        }
        return true;
        
    }
}




function validateMobileWithoutAlert(obj){
    
   
   
    if( obj.value != "" ) {
        if( isNaN(obj.value) ) {
            
            obj.select();
            return false;
        }
        if(obj.value.length != 12 && obj.value.length != 10){
           
            obj.select();
            return false;
        }
        numPrefix = "";
        if(obj.value.length == 10){
            numPrefix = obj.value.substring(0,3);
            if(numPrefix != "050" && numPrefix != "052" && numPrefix != "055" && numPrefix != "056" && numPrefix != "058" ){
                 
                obj.select();
                return false;
            }
        } 
        if(obj.value.length == 12){
            numPrefix = obj.value.substring(0,5);
            if(numPrefix != "97150" && numPrefix != "97152" && numPrefix != "97155" && numPrefix != "97156" && numPrefix != "97158"){
                 
                obj.select();
                return false;
            }
        } 
        return true;
        
    }
}

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- //
function validateMobileJQuery(obj){
    if( obj.val() != "" ) {
        if(obj.val().length  != 10 && obj.val().length != 12){
            return false;
        }
        numPrefix = "";
        if(obj.val().length == 12){
            numPrefix = obj.val().substring(0,5);
            if(numPrefix != "97150" && numPrefix != "97152" && numPrefix != "97155" && numPrefix != "97156" && numPrefix != "97158"){
                return false;
            }
        } else if(obj.val().length == 10) {
            numPrefix = obj.val().substring(0,3);
            mobileNo  = obj.val().substring(3,obj.val().length);
            if(numPrefix != "050" && numPrefix != "052" && numPrefix != "055" && numPrefix != "056" && numPrefix != "058"){
                return false;
            }    
            if(numPrefix == "050") {
                obj.val("97150" + mobileNo);
            } else if(numPrefix == "055") {
                obj.val("97155" + mobileNo);
            } else if(numPrefix == "056") {
                obj.val("97156" + mobileNo);
            } else if (numPrefix == "052") {
                obj.val("97152" + mobileNo);
            }else if(numPrefix == "058") {
                obj.val("97158" + mobileNo);
            }
        }
        return true;
    }
}

//------------------------------------------------------------------------------
function isValidPhoneNumber(obj, title,lang, useBootstrap, withoutCountryCode){
    if(lang==null){
        lang='ar';
    }
    if(title==null){
        title='Mobile';
    }
    if(useBootstrap == null){
        useBootstrap = false;
    }
    if( obj.value != "" ) {
        if( isNaN(obj.value) ) {
            if(lang=='ar'){
                showAlert(useBootstrap,"ÌÃ» √‰ Ì ﬂÊ‰ "+title+" „‰ √—ﬁ«„");
            }else{
                showAlert(useBootstrap,"Phone number must be number");
            }
            
            obj.select();
            return false;
        }
        if(withoutCountryCode != null && withoutCountryCode){
        if(obj.value.length  != 9 || obj.value.charAt(0) != '0'){
                if(lang=='ar'){
                    showAlert(useBootstrap,'—ﬁ„ «·Â« › ÌÃ» √‰ Ì ﬂÊ‰ „‰ √—ﬁ«„ ›ﬁÿ Ê√‰ Ì»œ√ » 0 Ê√‰ Ì ﬂÊ‰ „‰ 9 √—ﬁ«„');
                }else{
                   showAlert(useBootstrap,"Phone number should be numbers, starts with 0 and contains 9 digits !");
                }
                
                obj.select();
                return false;
            } else if(obj.value.length  == 9 && obj.value.substring(2)== '0000000'){
                if(lang=='ar'){
                    showAlert(useBootstrap,'—ﬁ„ «·Â« › ÌÃ» «‰ ·« » ﬂÊ‰ „‰ √’›«—√—ﬁ«„');
                }else{
                   showAlert(useBootstrap,"Please Phone Number Should not be 0000000.");
                }
                obj.select();
                return false;
            }
            }else {
                if(obj.value.length  != 9 && obj.value.length != 11){
                    if(lang=='ar'){
                        showAlert(useBootstrap,'—ﬁ„ «·Â« › ÌÃ» √‰ Ì ﬂÊ‰ „‰ √—ﬁ«„ ›ﬁÿ Ê√‰ Ì»œ√ » 0 Ê√‰ Ì ﬂÊ‰ „‰ 9 √—ﬁ«„');
                    }else{
                       showAlert(useBootstrap,"Phone number should be numbers, starts with 0 and contains 9 digits !");
                    }
                    
                    obj.select();
                    return false;
                }
        }
        numPrefix = "";
        return true;
        
    }
}   

function showAlert(useBootstrap, alertMessage){
    if(useBootstrap){
     $('#errorBlock').html(alertMessage);
     $('#popWin').modal();
       // BootstrapDialog.show({title: ' <bean:message key="errors.error"/> ',message: alertMessage});
    }else{
        alert(alertMessage);
    }

}

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- //

function isValidPhoneNumberJQuery(obj) {
     if( obj.val() != "" ) {
        if (isNaN(obj.val())) {
            return false;
        }        
        if(obj.val().length  != 9 && obj.val().length != 11){
            return false;
        }
        return true;
    }
}   

//------------------------------------------------------------------------------
 function WM_toggle(id){   
    
    if (document.all){
	
        if(document.all[id].style.display == 'none') {

           document.all[id].style.display = '';

        } else {

            document.all[id].style.display = 'none';

        }

        return false;

    } else if (document.getElementById){

        if(document.getElementById(id).style.display == 'none'){

        document.getElementById(id).style.display = 'block';

        } else {

        document.getElementById(id).style.display = 'none';

        }

        return false;

    } 

 }
//------------------------------------------------------------------------------
    function WM_imageToggle(daImage, src1, src2, netscape_container){    
        

        var objStr,obj;

        // Check to make sure that images are supported in the DOM.

        myImage = document.images[daImage];
        
        if(document.layers){
        
            myImage = document.layers['container'].document.layers[netscape_container].document.images[daImage];
        
        }
        
        if(document.images){
        
        // Check to see whether you are using a name, number, or object
        
          if(myImage.src == src1){
        
            myImage.src = src2;
        
          } else {
        
            myImage.src = src1;
        
          }
        
        }

    }

//------------------------------------------------------------------------------
function noOfDaysBetween(dateFrom,dateTo) {
    var start = reformatDate(dateFrom.value);
    var end = reformatDate(dateTo.value);

    if(start == null || end == null) {
    
        alert("Date from and to must be entered");
        return -1;
    }
    
    var milli = end.getTime() - start.getTime();

    var minMilli = 1000 * 60;       //Initialize variables.
    
    var hrMilli = minMilli * 60;
    
    var dyMilli = hrMilli * 24;
    
    return Math.round(Math.abs((milli) / dyMilli));    
}    

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- //    
    function checkSpecialCharactersValue(fieldObj , fieldLabel ,invalidLettersErrorMessage,inErrorMessage){
        var field = fieldObj.value;
        var error = false;
        var inValidCahr = "";
        var msg="";
        for(var i=0 ; i < field.length ; i++){
            var code = field.charCodeAt(i);
//            A==65
//            Z==90
//            a==97
//            z==122
//            0==47
//            9==57  
//            ¡ ===1569  
//            Ì==1610
            if((65 > code || 90 < code) && 
               (97 > code || 122 < code) && 
               (1569 > code || 1610 < code ) && code != 32 ){
                inValidCahr += field.charAt(i)+" ";
                error = true;
            }
        }
        if(error){ 
            msg=invalidLettersErrorMessage +"' "+ inValidCahr +" '"
            +inErrorMessage + fieldLabel;
        }    
        return msg;
    }

 //------------------------------------------------------------------------------
function containsNonEnglishCharacters(text,userLang) {
        var usrLang= userLang;
        if(userLang==''){
            userLang = 'En';
        }
        
        if(text!=null && text.length > 0) {
        
            for(var i=0;i<text.length;i++) {
                
                var charCode = text.charCodeAt(i)
                
                if(!( (charCode == 32 || charCode == 40 || charCode == 41 || charCode == 45 || charCode == 46 || charCode == 64 || charCode == 95 ) 
                        || (charCode >=48 && charCode<=57)
                        || (charCode >=65 && charCode<=90) || (charCode>=97 && charCode<=122) )) {
                    if(userLang.toUpperCase() == 'AR'){
                        return '/ \ : < > * ? | ! "' + ' «·—Ã«¡ ﬂ «»… «·‰’ »«··€… «·≈‰Ã·Ì“Ì… Ê √·« ÌÕ ÊÏ ⁄·Ï ⁄·«„«  Œ«’… „À· ';
                    }else{
                        return 'Please enter English Text that does not contain special charachters like / \ : < > * ? | ! " ';
                    }
                }
            }             
        }
        
        return '';
    }
 // ------------------------------------------------------------------------
 function containsNonEnglishCharacters(text,userLang,label) {
        var usrLang= userLang;
        if(userLang==''){
            userLang = 'En';
        }
        
        if(text!=null && text.length > 0) {
        
            for(var i=0;i<text.length;i++) {
                
                var charCode = text.charCodeAt(i)
                
                if(!( (charCode == 32 || charCode == 40 || charCode == 41 || charCode == 45 || charCode == 46 || charCode == 64 || charCode == 95 ) 
                        || (charCode >=48 && charCode<=57)
                        || (charCode >=65 && charCode<=90) || (charCode>=97 && charCode<=122) )) {
                    if(userLang.toUpperCase() == 'AR'){
                        return '/ \ : < > * ? | ! "' + ' «·—Ã«¡ ﬂ «»… ' + label + ' »«··€… «·≈‰Ã·Ì“Ì… Ê √·« ÌÕ ÊÏ ⁄·Ï ⁄·«„«  Œ«’… „À· ';
                    }else{
                        return 'Please enter ' + label + ' in English that does not contain special charachters like / \ : < > * ? | ! " ';
                    }
                }
            }             
        }
        
        return '';
    }
 // ------------------------------------------------------------------------
 
 //This is a valid function provided by Rami Nassar
 function isSpecialCharacter(object) {
     var data = object.value;
     var iChars = "!@#$%^&*+=-[]\\\';,/{}|\":<>?~_"; 
     for (var i = 0; i < data.length; i++) {
        if (iChars.indexOf(data.charAt(i)) != -1) {
            return true;
        }
     }
     return false;  
 }
 
 //-------------------------------------------------------------------------
 
 //This is an invalid function provided by Baher Ayoub
 function checkSpecialCharacters(data) {
     var iChars = "!@#$%^&*()+=-[]\\\';,./{}|\":<>?~_"; 
     for (var i = 0; i < data.length; i++) {
        if (iChars.indexOf(data.charAt(i)) != -1) {
            return false;
        }else{
            return true;
        }
    }
 }
//-------------------------------------------------------------------------
function validateTextAreaLength(obj, maxLength) {
    if (obj != null) {
        objLength = obj.value.length;
        if(objLength > maxLength-1) {
            var objValue = obj.value.substring(0,maxLength-1);
            obj.value = objValue;
            return;
        }
    }
                
} 

//----------------------------------------------------------------------------
function replaceAll(source,stringToFind,stringToReplace){
  var temp = source;
    var index = temp.indexOf(stringToFind);
        while(index != -1){
            temp = temp.replace(stringToFind,stringToReplace);
            index = temp.indexOf(stringToFind);
        }
        return temp;
}


    function isSpecialCharacters(object,excecludedCharacters) {
        var data = object.value;
        var iChars = "!@#$%^&*+=-[]\\\';,/{}|\":<>?~_";   
        for(var i=0; i<data.length; i++){
            if(iChars.indexOf(data.charAt(i)) !=-1){
                if(excecludedCharacters == null || 
                    excecludedCharacters.length == 0 || 
                    excecludedCharacters.indexOf(data.charAt(i)) == -1){
            
                    return true;
                }
            }
        }
        return false;
   }
 
  //---------------------------------------------------------------------------- 
   //Dynamically removing/ replacing an external JavaScript or CSS file:
   
   //Ex:
    //removejscssfile("somescript.js", "js") //remove all occurences of "somescript.js" on page
    //removejscssfile("somestyle.css", "css") //remove all occurences "somestyle.css" on page
    
    //Ex:
    //replacejscssfile("oldscript.js", "newscript.js", "js") //Replace all occurences of "oldscript.js" with "newscript.js"
    //replacejscssfile("oldstyle.css", "newstyle", "css") //Replace all occurences "oldstyle.css" with "newstyle.css"
      
    function loadjscssfile(filename, filetype){
     if (filetype=="js"){ //if filename is a external JavaScript file
      var fileref=document.createElement('script')
      fileref.setAttribute("type","text/javascript");
      fileref.setAttribute("src", filename);
     }
     else if (filetype=="css"){ //if filename is an external CSS file
      var fileref=document.createElement("link")
      fileref.setAttribute("rel", "stylesheet");
      fileref.setAttribute("type", "text/css");
      fileref.setAttribute("href", filename);
     }
     if (typeof fileref!="undefined")
      document.getElementsByTagName("head")[0].appendChild(fileref)
    }
  //----------------------------------------------------------------------------
    var filesadded="" //list of files already added
  //----------------------------------------------------------------------------
    function checkloadjscssfile(filename, filetype){
     if (filesadded.indexOf("["+filename+"]")==-1){
      loadjscssfile(filename, filetype)
      filesadded+="["+filename+"]" //add to list of files already added, in the form of "[filename1],[filename2],etc"
     }
     else
      alert("file already added!")
    }
  //----------------------------------------------------------------------------
    function removejscssfile(filename, filetype) {
         var removedelements=0
         var targetelement=(filetype=="js")? "script" : (filetype=="css")? "link" : "none" //determine element type to create nodelist using
         var targetattr=(filetype=="js")? "src" : (filetype=="css")? "href" : "none" //determine corresponding attribute to test for
         var allsuspects=document.getElementsByTagName(targetelement)
         for (var i=allsuspects.length; i>=0; i--){ //search backwards within nodelist for matching elements to remove
          if (allsuspects[i] && allsuspects[i].getAttribute(targetattr)!=null && allsuspects[i].getAttribute(targetattr).indexOf(filename)!=-1){
           allsuspects[i].parentNode.removeChild(allsuspects[i]) //remove element by calling parentNode.removeChild()
           removedelements+=1
          }
         }
         if (removedelements>0)
          alert("Removed "+removedelements+" instances of "+filename)
    }
  //----------------------------------------------------------------------------
    function createjscssfile(filename, filetype){
         if (filetype=="js"){ //if filename is a external JavaScript file
          var fileref=document.createElement('script')
          fileref.setAttribute("type","text/javascript")
          fileref.setAttribute("src", filename)
         }
         else if (filetype=="css"){ //if filename is an external CSS file
          fileref=document.createElement("link")
          fileref.setAttribute("rel", "stylesheet")
          fileref.setAttribute("type", "text/css")
          fileref.setAttribute("href", filename)
         }
     return fileref
    }
  //----------------------------------------------------------------------------
    function replacejscssfile(oldfilename, newfilename, filetype){
         var replacedelements=0
         var targetelement=(filetype=="js")? "script" : (filetype=="css")? "link" : "none" //determine element type to create nodelist using
         var targetattr=(filetype=="js")? "src" : (filetype=="css")? "href" : "none" //determine corresponding attribute to test for
         var allsuspects=document.getElementsByTagName(targetelement)
         for (var i=allsuspects.length; i>=0; i--){ //search backwards within nodelist for matching elements to remove
          if (allsuspects[i] && allsuspects[i].getAttribute(targetattr)!=null && allsuspects[i].getAttribute(targetattr).indexOf(oldfilename)!=-1){
           var newelement=createjscssfile(newfilename, filetype)
           allsuspects[i].parentNode.replaceChild(newelement, allsuspects[i])
           replacedelements+=1
          }
         }
         if (replacedelements>0)
          alert("Replaced "+replacedelements+" instances of "+oldfilename+" with "+newfilename)
    }
    
  //End removing/ replacing an external JavaScript or CSS file.
  
  //----------------------------------------------------------------------------
  
  // Implement Google Map Version-3
  function initalizationMap(mapObj , infoObj , firstCenterLatitude , firstCenterLongitude) {
        var latitudeAndLongitudeObj = new google.maps.LatLng(firstCenterLatitude, firstCenterLongitude);
        
        var mapOptions = {
            zoom: 12,
            center: latitudeAndLongitudeObj,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };    
        
        
    
        var mapObject = new google.maps.Map(mapObj , mapOptions);
        
        var centerLatitude = firstCenterLatitude;
        var centerLongitude = firstCenterLongitude;
        var centerLatAndLongObj = new google.maps.LatLng(centerLatitude, centerLongitude);
        
        createMarker(centerLatAndLongObj, mapObject, infoObj);

  }
  
  
    //Create the Marker on the Map
    function createMarker(latitudeAndLongitude, mapObject, infoObj) {
        var phone = infoObj.phone;
        var address = infoObj.address;
        var landMark = infoObj.landMark;
        var centerName = infoObj.centerName;
        var phoneLabel = infoObj.phoneLabel;
        var addressLabel = infoObj.addressLabel
        
        var infoWindowContent = '';
        var infoWindowW;
        // Initialize Info Window In HTML Format
        infoWindowContent = '<div id="content">'+
                            '<div id="bodyContent">'+
                            '<font size="1.6px"><p>'+addressLabel+': '+ address + '<br><br>' +
                            '<p>'+phoneLabel+ phone + ' <br></font>'+
                            '</div>'+
                            '</div>';

                            

    
        // Create Info Window Object
        var infoWindow = new google.maps.InfoWindow({content: infoWindowContent});


        // Create Marker
        var marker = new google.maps.Marker({position: latitudeAndLongitude,
                                             map: mapObject});
        
        
        // Create Listner For Marker
        google.maps.event.addListener(marker, 'click', 
                                      function() {
                                      
                if(infoWindowW) infoWindowW.close();
                    infoWindowW = new google.maps.InfoWindow({content: infoWindowContent});                  
                    infoWindowW.open(mapObject, marker);
        });
    }
    
    // enlarged Map in popUp
    function enlargedMap(infoObj , urlMap) {
        
        var local = infoObj.local;
        var phone = infoObj.phone;
        var googleLatitude = infoObj.googleLatitude;
        var googleLongitude = infoObj.googleLongitude;
        var address = infoObj.address;
        var landMark = infoObj.landMark;
        var centerName = infoObj.centerName;
        
        var url = urlMap
            + "?local="+local
            + "&googleLatitude="+googleLatitude
            + "&googleLongitude="+googleLongitude
            + "&phone="+phone
            + "&address="+address
            + "&landMark="+landMark
            + "&centerName="+centerName ;

            
            popUp(url, "520", "520");

    }
    
//------------------------------------------------------------------------------
    function isPersonTrafficFile(trafficFile) {
        var patt1 = /\b1\d{7}/; 
        var result = trafficFile.match(patt1);
        if (result == trafficFile)  {
            return true;
        } else {
            return false;
        }
    }
//------------------------------------------------------------------------------
    function isOrganizationTrafficFile(trafficFile) {
        var patt1 = /\b5\d{7}/; 
        var result = trafficFile.match(patt1);
        if (result == trafficFile)  {
            return true;
        } else {
            return false;
        }
    }

//------------------------------------------------------------------------------
    function isEnglishText(value) {
        var patt1 = /^[A-Za-z]+$/;
        var result = trafficFile.match(patt1);
        if (result == result)  {
            return true;
        } else {
            return false;
        }
	}
//------------------------------------------------------------------------------    
    function formatEid(eid) {
        if(isBlankOrNull(eid) || !isNumber(eid) || eid.length != 15) {
            return eid;
        }
        
        eid = eid.substring(0,3)  + "-" 
              + eid.substring(3,7)  + "-" 
              + eid.substring(7,14) + "-" 
              + eid.substring(14,eid.length);
              
        return eid;
    }
    
    function detectIE() {
      var ua = window.navigator.userAgent;
    
      // Test values; Uncomment to check result ?
    
      // IE 10
      // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';
    
      // IE 11
      // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';
    
      // IE 12 / Spartan
      // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';
    
      // Edge (IE 12+)
      // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';
    
      var msie = ua.indexOf('MSIE ');
      if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
      }
    
      var trident = ua.indexOf('Trident/index.html');
      if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
      }
    
      var edge = ua.indexOf('Edge/index.html');
      if (edge > 0) {
        // Edge (IE 12+) => return version number
        return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
      }
    
      // other browser
      return false;
    }
    
    function validateEnglishNumericCharacters(field) {   
       //Javascript regular expression for english & numeric characters only
        var pattern=/^[a-z0-9]*$/i;
        result=pattern.test(field);
        return result;
    }
    
    function hasEnglishText(englishText) {
        var english = /^[A-Za-z0-9]*$/;
        var stringToReplace = englishText;
        reWhiteSpace = new RegExp("https://traffic.rta.ac/^\s+$/");
        var numberRegex = /\d/g;
        var specialChars = "!@#$^&%*()+=-[]{}|:<>?,./\\";
        for (var i = 0; i < specialChars.length; i++) {
            stringToReplace = stringToReplace.replace(new RegExp("\\" + specialChars[i], 'gi'), '');
        }
        var isEnglish = false;
        var isNumber = false;
        var isSpecial = false;
        if(!isBlankOrNull(englishText)) {
            if (reWhiteSpace.test(englishText)) {
                isEnglish = english.test(stringToReplace.replace( /\s/g, ""));
                isNumber = numberRegex.test(englishText.trim())
                isSpecial = checkSpecialCharacters(englishText.replace( /\s/g, ""));
            } else {
                isEnglish = english.test(stringToReplace.replace( /\s/g, ""));
                isNumber = numberRegex.test(englishText);
                isSpecial = checkSpecialCharacters(englishText.replace( /\s/g, ""));
            }

            if(isEnglish == true && (isNumber == true || isSpecial == true)) {
                isEnglish = false;
            } else {
                if(isEnglish == true) {
                    isEnglish = true;
                } else {
                    isEnglish = false;
                }
            }
        }
        return isEnglish; // displays true/false
    }
    
    
    function checkSpecialCharacter(field) {
        var isSpecilaChar = false;
        var splChars = "*|,:<>[]{}`';(!%^&*()_@&$#%-./";
        for (var i = 0; i < field.length; i++) {
                if (splChars.indexOf(field.charAt(i)) != -1){
                    isSpecilaChar = true;
            }
        }
        return isSpecilaChar;             
    }

    function isEnteredArabicText(arabicText) {
            var arabic = /[\u0600-\u06FF\u0750-\u077F]/;
            reWhiteSpace = new RegExp("https://traffic.rta.ac/^\s+$/");
            var numberRegex = /\d/g;
            
            var isArabic = false;
            var isNumber = false;
            var isSpecial = false;
            if(!isBlankOrNull(arabicText)) {
                if (reWhiteSpace.test(arabicText)) {
                    isArabic = arabic.test(arabicText.replace( /\s/g, ""));
                    isNumber = numberRegex.test(arabicText.trim())
                    isSpecial = checkSpecialCharacter(arabicText.replace( /\s/g, ""));
                } else {
                    isArabic = arabic.test(arabicText.replace( /\s/g, ""));
                    isNumber = numberRegex.test(arabicText);
                    isSpecial = checkSpecialCharacter(arabicText.replace( /\s/g, ""));
                }
                if(isArabic == true && (isNumber == true || isSpecial == true)) {
                    isArabic = false;
                } else {
                    if(isArabic == true) {
                        isArabic = true;
                    } else {
                        isArabic = false;
                    }
                }
            }
            return isArabic; // displays true/false
        }
//------------------------------------------------------------------------------            
        function isEnteredEnglishText(englishText) {
            var english = /^[A-Za-z0-9]*$/;
            var stringToReplace = englishText;
            reWhiteSpace = new RegExp("https://traffic.rta.ac/^\s+$/");
            var numberRegex = /\d/g;
            var specialChars = "!@#$^&%*()+=-[]{}|:<>?,./\\";
            for (var i = 0; i < specialChars.length; i++) {
                stringToReplace = stringToReplace.replace(new RegExp("\\" + specialChars[i], 'gi'), '');
            }
            var isEnglish = false;
            var isNumber = false;
            var isSpecial = false;
            if(!isBlankOrNull(englishText)) {
                if (reWhiteSpace.test(englishText)) {
                    isEnglish = english.test(stringToReplace.replace( /\s/g, ""));
                    isNumber = numberRegex.test(englishText.trim())
                    isSpecial = checkSpecialCharacter(englishText.replace( /\s/g, ""));
                } else {
                    isEnglish = english.test(stringToReplace.replace( /\s/g, ""));
                    isNumber = numberRegex.test(englishText);
                    isSpecial = checkSpecialCharacter(englishText.replace( /\s/g, ""));
                }
    
                if(isEnglish == true && (isNumber == true || isSpecial == true)) {
                    isEnglish = false;
                } else {
                    if(isEnglish == true) {
                        isEnglish = true;
                    } else {
                        isEnglish = false;
                    }
                }
            }
            return isEnglish; // displays true/false
        }
    
    function divideDigits(text){
        return text.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") ;
    }
    
    /**
     * Check if the passed fields value have any special characters
     * @param field 
     */
    function containSpecialCharacter( textValue ) {
    
        var specialChars = "<>@!#$%^&*()+[]{}?:;|'\"\\,./~`-=";
        for( i = 0; i < specialChars.length;i++ ) {
            if( textValue.indexOf(specialChars[i]) > -1 ){
                return true
            }
         }
         return false;
    }
    
    /**
     * Checkif the passed key is function
     * @param key 
     */
    function isFunctionKey( event ) {
    
        var keycode = parseInt( event.keyCode ? event.keyCode : event.which );
        //window.console.log( 'keycode = ' + keycode  + '\t event.ctrlKey ? ' + event.ctrlKey);
                           
        var functionKey = $.inArray( keycode , [5, 8, 9, 12, 13, 16, 17, 18, 20, 144, 27, 45 , 46, 91, 190]) !== -1 ||
                          (keycode > 32 && keycode < 41) || 
                          (keycode > 111 && keycode < 124) ||
                          ( 
                           ( keycode == 17 || keycode == 65 || keycode == 67|| 
                             keycode == 86 || keycode == 91 || keycode == 99 || 
                             keycode == 118  || keycode == 120
                           )  && 
                           ( event.ctrlKey === true || event.metaKey === true)
                          );                                                                   
        return functionKey;
    }
    
    function isPopup(redirectURL){
        if (window.opener) {
        } else if (window.top !== window.self) {
        } else {
          window.location.href = redirectURL ;
        }
    }



function checkPhoneNumber(obj, title,lang,  withoutCountryCode){
    if(lang==null){
        lang='ar';
    }
    if(title==null){
        title='Phone';
    }
    if( isBlankOrNull(obj.value) ) {
        return "";
    }
    if( isNaN(obj.value) ) {
        if(lang=='ar'){
            return "ÌÃ» √‰ Ì ﬂÊ‰ "+title+" „‰ √—ﬁ«„";
        }else{
            return "Phone number must be number";
        }
    }
    if(withoutCountryCode != null && withoutCountryCode){
        if(obj.value.length  != 9 || obj.value.charAt(0) != '0'){
            if(lang=='ar'){
                return '—ﬁ„ «·Â« › ÌÃ» √‰ Ì ﬂÊ‰ „‰ √—ﬁ«„ ›ﬁÿ Ê√‰ Ì»œ√ » 0 Ê√‰ Ì ﬂÊ‰ „‰ 9 √—ﬁ«„';
            }else{
                return "Phone number should be numbers, starts with 0 and contains 9 digits !";
            }
        } else if(obj.value.length  == 9 && obj.value.substring(2)== '0000000'){
            if(lang=='ar'){
                return '—ﬁ„ «·Â« › ÌÃ» «‰ ·« » ﬂÊ‰ „‰ √’›«—√—ﬁ«„';
            }else{
                return "Please Phone Number Should not be 0000000.";
            }
        }
    }else {
        if(obj.value.length  != 9 && obj.value.length != 11){
            if(lang=='ar'){
                return '—ﬁ„ «·Â« › ÌÃ» √‰ Ì ﬂÊ‰ „‰ √—ﬁ«„ ›ﬁÿ Ê√‰ Ì»œ√ » 0 Ê√‰ Ì ﬂÊ‰ „‰ 9 √—ﬁ«„';
            }else{
                return "Phone number should be numbers, starts with 0 and contains 9 digits !";
            }
        }
    }
    return "";
}
