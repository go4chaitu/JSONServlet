$(document).ready(function(){
	$(".home").click(function(){
		$(".home_body").fadeIn();
		$(".context_body").fadeOut();
		$(".notification_body").fadeOut();
		$(".home").addClass("active");
		$(".context").removeClass("active");
		$(".notifications").removeClass("active");
	});
	$(".context").click(function(){
		$(".home_body").fadeOut();
		$(".context_body").fadeIn();
		$(".notification_body").fadeOut();
		$(this).toggleClass("active");
		$(".home").removeClass("active");
		$(".context").addClass("active");
		$(".notifications").removeClass("active");
	});
	$(".notifications").click(function(){
		$(".home_body").fadeOut();
		$(".context_body").fadeOut();
		$(".notification_body").fadeIn();		
		$(".home").removeClass("active");
		$(".context").removeClass("active");
		$(".notifications").addClass("active");
	});
	$("#social_dialog").hide();
		
	$(".objects").click(open_dialog);	
	$("#close_window").click(function(){	
		$('#social_dialog').slideDown();
		$('#social_dialog').fadeOut();
		var result = displayResult();
		$('#todayposts').after(result);
		$(".posts_row").click(open_dialog);
	});	
	
	function displayResult1()
	{
		return $('<li class=\"posts_row\"><div class=\"age\"></div><div class=\"profile\"><div class=\"picture\"></div><div class=\"name\">Chaitanya Saragadam</div></div><div class=\"message\">Students are busy people. Many aretrying to balance a full course load, extracurricularactivities, an on- or off-campus job, and relationships withfamily and friends. Competing responsibilities require them toprioritize, and students are not likely to invest much time orenergy in something for which they see little long-termsignificance.</div><div class=\"submenu\"><ul><li class=\"tooltip_comment\"></li><li class=\"tooltip_attch\"></li><li class=\"tooltip_people\"></li></ul></div><div class=\"handle\"></div></li>');
	}
	function loadXMLDoc(dname)
	{
		if (window.XMLHttpRequest)
		  {
		  xhttp=new XMLHttpRequest();
		  }
		else
		  {
		  xhttp=new ActiveXObject("Microsoft.XMLHTTP");
		  }
		xhttp.open("GET",dname,false);
		xhttp.send("");
		return xhttp.responseXML;
	}
	function displayResult()
	{
		var resultDoc = "";
		xml=loadXMLDoc("../dataXml/source.xml");
		xsl=loadXMLDoc("../xsl/posts.xml");
		// code for IE
		if (window.ActiveXObject)
		  {
			resultDoc=xml.transformNode(xsl);
		  //document.getElementById("example").innerHTML=ex;
		  }
		// code for Mozilla, Firefox, Opera, etc.
		else if (document.implementation && document.implementation.createDocument)
		  {
		  xsltProcessor=new XSLTProcessor();
		  xsltProcessor.importStylesheet(xsl);
		  resultDoc = xsltProcessor.transformToFragment(xml,document);
		  //document.getElementById("example").appendChild(resultDocument);
		  }
		return resultDoc;
	}	
	$(".posts_row").click(open_dialog);
	$(".posts").click(post_message);
	$('#social_dialog').draggable( {containment: ".ppm_header_social_body", scroll: false} ).resizable();
	
	function open_dialog(){
		$('#social_dialog').slideUp();
		$('#social_dialog').fadeIn();
	}	
	
	function post_message(){		
		var msg = $(".post-box").text();
		msg = msg.replace(/^\s+|\s+$/g,'');
		if( msg.length == 0 ) return;	
		$(".post-box").text('');
		var age = "few secs ago";
		var name = "Chaitanya Saragadam";
		var newPost = $('<li class=\"posts_row\"><div class=\"age\">'+age+'</div><div class=\"profile\"><div class=\"picture\"></div><div class=\"name\">'+name+'</div></div><div class=\"message\">'+msg+'</div><div class=\"submenu\"><ul><li class=\"tooltip_comment\"></li><li class=\"tooltip_attch\"></li><li class=\"tooltip_people\"></li></ul></div><div class=\"handle\"></div></li>');
		$('#todayposts').after(newPost);
		$(".posts_row").click(open_dialog);
		//alert( $(".post-box").text() );
	}
});