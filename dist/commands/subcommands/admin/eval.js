Object.defineProperty(exports, "__esModule", { value: true });
exports.execute = void 0;
async function execute(interaction) {
    if (!interaction.client.isOwner(interaction.user.id)) {
        await interaction.createMessage({ content: "This command is for bot owners only.", flags: 64 });
        return;
    }
    try {
        const res = eval(interaction.options.get('code'));
        let nres = res;
        if (nres.includes(process.env.TOKEN)) {
            nres.replace(process.env.TOKEN, "TOKEN HIDDEN");
        }
        let embed = {
            title: "Eval Complete",
            description: `Result\n\n\`\`\`js\n${nres}\`\`\``,
            timestamp: new Date().toISOString(),
            color: 0x00ff00
        };
        await interaction.createMessage({ embeds: [embed] });
    }
    catch (err) {
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
exports.execute = execute;
