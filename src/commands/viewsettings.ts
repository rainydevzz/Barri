import { ExtInteraction } from "../types/extinteraction";

export async function execute(interaction: ExtInteraction) {
    await interaction.defer(64);
    let wres = await interaction.client.db.warnsys.findFirst({where: {guild: interaction.guildID}});
    let sres = await interaction.client.db.antispam.findFirst({where: {guild: interaction.guildID}});
    let em1: any = {title: "No data for warn system"};
    let em2: any = {title: "No data for antispam system"};

    if(wres) {
        em1 = {
            title: "Warn System",
            fields: [
                {
                    name: "Kick Limit",
                    value: `${wres.kicklimit}` || "not set"
                },
                {
                    name: "Ban Limit",
                    value: `${wres.banlimit}` || "not set"
                },
                {
                    name: "Timeout Duration",
                    value: `${(wres.duration / 60000)}` || "not set"
                },
                {
                    name: "Warn On Spam",
                    value: `${wres.onspam}` || "not set"
                }
            ],
            color: 0x0000ff
        }
    }

    if(sres) {
        em2 = {
            title: "Antispam System",
            fields: [
                {
                    name: "Interval",
                    value: `${sres.interval / 1000}` || "not set"
                },
                {
                    name: "Message Limit",
                    value: `${sres.messagecount}` || "not set"
                },
                {
                    name: "On?",
                    value: `${sres.setting}` || "not set"
                }
            ],
            color: 0x0000ff
        }
    }

    await interaction.createFollowup({embeds: [em1, em2], content: "-1 or other unfamiliar numbers indicate no value has been set."})
}