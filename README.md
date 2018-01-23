## Dummy backend using jsonplaceholder as datasource

### You need:
* Node.js 8.x

### Start server:
```
npm install
npm run start
```

### Run integration tests:
```
npm run test
```

## Endpoints:
* Always use Authentication header 'Bearer af24353tdsfw'
   * In case it's missing or invalid the server response will be a 501 (probably should be 401 though)
* Posts CRUD examples
```
GET http://localhost:3000/api/posts
```
```
GET http://localhost:3000/api/posts/1
```
```
POST http://localhost:3000/api/posts
{
    "title": "foo",
    "body": "bar",
    "userId": 1
}
```
```
PUT http://localhost:3000/api/posts/1
{
    "title": "foo",
    "body": "bar",
    "userId": 1
}
```
```
DELETE http://localhost:3000/api/posts/1
```
* Collection example
```
GET http://localhost:3000/api/collection
```
   * This actually retrieves all the posts, albums and users from the datasource and then select random items in order to minimize the number of HTTP requests to the datasource.
