const hearts = [];
const pinks = ["#ff748c", "#ff8da1", "#ffa7b6"];

class Heart {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.theta = Math.random() * Math.PI * 2;
    const heartEl = document.createElement("div");
    heartEl.classList.add("heart");
    document.body.append(heartEl);
    const color = pinks[parseInt(Math.random() * pinks.length)];
    heartEl.style.background = color;
    
    const heartLeftEl = document.createElement("div");
    heartLeftEl.classList.add('left');
    heartLeftEl.style.background = color;
    heartEl.appendChild(heartLeftEl);
    
    const heartRightEl = document.createElement("div");
    heartRightEl.classList.add('right');
    heartRightEl.style.background = color;
    heartEl.appendChild(heartRightEl);
    
    this.el = heartEl;
    
    setTimeout(() => {
      this.el.remove();
      this.hearts.splice(this.hearts.indexOf(this));
    }, 10000)
  }

  update() {
    this.x += Math.cos(this.theta) * 1;
    this.y += 1;
    this.theta += 0.01;
    this.el.style.left = `${this.x}px`;
    this.el.style.top = `${this.y}px`;
  }
}


setInterval(() => {
  hearts.forEach((heart) => heart.update());
}, 10);


function noBtn() {  
  sadCats =[
    "img/wutCat.gif",
    "img/sadCat.gif",
    "img/bananaCat.gif",
    "img/angryCat.gif",
    "img/weirdCat.gif",
    "img/sadCat1.gif",
    "img/dissapCat.gif",
    "img/pizzaCat.gif",
    "img/madCat.gif",
    "img/angCat.gif",
    "img/indCat.gif",
    "img/susCat.gif",
    "img/sadCat2.gif",
    "img/madCat1.gif",
    "img/drunkCat.gif",
    "img/noCat.gif",
    "img/crazyCat1.gif",
    "img/boredCat.gif",
    "img/sadgeCat.gif",
    "img/angryCat2.gif",
    "img/angryCat3.gif",
    "img/cryingCat.gif",
    "img/fatCat.gif",
    "img/shockCat.gif",
  ];
  document.getElementById("catImage").src = sadCats[getRandomInt(sadCats.length)];
  answers = [
    "Como que no?",
    "Di que si",
    "Vuelve a escoger",
    "Respuesta equivocada",
    "Intenta de nuevo",
    "Nope",
    "De nuevo",
    "Pon que si",
    "Boton equivocado",
    "Es el otro boton",
    "No es esa la respuesta",
    "Reconsidera tu elección",
    "Error, inténtalo otra vez",
    "Negativo",
    "Escoge otra vez",
    "Respuesta incorrecta",
    "Prueba de nuevo",
    "Error, elige otra vez",
    "No, esa no es la respuesta",
    "Vuelve a intentarlo",
    "¡Incorrecto!",
    "No es esa la opción",
    "Vuelve a seleccionar",
    "Elige de nuevo",
    "¡Error! Vuelve a intentarlo",
    "Eso no es lo que quieres",
    "Yo se que si quieres",
    "Como tu dices: me caes mal",
    "Nope, ya te cansaste?",
    "Por que pusiste que no?",
    "Todo mal",
    "Ya no me quieres?",
    "Como que no?",
    "Todo bien"
  ];
  document.getElementById("respuestas").innerHTML = answers[getRandomInt(answers.length)];
}

function yesBtn() {
  document.getElementById("catImage").src = "img/yesCat.gif";
  document.getElementById("pregunta").style.display = "none";
  document.getElementById("btn-container").style.display = "none";
  document.getElementById("respuestas").innerHTML = "Hay muchas maneras de decirte te amo, pero no las suficientes palabras para explicarte cuánto te amo. <br>Feliz San Valentin amor ❤❤"  
  setInterval(() => {
    const heart = new Heart(Math.random() * window.innerWidth, -100);
    hearts.push(heart);
  }, 200);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}