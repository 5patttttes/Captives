setTimeout(function(){
	$("#main").css("animation", "fadeout 2s linear");
	setTimeout(function(){
		$("#main").css("animation", "");
		$("#main").removeClass("bug");
		$("#main").addClass("phonecall");
		var audio = new Audio('ringtone.mp3');
		audio.volume = 1;
		audio.loop = true;
		audio.play();
		$(window).click(function() {
			document.location.href="chat.html";
		});
	}, 4000);
}, 3000);