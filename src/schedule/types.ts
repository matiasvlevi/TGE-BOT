export type ScheduleDay = boolean[];

export type Room = {
	raw: {[key: string]: ScheduleDay };
	imagePath: string;
}

export type Schedule = {
	[key:string]: Room
};
