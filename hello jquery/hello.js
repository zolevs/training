// JS for hello jquery

$(function() {
	$("#actionBtn").click(
		function (){
			$("#mytext").html($("#myinput").val());
		});

});
