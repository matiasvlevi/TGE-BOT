import { Client, Message } from 'discord.js'

export function isSelf(msg: Message, bot: Client): boolean {
	return (msg.author.username === bot.user?.username);
}
