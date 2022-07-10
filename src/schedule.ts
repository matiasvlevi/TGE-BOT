import { TIMESTAMP_SIZE, CANVAS_WIDTH, CANVAS_HEIGHT, } from './gui/constants' 

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

	// Get sample room schedule to calculate length
	let values = Object.values(Object.values(data)[0].raw);

	// cells dimentsions
	const cellWidth = (CANVAS_WIDTH-TIMESTAMP_SIZE)/values.length;
	const cellHeight = CANVAS_HEIGHT/(values[0].length+1);

	for (let room in data) {
		
		// Create the canvas & context
		const canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT); 
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

	// Write new json file
	writeFileSync('./data/schedule.json',JSON.stringify(data), 'utf-8');
	return data;
}

const SCHEDULE: Schedule = getSchedule();

export default SCHEDULE;
