# Barri

**A Moderation Bot written in Typescript using the Oceanic Library.**

**You can find the official instance [here!](https://shorturl.at/rxRY3)**

## Features

- Basic Moderation (kick, ban, timeout, etc.)
- Robust Antispam (with message info and database caching for faster operations)
- Customizable Settings (warn and antispam system)
- Warn System (with Auto-Punishing)
- Bot Admin Commands (eval, system stats, kill process)

## Setup

There are several videos and articles online for setting up a bot account, so I will not go over that here.\
Feel free to continue once you have set up a bot account and have its token ready.

#### Requirements

You will need a few things to setup this bot. Most notably, Node.js is required as well as a running PostgreSQL database.\
You may also need basic knowledge of SQL and setting up a Postgres database for some commands to work correctly (like setting antispam settings)\
Knowledge of Typescript, Node.js, and the Oceanic library are *not* required.

#### Database Setup

You will need to set up a PostgreSQL database for the Antispam setup.\
Once you have set that up, you can follow the SQL statement below to set up the table.

```
CREATE TABLE IF NOT EXISTS antispam (guild TEXT PRIMARY KEY, messagecount INTEGER, interval INTEGER, setting BOOLEAN);
CREATE TABLE IF NOT EXISTS warns (id TEXT PRIMARY KEY, user TEXT NOT NULL, guild TEXT NOT NULL, count INTEGER);
CREATE TABLE IF NOT EXISTS warnsys (guild TEXT PRIMARY KEY, mutelimit INTEGER, kicklimit INTEGER, banlimit INTEGER, onspam BOOLEAN, duration INTEGER);
```

This statement will create a schema that matches the details in `schema.prisma`.

#### Config Files

**The bot now only has 1 env file.**

Place the relevant info in each field (keep the 'Bot ' in TOKEN) in `example.env` and rename the file to .env

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
