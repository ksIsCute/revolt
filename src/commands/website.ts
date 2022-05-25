import { Message } from "revolt.js/dist/maps/Messages";
import { strings } from "../i18n/en_GB";

export const name = "website";
export const aliases = ["web"];
export const description = "The website bot.";
export const category = "Misc";
export const developer = false;
export const serverOnly = false;

export async function run(msg: Message, args: string[]) {
  const avatarUrl = `https://i.imgur.com/3XqncF5.png`;
  msg.channel?.sendMessage({
        content: " ",
        embeds: [
            {
                type: "Text",
                title: "Website:",
                icon_url: `${avatarUrl}`,
                description: `https://remixbot.cf`,
                colour: strings.embeds.accent,
            },
        ]
    }).catch(e => {
  console.error('' + e);
  msg.reply('Something went wrong: 🔒 Missing permission');
    });
}
;