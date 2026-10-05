let boxes = document.querySelectorAll(".box");
let reset= document.querySelector(".reset");
let turno = true;

boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        console.log("box was clicked");
        if(turno){
            box.innerText="O";
            turno = false;
        }else{
            box.innerText="X";
            turno= true;
        }
        box.disabled = true;
        checkwinner();
    })

})

const winning_pattern =[
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,4,6],
    [3,4,5],
    [6,7,8],
    [2,5,8]
]


const disablebox = () =>{
    for(let disbox of boxes){
        disbox.disabled= true;
    }
}

const celebration = (pos0,pos1,pos2) => {
   pos0.style.color="green";
   pos1.style.color="green";
   pos2.style.color="green";
}

checkwinner = () => {
     for(let partten of winning_pattern){
       let pos1 = boxes[partten[0]].innerText;
       let pos2 = boxes[partten[1]].innerText;
       let pos3 = boxes[partten[2]].innerText;
       
       if(pos1 != "" && pos2 != "" && pos3 != ""){
          if(pos1 === pos2 && pos2 === pos3){
            console.log("winner",pos1);
            disablebox();
            celebration(boxes[partten[0]], boxes[partten[1]], boxes[partten[2]]);

          }
        }
     }
}

reset.addEventListener("click",() => {
turno = true;
   
    for(let box of boxes){
        box.innerText="";
        box.disabled = false;
        box.style.color = ""; 
       }
   })
    



