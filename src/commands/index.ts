import { scheduleCommand } from './schedule'
import CONFIG from '../config'

import { Message, MessageEmbed } from 'discord.js'

type Command = {
	permissions: string[],
	description: string,
	action: (msg:Message, args: string[]) => void;
};

type CommandMap = {
	[key: string]: Command;
};

const commands:CommandMap = {
	help: {
		permissions: ["ALL"],
		description: "Affiche ce menu",
		action: (msg: Message, args:string[]) => {
			let content = [];
			for (let key in commands) {
				content.push({
					name: `${CONFIG.PREFIX}${key}`,
					value: commands[key].description
				});
			}
			let helpmsg = new MessageEmbed()
				.setTitle('Menu help')
				.addFields(...content);
				
			msg.channel.send({ embeds: [helpmsg]});
		}
	},
	horraire: {
		permissions: ["ALL"],
		description: `Affiche l'horraire d'un local de la technique\nex: \`${CONFIG.PREFIX}horraire C3537\``,
		action: scheduleCommand
	}
};

export default commands;
