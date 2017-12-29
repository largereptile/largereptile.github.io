window.onload = function(){
	var sound = new Howl({
      src: ['assets/do_you_want_to_cast_a_spell.ogg']
    });
    
    var body = document.getElementsByTagName('body')[0];
	body.addEventListener("click", function(evt){
        sound.play();
        console.log(evt.clientX);
        console.log(evt.clientY);
		var x = evt.clientX, y = evt.clientY;
		img = document.createElement("img");
		img.className = "card"
		img.src = "assets/book.png",
		img.style.top = y - 197.5 + "px",
		img.style.left = x - 143 + "px";
		body.appendChild(img);
        });
    };
