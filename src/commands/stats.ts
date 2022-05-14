import { Message } from "revolt.js/dist/maps/Messages";
import { strings } from "../i18n/en_GB";

export const name = "stats";
export const aliases = ["info"];
export const description = "stats!";
export const category = "Misc";
export const developer = false;
export const serverOnly = false;
export async function run(msg, args, client) {

  const avatarUrl = `https://autumn.revolt.chat/avatars/${msg.author?.avatar?._id}/${msg.author?.avatar?.filename}`;
 msg.channel?.sendMessage({
        content: " ",
        embeds: [
            {
                type: "Text",
                title: `Stats:`,
                icon_url: `${avatarUrl}`,
                description: (`
**Server**\n\`${msg.client.servers.size}\`\n**Users (Unavailable)**\n\`Null\`
`),
                colour: strings.embeds.accent,
            },
        ]
    }).catch(e => {
  console.error('' + e);
  msg.reply('Something went wrong: 🔒 Missing permission');
    });
}
;