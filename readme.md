# Barri

**A Moderation Bot written in Typescript using the Oceanic Library.**

**THIS PROJECT IS STILL IN DEVELOPMENT. Not all listed features have been implemented yet.**

## Features

- Basic Moderation (kick, ban, timeout, etc.)
- Robust Antispam
- Customizable Settings

## Setup

There are several videos and articles online for setting up a bot account, so I will not go over that here.\
Feel free to continue once you have set up a bot account and have its token ready.

#### Requirements

You will need a few things to setup this bot. Most notably, Node.js is required as well as a running PostgreSQL database.\
You may also need basic knowledge of SQL and setting up a Postgres database for some commands to work correctly (like setting antispam settings)\
Knowledge of Typescript, Node.js, and the Oceanic library are *not* required.

#### Database Setup

You will need to set up a PostgreSQL database for the Antispam setup.\
Once you have set that up, you can follow the SQL statement below to set up the table. (wip)\
`CREATE TABLE IF NOT EXISTS antispam (guild TEXT PRIMARY KEY, limit INTEGER, interval INTEGER)`

#### Config Files

Navigate to `/src/example.cfg.json` and replace "BOT TOKEN HERE" with your bot token.\
Next, navigate to `/src/prisma/example.env` and replace DATABASE_URL_HERE with your PostgreSQL database url.\
Remove the word 'example' from each of the file names. (example.env becomes .env and example.cfg.json becomes cfg.json)

#### Setup Script

Navigate to `/setup/setup.bat` if on windows or `setup/setup.sh` if on linux and run the respective script.\
This will install all the needed dependencies via NPM and generate the Prisma Client.

#### Final Steps

Navigate to `/setup/start.bat` if on windows or `setup/start.sh` if on linux and run the respective script.\
This will execute the index file and start the bot.

And you're done! If you have any questions or concerns, feel free to open an issue or contact me on Discord (Rainy~#2571) or on Instagram (rainy.dev)

### Resources

Below are a few resources that may help you out. :)

#### Required Resources

[Postgres Install](https://www.postgresql.org/download/) (Not needed locally if using Railway or a similar service)\
[Node.js Install](https://nodejs.org/en/download/)

#### Learning Resources

If you're interested in learning more about the tools this bot utilizes, check the links here.

[Node.js](https://nodejs.org/en/) - Javascript Runtime that runs the code\
[Oceanic](https://github.com/OceanicJS/Oceanic) - Discord library the bot uses\
[Prisma](https://www.prisma.io/) - ORM the bot uses to interact with the database\
[PostgreSQL](https://www.postgresql.org/) - Database the bot uses\
[Typescript](https://www.typescriptlang.org/) - Language the bot is written in

#### Some Extra Stuff (Not Sponsored)

[Railway](https://www.railway.app) (Cheap Database and Bot hosting, first 5 dollars each month is free when providing a Credit Card)\
[Linode](https://www.linode.com/) (More Cheap Hosting)\
[OVHCloud](https://us.ovhcloud.com/) (Even More Cheap Hosting)
