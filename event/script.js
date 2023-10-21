window.onload = function() {    //문서가 load 될 때 이 함수를 실행
    let text = document.getElementById('text');

    text.innerText = 'HTML 문서 loaded';
}

const aElement = document.querySelector('a');

aElement.addEventListener('click', () => {
    alert('a element clicked');
})

const buttonElement = document.querySelector('.btn2');

buttonElement.addEventListener('click', (event) => {
    let val;
    val = event.target;
    val = event.target.id;
    val = event.target.className;
    val = event.target.classList;

    val = event.type;
    
    //윈도우로부터의 거리 좌표
    val = event.clientY;
    //요소로부터의 거리 좌표
    val = event.offsetY

    console.log(val);
})



const submitBtn = document.querySelector('.submit-btn');
const title = document.querySelector('h2');

//Event
submitBtn.addEventListener('click', handleEvent);
submitBtn.addEventListener('dblclick', handleEvent);
submitBtn.addEventListener('mousedown', handleEvent);
submitBtn.addEventListener('mouseup', handleEvent);
submitBtn.addEventListener('mouseenter', handleEvent);
submitBtn.addEventListener('mouseleave', handleEvent);
submitBtn.addEventListener('mousemove', handleEvent);

function handleEvent(e) {
    e.preventDefault();
    console.log(`Event Type: ${e.type}`);
    title.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
}


//form event
const form = document.querySelector('form');
const emailInput = document.getElementById('email');

form.addEventListener('submit', handleEvent);
emailInput.addEventListener('keydown', handleEvent);
emailInput.addEventListener('keyup', handleEvent);
emailInput.addEventListener('keypress', handleEvent);
emailInput.addEventListener('focus', handleEvent);
emailInput.addEventListener('blur', handleEvent);   //input 밖으로 나갔을때
emailInput.addEventListener('cut', handleEvent);    //input 안에 입력된 글을 잘라냈을때
emailInput.addEventListener('paste', handleEvent);  //복사했을 때
emailInput.addEventListener('input', handleEvent);  //input 안에 입력될때

function handleEvent(e) {
    if(e.type === 'submit') {
        e.preventDefault();
    }

    console.log(`Event Type: ${e.type}`);
    title.textContent = e.target.value;
}
