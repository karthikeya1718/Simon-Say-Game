let gameseq = [];
let userseq = [];
let btns = ["yellow", "red", "purple", "green"];
let started = false;
let level = 0;
let highscore = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("Game started");
    started = true;
    levelup();
  }
});

function levelup() {
  userseq = [];
  level++;
  h2.innerText = `Level ${level}`;

  let randidx = Math.floor(Math.random() * btns.length);
  let randcolor = btns[randidx];
  let randbtn = document.querySelector(`.${randcolor}`);
  //   console.log(randidx);
  //   console.log(randcolor);
  //   console.log(randbtn);
  gameseq.push(randcolor);
  console.log(gameseq);
  gameflash(randbtn);
}

function gameflash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 200);
}

function userflash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 200);
}

function checkans(idx) {
  if (userseq[idx] == gameseq[idx]) {
    if (userseq.length == gameseq.length) {
      setTimeout(levelup, 1000);
    }
  } else {
    if (level > highscore) {
      highscore = level;
      h2.innerHTML = `Game over! Your Score was <b>${level}</b>, Your highest score was <b>${level}</b> <br> press any key to start`;
    } else {
      h2.innerHTML = `Game over! Your Score was <b>${level}</b> Your highest score was <b>${highscore}</b> <br> press any key to start`;
    }
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 150);
    reset();
  }
}
function btnpress() {
  let btn = this;
  userflash(btn);

  usercolor = btn.getAttribute("id");
  console.log(usercolor);
  userseq.push(usercolor);
  //   console.log(userseq);
  checkans(userseq.length - 1);
}

let allbtns = document.querySelectorAll(".btn");

for (btn of allbtns) {
  btn.addEventListener("click", btnpress);
}

function reset() {
  started = false;
  userseq = [];
  gameseq = [];
  level = 0;
}
