$(document).ready(function() {
  $("#surveyQuestions").submit(function(event) {
    const pick1 = $("#survey1").val();
    const pick2 = $("#survey2").val();
    const pick3 = $("#survey3").val();
    const pick4 = $("#survey4").val();
    const pick5 = $("#survey5").val()
    if (pick1==="frontend" ) {
    } else if (pick1==="backend") {
    } 
    if (pick2==="q2socialmedia" && pick1==="frontend") {
    } else if (pick2==="q2videogames" && pick1==="backend") {
    } else {
      $(".selectionG").show();  
    }
    if (pick3==="q3no" && pick2==="q2socialmedia" && pick1==="frontend") {
      $("#selections").show();
      $(".selectionA").show();
    } else if (pick3==="q3yes" && pick2==="q2videogames" && pick1==="backend"){
    }
      $("#selections").show();
      $(".selectionE").show();
    event.preventDefault();
  });
});
