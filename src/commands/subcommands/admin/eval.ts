import { ExtInteraction } from "../../../types/extinteraction";

export async function execute(interaction: ExtInteraction) {
    if(!interaction.client.isOwner(interaction.user.id)) {
        await interaction.createMessage({content: "This command is for bot owners only.", flags: 64});
        return;
    }

    try {    
        const res = eval(interaction.options.get('code'));
    

        if(res instanceof String) {
            if(res.includes(process.env.TOKEN)) {
                res.replace(process.env.TOKEN, "TOKEN HIDDEN");
            }
        }

        let embed = {
            title: "Eval Complete",
            description: `Result\n\n\`\`\`js\n${res}\`\`\``,
            timestamp: new Date().toISOString(),
            color: 0x00ff00
        }

        await interaction.createMessage({embeds: [embed]});
    } catch(err) {
        await interaction.createMessage({
            embeds: [{
                title: "Error!",
                description: `\`\`\`js\n${err}\`\`\``,
                timestamp: new Date().toISOString(),
                color: 0xff0000
            }]
        });
    }
}   