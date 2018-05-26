
var x = {
	y: 1,
	x: 2
};
var r = {
	x: 1,
	y: 9
};
var maze = [
				[1,1,1,1,1,1,1,1,1,1,1],
				[1,0,0,1,0,1,0,0,0,0,1],
				[1,0,1,1,0,1,0,1,0,0,1],
				[1,0,0,1,0,1,0,1,0,1,1],
				[1,1,0,1,0,1,1,1,0,1,1],
				[1,0,0,0,0,0,0,0,0,0,1],
				[1,1,1,1,1,0,1,1,1,1,1],
				[1,0,0,0,0,0,0,0,0,0,1],
				[1,0,1,1,1,1,1,1,1,0,1],
				[1,0,1,0,0,0,0,0,0,0,1],
				[1,1,1,1,1,1,1,1,1,1,1]
			]

function printMaze(maze,x,r) {
	maze[r.y][r.x] = "r";
	maze[x.y][x.x] = "x";
	maze.forEach((row,i) => {
		let str = '';
		maze.forEach((column,j) => {
			str += maze[i][j] + '  ';
		})
		console.log(str + '\n')	
	})

}
printMaze(maze,x,r)

console.log(maze.length)