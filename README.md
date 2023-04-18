# CMS Backend

## Running the project locally

### Clone and install dependencies

```bash
git clone https://github.com/srijan-nayak/cms-backend.git
cd cms-backend
npm install
```

### Configure connection string

Using the `.env.example` file as a reference, create a `.env` file and replace
the value for `MONGODB_URI` environment variable with the connection string to
your MongoDB database.

```bash
cp .env.example .env
# edit .env file and replace the value for the MONGODB_URI variable
```

### Run the server

```bash
npm start
```

The server will be listening on [localhost:3300](http://localhost/3300).

## API Routes

- `GET /posts`: List of all posts
- `GET /posts/:id`: Get specific post by post ID
- `POST /posts` Create new post
- `PUT /posts/:id` Edit a specific post
- `DELETE /posts/:id` Delete a specific post

### Body schema for posts `POST` and `PUT` routes

```json
{
  "title": "string",
  "author": "string",
  "image": "string",
  "content": "string"
}
```
