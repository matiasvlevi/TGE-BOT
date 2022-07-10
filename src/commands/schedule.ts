import CONFIG from '../config'
import SCHEDULE from '../schedule'

import { Message, MessageAttachment } from 'discord.js'

export function scheduleCommand(msg: Message, args: string[]) {
	// Abort if specified class is not found
	if (args[0] === undefined) {
		msg.channel.send(`Veuilliez specifier un local. ex: \`${CONFIG.PREFIX}horraire C3537\``);
		return;	
	}

	if (SCHEDULE[args[0]] === undefined) {
		msg.channel.send(`Votre local spécifiée \`${args[0]}\` n'existe pas`);
		return;
	}

	const scheduleImage = new MessageAttachment(SCHEDULE[args[0]].imagePath);

	msg.channel.send({files: [scheduleImage]});
} 
