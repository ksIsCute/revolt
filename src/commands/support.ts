import { Message } from "revolt.js/dist/maps/Messages";
import { strings } from "../i18n/en_GB";

export const name = "support";
export const aliases = ["sp"];
export const description = "Support Server.";
export const developer = false;
export const serverOnly = false;

export async function run(msg: Message, args: string[]) {

  const avatarUrl = `https://autumn.revolt.chat/avatars/${msg.author?.avatar?._id}/${msg.author?.avatar?.filename}`;
  msg.channel?.sendMessage({
		content: " ",
		embeds: [
			{
				type: "Text",
				title: "Support:",
        icon_url: `${avatarUrl}`,
				description: `https://app.revolt.chat/invite/qvJEsmPt`,
				colour: strings.embeds.accent,
			},
		],
	}).catch(e => {
  console.error('' + e);
  msg.reply('Something went wrong: 🔒 Missing permission');
    });
}
;