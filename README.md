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
* Always user Authentication header 'Bearer af24353tdsfw'
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
