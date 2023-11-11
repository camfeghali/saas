# README

A fun side project to get up to speed on NextJS.

## Getting Started

### Generate Prisma types

```bash
npx prisma generate
```

### Run the development server:

```bash
yarn && yarn dev
```

Open [http://localhost:3001](http://localhost:3001) with your browser to see the result.

## Dependencies

- A [Kinde](https://kinde.com/docs/developer-tools/nextjs-sdk/) project.
- A [PlanetScale](https://planetscale.com/) database.

## Databsae Migrations

Define DB schemas in `/prisma/schema.prisma`
Push changes to planetscale with `npx prisma db push`
See database contents with `npx prisma studio`

## Frameworks & Tools

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [tRPC](https://trpc.io/docs/getting-started) - HTTP abstraction & Router
- [Prisma](https://www.prisma.io/docs) - ORM
- [PlanetScale](https://planetscale.com/) - Database hosting
- [Kinde](https://kinde.com/docs/developer-tools/nextjs-sdk/) - Auth provider

## References:

- [Vid tutoria](https://www.youtube.com/watch?v=ucX2zXAZ1I0)
- [Github](https://github.com/joschan21/quill)
