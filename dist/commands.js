Object.defineProperty(exports, "__esModule", { value: true });
const oceanic_js_1 = require("oceanic.js");
const commands = [
    {
        name: 'ping',
        description: 'ping the bot!',
        type: oceanic_js_1.ApplicationCommandTypes.CHAT_INPUT
    },
    {
        name: 'about',
        description: 'see some info about the bot',
        type: oceanic_js_1.ApplicationCommandTypes.CHAT_INPUT
    },
    {
        name: 'help',
        description: 'see the bot commands!',
        type: oceanic_js_1.ApplicationCommandTypes.CHAT_INPUT,
        options: [
            {
                name: 'command',
                description: 'see a specific command info!',
                type: oceanic_js_1.ApplicationCommandOptionTypes.STRING,
                required: false
            }
        ]
    },
    {
        name: 'lock',
        description: 'lock a channel!',
        type: oceanic_js_1.ApplicationCommandTypes.CHAT_INPUT,
        default_member_permissions: `${oceanic_js_1.Permissions.MANAGE_CHANNELS}`,
        options: [
            {
                name: 'channel',
                description: 'channel to lock',
                type: oceanic_js_1.ApplicationCommandOptionTypes.CHANNEL,
                required: true
            }
        ]
    },
    {
        name: 'unlock',
        description: 'unlock a channel!',
        type: oceanic_js_1.ApplicationCommandTypes.CHAT_INPUT,
        default_member_permissions: `${oceanic_js_1.Permissions.MANAGE_CHANNELS}`,
        options: [
            {
                name: 'channel',
                description: 'channel to unlock',
                type: oceanic_js_1.ApplicationCommandOptionTypes.CHANNEL,
                required: true
            }
        ]
    },
    {
        name: 'mute',
        description: 'mute a user',
        type: oceanic_js_1.ApplicationCommandTypes.CHAT_INPUT,
        default_member_permissions: `${oceanic_js_1.Permissions.MODERATE_MEMBERS}`,
        options: [
            {
                name: 'user',
                description: 'member to timeout',
                type: oceanic_js_1.ApplicationCommandOptionTypes.USER,
                required: true
            },
            {
                name: 'duration',
                description: 'duration in minutes',
                type: oceanic_js_1.ApplicationCommandOptionTypes.NUMBER,
                required: true
            },
            {
                name: 'reason',
                description: 'reason for muting',
                type: oceanic_js_1.ApplicationCommandOptionTypes.STRING,
                required: false
            }
        ]
    },
    {
        name: 'unmute',
        description: 'unmute a user',
        type: oceanic_js_1.ApplicationCommandTypes.CHAT_INPUT,
        default_member_permissions: `${oceanic_js_1.Permissions.MODERATE_MEMBERS}`,
        options: [
            {
                name: 'user',
                description: 'user to unmute',
                type: oceanic_js_1.ApplicationCommandOptionTypes.USER,
                required: true
            }
        ]
    },
    {
        name: 'viewsettings',
        description: 'view settings for this guild',
        type: oceanic_js_1.ApplicationCommandTypes.CHAT_INPUT,
        default_member_permissions: `${oceanic_js_1.Permissions.MANAGE_GUILD}`
    },
    {
        name: "ban",
        description: "ban a user!",
        type: oceanic_js_1.ApplicationCommandTypes.CHAT_INPUT,
        default_member_permissions: `${oceanic_js_1.Permissions.BAN_MEMBERS}`,
        options: [
            {
                name: "user",
                description: "member to ban",
                type: oceanic_js_1.ApplicationCommandOptionTypes.USER,
                required: true
            },
            {
                name: "reason",
                description: "reason for banning",
                type: oceanic_js_1.ApplicationCommandOptionTypes.STRING,
                required: false
            }
        ]
    },
    {
        name: "kick",
        description: "kick a user!",
        type: oceanic_js_1.ApplicationCommandTypes.CHAT_INPUT,
        default_member_permissions: `${oceanic_js_1.Permissions.MODERATE_MEMBERS}`,
        options: [
            {
                name: "user",
                description: "member to kick",
                type: oceanic_js_1.ApplicationCommandOptionTypes.USER,
                required: true
            },
            {
                name: "reason",
                description: "reason for kicking",
                type: oceanic_js_1.ApplicationCommandOptionTypes.STRING,
                required: false
            }
        ]
    },
    {
        name: "unban",
        description: "unban someone",
        type: oceanic_js_1.ApplicationCommandTypes.CHAT_INPUT,
        default_member_permissions: `${oceanic_js_1.Permissions.BAN_MEMBERS}`,
        options: [
            {
                name: "user",
                description: "ID of user to unban",
                type: oceanic_js_1.ApplicationCommandOptionTypes.STRING,
                required: true
            }
        ]
    },
    {
        name: 'warns',
        description: 'warn commands',
        type: oceanic_js_1.ApplicationCommandTypes.CHAT_INPUT,
        options: [
            {
                name: 'setup',
                description: 'Setup Warn System',
                type: oceanic_js_1.ApplicationCommandOptionTypes.SUB_COMMAND,
                default_member_permissions: `${oceanic_js_1.Permissions.MANAGE_GUILD}`,
                options: [
                    {
                        name: 'mutelimit',
                        description: 'warn threshold for muting',
                        type: oceanic_js_1.ApplicationCommandOptionTypes.NUMBER,
                        required: false
                    },
                    {
                        name: 'kicklimit',
                        description: 'warn threshold for kicking',
                        type: oceanic_js_1.ApplicationCommandOptionTypes.NUMBER,
                        required: false
                    },
                    {
                        name: 'banlimit',
                        description: 'warn threshold for banning',
                        type: oceanic_js_1.ApplicationCommandOptionTypes.NUMBER,
                        required: false
                    },
                    {
                        name: 'onspam',
                        description: 'warn on antispam detection',
                        type: oceanic_js_1.ApplicationCommandOptionTypes.BOOLEAN,
                        required: false
                    },
                    {
                        name: 'muteduration',
                        description: 'duration for mute',
                        type: oceanic_js_1.ApplicationCommandOptionTypes.NUMBER,
                        required: false
                    }
                ]
            },
            {
                name: 'add',
                description: 'Warn Someone',
                type: oceanic_js_1.ApplicationCommandOptionTypes.SUB_COMMAND,
                default_member_permissions: `${oceanic_js_1.Permissions.MANAGE_GUILD}`,
                options: [
                    {
                        name: 'user',
                        description: 'user to warn',
                        type: oceanic_js_1.ApplicationCommandOptionTypes.USER,
                        required: true
                    }
                ]
            },
            {
                name: 'remove',
                description: 'remove a warn',
                type: oceanic_js_1.ApplicationCommandOptionTypes.SUB_COMMAND,
                default_member_permissions: `${oceanic_js_1.Permissions.MANAGE_GUILD}`,
                options: [
                    {
                        name: 'user',
                        description: 'user to remove warn from',
                        type: oceanic_js_1.ApplicationCommandOptionTypes.USER,
                        required: true
                    }
                ]
            },
            {
                name: 'reset',
                description: 'reset warns settings',
                type: oceanic_js_1.ApplicationCommandOptionTypes.SUB_COMMAND,
                default_member_permissions: `${oceanic_js_1.Permissions.MANAGE_GUILD}`,
            },
            {
                name: 'resetwarns',
                description: 'reset warns for a user',
                type: oceanic_js_1.ApplicationCommandOptionTypes.SUB_COMMAND,
                default_member_permissions: `${oceanic_js_1.Permissions.MANAGE_GUILD}`,
                options: [
                    {
                        name: 'user',
                        description: 'user to reset warns for',
                        type: oceanic_js_1.ApplicationCommandOptionTypes.USER,
                        required: true
                    }
                ]
            },
            {
                name: 'view',
                description: 'view warns for a user',
                type: oceanic_js_1.ApplicationCommandOptionTypes.SUB_COMMAND,
                options: [
                    {
                        name: 'user',
                        description: 'user to view warns for',
                        type: oceanic_js_1.ApplicationCommandOptionTypes.USER,
                        required: true
                    }
                ]
            }
        ]
    },
    {
        name: 'antispam',
        description: 'antispam commands',
        type: oceanic_js_1.ApplicationCommandTypes.CHAT_INPUT,
        options: [
            {
                name: 'setup',
                description: 'setup antispam',
                type: oceanic_js_1.ApplicationCommandOptionTypes.SUB_COMMAND,
                default_member_permissions: `${oceanic_js_1.Permissions.MANAGE_GUILD}`,
                options: [
                    {
                        name: 'messagecount',
                        description: 'message count before checking',
                        type: oceanic_js_1.ApplicationCommandOptionTypes.NUMBER,
                        required: true
                    },
                    {
                        name: 'interval',
                        description: 'time in seconds for message count limit',
                        type: oceanic_js_1.ApplicationCommandOptionTypes.NUMBER,
                        required: true
                    },
                    {
                        name: 'setting',
                        description: 'on or off?',
                        type: oceanic_js_1.ApplicationCommandOptionTypes.BOOLEAN,
                        required: true
                    }
                ]
            },
            {
                name: 'reset',
                description: 'reset antispam',
                type: oceanic_js_1.ApplicationCommandOptionTypes.SUB_COMMAND,
                default_member_permissions: `${oceanic_js_1.Permissions.MANAGE_GUILD}`
            },
            {
                name: 'addexception',
                description: 'add an exception to antispam',
                type: oceanic_js_1.ApplicationCommandOptionTypes.SUB_COMMAND,
                default_member_permissions: `${oceanic_js_1.Permissions.MANAGE_GUILD}`,
                options: [
                    {
                        name: 'id',
                        description: 'id of user, channel, or role',
                        type: oceanic_js_1.ApplicationCommandOptionTypes.MENTIONABLE,
                        required: true
                    }
                ]
            },
            {
                name: 'removeexception',
                description: 'remove an exception from antispam',
                type: oceanic_js_1.ApplicationCommandOptionTypes.SUB_COMMAND,
                default_member_permissions: `${oceanic_js_1.Permissions.MANAGE_GUILD}`,
                options: [
                    {
                        name: 'id',
                        description: 'id of user, channel, or role',
                        type: oceanic_js_1.ApplicationCommandOptionTypes.MENTIONABLE,
                        required: true
                    }
                ]
            }
        ]
    },
    {
        name: 'admin',
        description: 'bot owner commands',
        type: oceanic_js_1.ApplicationCommandTypes.CHAT_INPUT,
        options: [
            {
                name: 'stats',
                description: 'see resource stats of the bot',
                type: oceanic_js_1.ApplicationCommandOptionTypes.SUB_COMMAND
            },
            {
                name: 'eval',
                description: 'evaluate some JS code',
                type: oceanic_js_1.ApplicationCommandOptionTypes.SUB_COMMAND,
                options: [
                    {
                        name: 'code',
                        description: 'code to eval',
                        type: oceanic_js_1.ApplicationCommandOptionTypes.STRING,
                        required: true
                    }
                ]
            },
            {
                name: 'guilds',
                description: 'see bot guilds',
                type: oceanic_js_1.ApplicationCommandOptionTypes.SUB_COMMAND
            },
            {
                name: 'getguild',
                description: 'get guild',
                type: oceanic_js_1.ApplicationCommandOptionTypes.SUB_COMMAND,
                options: [
                    {
                        name: 'guild',
                        description: 'guild id',
                        type: oceanic_js_1.ApplicationCommandOptionTypes.STRING,
                        required: true
                    }
                ]
            }
        ]
    }
];
exports.default = commands;
