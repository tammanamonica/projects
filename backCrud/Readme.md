API Endpoints
Method	Endpoint	Description
POST	/users	Add a new user
GET	/users	Get all users
GET	/users/:id	Get a single user by ID
PUT	/users/:id	Update a user by ID
DELETE	/users/:id	Delete a user by ID

********main api *******
http://localhost:5000/users

Example Requests
1️⃣ Add a User (POST)
URL: http://localhost:5000/users
Body (JSON):

{
  "username": "monica",
  "userid": "3",
  "age": 42,
  "city": "Bangalore",
  "phno": "8947878733",
  "score": 36
}

2️⃣ Get All Users (GET)
URL: http://localhost:5000/users

3️⃣ Get a Single User (GET)
URL: http://localhost:5000/users/{userId}
(Replace {userId} with the actual user ID from the database)

example: 
http://localhost:5000/users/67e39519f6bf959eaee8776a


4️⃣ Update a User (PUT)
URL: http://localhost:5000/users/{userId}
Body (JSON) Example:

{
  "city": "Los Angeles"
}
(This updates only the city field)

5️⃣ Delete a User (DELETE)
URL: http://localhost:5000/users/{userId}


