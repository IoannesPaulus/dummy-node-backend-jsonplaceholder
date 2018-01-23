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

### Endpoints:
* Always use Authentication header 'Bearer af24353tdsfw'
   * In case it's missing or invalid the server response will be a HTTP 501 (probably should be 401 though)
#### Posts CRUD examples
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
#### Collection example
```
GET http://localhost:3000/api/collection
```
In order to minimize the number of HTTP requests to the datasource this actually retrieves all the posts, albums and users from the datasource and then selects the random items.

### Caching and request throttling skeletons
* Caching
   * The cache middleware uses the myCache helper, which if implemented would store responses for a given time duration and provide these same responses when requested again within that duration.
* Request throttling
   * The request throttling middleware uses the myThrottler helper, which if implemented could be set to a throttling rate and could determine whether the server can accept a new request or not. If not the middleware would return HTTP 429.
