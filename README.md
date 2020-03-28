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