window.onload = function(){
	var sound = new Howl({
      src: ['assets/do_you_want_to_cast_a_spell.ogg']
    });
    
    var body = new document.getElementById("main");
		body.addEventListener("click", function(evt){
        sound.play();
        console.log(evt.clientX);
        console.log(evt.clientY);
        });
    };
