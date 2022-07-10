import { Message } from 'discord.js'

type Command = {
	permissions: string[]
	action: (msg:Message, args: string[]) => void;
};

type CommandMap = {
	[key: string]: Command;
};

const commands:CommandMap = {
	help: {
		permissions: ["ALL"],
		action: (msg: Message, args:string[]) => {
			msg.channel.send("HELP MENU");	
		}
	},
	horraire: {
		permissions: ["ALL"],
		action: (msg: Message, args:string[]) => {
			msg.channel.send("Horraire command");	
		}
	}
};

export default commands;
