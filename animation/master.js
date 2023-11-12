const canvas=document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const particlesArray = [];
let hue=0;  //hsl(120,100%,50%)

const mouse = {
    x:null,
    y:null,
}

canvas.addEventListener('mousemove',function(e){
    mouse.x = e.x;
    mouse.y = e.y;
    for(let i=0;i<3;i++){
        particlesArray.push(new Particle());
    }
})

canvas.addEventListener('click',function(e){
    mouse.x = e.x;
    mouse.y = e.y;
    for(let i=0;i<5;i++){
    particlesArray.push(new Particle());
}
})

class Particle {
    constructor(){
        this.x=mouse.x;
        this.y=mouse.y;
        this.size =Math.random() * 15 + 1; // random no. between 1 and 16
        this.speedX = Math.random()*3 - 1.5;
        this.speedY = Math.random()*3 - 1.5;
        this.color = 'hsl(' + hue + ',100% ,50%)';
    }
    update(){
        this.x+=this.speedX;  //updates speed of particle
        this.y+=this.speedY;
        if(this.size > 0.2) this.size -=0.1;
    }
    draw(){
            ctx.fillStyle = this.color;
            ctx.strokeStyle ='red';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.arc(this.x,this.y,this.size,0,Math.PI*2);
            ctx.stroke();
            ctx.fill();
    }
}

function handleParticles(){
    for(let i=0;i<particlesArray.length;i++){
        particlesArray[i].update();
        particlesArray[i].draw();  
    for(let j=i ; j<particlesArray.length ; j++){
        const dx = particlesArray[i].x - particlesArray[j].x;
        const dy = particlesArray[i].y - particlesArray[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if(distance <100){
            ctx.beginPath();
            ctx.strokeStyle = particlesArray[i].color;
            ctx.lineWidth =0.2;
            ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
            ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
            ctx.stroke();
            ctx.closePath();
        }
    }
        if(particlesArray[i].size <= 0.3){
            particlesArray.splice(i,1);
            console.log(particlesArray.length)
            i--;            
        }
 }
}

function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    // ctx.fillStyle ='rgba(0,0,0,0.04)';
    // ctx.fillRect(0,0,canvas.width,canvas.height);
    handleParticles();
    console.log(particlesArray.length)
    hue+=3;
    requestAnimationFrame(animate);
}
animate();