$(document).ready(function(){
	
	var count = 0;
	
	var stopPollingFunc = function(){
		$.ajaxPollSettings.pollingType = "interval";
        $.ajaxPollSettings.interval = 0;
        $.ajaxPollSettings.maxInterval = 0;
		$.ajaxPollSettings.durationUntilMaxInterval = 0;
		$.setAjaxOptions();
	};
	
	var successFunc = function( result ){
		count = count + 1;
		var currentVal = $("#response").attr("value");
		currentVal = currentVal + count;
		$("#response").attr("value", currentVal);
	};
	
	var ajaxPollFunc = function(){
		$.ajaxPollSettings.pollingType = "interval";
        $.ajaxPollSettings.interval = 5000;
        $.ajaxPollSettings.maxInterval = 5000;
		$.ajaxPollSettings.durationUntilMaxInterval = 6000;
		var urlValue = '/JSONServlet/JSONServlet';
		var values = { };
		values['count1'] = 'count2';
		
        $.ajaxPoll({
         url: urlValue,
         type: 'POST',
         data:values,
         dataType: 'json',
         successCondition: function( result ){
        	successFunc(result); 
         },
         success: function(result) {        	         	 
         },
         error: function(){
        	 alert('Ajax readyState: ');
         }
       });	
	};
	
	$("#start").click(function(){
		ajaxPollFunc();

    });

    $("#stop").click(function(){
    	stopPollingFunc();
    }); 
    
    $("#submit").click(function(){
    	alert('abc');
    });      
});
