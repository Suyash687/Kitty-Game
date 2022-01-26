/*function menu(){
    let bar2 = document.querySelector(".bar2");
    if (bar2.style.opacity != "0") {
        bar2.style.opacity = "0";
        
        let bar1 = document.querySelector(".bar1");
        bar1.style.transform =" rotate(-43deg) translate(-2px, 12px) "
        
        let bar3 = document.querySelector(".bar3");
        bar3.style.transform = "rotate(41deg) translate(1px, -12px) "
    }else if(bar2.style.opacity = "0"){
        let bar1 = document.querySelector(".bar1");
        bar1.style.transform =" rotate(0deg) translate(0px, 0px) "
        let bar2 = document.querySelector(".bar2");
        bar2.style.opacity = "1";
        let bar3 = document.querySelector(".bar3");
        bar3.style.transform = "rotate(0deg) translate(0px, 0px) "
        
    }
    
} */

score = 0;
cross = true;
loop = true;

music = new Audio("music.wav");
gameover = new Audio("gameover.wav");
jump = new Audio("jump.wav");

if (loop) {
  mus();
}
function mus() {
  setInterval(() => {
    music.play();
  }, 900);
}

document.onkeydown = function (e) {
  console.log("key code :", e.keyCode);
  if (e.keyCode == 38) {
    cat = document.querySelector(".player");
    cat.classList.add("animateplayer");
    setTimeout(() => {
      cat.classList.remove("animateplayer");
    }, 500);
    jump.play();
  }
  if (e.keyCode == 39) {
    cat = document.querySelector(".player");
    catx = parseInt(
      window.getComputedStyle(cat, null).getPropertyValue("left")
    );
    cat.style.left = catx + 100 + "px";
  }
  if (e.keyCode == 37) {
    cat = document.querySelector(".player");
    catx = parseInt(
      window.getComputedStyle(cat, null).getPropertyValue("left")
    );
    cat.style.left = catx - 100 + "px";
  }
};

setInterval(() => {
  cat = document.querySelector(".player");
  gover = document.querySelector(".gover");
  obstacle = document.querySelector(".obstacle");

  dx = parseInt(window.getComputedStyle(cat, null).getPropertyValue("left"));
  dy = parseInt(window.getComputedStyle(cat, null).getPropertyValue("top"));

  ox = parseInt(
    window.getComputedStyle(obstacle, null).getPropertyValue("left")
  );
  oy = parseInt(
    window.getComputedStyle(obstacle, null).getPropertyValue("top")
  );

  offsetx = Math.abs(dx - ox);
  offsety = Math.abs(dy - oy);

  if (offsetx < 150 && offsety < 27) {
    gover.style.visibility = "visible";
    obstacle.classList.remove("obstacleanim");
    cross = false;
    gameover.play();
    setTimeout(() => {
      music.pause();
      loop = false;
    }, 1000);
  } else if (offsetx < 200 && cross) {
    score += 10;
    update(score);
    cross = false;
    setTimeout(() => {
      cross = true;
    }, 1000);
  }
}, 100);

function update(score) {
  scor = document.getElementById("score");
  scor.innerHTML = "your score is :" + score;
}
