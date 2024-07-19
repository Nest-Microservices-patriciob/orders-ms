### Orders Microservice

### Dev

1. Clone repository.
2. Create `.env` file based on `.env.template`.
3. Execute the following command to run the database:

```
docker compose up -d
```

5. Run NATS server

```
docker run -d --name nats-main -p 4222: 4222 -p 6222: 6222 -p 8222: 8222 nats
```

6. Run the project with `npm run start:dev` or `yarn start:dev`

In case of Prisma error run

```
npx prisma generate
```

### Prod

Run command

```
docker build -f Dockerfile.prod -t orders-ms .
```
