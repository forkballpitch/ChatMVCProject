function Poll() {
	var allow = true;
	this.start = function start(poll) {
//		setInterval(function() {
//			if (allow === true) {
//				allow = false;
				getUpdate(poll);
//			}
//		}, 500);
	};
	
	function getUpdate(poll) {

		console.log("Okay let's go..."+poll);
		
		// fire off the request to MatchUpdateController
		var request = $.ajax({
			url : poll,
			dataType : "jsonp",
		    jsonp : "callback"
//			type : "get"
		});

		// This is jQuery 1.8+
		// callback handler that will be called on success
		request.done(function(message) {
			console.log("Received a message");
			
			var update = setUpdate(message);
//			$(update).insertAfter('#first_row');
		});
		
		function setUpdate(message) {

			if (message.type == 1) {
				$('#mailCount').text(message.newCount);
			}
			else if (message.type == 2) {
				$('#approvalCount').text(message.newCount);
			}
			else if (message.type == 3) {
				$('#snsCount').text(message.newCount);
			}
		};
		

		// callback handler that will be called on failure
		request.fail(function(jqXHR, textStatus, errorThrown) {
			// log the error to the console
			console.log("Polling - the following error occured: " + textStatus, errorThrown);
		});

		// callback handler that will be called regardless if the request failed or succeeded
		request.always(function() {
			getUpdate(poll);
//			allow = true;
		});
	};	
};