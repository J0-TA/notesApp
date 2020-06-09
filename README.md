# NotesApp

## Installing

1. Clone the repository.
2. Open server folder: ``` $ cd server ```
3. Install dependencies: ``` $ npm install ```
4. Run seeds.js to get some notes: ``` $ node bin/seeds.js ```
5. Run server: ``` $ npm run dev ```

### Endpoints

Base Url: ```http:localhost:3000/api/notes ```

Create note json format: 
``` 
{
  "title": String,
  "content": String,
  "fav": Boolean
} 
```

| Method | Endpoint | Action |
|:---:|:---:|:---|
|GET|/|Get all notes|
|GET|/:id|Get note detail|
|GET|/favorites|Get favorite notes|
|POST|/new|Create new note|
|PUT|/:id|Update favorite state|

## Testing

Run tests: ```$ npm test ```

## Built With

· Express

· MongoDB

· Mongoose

· Mocha

· Chai % Chai-HTTP
