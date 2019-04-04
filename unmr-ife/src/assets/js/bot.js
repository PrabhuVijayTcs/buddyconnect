

$(document).ready(function () {
	setTimeout(pushChat, 2000, "Hi");

	setTimeout(pushChat, 5000, "FAInfo");	
	
	$(".kidMood").click(function () {

		pushChat("kidmood");

	});
	
	$(".weatherAlert").click(function () {

		pushChat("weather alert");

	});
	
	$(".screenTime").click(function () {

		pushChat("screen time");

	});
	
});

$(function () {
	var b = $("#faButton");
	b.click(function () {

		pushChat("FA button");

	});
});

// Initialize the Amazon Cognito credentials provider
AWS.config.region = 'us-east-1'; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
		IdentityPoolId: 'us-east-1:7d27a1ae-f707-498f-9768-340e18fbc5b4',
	});

var lexruntime = new AWS.LexRuntime();
var lexUserId = 'VA-demo' + Date.now();
var sessionAttributes = {};

function pushChat(greetText) {
	console.log(greetText);
	// if there is text to be sent...
	var wisdomText = document.getElementById('wisdom');
	if (wisdomText && wisdomText.value == "") {
		wisdomText.value = greetText;
	}
	if (wisdomText && wisdomText.value && wisdomText.value.trim().length > 0) {
		// disable input to show we're sending it
		var wisdom = wisdomText.value.trim();
		//wisdomText.value = '...';
		wisdomText.locked = true;

		// send it to the Lex runtime
		var params = {
			botAlias: '$LATEST',
			botName: 'Virtual_Assistant',
			inputText: wisdom,
			userId: lexUserId,
			sessionAttributes: sessionAttributes
		};
		//showRequest(wisdom);
		lexruntime.postText(params, function (err, data) {
			if (err) {
				console.log(err, err.stack);
				showError('Error:  ' + err.message + ' (see console for details)')
			}
			if (data) {
				// capture the sessionAttributes for the next cycle
				sessionAttributes = data.sessionAttributes;
				// show response and/or error/dialog status
				showResponse(data);
			}
			// re-enable input
			wisdomText.value = '';
			wisdomText.locked = false;
		});
	}

	// we always cancel form submission
	return false;
}

function hideChat() {
	$("#conversation").hide();
}

function showRequest(daText) {

	var conversationDiv = document.getElementById('conversation');
	var requestPara = document.createElement("P");
	requestPara.className = 'userRequest';
	requestPara.appendChild(document.createTextNode(daText));
	conversationDiv.appendChild(requestPara);
	conversationDiv.scrollTop = conversationDiv.scrollHeight;
}

function showError(daText) {

	var conversationDiv = document.getElementById('conversation');
	var errorPara = document.createElement("P");
	errorPara.className = 'lexError';
	errorPara.appendChild(document.createTextNode(daText));
	conversationDiv.appendChild(errorPara);
	conversationDiv.scrollTop = conversationDiv.scrollHeight;
}

function showResponse(lexResponse) {

	var conversationDiv = document.getElementById('conversation');
	if (conversationDiv.firstChild !== null) {

		conversationDiv.firstChild.remove();
	}
	var responsePara = document.createElement("li");
	responsePara.className = 'callouts--right';
	if (lexResponse.message) {
		console.log(lexResponse);
		responsePara.innerHTML = lexResponse.message + "<br/>";
		// responsePara.appendChild(document.createElement('br'));
	}

	if (lexResponse.responseCard && lexResponse.intentName == "UnmrMood") {
		$("#dynamic_va").attr("src", "assets/tt/enjoy.gif");
		var resCards = lexResponse.responseCard.genericAttachments;
		$.each(resCards, function (index, card) {
			var buttons = card.buttons;
			var buttonContainer = document.createElement("div");
			buttonContainer.setAttribute("style", "text-align:center; padding-top:5px;");
			$.each(buttons, function (index, data) {
				console.log(data);
				var image = document.createElement("img");
				image.setAttribute("src", "assets/" + data.value + ".png");
				image.setAttribute("style", "width:30px;height:30px;margin-right:20px;cursor:pointer");
				var resData = data.value;
				image.setAttribute("onclick", "pushChat('" + resData + "')");
				buttonContainer.appendChild(image);
			});
			responsePara.appendChild(buttonContainer);
		});
	}

	if (lexResponse.responseCard && (lexResponse.intentName == "tiredKid" || lexResponse.intentName == "FA_Button")) {
		if (lexResponse.intentName == "tiredKid") {
			$("#dynamic_va").attr("src", "assets/tt/tired.gif");
		}
		if (lexResponse.intentName == "FA_Button") {
			$("#dynamic_va").attr("src", "assets/tt/quest.gif");
		}
		var resCards = lexResponse.responseCard.genericAttachments;
		$.each(resCards, function (index, card) {
			var buttons = card.buttons;
			var buttonContainer = document.createElement("div");
			buttonContainer.setAttribute("style", "text-align:center; padding-top:5px;");
			$.each(buttons, function (index, data) {
				console.log(data);
				var button = document.createElement("button");
				//button.setAttribute("style", "width:70px;height:30px;margin-right:5px;cursor:pointer;font-size:12px;");
				button.setAttribute("class", "button");
				button.innerHTML = data.text;
				button.setAttribute("value", data.value);
				var resData = data.value;
				button.setAttribute("onclick", "pushChat('" + resData + "')");
				buttonContainer.appendChild(button);
			});
			responsePara.appendChild(buttonContainer);
		});
	}

	if (lexResponse.responseCard && lexResponse.intentName == "ScreenTimeAlert") {
		$("#dynamic_va").attr("src", "assets/tt/screentime.gif");
		var resCards = lexResponse.responseCard.genericAttachments;
		$.each(resCards, function (index, card) {
			var buttons = card.buttons;
			var buttonContainer = document.createElement("div");
			buttonContainer.setAttribute("style", "text-align:center; padding-top:5px;font-size:12px;");
			$.each(buttons, function (index, data) {
				console.log(data);
				var button = document.createElement("button");
				if (data.value == "Ignore") {
					button.setAttribute("class", "buttonRed");
				} else if (data.value == "Remind") {
					button.setAttribute("class", "buttonYellow");
				} else {
					//button.setAttribute("style", "width:70px;height:30px;margin-right:5px;cursor:pointer;font-size:12px;");
					button.setAttribute("class", "button");
				}
				button.innerHTML = data.text;
				button.setAttribute("value", data.value);
				var resData = data.value;
				button.setAttribute("onclick", "pushChat('" + resData + "')");
				buttonContainer.appendChild(button);
			});
			responsePara.appendChild(buttonContainer);
		});
	}

	if (lexResponse.slots.kidMood && lexResponse.slots.kidMood == "happy") {
		$("#dynamic_va").attr("src", "assets/tt/happy.gif");
	}

	if (lexResponse.slots.kidMood && lexResponse.slots.kidMood == "unhappy") {
		$("#dynamic_va").attr("src", "assets/tt/sad.gif");
	}

	if (lexResponse.slots.kidAction && lexResponse.slots.kidAction == "Lock") {
		$("#dynamic_va").attr("src", "assets/tt/gift.gif");
	}

	if (lexResponse.slots.kidAction && lexResponse.slots.kidAction == "Remind") {
		$("#dynamic_va").attr("src", "assets/tt/ok.gif");
	}

	if (lexResponse.slots.kidAction && lexResponse.slots.kidAction == "Ignore") {
		$("#dynamic_va").attr("src", "assets/tt/no.gif");
	}

	if (lexResponse.slots.faCallType && (lexResponse.slots.faCallType == "Coffee" || lexResponse.slots.faCallType == "Water")) {
		$("#dynamic_va").attr("src", "assets/tt/eat.gif");
	}

	if (lexResponse.slots.faCallType && lexResponse.slots.faCallType == "Others") {
		$("#dynamic_va").attr("src", "assets/tt/run.gif");
	}

	if (lexResponse.slots.serveJuice && lexResponse.slots.serveJuice == "YES") {
		$("#dynamic_va").attr("src", "assets/tt/eat.gif");
	}

	if (lexResponse.slots.serveJuice && lexResponse.slots.serveJuice == "NO") {
		$("#dynamic_va").attr("src", "assets/tt/ok.gif");
	}

	if (lexResponse.intentName == "WeatherAlert") {
		$("#dynamic_va").attr("src", "assets/tt/cold.gif");
	}

	conversationDiv.appendChild(responsePara);
	conversationDiv.scrollTop = conversationDiv.scrollHeight;

	$(".v_assistant").show();
}
