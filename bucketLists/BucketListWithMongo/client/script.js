// NOTE: currently used ONLY for dev purposes
// once deployed, we would use the root route
// For instance, if deployed to heroku.com we would use something like:
// http://bucketlist.herokuapp.com as our baseUrl
let baseUrl = "http://localhost:3000";

// READ
$(document).ready(function () {
  let route = "bucket";
  let endpoint = `${baseUrl}/${route}`;
  fetch(endpoint)
    .then(function (response) {
      // parse data or throw an error
      if (!response.ok) {
        throw Error("Issue getting data from server");
      }
      return response.json();
    })
    .then(function (dataArray) {
      //  do something with the data
      $("ul").empty();
      dataArray.forEach(function (bucketItem) {
        let completedClass = bucketItem.isComplete ? "completed" : "";
        $("ul").append(
          `<li data-id=${bucketItem._id} class=${completedClass}>${bucketItem.description}<span><i class="fa fa-trash-alt"></i></span></li>`
        );
      });
    })
    .catch(function (error) {
      // do something with error
      console.error(error);
    });
});

// CREATE
$("input").keypress(function (event) {
  if (event.which === 13 && $(this).val().trim()) {
    let route = "bucket";
    let endpoint = `${baseUrl}/${route}`;
    let listItem = {
      description: $(this).val(),
    };
    fetch(endpoint, {
      method: "POST", // explicitly tell which verb to use
      // NOTE: only need for POST
      // need to set the headers
      // and tell how we are trenferring data from client to server
      headers: {
        "Content-Type": "application/json",
      },
      // NOTE: since listItem is a JS object, we need to stringify and
      // send as JSON as promised by the headers
      body: JSON.stringify(listItem),
    })
      .then(function (response) {
        // parse data or throw an error
        if (!response.ok) {
          throw Error("Issue getting posting data to server");
        }
        return response.json();
      })
      .then(function (data) {
        // data is an object
        $("ul").append(
          `<li data-id=${data._id}>${data.description}<span><i class="fa fa-trash-alt"></i></span></li>`
        );
        $("input").val("");
      })
      .catch(function (error) {
        console.error(error);
      });
  }
});

// UPDATE
$("ul").on("click", "li", function () {
  let that = this
  let itemId = $(this).data("id");
  let route = `bucket/${itemId}`;
  let endpoint = `${baseUrl}/${route}`;
  fetch(endpoint, {
    method: "PUT"
  })
  .then(function(response) {
    if (!response.ok) {
      throw Error("Issues with sending updating id info");
    }
    return response.json();
  })
  .then(function(data){
    $(that).toggleClass("completed");
  })
  .catch(function(err) {
    console.log("Error updating todo in client", err)}) 
});

// DELETE
$("ul").on("click", "span", function (event) {
  event.stopPropagation();
  let that = this;
  let itemId = $(this).parent().data("id");
  let route = `bucket/${itemId}`;
  let endpoint = `${baseUrl}/${route}`;
  fetch(endpoint, {
    method: "DELETE",
  })
    .then(function (response) {
      if (!response.ok) {
        throw Error("Issues with sending delete id info");
      }
      return response.json();
    })
    .then(function (data) {
      $(that).parent().remove();
    })
    .catch(function (error) {
      console.error(error);
    });
});
