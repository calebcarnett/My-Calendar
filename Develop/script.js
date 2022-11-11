$(document).ready(function() {
  var today = dayjs();
  $("#1a").text(today.format("MMM D, YYYY: h:mm A"));
  //This makes the hour variable only pull the hour and AM/PM
  var hour = today.hour();
  console.log(hour)
  
  var timeBlocks = $(".time-block");
  //Changes the color of each time-block class depending on the hour of the day and if it matches the id within the class
  timeBlocks.each(function () {
    var actualTimeBlock = $(this).attr("id");
    if (hour < actualTimeBlock) {
      $(this).children(".col-md-10").attr("class", "col-8 col-md-10 description past")
    } else if (hour > actualTimeBlock) {
      $(this).children(".col-md-10").attr("class", "col-8 col-md-10 description future")
    } else {
      $(this).children(".col-md-10").attr("class", "col-8 col-md-10 description present")
    }
  });
  
  //Added a comment variable to grab the written text within the calendar and save it to the local storage
  //Added a variable saveButton so that we can add an event listenter to save the text to local storage when clicked
  var comment = document.querySelector(".description");
  var saveButton = document.querySelector(".saveBtn");
  
  comment.innerHTML = localStorage.getItem("keyname");
  //the comment.innerHTML lets me save down the "keyname" which is whatever the user inputs, to save even when refreshed. 
  saveButton.addEventListener("click", function (event) {
    localStorage.setItem("keyname", comment.value);
    comment.innerHTML = localStorage.getItem("keyname");
  });
})

