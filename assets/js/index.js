
// function secondePage(){
//     window.location.replace("fighter.html")
// }
// let attempt = 3
// function login(){
//     let user = document.getElementById("username").value;
//     let pass = document.getElementById("password").value;
    
//     if (attempt>0){
//         if (user=="admin01" && pass=="123"){
//             alert("bravo "+user)
//             setTimeout(secondePage,2000)
//         }
//         else if (user=="admin02" && pass=="234"){
//             alert("bravo "+user)
//             setTimeout(secondePage,2000)
//         }
//         else if (user=="admin03" && pass=="345"){
//             alert("bravo "+user)
//             setTimeout(secondePage,2000)
//         }else{
//             attempt= attempt-1
//             alert("you still have "+ attempt +"attempt")
//         }
//     }
//      else {
//         alert("you don't have any attempt to login")
        
//      }
// }




function secondePage(){
    window.location.replace("welcome.html")
}
let attempt = 3
function login(){
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    
    if (attempt>0){
        if (user=="admin01" && pass=="123"){
            alert("bravo "+user)
            setTimeout(secondePage,2000)
        }
        else if (user=="admin02" && pass=="234"){
            alert("bravo "+user)
            setTimeout(secondePage,2000)
        }
        else if (user=="admin03" && pass=="345"){
            alert("bravo "+user)
            setTimeout(secondePage,2000)
        }else{
            attempt= attempt-1
            alert("you still have "+ attempt +"attempt")
        }
    }
     else {
        alert("you don't have any attempt to login")
        
     }
}
