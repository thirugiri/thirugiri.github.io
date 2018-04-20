$(document).ready(function(){
	$("#landing").scrollTop($('#landing').height())
	$("form").submit(function(event){
		event.preventDefault();
		switch($("input:text").val()){
			case "aboutme":
				$("#terminal").append("<div class='new'><p><span class='green-text'>user@mycomputer: </span><span class='command'>"+$("input:text").val()+"</span></p><p class='terminal_line'>Executing command..</p><p class='terminal_line'>Opening About page :)</p></div>");
				window.open('about.html','_blank');
				break;
			case "skills":
				$("#terminal").append("<div class='new'><p class='terminal_line'><span class='green-text'>user@mycomputer: </span><span class='command'>"+$("input:text").val()+"</span></p><p class='terminal_line'>Executing command..</p><p class='terminal_line'>Opening Skills page :)</p></div>");
				window.open('skills.html','_blank');
				break;
			case "portfolio":
				$("#terminal").append("<div class='new'><p><span class='green-text'>user@mycomputer: </span><span class='command'>"+$("input:text").val()+"</span></p><p class='terminal_line'>Executing command..</p><p class='terminal_line'>Opening Portfolio page :)</p></div>");
				break;
			case "contact":
				$("#terminal").append("<div class='new'><p><span class='green-text'>user@mycomputer: </span><span class='command'>"+$("input:text").val()+"</span></p><p class='terminal_line'>Executing command..</p><p class='terminal_line'>Opening About Contact :)</p></div>");
				break;
			case "clear":
				$(".new").remove();
				break;
			default:
				$("#terminal").append("<div class='new'><p><span class='green-text'>user@mycomputer: </span><span class='command'>"+$("input:text").val()+"</span></p><p class='terminal_line'>Executing command..</p><p class='terminal_line'>Sorry Invalid command :(</p></div>");
				return false;		
		}
		
		
	});
	 
  
});
