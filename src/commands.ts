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
        default_member_permissions: Permissions.MANAGE_CHANNELS,
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
        default_member_permissions: Permissions.MANAGE_CHANNELS,
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
        default_member_permissions: Permissions.MODERATE_MEMBERS,
        options: [
            {
                name: 'member',
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
        name: "ban",
        description: "ban a user!",
        type: ApplicationCommandTypes.CHAT_INPUT,
        default_member_permissions: Permissions.BAN_MEMBERS,
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
        default_member_permissions: Permissions.MODERATE_MEMBERS,
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
        default_member_permissions: Permissions.BAN_MEMBERS,
        options: [
            {
                name: "user",
                description: "ID of user to unban",
                type: ApplicationCommandOptionTypes.STRING,
                required: true
            }
        ]
    }
];

export default commands;