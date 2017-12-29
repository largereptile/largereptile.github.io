window.onload = function(){
	var sound1 = new Howl({
      src: ['assets/perfect.ogg']
    });
	var sound2 = new Howl({
      src: ['assets/look.ogg']
    });
	
	var card = "assets/zola.png";
	var gold = "assets/zola.gif";
	
	var golden = 0;
    
    var body = document.querySelector('#main');
	body.addEventListener("click", function(evt){
		var x = evt.clientX, y = evt.clientY;
		img = document.createElement("img");
		img.className = "card";
		if (golden) {
			img.src = "assets/zola.gif";
			sound1.play();
		} else {
			img.src = "assets/zola.png";
			sound2.play();
			golden++;
		};
		img.style.top = y - 197 + "px",
		img.style.left = x - 143 + "px";
		img.draggable = false,		 
		img.ondragstart = function() {
		      return false;
		 }
		body.appendChild(img);
        });
    };
