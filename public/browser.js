
document.addEventListener("click", function(e){
    // delete fuctionality
     if (e.target.classList.contains("delete-me")) {
        if(confirm("Do you really want to delete the item ?")){
            axios
              .post("/delete-item", {
                id: e.target.getAttribute("data-id"),
              })
              .then(function () {
                e.target.parentElement.parentElement.remove();
              })
              .catch(function () {
                console.log("There is some error");
              });
        }
     }




    // update fuctionality
    if(e.target.classList.contains("edit-me")){
       const task = prompt(
         "Edit your task",
         e.target.parentElement.parentElement.querySelector(".item-text").innerHTML
       );
      if(task){
         axios
           .post("/update-item", {
             text: task,
             id: e.target.getAttribute("data-id"),
           })
           .then(function () {
             e.target.parentElement.parentElement.querySelector(
               ".item-text"
             ).innerHTML = task;
           })
           .catch(function () {
             console.log("There is some error");
           });
      }
    }
})
