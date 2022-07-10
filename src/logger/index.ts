import { Message } from 'discord.js'
import { appendFileSync } from 'fs'

class Logger {
	constructor() {}
	static getDate() {
		let d = new Date();
		return `${d.getDay()}-${d.getMonth()}-${d.getFullYear()}`
	}

	static log(text:string) {
		console.log(text);
		appendFileSync(`./logs/log-${Logger.getDate()}.log`, `${text}\n`);
	} 

	static command(msg: Message) {
		let content = `[${msg.author.username}] ${msg.content}`;
		console.log(content);
		appendFileSync(`./logs/log-${Logger.getDate()}.log`, `${content}\n`);
	}
}

export default Logger;
