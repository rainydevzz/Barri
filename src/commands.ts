import { ApplicationCommandTypes, ApplicationCommandOptionTypes, Permissions } from "oceanic.js";

const commands: Array<any> = [
    {
        name: 'ping',
        description: 'ping the bot!',
        type: ApplicationCommandTypes.CHAT_INPUT
    },
    {
        name: 'about',
        description: 'see some info about the bot',
        type: ApplicationCommandTypes.CHAT_INPUT
    },
    {
        name: 'help',
        description: 'see the bot commands!',
        type: ApplicationCommandTypes.CHAT_INPUT,
        options: [
            {
                name: 'command',
                description: 'see a specific command info!',
                type: ApplicationCommandOptionTypes.STRING,
                required: false
            }
        ]
    },
    {
        name: 'lock',
        description: 'lock a channel!',
        type: ApplicationCommandTypes.CHAT_INPUT,
        defaultMemberPermissions: `${Permissions.MANAGE_CHANNELS}`,
        options: [
            {
                name: 'channel',
                description: 'channel to lock',
                type: ApplicationCommandOptionTypes.CHANNEL,
                required: true
            }
        ]
    },
    {
        name: 'unlock',
        description: 'unlock a channel!',
        type: ApplicationCommandTypes.CHAT_INPUT,
        defaultMemberPermissions: `${Permissions.MANAGE_CHANNELS}`,
        options: [
            {
                name: 'channel',
                description: 'channel to unlock',
                type: ApplicationCommandOptionTypes.CHANNEL,
                required: true
            }
        ]
    },
    {
        name: 'mute',
        description: 'mute a user',
        type: ApplicationCommandTypes.CHAT_INPUT,
        defaultMemberPermissions: `${Permissions.MODERATE_MEMBERS}`,
        options: [
            {
                name: 'user',
                description: 'member to timeout',
                type: ApplicationCommandOptionTypes.USER,
                required: true
            },
            {
                name: 'duration',
                description: 'duration in minutes',
                type: ApplicationCommandOptionTypes.NUMBER,
                required: true
            },
            {
                name: 'reason',
                description: 'reason for muting',
                type: ApplicationCommandOptionTypes.STRING,
                required: false
            }
        ]
    },
    {
        name: 'viewsettings',
        description: 'view settings for this guild',
        type: ApplicationCommandTypes.CHAT_INPUT,
        defaultMemberPermissions: `${Permissions.MANAGE_GUILD}`
    },
    {
        name: "ban",
        description: "ban a user!",
        type: ApplicationCommandTypes.CHAT_INPUT,
        defaultMemberPermissions: `${Permissions.BAN_MEMBERS}`,
        options: [
            {
                name: "user",
                description: "member to ban",
                type: ApplicationCommandOptionTypes.USER,
                required: true
            },
            {
                name: "reason",
                description: "reason for banning",
                type: ApplicationCommandOptionTypes.STRING,
                required: false
            }
        ]
    },
    {
        name: "kick",
        description: "kick a user!",
        type: ApplicationCommandTypes.CHAT_INPUT,
        defaultMemberPermissions: `${Permissions.MODERATE_MEMBERS}`,
        options: [
            {
                name: "user",
                description: "member to kick",
                type: ApplicationCommandOptionTypes.USER,
                required: true
            },
            {
                name: "reason",
                description: "reason for kicking",
                type: ApplicationCommandOptionTypes.STRING,
                required: false
            }
        ]
    },
    {
        name: "unban",
        description: "unban someone",
        type: ApplicationCommandTypes.CHAT_INPUT,
        defaultMemberPermissions: `${Permissions.BAN_MEMBERS}`,
        options: [
            {
                name: "user",
                description: "ID of user to unban",
                type: ApplicationCommandOptionTypes.STRING,
                required: true
            }
        ]
    },
    {
        name: 'warns',
        description: 'warn commands',
        type: ApplicationCommandTypes.CHAT_INPUT,
        options: [
            {
                name: 'setup',
                description: 'Setup Warn System',
                type: ApplicationCommandOptionTypes.SUB_COMMAND,
                defaultMemberPermissions: `${Permissions.MANAGE_GUILD}`,
                options: [
                    {
                        name: 'mutelimit',
                        description: 'warn threshold for muting',
                        type: ApplicationCommandOptionTypes.NUMBER,
                        required: false
                    },
                    {
                        name: 'kicklimit',
                        description: 'warn threshold for kicking',
                        type: ApplicationCommandOptionTypes.NUMBER,
                        required: false
                    },
                    {
                        name: 'banlimit',
                        description: 'warn threshold for banning',
                        type: ApplicationCommandOptionTypes.NUMBER,
                        required: false
                    },
                    {
                        name: 'onspam',
                        description: 'warn on antispam detection',
                        type: ApplicationCommandOptionTypes.BOOLEAN,
                        required: false
                    },
                    {
                        name: 'muteduration',
                        description: 'duration for mute',
                        type: ApplicationCommandOptionTypes.NUMBER,
                        required: false
                    }
                ]
            },
            {
                name: 'add',
                description: 'Warn Someone',
                type: ApplicationCommandOptionTypes.SUB_COMMAND,
                defaultMemberPermissions: `${Permissions.MANAGE_GUILD}`,
                options: [
                    {
                        name: 'user',
                        description: 'user to warn',
                        type: ApplicationCommandOptionTypes.USER,
                        required: true
                    }
                ]
            },
            {
                name: 'remove',
                description: 'remove a warn',
                type: ApplicationCommandOptionTypes.SUB_COMMAND,
                defaultMemberPermissions: `${Permissions.MANAGE_GUILD}`,
                options: [
                    {
                        name: 'user',
                        description: 'user to remove warn from',
                        type: ApplicationCommandOptionTypes.USER,
                        required: true
                    }
                ]
            },
            {
                name: 'reset',
                description: 'reset warns settings',
                type: ApplicationCommandOptionTypes.SUB_COMMAND,
                defaultMemberPermissions: `${Permissions.MANAGE_GUILD}`,
            },
            {
                name: 'resetwarns',
                description: 'reset warns for a user',
                type: ApplicationCommandOptionTypes.SUB_COMMAND,
                defaultMemberPermissions: `${Permissions.MANAGE_GUILD}`,
                options: [
                    {
                        name: 'user',
                        description: 'user to reset warns for',
                        type: ApplicationCommandOptionTypes.USER,
                        required: true
                    }
                ]
            },
            {
                name: 'view',
                description: 'view warns for a user',
                type: ApplicationCommandOptionTypes.SUB_COMMAND,
                options: [
                    {
                        name: 'user',
                        description: 'user to view warns for',
                        type: ApplicationCommandOptionTypes.USER,
                        required: true
                    }
                ]
            }
        ]
    },
    {
        name: 'antispam',
        description: 'antispam commands',
        type: ApplicationCommandTypes.CHAT_INPUT,
        options: [
            {
                name: 'setup',
                description: 'setup antispam',
                type: ApplicationCommandOptionTypes.SUB_COMMAND,
                defaultMemberPermissions: `${Permissions.MANAGE_GUILD}`,
                options: [
                    {
                        name: 'messagecount',
                        description: 'message count before checking',
                        type: ApplicationCommandOptionTypes.NUMBER,
                        required: true
                    },
                    {
                        name: 'interval',
                        description: 'time in seconds for message count limit',
                        type: ApplicationCommandOptionTypes.NUMBER,
                        required: true
                    },
                    {
                        name: 'setting',
                        description: 'on or off?',
                        type: ApplicationCommandOptionTypes.BOOLEAN,
                        required: true
                    }
                ]
            },
            {
                name: 'reset',
                description: 'reset antispam',
                type: ApplicationCommandOptionTypes.SUB_COMMAND,
                defaultMemberPermissions: `${Permissions.MANAGE_GUILD}`
            },
            {
                name: 'addexception',
                description: 'add an exception to antispam',
                type: ApplicationCommandOptionTypes.SUB_COMMAND,
                defaultMemberPermissions: `${Permissions.MANAGE_GUILD}`,
                options: [
                    {
                        name: 'id',
                        description: 'id of user, channel, or role',
                        type: ApplicationCommandOptionTypes.MENTIONABLE,
                        required: true
                    }
                ]
            },
            {
                name: 'removeexception',
                description: 'remove an exception from antispam',
                type: ApplicationCommandOptionTypes.SUB_COMMAND,
                defaultMemberPermissions: `${Permissions.MANAGE_GUILD}`,
                options: [
                    {
                        name: 'id',
                        description: 'id of user, channel, or role',
                        type: ApplicationCommandOptionTypes.MENTIONABLE,
                        required: true
                    }
                ]
            }
        ]
    },
    {
        name: 'admin',
        description: 'bot owner commands',
        type: ApplicationCommandTypes.CHAT_INPUT,
        options: [
            {
                name: 'stats',
                description: 'see resource stats of the bot',
                type: ApplicationCommandOptionTypes.SUB_COMMAND
            },
            {
                name: 'eval',
                description: 'evaluate some JS code',
                type: ApplicationCommandOptionTypes.SUB_COMMAND,
                options: [
                    {
                        name: 'code',
                        description: 'code to eval',
                        type: ApplicationCommandOptionTypes.STRING,
                        required: true
                    }
                ]
            },
            {
                name: 'guilds',
                description: 'see bot guilds',
                type: ApplicationCommandOptionTypes.SUB_COMMAND
            },
            {
                name: 'getguild',
                description: 'get guild',
                type: ApplicationCommandOptionTypes.SUB_COMMAND,
                options: [
                    {
                        name: 'guild',
                        description: 'guild id',
                        type: ApplicationCommandOptionTypes.STRING,
                        required: true
                    }
                ]
            }
        ]
    }
];

export default commands;