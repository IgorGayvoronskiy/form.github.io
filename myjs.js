$(function(){
    $(".ajaxForm").submit(function(e){
        e.preventDefault();
        var href = $(this).attr("action");
        $.ajax({
            type: "POST",
            dataType: "json",
            url: href,
            data: $(this).serialize(),
            success: function(response){
                if(response.status == "success"){
                    alert("Отправка совершена успешно!");
                }
                else{
                    alert("Ошибка: " + response.message);
                }
            }
        });
    });
});


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

//Функция скрытия PopUp
function PopUpHide(){
    $("#popup1").hide();
}

saveButton.addEventListener('click', function () {
    window.localStorage.setItem('value', area.value);
    window.localStorage.setItem('timestamp', (new Date()).getTime());
   }, false);
   textarea.value = window.localStorage.getItem('value');
