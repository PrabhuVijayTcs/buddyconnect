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

function SubmitReview(review,rating,counter){
	
	counter= Math.floor(Math.random() * 90 + 10)
	$.post("https://app.guudjob.com/guudjob_api/v2/profiles/26345/rates?client_id=DHbzaIyxMo7b_csCgiB5dQ&token=pmVu-6nGXMLyxZgGyRfqzCnGwHjwJ97j_4Awb_cmU88",
    {
"user":{
"name": "Jackie"+counter,
"surname": "Jonejs"+counter,
"email": "test"+counter+"@test.com"
},
"rating": {
"comment": review,
"value": rating
}

},
    function(resp,status){
      console.log("Response: " + JSON.stringify(resp) + "\nStatus: " + status);
    });
}

function GetFlightStatus(fltNo,date){
	
	$("#container").load("http://www.google.com");
var xmlHTTP = new XMLHttpRequest();
    xmlHTTP.open('GET','https://flightfollower-qa.api.aero/flightfollower/v1/SEA/JFK/DL/1120?imgWidth=650&imgLength=300&imgType=gif&rfc2397=false&base64=false',true);
	xmlHTTP.setRequestHeader("x-apiKey", "84d718b8a9bd60d1bfe79122d3770870")
    // Must include this line - specifies the response type we want
    xmlHTTP.responseType = 'arraybuffer';

    xmlHTTP.onload = function(e)
    {

        var arr = new Uint8Array(this.response);


        // Convert the int array to a binary string
        // We have to use apply() as we are converting an *array*
        // and String.fromCharCode() takes one or more single values, not
        // an array.
        var raw = String.fromCharCode.apply(null,arr);

        // This works!!!
        var b64=btoa(raw);
        var dataURL="data:image/jpeg;base64,"+b64;
        document.getElementById("map-tracker").src = dataURL;
    };

    xmlHTTP.send();
}