const express = require("express");
const app = express();
const logger = require("morgan");
app.use(logger("dev"));

app.use(express.static("../client"))

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const { bucketArray } = require("./fakeData");

app.get("/", (req, res) => {
  res.send("Root route for BucketList Server");
});

// Read - GET
app.get("/bucket", (req, res) => {
  res.status(200).json(bucketArray);
});

// Create
let newId = 4;
app.post("/bucket", (req, res) => {
  let tempItem = {
    id: newId++,
    description: req.body.description,
    isComplete: false,
  };
  bucketArray.push(tempItem);
  res.json(tempItem);
});

// Delete
app.delete("/bucket/:id", (req, res) => {
  let requestedId = Number(req.params.id);
  let requestedItemIndex = bucketArray.findIndex((bucketItem) => {
    return bucketItem.id === requestedId;
  });
  if (requestedItemIndex !== -1) {
    bucketArray.splice(requestedItemIndex, 1);
    res.json(bucketArray);
  } else {
    res.status(404).send({
      error: "Clara messed it up!!!!",
    });
  }
});

// Update - PUT
app.put("/bucket/:id", (req, res) => {
  let requestedId = Number(req.params.id);
  // bucketArray -> data type = array of objects
  let bucketItem = bucketArray.find((item) => {
    // if successful, we return the element which is an object
    // get assigned to bucketItem which is now an object
    // if NOT successful, undefined
    return requestedId === item.id;
  });
  // if undefined, bucketItem is false
  // else it exists and considered true
  if(bucketItem){
    bucketItem.isComplete = !bucketItem.isComplete;
    res.json(bucketItem)
  } else {
    res.status(404).send({message: "Id does not exit"})
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Bucket server on port ${PORT}`));
