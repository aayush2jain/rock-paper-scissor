
function main(){

document.querySelector(".rock").onclick=()=>{
let d=find(r);
 if(d==`rock`){
    alert("draw")
 }
 else if(d==`paper`)
 {
    alert("loose")
 }
 else if(d==`scissor`){
    alert('win')
 }
}
document.querySelector(".paper").onclick=()=>{
let d=find(r);
 if(d==`rock`){
    alert("win")
 }
 else if(d==`paper`)
 {
    alert("draw")
 }
 else if(d==`scissor`){
    alert('loose')
 }
}
document.querySelector(".scissor").onclick=()=>{
 let d=find(r);
 if(d==`rock`){
    alert("lose")
 }
 else if(d==`paper`)
 {
    alert("win")
 }
 else if(d==`scissor`){
    alert('draw')
 }
}

}
let r=Math.random();
console.log(r)
function find(r)
{
if(0<r && r<0.3333333)
{
    document.querySelector(".main").innerHTML=`<img src="scissor.jpg" width="200px"><h1>scissor</h1>>`
let c= `scissor`
return c
}
else if(0.333333<r && r<0.666666)
{
    document.querySelector(".main").innerHTML=`<img src="rock.jpg" width="200px"><h1>rock</h1>`
let c= `rock`
return c
}
else if(r<0.999999)
{
     document.querySelector(".main").innerHTML=`<img src="paper.jpg" width="200px"><h1>paper</h1>`
let c = `paper`
return c
}
}

main();


