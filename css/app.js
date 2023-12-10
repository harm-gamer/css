// let todo =[];

// let req = prompt("Enter what do you want");

// while(true){
//     if(req == "Quit"){
//         console.log("quitting");
//         break;
//     }
//      else if(req == "list"){
//         console.log("---------->");
//         for(let i=0;i<=todo.length;i++){
//             console.log(i,todo[i]);
//         }
//      }
//     else if(req == "add"){
        
//         let req = prompt("what protect to you want to add");
//         todo.push(req);
//     }
//      else if(req == "delete"){
//           let idx =  prompt("which index do you want to delete?");
//           todo.slice(idx,1);
//      }
//      req = prompt("Enter what do you want");

// }

let max = prompt("Enter the max no");

 let random = Math.floor(Math.random()*max +1) ;

  while(true){
     let guess = prompt("guess the number");

     if(guess == random){
        console.log("you are right and your no is :" ,random);
        break;
     }
     else if(guess == "quit"){
        console.log("quiting game");
     }
     else {
        guess = prompt("please try agian");
        
     }
     

  }