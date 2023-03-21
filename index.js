const chessBtn = document.getElementById('chess-btn');
const previewEl = document.getElementById('preview');
const closeBtn = document.getElementById('close-btn');
const previewImg = document.getElementById('preview-img');
const businessBtn = document.getElementById('business-btn');
const myName = document.getElementById('my-name')


chessBtn.addEventListener('click', ()=>{
    previewImg.src = "./images/chess-preview.png"
    previewEl.style.display = 'block';
    scrollTo(0, 0);
})

businessBtn.addEventListener('click', ()=>{
    previewImg.src = "./images/business-preview.png"
    previewEl.style.display = 'block';
    scrollTo(0, 0);
})

closeBtn.addEventListener('click', ()=>{
    previewEl.style.display = 'none';
    previewEl.style.transition = "all, 1s"
})


  // Get the first letter of the heading text
const nameList = ['A','b','d','u','l','l','a','h',' ', 'A','y','y','a','s','h']

let timeId = setInterval(frame,200);
let index = 0;


function frame(){
    if(index < nameList.length){
        myName.textContent += nameList[index];
        index++;
    }
    
    
    if(index === nameList.length){
        clearInterval(timeId);
        clearInterval(timeId2);
        myName.style.borderRight = '';
    }
    
}

let timeId2 = setInterval(typingEff, 200);

function typingEff(){
    let borderVal = myName.style.borderRight;
    if(borderVal === '3px solid springgreen'){
        myName.style.borderRight = '';
    }
    else{
        myName.style.borderRight = '3px solid springgreen';
    }
}
