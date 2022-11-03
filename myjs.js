$(document).ready(function(){
    //Скрыть PopUp при загрузке страницы    
    PopUpHide();
});

//Функция отображения PopUp
function PopUpShow(){
    $("#popup1").show();
}

let b = document.getElementById("b1");
    b.addEventListener("click", function(){
        let stateObj = {
            index: "bar",
        }
        history.pushState(null, 'page 2', 'bar.html');
        window.addEventListener('popstate', function(){
            PopUpShow();
        })
});

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
