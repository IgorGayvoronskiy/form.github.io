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

$( document ).ready(function() {
    $.ajax({
    url: 'https://api.slapform.com/your@email.com',
     dataType: 'json',
     method: 'POST',
     data: {
      name: 'Jon Snow',
      message: 'Hello World! This is my first Slapform submission.',
      /* Name triggers */
      slap_subject: 'My Favorite Message',
      slap_replyto: 'custom@replyto.com',
      slap_debug: false,
      slap_webhook: 'https://yourwebsite.com/webhook',
      lap_honey: ''
      /* These Slapform Name Triggers exist but aren't applicable to AJAX submissions */
      // slap_redirect: 'https://yourwebsite.com',
      // slap_captcha: false,
     },
     success: function (response) {
      console.log('Got data: ', response);
      if (response.meta.status == 'success') {
       console.log('Submission was successful!');
       // window.location.href = 'https://google.com' // Uncomment this line if you want to redirect the user upon a successful submission
      } else if (response.meta.status == 'fail') {
       console.log('Submission failed with these errors: ', response.meta.errors);
      }
    }
   });
});
   
