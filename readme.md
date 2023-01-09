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
Knowledge of Typescript, Node.js, SQL, and the Oceanic library are *not* required.

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

#### Some Extra Stuff (Not Sponsored)

[Railway](https://www.railway.app) (Cheap Database and Bot hosting, first 5 dollars each month is free when providing a Credit Card)\
[Linode](https://www.linode.com/) (More Cheap Hosting)\
[OVHCloud](https://us.ovhcloud.com/) (Even More Cheap Hosting)