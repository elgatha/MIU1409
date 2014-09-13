var mainWindow = Ti.UI.createWindow({
	backgroundColor: "#e7e7e7"
});

var titleView = Ti.UI.createView({
	height: 65,
	backgroundColor: "#fff",
	top: 0
});

var border = Ti.UI.createView({
	backgroundColor: "#ccc",
	height: 1,
	top: titleView.height + titleView.top
});

var titleLabel = Ti.UI.createLabel({
	text: "About Me",
	font: {fontSize:30},
	top: 30,
	width: "100%",
	textAlign: "center"
	
});

var dataLabel = Ti.UI.createLabel({
	text: "",
	font: {fontSize:15},
	top: titleView.top + titleView.height + 10,
	width: "100%",
	textAlign: "center"
	
});


var fileName = 'aboutme.json';
var file = Titanium.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory, fileName);
 
if (file.exists()) {
	dataArray = [];
  var json = file.read();
  var data = JSON.parse(json);
  dataLabel.text = data;
}
  
titleView.add(titleLabel);
mainWindow.add(titleView, border,dataLabel);
mainWindow.open();
myButton.addEventListener("click", makeViews);
subWindow.add(myButton);
navWindow.open();