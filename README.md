# SvelteKit & Prisma with JWT auth

This is a starter project for using SvelteKit with JWT auth.

It has everything you need to have JWT authentication working with Prisma and SqlLite.

Tailwind CSS is also setup and is used for styling.

## First, install npm Dependencies

Here's how to make this project work!

```bash
# from the root directory
npm install
```

## Next create your database from the Prisma schema

```bash
# from the root directory
npx prisma db push
```

## Take a look at your awesome new database with Prisma Studio

```bash
# from the root directory
npx prisma studio
```

## Next add your jwt access secret to your .env file that was created by Prisma

In the .env file add the VITE_JWT_ACCESS_SECRET. Google JWT token generator if you need help with this.

_Note: the .env file should be in your gitignore file. You don't want to save it to your repository for everyone to see._

```env
DATABASE_URL="file:./dev.db"
VITE_JWT_ACCESS_SECRET="<your jwt access secret>"
```

## Developing

Once you've done the above steps, run the project.

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```
