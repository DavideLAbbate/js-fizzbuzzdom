let boxGod = document.querySelector(".box-container");

for (i=1; i<=100; i++)
{
    let boxComing = `<div class="blue-box box">${i}</div>`;

    if(i%3===0)  {boxComing= `<div class="green-box box">fizz</div>`;}
    if(i%5===0)  {boxComing= `<div class="yellow-box box">buzz</div>`;}
    if(i%15===0) {boxComing= `<div class="red-box box">fizzbuzz</div>`;}

    boxGod.innerHTML += boxComing;

}