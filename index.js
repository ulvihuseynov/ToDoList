let input=document.querySelector("#input");
let btn=document.querySelector("#btn");
let list=document.querySelector("#list");
let data=[];
btn.addEventListener("click",function () {
let value=input.value;
input.value="";
    console.log(value);
data.push(value)
console.log(data);
let result =data.map(function (item,index,list) {
   
  return ` <li class="list-group-item p-3">${item}</li>` 
}).join("");
console.log(result);
list.innerHTML=result;
})