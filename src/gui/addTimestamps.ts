import {
	BEGIN_TIME,
	PERIOD_DURATION,
	PERIOD_BREAK,
	TIMESTAMP_SIZE,
	COLORS
} from './constants'

export default function addTimestamps(
	ctx:any,
	cellWidth:number,
	cellHeight:number,
	cellQuantity: number
) {
	ctx.strokeStyle = COLORS.black;
	ctx.lineWidth = 2;

	ctx.fillStyle = COLORS.white;
	ctx.textAlign = 'right';
	ctx.font = '10px Arial';
	let begin = new Date(BEGIN_TIME.getTime());	
	for (let i = 0; i < cellQuantity; i++) {
		let end = new Date();
		end.setTime(begin.getTime() + (PERIOD_DURATION * 60000));
			// Convert times to strings
		let begintime = begin.toLocaleTimeString('default', {
		    hourCycle: 'h23',	
			hour: '2-digit',
			minute: '2-digit'
		});
		let endtime = end.toLocaleTimeString('default', {
			hourCycle: 'h23',
			hour: '2-digit',
			minute: '2-digit'
		});
			// ctx
		ctx.fillText(begintime, TIMESTAMP_SIZE - 10, i*cellHeight + cellHeight + cellHeight/2.6);
		ctx.fillText(endtime, TIMESTAMP_SIZE - 10, i*cellHeight + cellHeight + 11 + cellHeight/2.6);
		begin.setTime(end.getTime() + (PERIOD_BREAK * 60000));
	}		
	return ctx;
} 

