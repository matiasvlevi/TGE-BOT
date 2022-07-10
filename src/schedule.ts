import { TIMESTAMP_SIZE } from './gui/constants' 

import addCellsAndDays from './gui/addCellsAndDays'
import addTimestamps from './gui/addTimestamps'

import {
	Room,
	ScheduleDay,
	Schedule
} from './schedule/types'

import { readFileSync, writeFileSync } from 'fs'
import { createCanvas } from 'canvas'

export function getSchedule(): Schedule {
	const file = readFileSync('./data/schedule.json', 'utf-8');
	const data:Schedule = JSON.parse(file);

	const width = 600;
	const height = 400;

	let values = Object.values(Object.values(data)[0].raw);

	// cells dimentsions
	const cellWidth = (width-TIMESTAMP_SIZE)/(values.length);
	const cellHeight = height/(values[0].length+1);

	for (let room in data) {
		
		// Create the canvas & context
		const canvas = createCanvas(width, height); 
		let ctx = canvas.getContext('2d');	
		
		// Add gui items to canvas
		ctx = addTimestamps(ctx, cellWidth, cellHeight, values[0].length);
		ctx = addCellsAndDays(ctx, cellWidth, cellHeight, data[room]);

		// Write canvas to buffer
		const buffer = canvas.toBuffer('image/png');	
		const filename = `./data/${room}.png`;
		
		// Save image path to json
		data[room].imagePath = filename;
		
		// Save image to png file
		writeFileSync(filename, buffer);
	}
	writeFileSync('./data/schedule.json',JSON.stringify(data), 'utf-8');
	return data;
}

const SCHEDULE: Schedule = getSchedule();

export default SCHEDULE;
