Mongodb - Run queries in Mongo Terminal
--------------------------
* Run Mongod
* Run Mongo
* Run devSetup.js setup script in mongo terminal
```
load("pathTo/devSetup.js")
```
* [SQL Comparison](http://docs.mongodb.org/manual/reference/sql-comparison/)
* Find all devs
* Find all devs, limit to 2 results
* Find all devs with an A in their name
* Find all devs without an A in their name
* Only return all devs' first name
* Find all devs order by name (ascending and descending)
* Insert array of devs
* Update Dev's Name
* Run an upsert statemnet (insert and update a record with this statement)
* Remove Dev from list

 Mean Stack
-------------------------
```
Clone git@github.com:jramey/TodoMeanStack.git
npm install
grunt // Run MEAN app
grunt e2e // Run end 2 end tests. Must have app running
grunt unit // Run unit tests. 
```
* Create a db
* Update database url in config.js
* Setup get method, api call and Mongoose find method
* Setup create method, api call, and Mongoose create function
* Setup delete methodm, api call, and Mongoose delete function

 Optional 
-------------------------
* Write unit and e2e test for all cases.  
* Clciking on a task marks it as complete in the database and also strikes through the text
* Add a remove link to the task
* Add a loading symbol when the tasks are being loaded from the "server"
* Checking the box marks the tasks as completed, click the title allows you to update the title
* Clear all completed task button
* Search box for tasks
