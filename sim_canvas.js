var canvas=document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');
c.fillStyle = "blue";
c.fillRect(100, 100, 20,30);


//circle
for(var i=0;i<3;i++)
{
c.beginPath();
c.arc(i*200,300,i*20,0,Math.PI*2);
c.stroke();
}