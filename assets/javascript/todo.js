const toDoCount = 0;

$("#add-to-do").on("click", function(event) {
    event.preventDefault();

    const toDoTask = $("#to-do").val().trim();

    let toDoItem = $("<p>");

    toDoItem.attr("id", "item-" + toDoCount);
      toDoItem.text(toDoTask);

    const toDoClose = $("<button>");

      toDoClose.attr("data-to-do", toDoCount);
      toDoClose.addClass("checkbox");
      toDoClose.text("✓");

    toDoItem = toDoItem.prepend(toDoClose);

    $("#to-dos").append(toDoItem);

    $("#to-do").val("");

    toDoCount++;
});

$(document.body).on("click", ".checkbox", function() {

    const toDoNumber = $(this).attr("data-to-do");

    $("#item-" + toDoNumber).remove();
});