(function(root){
	
	var ChatApp = root.ChatApp = (root.ChatApp || {});
	var socket = io.connect();
	
	$(document).ready(function(){
		var chatApp = new ChatApp.Chat(socket)
		
		socket.on("message", function(message){
			$(".message-display").append(message.text)
			$(".message-display").append("<br>")
		})
		
		$(".message-form").submit(function(event){
			event.preventDefault();
			chatApp.sendMessage($("#message").val())
			$("#message").val("")
		})
	})
		
})(this)







