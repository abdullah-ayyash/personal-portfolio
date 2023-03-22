const chessBtn = document.getElementById('chess-btn');
const previewEl = document.getElementById('preview');
const closeBtn = document.getElementById('close-btn');
const previewImg = document.getElementById('preview-img');
const businessBtn = document.getElementById('business-btn');
const myName = document.getElementById('my-name');
const logoImg = document.getElementById('logo-img');

try {
    chessBtn.addEventListener('click', () => {
        previewImg.src = "./images/chess-preview.png"
        previewEl.style.display = 'block';
        scrollTo(0, 0);
    })

    businessBtn.addEventListener('click', () => {
        previewImg.src = "./images/business-preview.png"
        previewEl.style.display = 'block';
        scrollTo(0, 0);
    })

    closeBtn.addEventListener('click', () => {
        previewEl.style.display = 'none';
        previewEl.style.transition = "all, 1s"
    })


    // Get the first letter of the heading text
    const nameList = ['A', 'b', 'd', 'u', 'l', 'l', 'a', 'h', ' ', 'A', 'y', 'y', 'a', 's', 'h']

    let timeId = setInterval(frame, 200);
    let index = 0;


    function frame() {
        if (index < nameList.length) {
            myName.textContent += nameList[index];
            index++;
        }


        if (index === nameList.length) {
            clearInterval(timeId);
            clearInterval(timeId2);
            myName.style.borderRight = '';
        }

    }

    let timeId2 = setInterval(typingEff, 200);

    function typingEff() {
        let borderVal = myName.style.borderRight;
        if (borderVal === '3px solid springgreen') {
            myName.style.borderRight = '';
        }
        else {
            myName.style.borderRight = '3px solid springgreen';
        }
    }

    let newImagePreview = document.getElementById('preview-img');
    previewImg.onclick = () => {
        if (newImagePreview.style.scale !== '2') {
            newImagePreview.style.scale = '2';
            newImagePreview.style.cursor = 'zoom-out'
        }
        else {
            newImagePreview.style.scale = '1';
            newImagePreview.style.cursor = 'zoom-in'
        }
    }
}
catch (error) {
    console.log(error);
}
let timeId3 = setInterval(rotateImg, 20);

let deg = 0;
function rotateImg() {
    if (deg > 360) {
        clearInterval(timeId3);
    }
    else {
        logoImg.style.rotate = deg + "deg"
        deg += 2;
    }

}


let timeId4 = setInterval(contactStat, 150);

let contactHeading = document.getElementById('contact-h1');
let val = 0;
function contactStat() {
    if (val !== 1) {
        contactHeading.style.opacity = `${val}`
        val += 0.1;
    }
    else{
        contactHeading.style.borderBottom = 'none'
    }
}


const showSucess = () =>{
    const fnVal = document.getElementsByClassName('inputs-field')
    if(fnVal[0].value){
        document.getElementById('sucessMessage').style.display = 'block';
        scrollTo(0, document.body.scrollHeight);
    }
    fnVal[0].value = '';
    fnVal[1].value = '';
    fnVal[2].value = '';
    fnVal[3].value = '';
    
    
}

const sendBtn = document.getElementById('send-btn');
sendBtn.onclick = showSucess;


