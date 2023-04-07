// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var saveBtn = $(".saveBtn")
var timeBlock = $(".time-block")

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  $(function () {
    // Add a listener for click events on the save button
    saveBtn.on("click", function () {
      // Get the user input from the sibling textarea element

      // Get the id of the time-block containing the button that was clicked
      var user = $(this).parent().attr('id');
      // Save the user input in local storage using the blockId as the key
      localStorage.setItem(user,$(this).siblings("textarea").val());
    });
  
  
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  // Get the current hour using Day.js
  
  // Loop through all time-block elements
  
  var now = dayjs()
$("#currentDay").text(now.format("YYYY-MMM-DD"))
  
$(function () {
  // Get the current hour using Day.js
  var currentHour = dayjs().format("HH")
  //console.log(currentHour);

  // Loop through each time block
  timeBlock.each(function () {
    // Get the hour from the time block's id
    var blockHour = parseInt($(this).attr("id").split("-")[1]);
    //console.log(blockHour);

    // Add or remove classes based on the comparison between currentHour and blockHour
    if (blockHour === currentHour) {
    $(this).addClass('present').removeClass('past future');
  }else if (blockHour < currentHour) {
      $(this).addClass('past').removeClass('present future');
  } else {
      $(this).addClass('future').removeClass('past present');
    }
    $(this).find("textarea").val(localStorage.getItem(blockHour));
  });
});


  //
  // TODO: Add code to get any user input that was saved in localStorage and set

// Loop through each time-block element
// $(".time-block").each(function() {
//   // Get the id attribute of the current time-block element
//   var timeId = $(this).attr("id");
//   // Retrieve the user input saved in localStorage for this time-block
//   var userInput = localStorage.getItem(timeId);
//   //console.log(userInput);
//   // Set the value of the corresponding textarea element to the retrieved user input
//   $(this).find("textarea").val(userInput)
// });

  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});

// Get the current hour using the moment.js library
//var currentHour = moment().hours();


