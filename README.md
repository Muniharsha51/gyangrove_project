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

eventsAdd Function:
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

Request Body

- `latitude` (Number): Latitude coordinate.
- `longitude` (Number): Longitude coordinate.
- `date` (String): Date in YYYY-MM-DD format.

  Response

- `events` (Array): Paginated events data.
- `page` (Number): Current page number.
- `pageSize` (Number): Number of events per page.
- `totalEvents` (Number): Total number of events within the specified date range.
- `totalPages` (Number): Total number of pages.

  `eventsAdd` Route
Adds a new event to the database.

Route Details
- **Method**: POST
- **Endpoint**: `/events/add`

Request Body

- `event_name` (String): Name of the event.
- `city_name` (String): Name of the city where the event takes place.
- `date` (String): Date of the event in YYYY-MM-DD format.
- `time` (String): Time of the event (optional).
- `latitude` (Number): Latitude coordinate.
- `longitude` (Number): Longitude coordinate.

  Response

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
 
  
