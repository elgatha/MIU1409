//Elgatha Lee
//MIU 1409
//September, 2014

//Background Color
Titanium.UI.setBackgroundColor('#000');

//Background
var mainWindow = Ti.UI.createWindow({
	backgroundColor: "#e7e7e7",
	title: "Fork'D"
});

//NavWindow
var navWindow = Ti.UI.iOS.createNavigationWindow({
	window: mainWindow
});

//Picture
var picture = Ti.UI.createImageView({
	image: "images/apple.jpg",
	borderRadius: 15,
	borderColor: "#EF223A",
	top: 25,
	left: 60,
	right: 60,
});

//Form
var text = Ti.UI.createLabel({
	text: "Log-In",
	color: "#000",
	textAlign: "center",
	top: picture.top + 250,
	font: {fontSize: 20}
});
//Username
var textField1 = Ti.UI.createTextField({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_LINE,
	color: "#8E89B7",
	placeText: "UserName",
	top: text.top + 40,
	left: 10,
	right: 10,
});
//Submit
var button = Ti.UI.createButton({
	title: "Sign-In",
	backgroundColor: "#8E89B7",
	color: "#fff",
	font: {fontWeight: "normal"},
	borderRadius: 6,
	borderColor: "#EF223A",
	top: textField1.top + 40,
	width: 50,
	right: 10
});
//Password
var textField2 = Ti.UI.createTextField({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_LINE,
	color: "#8E89B7",
	placeText: "Password",
	top: text.top + 40,
	top: textField1.top + 40,
	left: 10,
	right: button.width + button.right + 20,
	passwordMask: true
});
//Footer Button
var text2 = Ti.UI.createLabel({
	text: "Get Ready to Sign-Up",
	color: "#fff",
	textAlign: "center",
	top: textField2.top + 80,
	left: 10,
	font: {fontSize: 16, fontWeight: "bold"}
});
//Submit
var button2 = Ti.UI.createButton({
	title: "Sign-Up",
	backgroundColor: "#8E89B7",
	color: "#fff",
	font: {fontWeight: "normal"},
	borderRadius: 6,
	borderColor: "#EF223A",
	top: textField1.top + 40,
	width: 150,
	right: 10
});

//Function
var checkAccount = function(){
	if (textField2.value !== "password" & textField1.value !== "user"){
		alert("Ooops! That's the wrong Username or Password");
	} else if (textField1.value !== "user"){
		alert("Ooops! That's the wrong Username");
	} else if (textField2.value !== "password"){
		alert("Ooops! That's the wrong Password");
	} else if (textField2.value == "password" & textField1.value == "user"){
		signIn();
	};
};

//SIGNIN

//Function
var signIn = function(){
	
	//Main
	var signInWindow = Ti.UI.createWindow({
		backgroundColor: "#8E89B7",
		title: "TidBits"
	});
	
	//Background
	var background1 = Ti.UI.createWindow({
		borderRadius: 10,
		backgroundColor: "#fff",
		top: 50,
		height: 100,
		left: 15,
		right: 15
	});
	
	//BackgroundToo
	var background2 = Ti.UI.createView({
		borderRadius: 10,
		backgroundColor: "#fff",
		top: background1.top + background1.height + 50,
		height: 100,
		left: 15,
		right: 15
	});
	
	//BackgroundThrice
	var background3 = Ti.UI.createView({
		borderRadius: 10,
		backgroundColor: "#fff",
		top: background1.top + background1.height + 50,
		height: 100,
		left: 15,
		right: 15
	});
	
	// Required Title
	var title = Ti.UI. createLabel({
		text: "September 25, 2014",
		color: "#000",
		textAlign: "center",
		left: 10,
		right: 10,
		top: 60,
		font: {fontSize: 14, fontWeight: "normal "}
	});
	var title2 = Ti.UI. createLabel({
		text: "September 26, 2014",
		color: "#000",
		textAlign: "center",
		left: 10,
		right: 10,
		top: 60,
		font: {fontSize: 14, fontWeight: "normal "}
	});
	var title3 = Ti.UI. createLabel({
		text: "September 27, 2014",
		color: "#000",
		textAlign: "center",
		left: 10,
		right: 10,
		top: 60,
		font: {fontSize: 14, fontWeight: "normal "}
	});
	
	
	//Text1
	var text1 = Ti.UI.createLabel({
		text: "Hey, Hey, my name is Apple",
		color: "#000",
		textAlign: "center",
		left: 20,
		right: 20,
		top: 70,
		font: {fontSize: 14}
	});
	//Text2
	var text2 = Ti.UI.createLabel({
		text: "This is FORK'd, a Website about Haute Cuisine",
		color: "#000",
		textAlign: "center",
		left: 20,
		right: 20,
		top: 70,
		font: {fontSize: 14}
	});
	//Text2
	var text3 = Ti.UI.createLabel({
		text: "I created this site to educate people about haute cuisine and to showcase techniques",
		color: "#000",
		textAlign: "center",
		left: 20,
		right: 20,
		top: 70,
		font: {fontSize: 14}
	});
	
	//Function Code
	signInWindow.add(background1, background2, background3, title, title2, title3, text1, text2, text3)
	navWindow.openWindow(signInWindow);
};

//Sign-Up

//Function
var signUp = function(){
	
	//Main
	var signUpWindow = Ti.UI.createWindow({
		backgroundColor: "#8E89B7",
		title: "Access"
	});
	//FormBack
	var background = Ti.UI.createView({
		backgroundColor: "#e7e7e7",
		top: 100,
		height: 200,
		left: 15,
		right: 15
	});
	//NameFirst
	var textField3 = Ti.UI.createTextField({
		borderStyle: Ti.UI.INPUT_BORDERSTYLE_LINE,
		color: "#ccc",
		top: 120,
		left: 15,
		right: 15
	});
	//NameLast
	var textField4 = Ti.UI.createTextField({
		borderStyle: Ti.UI.INPUT_BORDERSTYLE_LINE,
		color: "#ccc",
		top: textField3.top + 60,
		left: 15,
		right: 15
	});
	//Email
	var textField5 = Ti.UI.createTextField({
		borderStyle: Ti.UI.INPUT_BORDERSTYLE_LINE,
		color: "#ccc",
		top: textField4.top + 60,
		left: 15,
		right: 15
	});
	//Password
	var textField6 = Ti.UI.createTextField({
		borderStyle: Ti.UI.INPUT_BORDERSTYLE_LINE,
		color: "#ccc",
		top: textField5.top + 60,
		passwordMask: true,
		left: 15,
		right: 15
	});
	
	//REQUIRED FORM
	var text3 = Ti.UI.createLabel({
		text: "Looks like it is REQUIRED *",
		color: "red",
		textAlign: "center",
		right: 20,
		top: 105,
		font: {fontSize: 10}
	});
	//NameFirst
	var text4 = Ti.UI.createLabel({
		text: "Your First Name *",
		color: "#000",
		textAlign: "center",
		font: {fontSize: 10},
		top: 110,
		left: 20
	});
	//NameUser
	var text5 = Ti.UI.createLabel({
		text: "Your Username *",
		color: "#000",
		textAlign: "center",
		font: {fontSize: 10},
		top: textField4.top -20,
		left: 20
	});
	//Email
	var text6 = Ti.UI.createLabel({
		text: "Your Email *",
		color: "#000",
		textAlign: "center",
		font: {fontSize: 10},
		top: textField5.top -20,
		left: 20
	});
	//Password
	var text7 = Ti.UI.createLabel({
		text: "Password *",
		color: "#000",
		textAlign: "center",
		font: {fontSize: 10},
		top: textField6.top -20,
		left: 20
	});
	
	//Sign-UP
	var button3 = Ti.UI.createButton({
		title: "Fini",
		backgroundColor: "#8E89B7",
		borderColor: "#000",
		color: "#fff",
		font: {fontSize: 18, fontWeight: "normal"},
		borderRadius: 10,
		top: textField6.top + 90,
		width: 70
	});
	
	//Cerrado
	var exitWindow = function(){
		signUpWindow.close();
	};
	
	//CheckFields
	var check = function(){
		if (textField6.value.length + textField5.value.length + textField3.value.length + textField4.value.legth === 0){
			alert("Fill in REQUIRED FIELDS");
			
		} else if (textField3.value.length === 0){
			alert("Enter your name");
		
		} else if (textField5.value.length === 0){
			alert("Enter your Email Address");
		
		} else if (textField6.value.length === 0){
			alert("Enter your Password");
		
		} else if (textField4.value.length === 0){
			alert("Enter your Username");
		
		} else {
			
			alert("Yay " + textField3.value + " username" + textField4.value + " you are now registered with Fork'd");
			exitWindow();
		}; 
	};
	
	//Event Listener
	button3.addEventListener("click", function(e){
		check();
	});

	//Coup de grâce
	signUpWindow.add(background, textField3, textField4, textField5, textField6, text3, text4, text5, text6, text7, button3)
	navWindow.openWindow(signUpWindow);
};
	
	//More Code
	 
	//SignIn
	button.addEventListener("click", function(e){
		check();
	});
	//SignUp
	button2.addEventListener("click", signUp);
	//Main
	mainWindow.add(picture, text, text2, textField1, textField2, button, button2);
	navWindow.open();

