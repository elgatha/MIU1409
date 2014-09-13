var aboutMe = {
	        
	        "Name": "Elgatha-Ethel Maria Lee",
	        "chat": "AppleElgatha",
            "timeZone": "EST",
            "whyMDV": "I thought it would be awesome to learn a new skill and have a second career",
            "javascript??": "I still break out in hives at the mere thought of it",
            "titanium??": "My palms sweat",
            "favouriteFood": "Prime Rib Medium Rare",
            "favouriteColour": "Neutral",
            "favouriteSport": "Golf",
            "petName": "Praline",
            "petType": "Dog",
            "favouriteSong": "Heavy Cross by Gossip"};
        

var titleView = Ti.UI.createView({
	height: 135,
	backgroundColor: "#fff",
	top: 0
});

var border = Ti.UI.createView({
	backgroundColor: "#fff",
	height: 4,
	top: titleView.height + titleView.top
});

var titleLabel = Ti.UI.createLabel({
	text: "About Me",
	font: {fontSize:50},
	top: 60,
	width: "100%",
	textAlign: "center",
	color: "#000"
	
});

var aboutMeInfo = "";
for (var key in aboutMeInfo){
	aboutMe = aboutMe + key + ":" + aboutMeInfo[key]+ "\n";
}

var aboutMeInfo = Ti.UI.createLabel({
	text: aboutMe,
	font: {fontSize:12},
	top: titleView.top + titleView.height + 10,
	width: "80%",
	textAlign: "left"
	
});


titleView.add(titleLabel);
mainWindow.add(titleView, border, aboutMeInfo);
mainWindow.open();
