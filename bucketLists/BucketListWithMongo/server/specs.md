Can only use these two routes!!!
/bucket
/bucket/:id

Must return everything as JSON.

CRUD - Create, Read, Update, Delete
Create = POST verb
Read = GET verb
Update = PUT verb
Delete = DELETE verb

READ
<!-- 1) endpoint - /bucket/:id - more specific <- one item -->
1a) Get method and endpoint - /bucket - less specific <- all items
2) send data back -> JSON
3) send back everything -> array
4) send back the whole object

CREATE
1) POST method and /bucket endpoint
2) send back as JSON
3) send something = success means sending back ONE thing
4) send back one object - id, description, isComplete

DELETE
1) DELETE method with /bucket/:id
2) send JSON
3) send back whole array (minus the deleted item)
4) send back one object - id, description, isComplete
