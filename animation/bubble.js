const canvas=document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const particlesArray = [];

//  Drawing Rectangle
// window.addEventListener("resize",function(){
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
//     ctx.fillStyle ='white';
//     ctx.fillRect(110,40,150,100);
// })


const mouse = {
    x:null,
    y:null,
}

// canvas.addEventListener('mousemove',function(e){
//     mouse.x = e.x;
//     mouse.y = e.y;
//     drawCircle();
// })

canvas.addEventListener('click',function(e){
    mouse.x = e.x;
    mouse.y = e.y;
    // drawCircle();
})

// Drawing circle with arc method
// Stroke Circle

// function drawCircle(){
// ctx.fillStyle ='blue';
// ctx.strokeStyle ='red';
// ctx.lineWidth = 15;
// ctx.beginPath();
// ctx.arc(mouse.x,mouse.y,50,0,Math.PI*2);
// // ctx.stroke();
// ctx.fill();
// console.log(ctx);
// }


class Particle {
    constructor(){
        // this.x=mouse.x;
        // this.y=mouse.y;
        this.x=Math.random()* canvas.width;
        this.y=Math.random()* canvas.height;
        this.size =Math.random() * 5 + 1; // random no. between 1 and 6
        this.speedX = Math.random()*3 - 1.5;
        this.speedY = Math.random()*3 - 1.5;
    }
    update(){
        this.x+=this.speedX;  //updates speed of particle
        this.y+=this.speedY;
    }
    draw(){
            ctx.fillStyle ='blue';
            // ctx.strokeStyle ='red';
            // ctx.lineWidth = 15;
            ctx.beginPath();
            ctx.arc(this.x,this.y,50,0,Math.PI*2);
            // ctx.stroke();
            ctx.fill();
    }
}
 
function init(){
    for(let i=0;i<100;i++){
        particlesArray.push(new Particle());
    }
}
 
init();
console.log(particlesArray);

function handleParticles(){
    for(let i=0;i<particlesArray.length;i++){
        particlesArray[i].update();
        particlesArray[i].draw();
    }
}

function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    // drawCircle();
    handleParticles();
    requestAnimationFrame(animate);
}
animate();

