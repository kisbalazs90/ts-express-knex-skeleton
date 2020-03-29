# RChat backend #

### Steps (note)
```
1. docker-compose exec mysql bash
2. mysql -root -p{pw}
3. CREATE DATABASE rchat CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

### Knex (note)
To initialize the app, you'll need to run knex init migration to initialize your db.
inside the container or you can run the command outside from the container as well
```
1. docker-compose exec backend sh
2. /app/node_modules/.bin/knex migrate:rollback
```

### Insert User
```
curl -X POST -H "Content-Type: application/json" -d '{"from":"1", "email":"kisbalazs90@gmail.com", "password": "123456"}' http://127.0.0.1:3000/user/
```

### Insert Message
```
curl -X POST -H "Content-Type: application/json" -d '{"from":1, "conversation_id":1, "message": "testMessage"}' http://127.0.0.1:3000/conversations -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1ODU0MjkyNzAsImV4cCI6MTU4NTUxNTY3MH0.PNlu5oRmiu3UyLFBHbdovgJJjwvKd35UFlOyn0JR3wE'
```