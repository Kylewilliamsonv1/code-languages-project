$(document).ready(function() {
  $("#surveyQuestions").submit(function(event) {
    const pick1 = $("#survey1").val();
    const pick2 = $("#survey2").val();
    const pick3 = $("#survey3").val();
    const pick4 = $("#survey4").val();
    const pick5 = $("#survey5").val()
    if (pick5==="q5mac" && pick4==="q4tea" && pick3==="q3no" && pick2==="q2socialmedia" && pick1==="frontend") {
      $("#selections").show();
      $(".selectionA").show();
    } else if (pick5==="q5windows" && pick4==="q4coffee" &&pick3==="q3yes" &&pick2==="q2videogames" && pick1==="backend") {
      $("#selections").show();
      $(".selectionB").show();
    } else if (pick5==="q5windows" && pick4==="q4tea" &&pick3==="q3yes" &&pick2==="q2videogames" && pick1==="backend") {
      $("#selections").show();
      $(".selectionC").show();
    } else {
      $(".selectionD").show(); 
    }
    event.preventDefault();
  });
});
