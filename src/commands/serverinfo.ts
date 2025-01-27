import { Message } from "revolt.js/dist/maps/Messages";
import { strings } from "../i18n/en_GB";

export const name = "serverinfo";
export const aliases = ["si"];
export const description = "Shows information about the server.";
export const developer = false;
export const serverOnly = false;

export async function run(msg: Message, args: string[]) {

const server = msg.channel?.server;
	msg.channel?.sendMessage({
		content: " ",
		embeds: [
			{
				type: "Text",
				title: "Server Info:",
				description: `
**Server Name:** \`${server?.name}\`\n**Server ID:** \`${server?._id}\`\n`
            + `**Server Description:** \`${server?.description}\`\n`
            + `**Owner:** \`${server?.owner}\`\n`
            + `**Roles:** \`${Object.keys(server?.roles || []).length}\`
`,
				colour: strings.embeds.accent,
            },
		],
	}).catch(e => {
  console.error('' + e);
  msg.reply('Something went wrong: 🔒 Missing permission');
    });
}
;