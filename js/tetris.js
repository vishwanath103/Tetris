var tetris = {};

tetris.drawPlayField = function(){
	for(var row=0;row<22;row++){
		var rowElement = $("<tr class = '"+row+"'>");
		$('#playfield').append(rowElement);
		for(var col=0;col<10;col++){
			var colElement = $("<td id = '" + col + "'>");
			$('.'+row).append(colElement);
		}
	}
}

tetris.currentCoor = [{row: 1, col: 1},
					  {row: 1, col: 2},
					  {row: 2, col: 1},
 					  {row: 2, col: 2}];

tetris.fillCells = function(coordinates,fillColor){
	for(var i=0;i<coordinates.length;i++){
		var row = coordinates[i].row;
		var col = coordinates[i].col;
		var $coor = $('.'+row).find('#'+col);
		$coor.attr('bgcolor',fillColor);
	}
}

tetris.move = function(direction){
	var reverse = false;
	  this.fillCells(this.currentCoor,'');
	  for(var i=0; i<this.currentCoor.length; i++){
	  	if(direction === 'right'){
	  		this.currentCoor[i].col++;
	  		if(this.currentCoor[i].col>9)
	  			reverse = true;
	  	}
	  	else if(direction === 'left'){
	  		this.currentCoor[i].col--;
	  		if(this.currentCoor[i].col<0)
	  			reverse = true;
	  	}
	  }
	  this.fillCells(this.currentCoor,'blue');

	  if(reverse && direction == 'right')
	  	tetris.move('left');
	  else if (reverse && direction == 'left') 
	  	tetris.move('right');
}

$(document).ready(function(){
	tetris.drawPlayField();
	tetris.fillCells(tetris.currentCoor,'blue');
	$(document).keydown(function(e){
		if(e.keyCode == 39)
			tetris.move('right');
		else if(e.keyCode == 37)
			tetris.move('left');
	})
})