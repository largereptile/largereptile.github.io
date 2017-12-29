window.onload = function(){
	var sound1 = new Howl({
      src: ['assets/perfect.ogg']
    });
	var sound2 = new Howl({
      src: ['assets/look.ogg']
    });
	
	var sounds = [sound1, sound1, sound1, sound2];
	/* I'm sorry */
	
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
		} else {
			img.src = "assets/zola.png";
			golden++;
		};
		img.style.top = y - 197 + "px",
		img.style.left = x - 143 + "px";
		img.draggable = false,		 
		img.ondragstart = function() {
		      return false;
		 }
		body.appendChild(img);
		sounds[Math.floor(Math.random()*4)].play()
        });
    };
