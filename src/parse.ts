import CONFIG from './config'
import { Message } from 'discord.js'

export type ParseResult = {
	invalid: boolean;
	name: string;
	args: string[];
}

export function parse(msg: Message): ParseResult {
	// Abort if message is not a command	
	if (msg.content[0] !== CONFIG.PREFIX) return { 
		name: "",
		args: [],
		invalid: true
	}

	// Remove prefix from query
	let content = msg.content.split(CONFIG.PREFIX)[1];
	
	// Get command arguments, and name
	let args = content.split(" ");
	let name = args[0];
	args.splice(0, 1);

	return {
		name,
		args,
		invalid: false
	};
}
