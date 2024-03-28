
Technologies Used :
Node.js (Backend ),
Expess.js(framework)
MYSQL (Database)

1. Mainly Node.js is used this event managment task for running the JavaScript in server side rendering
2. Express.js is used for creating the API in node.js and working with node.js in  familer way
3. SQL is ussed for storing the events data (while i imported the data from .CSV file)


Challanges faced: 
1. firstly primary thing is  create the database and imported the data from .CSV file into the database
2. faced some problems while installing the modules like invalid modules names
3. while writing the code faced syntax issues many times
4. in postman i faced some problems like server issues and i cleared those issues with proper port (where i used 3001 port)
5. i got some issues while adding event (addEvent) in the database
6. after completed the task sucessfully i faced some issues while pushing the  code into the github like rules voiltion i got this error because of integratig the API keys directly into the git hub i resolve this ossue by changing the rules  in github
   This are issues/challanges i faced while doing this task


Instructions to how you set up and run this project (including list of prerequisites):
1. firstly click on my git repositorie link you will redirect into my github repositorie
2. by using HTTP link in Code section you may get the repositorie link and clone my repositorie in your local system
3. after that open the code in IDE(VS CODE) then open the package.json file and see list of dependencies and install those modules in your folder by using npm install
4. after that open MY SQL workbench and create a database with same name (gyangrove) and create a table it's also same name (event_store)
5. import the data from .CSV file into the sql table
6. before starting the server please check the all in MVC structed way code flow and verify it and then run the server ny using "npm index.js" command why index.js means i used main file as index.js
7. open the POSTMAN and enter the command ("http://localhost:3001/events/find?page=1") same command and make sure select the POST method and after that select on body and  and select the raw opition and then give the  latitude and longitude and date then send the request you may get the data i,e., list of evnets  in the body tab
8. after that you may add the events through /addEvent method ("http://localhost:3001/addEvent") use this command and make sure that select the select opitio in the nodemon
9. in every step check the status the top of the body tab
10. while you adding the events in post man it add  in the database in the same table and those evets may record and you may see the list of events you you select that date 


   
 DETAILED EXPLANATION OF THE PROJECT : 

Created a event managment system with node.js
firstly import the data from .csv file to SQL 
Created a MVC architecture Enviornment in node.js then connected that sql database to node.js through eventdb.js file by installing mysql module in node.js

primarly log the all data in POSTMAN by using GET method 
code flow is firstly start from index.js file after that it redirect to the routes 
routes are works though express module it provide the routes

next code flow if is comes to controller in that controller firstly installed the axios module in to the node.js
This Node.js controller file appears to handle two different routes related to events: eventsStore and eventsAdd. 
This Node.js controller file handles routes related to events, including retrieving and adding events.
after that defining the variables in the controller file like latitude and longitude and date these data taken from the user (client) (Input: Expects latitude, longitude, and date in the request body.)

 Process:
Converts the date string into a JavaScript Date object.
Calculates the start and end dates for the 14-day range.
Retrieves events data and counts total events within the specified date range.
Maps the events data to extract necessary information.
Performs asynchronous requests to external APIs to fetch weather and distance data for each event.
Paginates the events data.
Output: Responds with paginated events data along with pagination metadata.

eventsAdd in API
Description: This function adds a new event to the database.
Input: Expects event_name, city_name, date, time, latitude, and longitude in the request body.
Validation:
Checks for missing fields.
Validates the date format.
Process:
Parses the request body to extract event details.
Validates the date format.
Adds the new event to the database.
Output: Responds with a success message if the event is added successfully.

Request Body from USER(CLIENT)

- `latitude` (Number): Latitude coordinate.
- `longitude` (Number): Longitude coordinate.
- `date` (String): Date in YYYY-MM-DD format.

  Response from API to CLIENT

- `events` (Array): Paginated events data.
- `page` (Number): Current page number.
- `pageSize` (Number): Number of events per page.
- `totalEvents` (Number): Total number of events within the specified date range.
- `totalPages` (Number): Total number of pages.

  `eventsAdd` Route
Adds a new event to the database.

Route Details 
- **Method**: POST
- **Endpoint**: `/addEvent`

Request Body from CLIENT (while adding an Event)

- `event_name` (String): Name of the event.
- `city_name` (String): Name of the city where the event takes place.
- `date` (String): Date of the event in YYYY-MM-DD format.
- `time` (String): Time of the event (optional).
- `latitude` (Number): Latitude coordinate.
- `longitude` (Number): Longitude coordinate.

  Response to CLIENT for event adding 

- `status` (String): Success or failure status.
- `message` (String): Success or error message.

Next code flow is to model.js in Model we  wrote the backend side code it means it connected to the databasse (SQL) and quries related data
`getAllEvents(startDate, endDate)`

Retrieves all events within the specified date range.

- **Parameters**:
  - `startDate` (String): Start date of the range in "YYYY-MM-DD" format.
  - `endDate` (String): End date of the range in "YYYY-MM-DD" format.

- **Returns**: 
  - Promise<Array>: An array of event objects.

`countAllEvents(startDate, endDate)`

Counts the total number of events within the specified date range.

- **Parameters**:
  - `startDate` (String): Start date of the range in "YYYY-MM-DD" format.
  - `endDate` (String): End date of the range in "YYYY-MM-DD" format.

- **Returns**: 
  - Promise<Object>: An object containing the total number of events.
 
`addEvents(eventName, cityName, date, time, latitude, longitude)`

Adds a new event to the `event_store` table.

- **Parameters**:
  - `eventName` (String): Name of the event.
  - `cityName` (String): Name of the city where the event takes place.
  - `date` (String): Date of the event in "YYYY-MM-DD" format.
  - `time` (String): Time of the event (optional).
  - `latitude` (Number): Latitude coordinate.
  - `longitude` (Number): Longitude coordinate.
 
  
