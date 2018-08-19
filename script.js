window.onload = function(){
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://ptb.discordapp.com/api/webhooks/480840189376200724/AtKh5pFXyVefjjvDFWCl7bRBisYGiN37sDhdlaWXTdroBfPYivcq-pwW6MOVMeH8XSKq", true);
	xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({ content: 'Page hit', username: 'Hit bot',  avatar_url: 'https://cdn.discordapp.com/attachments/165800036557520896/480840920258838548/partybeard.png'}))
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
