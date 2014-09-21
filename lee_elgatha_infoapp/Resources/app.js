
var boiledFishJson ={"Title": "Boiled Fish", "Servings": "4", "Prep": "25 minutes", "Cook Time": "45 minutes"};
var chickenSouseJson ={"Title": "Chicken Souse", "Servings": "4", "Prep": "25 minutes",  "Cook Time": "30 minutes"};
var conchFrittersJson ={"Title": "Conch Fritters", "Servings": "8", "Prep": "15 minutes",  "Cook Time": "10 minutes"};
var conchSaladJson ={"Title": "Conch Salad", "Servings": "4", "Prep": "10 minutes",  "Cook Time": "2 minutes"};
var pigsFeetSouseJson ={"Title": "Pigs Feet Souse", "Servings": "4", "Prep": "60 minutes",  "Cook Time": "180 minutes"};



// create tab group
var tabGroup = Titanium.UI.createTabGroup();
 

var tab1 = Ti.UI.createTab({
		title: L('Boiled Fish'),
		window: win1
	});
	win1.containingTab = tab1;
	 
var button = Titanium.UI.createButton({
    color: '#999',
    title: 'next',
    width: 180,
    height: 35
});
 
win1.add(button);
button.addEventListener('click',
function(e) {
 
    tabGroup.addTab(tab1);
    tabGroup.open();
 
    var closeBtn = Titanium.UI.createButton({
        title: 'Close'
    });
    tabWin.leftNavButton = closeBtn;
    closeBtn.addEventListener('click',
    function(e) {
        tabGroup.animate({
            duration: 400,
            bottom: -500
        },
        function() {
            tabGroup.close()
        });
    });
 
 
var tab2 = Ti.UI.createTab({
		title: L('Chicken Souse'),
		window: win2
	});
	win2.containingTab = tab2;
	 
var button = Titanium.UI.createButton({
    color: '#999',
    title: 'next',
    width: 180,
    height: 35
});
 
win2.add(button);
button.addEventListener('click',
function(e) {
 
    tabGroup.addTab(tab1);
    tabGroup.open();
 
    var closeBtn = Titanium.UI.createButton({
        title: 'Close'
    });
    tabWin.leftNavButton = closeBtn;
    closeBtn.addEventListener('click',
    function(e) {
        tabGroup.animate({
            duration: 400,
            bottom: -500
        },
        function() {
            tabGroup.close()
        });
    });
 
 
	var tab3 = Ti.UI.createTab({
		title: L('Conch Fritters'),
		window: win3
	});
	win3.containingTab = tab3;
	
	 
var button = Titanium.UI.createButton({
    color: '#999',
    title: 'next',
    width: 180,
    height: 35
});
 
win3.add(button);
button.addEventListener('click',
function(e) {
 
    tabGroup.addTab(tab1);
    tabGroup.open();
 
    var closeBtn = Titanium.UI.createButton({
        title: 'Close'
    });
    tabWin.leftNavButton = closeBtn;
    closeBtn.addEventListener('click',
    function(e) {
        tabGroup.animate({
            duration: 400,
            bottom: -500
        },
        function() {
            tabGroup.close()
        });
    });
 
 
	
	
	var tab4 = Ti.UI.createTab({
		title: L('Conch Salad'),
		window: win4
	});
	win4.containingTab = tab4;
	
	 
var button = Titanium.UI.createButton({
    color: '#999',
    title: 'next',
    width: 180,
    height: 35
});
 
win4.add(button);
button.addEventListener('click',
function(e) {
 
    tabGroup.addTab(tab1);
    tabGroup.open();
 
    var closeBtn = Titanium.UI.createButton({
        title: 'Close'
    });
    tabWin.leftNavButton = closeBtn;
    closeBtn.addEventListener('click',
    function(e) {
        tabGroup.animate({
            duration: 400,
            bottom: -500
        },
        function() {
            tabGroup.close()
        });
    });
 
 
	
	var tab5 = Ti.UI.createTab({
		title: L('Pigs Feet Souse'),
		window: win5
	});
	win5.containingTab = tab5;
	
	
		
 
var button = Titanium.UI.createButton({
    color: '#999',
    title: 'next',
    width: 180,
    height: 35
});
 
win5.add(button);
button.addEventListener('click',
function(e) {
 
    tabGroup.addTab(tab1);
    tabGroup.open();
 
    var closeBtn = Titanium.UI.createButton({
        title: 'Close'
    });
    tabWin.leftNavButton = closeBtn;
    closeBtn.addEventListener('click',
    function(e) {
        tabGroup.animate({
            duration: 400,
            bottom: -500
        },
        function() {
            tabGroup.close()
        });
    });
 
 
 
    var tBtn = Titanium.UI.createButton({
        title: 'Click For Nav Group',
        width: 180,
        height: 35
    });
    tabWin.add(tBtn);
    tBtn.addEventListener('click',
    function(e) {
        var navWin = Titanium.UI.createWindow({
            title: 'Nav Window',
            backgroundColor: '#f00',
            width: '100%',
            height: '100%'
        });
        tab1.open(navWin);
    });
 
 
    tabGroup.animate({
        duration: 400,
        bottom: 0
    });
});
 

var tab2 = Titanium.UI.createTab({
    title: 'Chicken Souse',
    window: win2
});
 

var button = Titanium.UI.createButton({
    color: '#999',
    title: 'next',
    width: 180,
    height: 35
});
 
win2.add(button);
button.addEventListener('click',
function(e) {
 
    tabGroup.addTab(tab1);
    tabGroup.open();
 
    var closeBtn = Titanium.UI.createButton({
        title: 'Close'
    });
    tabWin.leftNavButton = closeBtn;
    closeBtn.addEventListener('click',
    function(e) {
        tabGroup.animate({
            duration: 400,
            bottom: -500
        },
        function() {
            tabGroup.close()
        });
    });
 
 
 
    var tBtn = Titanium.UI.createButton({
        title: 'Click For Nav Group',
        width: 180,
        height: 35
    });
    tabWin.add(tBtn);
    tBtn.addEventListener('click',
    function(e) {
        var navWin = Titanium.UI.createWindow({
            title: 'Nav Window',
            backgroundColor: '#f00',
            width: '100%',
            height: '100%'
        });
        tab1.open(navWin);
    });
 
 
    tabGroup.animate({
        duration: 400,
        bottom: 0
    });
});
 
 //items - boiled fish
	var boiledFishData = "";
	for (var key in boiledFishJson){
		boiledFishData = boiledFishData + key + " = " + boiledFishData[key]+ "\n";	
	}
	
	var boiledFishText = Ti.UI.createLabel({
		text: boiledFishData,
		font: {fontSize: 30},
		top: 110,
		width: "100%",
		textAlign: "justify"
	});
	var boiledFishPicture = Ti.UI.createImageView({
		image: 'images/boil-fish.jpg',
		top: 15
	});
	win1.add(boiledFishJson, boiledFishPicture);
	
	
	//items - chicken souse
	var chickenSouseData = "";
	for (var key in chickenSouseJson){
		chickenSouseData = chickenSouseData + key + " = " + chickenSouseData[key]+ "\n";
	}
		
	var chickenSouseJson = Ti.UI.createLabel({
		text: chickenSouseData,
		font: {fontSize: 30},
		top: 110,
		width: "100%",
		textAlign: "justify"
	});
	
	var chickenSousePicture = Ti.UI.createImageView({
		image: 'images/bahamian-chicken-souse.jpg',
		top: 15
	});
	win2.add(chickenSouseJson, chickenSousePicture);
	
	
	//items - conch salad
	var conchSaladData = "";
	for (var key in conchSaladJson){
	conchSaladData = conchSaladData + key + " = " + conchSaladData[key]+ "\n";	
	}
	
	var conchSaladText = Ti.UI.createLabel({
		text: conchSaladData,
		font: {fontSize: 30},
		top: 110,
		width: "100%",
		textAlign: "justify"
	});
	var conchSaladPicture = Ti.UI.createImageView({
		image: 'images/conch-salad.jpg',
		top: 15
	});
	win3.add(conchSaladText, conchSaladPicture);
	
	
	
	//items - conch fritters	
	var conchFrittersData = "";
	for (var key in conchFrittersJson){	
		conchFrittersData = conchFrittersData + key + " = " + conchFrittersData[key]+ "\n";
	}
	
	var conchFrittersText = Ti.UI.createLabel({
		text: conchFrittersData,
		font: {fontSize: 30},
		top: 110,
		width: "100%",
		textAlign: "justify"
	});
	var conchFrittersPicture = Ti.UI.createImageView({
		image: 'images/conch-fritters.jpg',
		top: 15
	});
	win4.add(conchFrittersText, conchFrittersPicture);
	
	
	//items - pigs feet souse
	var pigsFeetSouseData = "";
	for (var key in pigsFeetSouseJson){
	pigsFeetSouseData = pigsFeetSouseData + key + " = " + pigsFeetSouseData[key]+ "\n";
	}
	
	var pigsFeetSouseText = Ti.UI.createLabel({
		text: pigsFeetSouseData,
		font: {fontSize: 30},
		top: 110,
		width: "100%",
		textAlign: "justify"
	});
	var pigsFeetSousePicture = Ti.UI.createImageView({
		image: 'images/pig-feet.jpg',
		top: 15
	});
	win5.add(pigsFeetSouseText, pigsFeetSousePicture);
	
	
//
//  add tabs
//
tabGroup.addTab(tab1);
tabGroup.addTab(tab2);
tabGroup.addTab(tab3);
tabGroup.addTab(tab4);
tabGroup.addTab(tab5);

 
 
// open tab group
tabGroup.open();