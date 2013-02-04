$(document).ready(function(){
	var autoRefresh = true;
	$("#start").click(function(){
	
		function recursiveAjax(){
		  if (autoRefresh) {

		    $.ajax( {
		      async : true,
		      url : '/JSONServlet/JSONServlet',
		      dataType : 'json',
		      error : function(xhr, ajaxOptions, thrownError) {
		        // handle errors
		      },
		      success : function(result) {
		        //conditions
		    	$("#response").attr("value", result);
		        recursiveAjax();
		      },
		      timeout: 5000
		    });
		  }
		}
		recursiveAjax();
	});
	$("#stop").click(function(){
		autoRefresh = false;
	});
});