
exports.openRecipesContainer = function(recipes) {
	console.log(JSON.stringify(recipes));

	var recipesContainer = Ti.UI.createWindow({
		navTintColor : '#FFCC11'
	});

	var recipesModel = Ti.UI.createLabel({
		text : recipes.type,
		color : 'white',
		top : 50,
		font : {
			fontWeight : 'bold',
			fontSize : '23'
		}
	});

	var timesNumber = Ti.UI.createLabel({
		text : "Prep Time " + recipes.cook + "\nCook Time " + recipes.prep,
		color : 'white',
		top : 0,
		left : 10,
		width : 250,
		font : {
			fontWeight : 'bold',
			fontSize : '18'
		}
	});

	var recipesDesc = Ti.UI.createLabel({
		text : recipes.desc,
		color : 'white',
		width : 150,
		left : 0,

		center : {
			y : 340,
		},

		font : {
			fontSize : '12',
		}
	});

	var verticalContainer = Ti.UI.createView({
		layout : 'vertical',
		height : Ti.UI.SIZE,
		width : 161,
		right : 0,
		bottom : 10,
	});

	for (var i = 0; i < recipes.specs.length; i++) {
		var specsTop;

		var recipesSpecs = Ti.UI.createLabel({
			text : recipes.specs[i],
			color : 'white',
			width : 160,
			font : {
				fontWeight : 'bold',
				fontSize : '12',
			}

		});
		verticalContainer.add(recipesSpecs);
	};

	var recipesImage = Ti.UI.createImageView({
		image : recipes.image,
		width : 'auto',
		height : 150,
		top : 75,
	});

	var separatorLine = Ti.UI.createImageView({
		image : 'images/yellowLine.png',
		bottom : 15,
		height : 200,
		left : 150,
	});

	recipesContainer.add(recipes, recipesImage, logoView4, recipesDesc, verticalContainer, separatorLine, timesNumber);

	
	return recipesContainer;
}; 