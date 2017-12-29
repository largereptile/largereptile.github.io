window.onload = function(){
	var sound = new Howl({
      src: ['assets/do_you_want_to_cast_a_spell.ogg']
    });
    
    var body = document.querySelector('#main');
	body.addEventListener("click", function(evt){
		var x = evt.clientX, y = evt.clientY;
		img = document.createElement("img");
		img.className = "card"
		img.src = "assets/book.png",
		img.style.top = y - 197 + "px",
		img.style.left = x - 143 + "px";
		img.draggable = false,		 
		img.ondragstart = function() {
		      return false;
		 }
		body.appendChild(img);
		sound.play();
        });
    };
