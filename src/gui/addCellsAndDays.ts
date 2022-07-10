import {
	TIMESTAMP_SIZE,
	COLORS
} from './constants'

import { Room } from '../schedule/types'

export default function addCellsAndDays(
	ctx:any,
	cellWidth:number,
	cellHeight:number,
	room:Room
) {
	ctx.textAlign = 'center';
	ctx.font = '16px Arial';
	let j = 0;
	for (let day in room.raw) {
		ctx.fillStyle = COLORS.white;
		ctx.fillText(day, j*cellWidth+TIMESTAMP_SIZE+(cellWidth/2), cellHeight/1.45);
		for (let i = 0; i < room.raw[day].length; i++) {	
			ctx.fillStyle = (room.raw[day][i]) ? COLORS.blue : COLORS.darkgrey;
			
			ctx.strokeRect(
				j*cellWidth+TIMESTAMP_SIZE,
				i*cellHeight+cellHeight,
				cellWidth,
				cellHeight
			);
			ctx.fillRect(
				j*cellWidth+TIMESTAMP_SIZE,
				i*cellHeight+cellHeight,
				cellWidth,
				cellHeight
			);

			ctx.fillStyle = COLORS.darkgrey;
			if (room.raw[day][i]) {
				ctx.fillText(
					"Libre",
					j*cellWidth+TIMESTAMP_SIZE+(cellWidth/2),
					i*cellHeight+cellHeight+(cellHeight/1.45)
				);
			}
		}
		j++;
	}
	return ctx;
}


