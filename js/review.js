//observer for graph animation
options = {
  threshold: .5
}
function scrollTrigger(selector){
  let entries = document.querySelectorAll(selector)
  entries = Array.from(entries)
  entries.forEach(entry => {
      addObserver(entry)
  })
}

function addObserver(el){
  let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if(entry.isIntersecting){
              entry.target.classList.add('active');
              return;
          }
      entry.target.classList.remove('active')
      })
  }, options)
  observer.observe(el)
}
scrollTrigger('.graph')

//filter for people who don't want animation
const isReduced = window.matchMedia(`(prefers-reduced-motion: reduce)`) === true || window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true;

if(isReduced !== true){
  circlethings('circle-things-colorful');
  createDash_Offset("arc11");
  createDash_Offset("arc21");
  createDash_Offset("arc31");
  createDash_Offset("arc41");
  createDash_Offset('docs');
createDash_Offset('masters');
createDash_Offset('unders');
}

//header animation
function circlethings(id){
  let circle_container = document.getElementById(id);
  for (var i = 0; i < 50; i++) {
      
      let div = document.createElement("div");
      let classname = "c"+i;
      div.classList.add("circle-container", classname);
      circle_container.append(div)
      let classname2 = "i"+i
      let innerdiv = document.createElement("div")
      innerdiv.classList.add("circle", classname2)
      div.append(innerdiv)
      innerdiv.style.animationDelay = '.'+ i +'s';
  }
}


function getPathLength(id){
  p = document.getElementById(id)
  return p.getTotalLength();
}


function createDash_Offset(id){
  let x = getPathLength(id);
  document.getElementById(id).style.strokeDashoffset = x;
  document.getElementById(id).style.strokeDasharray = x;
}




function separateCharacters(id){
  let text = document.getElementById(id);
  let newDom = '';
  for(let i = 0; i < text.innerText.length; i++){
      newDom += '<span class="char">' + (text.innerText[i] == ' ' ? '&nbsp;' : text.innerText[i])+ '</span>';
  }
  text.innerHTML = newDom;
}
separateCharacters('line1');
separateCharacters('line2');
separateCharacters('line3');
  
function calculateDelay(id, offsetnum){
  let text = document.getElementById(id)
  let x = text.children.length;
  let animationDelay = 6;
  let offset = offsetnum;
  for(let i = 0; i < x; i++)
  {
      j = i+offset
      text.children[i].style['animation-delay'] = animationDelay * j + 'ms';
  }
}
calculateDelay('line1', 0);
calculateDelay('line2', 15);
calculateDelay('line3', 30);

//graph 3 animation
function delayCircles(){
  let circles = document.querySelectorAll('.graph3 svg circle');
  for(let i = 0; i<circles.length; ++i){
    let delay = 10 * i;
    circles[i].style['animation-delay'] = delay+'ms';
  }
}
delayCircles();