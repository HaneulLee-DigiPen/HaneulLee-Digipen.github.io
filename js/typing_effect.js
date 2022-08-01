const $typing_effect = document.querySelector(".typing_effect");

const letters = ["C++", "C", "C#", "HTML", "CSS", "JavaScript"];

const speed = 100;
let i = 0;

const typing = async () => {  
  const letter = letters[i].split("");

  while (letter.length) {
    await wait(speed);
    $typing_effect.innerHTML += letter.shift(); 
  }
  
  await wait(800);
  
  if (letters[i]) remove();
}

const remove = async () => {
  const letter = letters[i].split("");
  
  while (letter.length) {
    await wait(speed);
    
    letter.pop();
    $typing_effect.innerHTML = letter.join(""); 
  }
  
  i++;
  if(i > letters.length - 1)
    i = 0;

  typing();
}

// 딜레이 기능 ( 마이크로초 )
function wait(ms) {
  return new Promise(res => setTimeout(res, ms))
}

// 초기 실행
setTimeout(typing, 1500);