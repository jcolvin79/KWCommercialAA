function createHTML5Elements(){
	var e = "abbr,article,aside,audio,bb,canvas,datagrid,datalist,details,dialog,eventsource,
	figure,footer,header,hgroup,mark,menu,meter,"
	var e += "nav,output,progress,section,time,video".split(',');
	var len = e.length;
	for (var i=0;i<len;i++){
	document.createElement(e[i]);
	}
}