import { Message } from "revolt.js/dist/maps/Messages";
import { strings } from "../i18n/en_GB";

export const name = "userinfo";
export const aliases = ["ui"];
export const description = "Shows information about an user.";
export const developer = false;
export const serverOnly = false;

export async function run(msg: Message, args: string[]) {
  const avatarUrl = `https://i.imgur.com/D5ODkAM.png`; 
  const user = msg.author;
    msg.channel?.sendMessage({
        content: " ",
        embeds: [
            {
                type: "Text",
                title: "User Info:",
                icon_url: `${avatarUrl}`,
                description: `**Name:** \`${user?.username}\`\n**UID:** \`${user?._id}\`\n**Status:** \`${user?.status.text}\``,
                colour: strings.embeds.accent,
            },
        ],
    }).catch(e => {
        console.error('' + e);
        msg.reply('Something went wrong: 🔒 Missing permission');
    });
}
;