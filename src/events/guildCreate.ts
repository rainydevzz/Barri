import { BotClient } from "../bot";
import { Guild } from "oceanic.js";

export async function execute(bot: BotClient, guild: Guild) {
    const hook = bot.joinHook;
    let embed = {
        title: `Joined ${guild.name}`,
        thumbnail: {url: guild.iconURL("png")},
        fields: [
            {
                name: 'Owner ID',
                value: `${guild.ownerID}`
            },
            {
                name: 'Members',
                value: `${guild.memberCount}`
            },
            {
                name: 'Created At',
                value: guild.createdAt.toUTCString()
            }
        ]
    }
    await hook.execute({embeds: [embed]}, process.env.JOIN_HOOK);
}

export const name = 'guildCreate';