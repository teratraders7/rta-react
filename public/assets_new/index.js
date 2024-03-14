function showsrch(id, id2) {
	$("div#" + id).show();
	$("div#" + id2).hide();
	}
	
function hideadvsrch(id, id2) {
	$("div#" + id).hide();
	$("div#" + id2).hide();
	}

function showedit(id, id2) {
	$("ul#" + id).show();
	$("ul#" + id2).hide();
	}

function showmore(id) {
	$("ul#" + id).slideToggle('fast');
	}
	
function popUp(URL,w,h) {
day = new Date();
id = day.getTime();
eval("page" + id + " = openWindow(URL, '" + id + "', 'toolbar=0,scrollbars=1,location=0,statusbar=0,menubar=0,resizable=0,width="+w+",height="+h+",left =20,top =20');")
}
function show(obj) {
no = obj.options[obj.selectedIndex].value;
if (no == 3) {
   document.getElementById('SkiDiv'+1).style.display = 'block';
   document.getElementById('SkiDiv'+3).style.display = 'none';
   document.getElementById('SkiDiv'+4).style.display = 'block';
            
    if(document.getElementById('btnMainGoId')!=null) {
        document.getElementById('btnMainGoId').style.display = 'none';
    }
  }
if (no == 1 || no == 2) {
   document.getElementById('SkiDiv'+1).style.display = 'block';
   document.getElementById('SkiDiv'+3).style.display = 'none';
   document.getElementById('SkiDiv'+4).style.display = 'none';
    if(document.getElementById('btnMainGoId')!=null) {
        document.getElementById('btnMainGoId').style.display = 'block';
    }
  }
if (no == 4) {
   document.getElementById('SkiDiv'+1).style.display = 'block';
   document.getElementById('SkiDiv'+3).style.display = 'block';
   document.getElementById('SkiDiv'+4).style.display = 'none';
    if(document.getElementById('btnMainGoId')!=null) {
        document.getElementById('btnMainGoId').style.display = 'none';
    }            
  }
}


function show2(obj) {
    no = obj.options[obj.selectedIndex].value;
    if (no == 3) {
        document.getElementById('SkiDiv'+11).style.display = 'block';
        document.getElementById('SkiDiv'+33).style.display = 'none';
        document.getElementById('SkiDiv'+44).style.display = 'block';
        if(document.getElementById('btnMainGoId')!=null) {
            document.getElementById('btnMainGoId').style.display = 'none';
        }
    }
    if (no == 1 || no == 2) {
        document.getElementById('SkiDiv'+11).style.display = 'block';
        document.getElementById('SkiDiv'+33).style.display = 'none';
        document.getElementById('SkiDiv'+44).style.display = 'none';
        if(document.getElementById('btnMainGoId')!=null) {
            document.getElementById('btnMainGoId').style.display = 'block';
        }
    }
    if (no == 4) {
        document.getElementById('SkiDiv'+11).style.display = 'block';
        document.getElementById('SkiDiv'+33).style.display = 'block';
        document.getElementById('SkiDiv'+44).style.display = 'none';
        if(document.getElementById('btnMainGoId')!=null) {
            document.getElementById('btnMainGoId').style.display = 'none';
        }
    }
}

function show3(obj) {
no = obj.options[obj.selectedIndex].value;
if (no == 1) {
			document.getElementById('SkiDiv'+111).style.display = 'block';
			document.getElementById('SkiDiv'+222).style.display = 'none';
		}
if (no == 2) {
			document.getElementById('SkiDiv'+111).style.display = 'block';
			document.getElementById('SkiDiv'+222).style.display = 'block';
		}
}

function showadres(obj) {
no = obj.options[obj.selectedIndex].value;
if (no == 1) {
			document.getElementById('barsha_adres').style.display = 'none';
		}
if (no == 2) {
			document.getElementById('barsha_adres').style.display = 'block';
		}
}


function Test(rad){
 var rads=document.getElementsByName(rad.name);
 document.getElementById('courier').style.display=(rads[1].checked)?'none':'block';
 document.getElementById('officemeth').style.display=(rads[1].checked)?'block':'none';
}