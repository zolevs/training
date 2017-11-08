$(function(){
			('#accordion h3').click(function(){
				// close all open accordian
				$(this).parent().parent().find('ul').slideUp();
				// text
				if(!$(this).next().is(":visible")){
					$(this).next().slideDown();
				}
			});
		});
