export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () => 
	Array.from(Array(STAGE_HEIGHT), () => 
		new Array(STAGE_WIDTH).fill([0,'clear'])
	);


	export const checkCollision = (player, stage, {x: moveX, y:moveY})=>{

		for(let y = 0; y < player.tetromino.length; y++){
			for(let x = 0; x < player.tetromino[y].length; x++){

				//Check we are on the actual tetromino cell
				if (player.tetromino[y][x] !== 0){
					//Check intended move to be inside the actual stage area height
					if(
					!stage[y + player.pos.y + moveY] || 
					//Check intented move to be inside the actual stage area width
					!stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||

					//Check that the cell we are moving to isnt set to clear
					stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !== 'clear'
					) {
					return true;
					}
				}
			}
		}
	};
