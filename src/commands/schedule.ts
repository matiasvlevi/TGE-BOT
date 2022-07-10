import CONFIG from '../config'
import SCHEDULE from '../schedule'

import { Message, MessageAttachment } from 'discord.js'

export function scheduleCommand(msg: Message, args: string[]) {
	// Abort if no room specified
	if (args[0] === undefined) {
		msg.channel.send(`Veuilliez specifier un local. ex: \`${CONFIG.PREFIX}horraire C3537\``);
		return;	
	}

	// Abort if room not found
	if (SCHEDULE[args[0]] === undefined) {

		// Check if room with block adress is present
		if (SCHEDULE[`C${args[0]}`] === undefined) {
			msg.channel.send(`Votre local spécifiée \`${args[0]}\` n'existe pas`);
			return;
		}
		// Correct the user
		args[0] = `C${args[0]}`
	}

	// Send schedule image which was generated at startup 
	const scheduleImage = new MessageAttachment(SCHEDULE[args[0]].imagePath);

	msg.channel.send({files: [scheduleImage]});
} 
