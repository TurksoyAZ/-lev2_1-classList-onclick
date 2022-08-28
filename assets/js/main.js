

let basliq=document.getElementById("first1");
let list=document.getElementById("listId");


 function changeHeadline(){
    basliq.classList.add("basliqcss");
    list.classList.add("listcss");
 }


 function resetHeadline(){
    basliq.classList.remove("basliqcss");
    list.classList.remove("listcss");
 }