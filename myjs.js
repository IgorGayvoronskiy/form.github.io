$(document).ready(function(){
    //Скрыть PopUp при загрузке страницы    
    PopUpHide();
});

//Функция отображения PopUp
function PopUpShow(){
    let stateObj = {
        index: "bar",
    }
    console.log("hi");
    history.pushState(null, 'page 2', 'bar.html');
    console.log("hi2");
    $("#popup1").show();
}

window.addEventListener('popstate', function(){
    PopUpHide();
})

// let b = document.getElementById("b1");
// if(b) {
//     b.addEventListener("click", function(){
//         let stateObj = {
//             index: "bar",
//         }
//         console.log("hi");
//         history.pushState(null, 'page 2', 'bar.html');
//         window.addEventListener('popstate', function(){
//             PopUpShow();
//         })
//     });
// }

// b.addEventListener('click', () => {
//     window.history.pushState(
//       {},
//       'form',
//       'form.html'
//     )
//     PopUpShow()
//   })

//Функция скрытия PopUp
function PopUpHide(){
    $("#popup1").hide();
}
