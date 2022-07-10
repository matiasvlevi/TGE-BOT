import CONFIG from './config'
import commands from './commands/index'
import { isSelf } from './isSelf'
import { parse, ParseResult } from './parse'

import { Client, Message } from 'discord.js'

const bot: Client = new Client({
	intents: ["GUILDS", "GUILD_MESSAGES"] 
});

bot.on('ready',() => {
	console.log(`Bot connected as: ${bot.user?.tag}`);	
});

bot.on('messageCreate', (msg: Message) => {
	// Abort if bot reads its own message
	if (isSelf(msg, bot)) return;

	// Parse input
	const res:ParseResult = parse(msg);	

	// Abort if command could not parse
	if (res.invalid) return;

	// Abort if command doesnt exist
	if (commands[res.name] === undefined) return // INPUT ERROR HANDLING 

	// Run the command
	commands[res.name].action(msg, res.args);
});

bot.login(CONFIG.TOKEN);
