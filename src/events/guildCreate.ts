import { BotClient } from "../bot";
import { Guild } from "oceanic.js";

export async function execute(bot: BotClient, guild: Guild) {
    try {   
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
                },
                {
                    name: 'Guild ID',
                    value: `${guild.id}`
                }
            ]
        }
        await hook.execute({embeds: [embed]}, process.env.JOIN_HOOK);
    } catch (err) {
        console.error(err);
    }
}

export const name = 'guildCreate';