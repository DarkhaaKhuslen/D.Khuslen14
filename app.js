const canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');
const clrs = document.querySelectorAll('.clr');
console.log(clrs);
// document -> html deer baigaa buh code
// window -> ajluulah duudas
// get awah 
canvas.width = window.innerWidth
canvas.height = window.innerHeight;
// zuraasiin orgon 
ctx.lineWidth = 5;
let prevX=null;
let prevY=null;
let draw = false;
// addEventlistener -> mousemove
let clrArr = Array.from(clrs);
// forEach  Array/massive
clrArr.forEach(clr=>{
    clr.addEventListener('click',()=>{
        ctx.strokeStyle = clr.dataset.clr;
    });
});
console.log(clrArr)
// mousedown -> mouese deer darah ued
window.addEventListener('mousedown',()=>{draw=true;});
window.addEventListener('mouseup',()=>{draw=false;});
window.addEventListener('mousemove',(e)=>{
    if(draw==false || prevX==null || prevY==null){
        prevX=e.clientX
        prevY=e.clientY
    }
    console.log(e.clientX);
    let mouseX = e.clientX;
    let mouseY = e.clientY;
    ctx.beginPath(); // zuraasiin zamiig ehluuleh
    ctx.moveTo(prevX,prevY); // mouse hodloh bairshil
    ctx.lineTo(mouseX,mouseY); // mousnii bairshild zurah
    ctx.stroke(); // zursan zuraasiig gargaj ireh 
    prevX = e.clientX;
    prevY = e.clientY;
})
let clrBtn = document.querySelector('.clear');
clrBtn.addEventListener('click',()=>{
    ctx.clearRect(0,0,canvas.width,canvas.height);
}); 
let saveBtn = document.querySelector('.save');
saveBtn.addEventListener('click',()=>{
    let data = canvas.toDataURL('imag/jpg');
    let a = document.createElement('a');
    a.href=data;
    a.downloud="test.jpg";
    a.click();
});
let selectBtn = document.querySelector('.select');
let selector = document.querySelector('.selector');
selectBtn.addEventListener('click',()=>{
    ctx.lineWidth=selector.value;    
});
let clrslct = document.querySelector('.color select');
clrslct.addEventListener('click',()=>{
    ctx.color=clrslct.value;
});