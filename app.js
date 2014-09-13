//Elgatha Lee
//MIU 1409
//Project 2

var mainWindow = Ti.UI.createWindow();

var subWindow = Ti.UI.createWindow({
	title: "About Me",
	modal: true,
	backgroundColor: "#000000"
});

var subWindowSecond = Ti.UI.createWindow({
	title: "My Life",
	modal: true,
	backgroundColor: "#000000"
});

var navWindow = Ti.UI.iOS.createNavigationWindow({
	window: subWindow
});

var navWindowSecond = Ti.UI.iOS.createNavigationWindow({
	window: subWindowSecond
});

var viewScrollView = Ti.UI.createScrollView({
	contentHeight: Ti.Platform.displayCaps.platformHeight,
	contentWidth: Ti.Platform.displayCaps.platformWidth,
	showVerticalScrollIndicator: true,
	layout: "horizontal"
});

var table = Ti.UI.createTableView({
	style: Ti.UI.iPhone.TableViewStyle.GROUPED
});

var myButton = Ti.UI.createButton({
	title: "My Life",
	backgroundColor: "#ccc",
	borderWidth: 4,
	borderColor: "#fff",
	borderRadius: 0,
	height: 50,
	width: 175,
	top: 150,
});

var aboutMeFile = require('aboutme');