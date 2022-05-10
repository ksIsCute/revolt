import { Message } from "revolt.js/dist/maps/Messages";
import { strings } from "../i18n/en_GB";

export const name = "stats";
export const aliases = ["info"];
export const description = "stats!";
export const category = "Misc";
export const developer = false;
export const serverOnly = false;
export async function run(msg, args, client) {

 msg.channel?.sendMessage({
        content: " ",
        embeds: [
            {
                type: "Text",
                title: `Stats:`,
                description: (`
**Server**\n\`${msg.client.servers.size}\`\n**Users (Unavailable)**\n\`Null\`
`),
                colour: strings.embeds.accent,
            },
        ]
    }).catch(err => {
            // msg.channel?.sendMessage("# Permission error\nMake sure the bot has a role with the Manage Channels permission." + err);
                });
}
;