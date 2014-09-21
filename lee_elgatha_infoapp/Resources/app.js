
var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;
var recipesContainer = require('recipesContainer');

var recipesData = require('Json');

// create tab group
var tabGroup = Titanium.UI.createTabGroup({
	barColor : '#383B3A',
	tabsTintColor : '#383B3A',
});

var win1 = Titanium.UI.createWindow({
	title : 'Bahamian Flavour by Chef Apple',
});

var tab1 = Titanium.UI.createTab({
	icon : 'tab1icon.png',
	title : 'Home',
	window : win1,
	icon : 'images/KS_nav_ui.png',
});

var win2 = Titanium.UI.createWindow({
	title : 'Recipes List',
	backgroundColor : '#fff'
});
var tab2 = Titanium.UI.createTab({
	icon : 'tab2icon.png',
	title : 'Recipes',
	window : win2,
	icon : 'images/KS_nav_ui.png',
});

var win3 = Titanium.UI.createWindow({
	title : 'About Me',
	backgroundColor : '#000'
});
var tab3 = Titanium.UI.createTab({
	icon : 'tab1icon.png',
	title : 'About Me',
	window : win3,
	icon : 'images/KS_nav_ui.png',
});

//Adding to win1
var logoView = Titanium.UI.createView({
	top : 0,
	height : 50,
	width : 150,
});

var aniView1 = Titanium.UI.createView({
	backgroundImage : 'images/boil-fish.jpg',
});
aniView1.addEventListener('click', function(e) {

});
var aniView2 = Titanium.UI.createView({
	backgroundImage : 'images/bahamian-chicken-souse.jpg',
});
var aniView3 = Titanium.UI.createView({
	backgroundImage : 'images/conch-fritters.jpg',
});
var aniView4 = Titanium.UI.createView({
	backgroundImage : 'images/conch-salad.jpg',
});
var aniView5 = Titanium.UI.createView({
	backgroundImage : 'images/pig-feet.jpg',
});

var scrollable = Titanium.UI.createScrollableView({
	height : 175,
	top : 51,
	views : [aniView1, aniView2, aniView3, aniView4, aniView5],
	showPagingControl : true,
});

var ar = scrollable.getViews();
var t = 0;
setInterval(function(e) {
	if (t >= ar.length) {
		t = 0;
	}
	scrollable.scrollToView(t);
	t++;

}, 2500);

var playerView = Ti.UI.createImageView({
	width : 'auto',
	height : 225,
	bottom : 5,
});

playerView.addEventListener('click', function(e) {
	Ti.Platform.openURL('http://www.youtube.com/watch?v=vh_LSWfi9Gk');
});

//add to win2

var searchbar = Ti.UI.createSearchBar({
	barColor : '#383B3A',
	showCancel : false
});
var listTab = Ti.UI.createTableView({
	search : searchbar,
});

listTab.addEventListener('click', function(e) {
	tabGroup.activeTab.open(recipesContainer.openRecipesContainer(e.source.info));
});

for (category in recipesData.array) {
	Ti.API.info('Iteration for  ' + category);

	// Create table view sections
	Ti.API.info('Creating table section for ' + category);
	var tableSections = Ti.UI.createTableViewSection({
		headerTitle : category,
	});

	for (var i = 0; i < recipesData.array[category].length; i++) {
		var recipes;
		recipes = recipesData.array[category][i];

		// Create Row
		var theRow = Ti.UI.createTableViewRow({
			title : recipes.name,
			info : recipes
		});

		// Add row to section
		tableSections.add(theRow);
	};

	listTab.appendSection([tableSections]);

};

//Add to win3
var logoView2 = Titanium.UI.createView({
	top : 0,
	height : 50,
	width : 150,
});

var headerLabel = Titanium.UI.createLabel({
	text : 'About Chef Apple',
	left : 10,
	color : '#FFCC11',
	top : 60,
	font : {
		fontSize : '20'
	}
});
var secondLabel = Titanium.UI.createLabel({
	text : 'Born in The Bahamas, Educated at Le Cordon Bleu, Paris ',
	left : 10,
	color : '#ffffff',
	top : 95,
	font : {
		fontWeight : 'bold',
		fontSize : '25'
	}
});

var newText = 'Nassau. A small island in the Bahamas is where I was born, raised and educated before my grandmother in her not so polite way told me that I would be going to culinary school, So I enrolled in Le Cordon Bleu and studied Culinary Arts. As a young Chef, I realized early on the food should be simple and honest.\n\nWhen I look back on my unique childhood, I realize I was given the neccesary skills to develop into an amazing chef. I don\'t know if this knowledge gave me an extra ego, but it was always there to boost my confidence when I doubted myself. I was once told that I had more raw talent in my pinky than most people do in their entire person.\n\nCraftsmanship is the skill that propels a Chef to create excellence...';

var textEmp = Ti.UI.iOS.createAttributedString({
	text : newText,
	attributes : [{
		type : Ti.UI.iOS.ATTRIBUTE_FOREGROUND_COLOR,
		value : 'red',
		range : [newText.indexOf('Nassau.'), ('Nassau.').length]
	}]
});

var bodyLabel = Titanium.UI.createLabel({
	text : newText,
	left : 10,
	color : '#ffffff',
	top : 200,
	font : {
		fontSize : '10'
	}
});

//Add to recipesContainer
var logoView4 = Titanium.UI.createView({
	left : 0,
	top : 0,
	height : 50,
	width : 150,
});

// add tabs to the group
tabGroup.addTab(tab1);
tabGroup.addTab(tab2);
tabGroup.addTab(tab3);


// open tab group
tabGroup.open();

//add elements to windows
win1.add(logoView, scrollable, playerView);
win2.add(listTab);
win3.add(logoView2, headerLabel, secondLabel, bodyLabel);
