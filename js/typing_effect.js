var typingBool = false; 
var typingIdx=0; 
var liIndex = 0;
var liLength = $(".typing-txt>ul>li").length;
var del = -1;
var repeatInt= null;
var tyInt = null;


// 타이핑될 텍스트를 가져온다 
var typingTxt = $(".typing-txt>ul>li").eq(liIndex).text(); 

typingTxt=typingTxt.split(""); // 한글자씩 자른다. 

if(typingBool==false){ 
  // 타이핑이 진행되지 않았다면 
    typingBool=true; 
    tyInt = setInterval(typing,200); // 첫번재 반복동작 
} 
     
function typing(){ 
  if(typingIdx<typingTxt.length){ 
    // 타이핑될 텍스트 길이만큼 반복 
   $(".typing").append(typingTxt[typingIdx]); 
    // 한글자씩 이어준다. 
     typingIdx++; 
    if(typingIdx == typingTxt.length){
      //첫번째 단어가 써지면 1분쉰다.
        clearInterval(tyInt);
         setTimeout(function(){
           tyInt = setInterval(typing,200);
         },1000);
       }
   } else{ 
     
     //한문장이끝나면
       if(-typingTxt.length-1 < del ){
         //한글자씩 지운다.
          $(".typing").html(typingTxt.slice(0, del))
          del--;
       }else{
         if(liIndex >= liLength-1){
              liIndex=0;
         }else{
           liIndex++;
         }
         
         //변수초기화 
         typingIdx=0;
         del= -1;
         typingTxt = $(".typing-txt>ul>li").eq(liIndex).text(); 
         
         //1분후 다음분장 타이핑 
         clearInterval(tyInt);
         setTimeout(function(){
           tyInt = setInterval(typing,200);
         },1000);
       }
     

    } 
}  