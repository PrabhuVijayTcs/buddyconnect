$(document).ready(function () {
	/* var text ="Yesterday's match was too good, but the result was not what i expected";
	var resp = AnalyseSentiment(text);
	console.log("resp"+ resp); */
});



// Initialize the Amazon Cognito credentials provider
AWS.config.region = 'us-east-1'; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'us-east-1:5a3f5112-e67e-4075-bb6f-005e09cfd425',
});

var comprehend = new AWS.Comprehend();

var langCode ="en";

function AnalyseSentiment(comment,counter){

		// send it to the Lex runtime
		var params = {
			Text: comment,
			LanguageCode: 'en'
		};
		
		var responseTxt = "";
		comprehend.detectSentiment(params, function (err, data) {
			if (err) {
				console.log(err, err.stack);
				
			}
			if (data) {
				// show response and/or error/dialog status
				console.log(data);
				$(".SentimentData_"+counter +" img").attr("src", "assets/img/"+ data.Sentiment.toLowerCase() + ".jpg");
				$(".SentimentData_"+counter +" span").html("&nbsp;&nbsp;"+data.Sentiment.toLowerCase() + " Review");
			}
			
		});
}


function sendResponse(data){
	return data.Sentiment;
}