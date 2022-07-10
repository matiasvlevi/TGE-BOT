import CONFIG from './config'
import commands from './commands/index'

import Logger from './logger'
import { isSelf } from './utils/isSelf'
import { parse, ParseResult } from './utils/parse'

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
	if (commands[res.name] === undefined) {
		msg.channel.send(`La commande \`${res.name}\` n'existe pas, voir \`${CONFIG.PREFIX}help\``);
		return;
	}
	// Run the command
	commands[res.name].action(msg, res.args);
	Logger.command(msg);
});

bot.login(CONFIG.TOKEN);
