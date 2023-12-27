function valid(grid, i, j, num) {
    //check row
    for (var k = 0; k < 9; k++) {
      if (grid[i][k][0] === num && k !== j) {
        return false
      }
    }
    //check column
    for (var k = 0; k < 9; k++) {
      if (grid[k][j][0] === num && k !== i) {
        return false
      }
    }
    //check box
    var boxi = Math.floor(i / 3)
    var boxj = Math.floor(j / 3)
    for (var k = boxi * 3; k < boxi * 3 + 3; k++) {
      for (var l = boxj * 3; l < boxj * 3 + 3; l++) {
        if (grid[k][l][0] === num && k !== i && l !== j) {
          return false
        }
      }
    }
    return true
  }

  
  let digit=[1,2,3,4,5,6,7,8,9]


  function dfs(board,i,j){
    if(i===9){
      return true
    }
    if(j===9){
      return dfs(board,i+1,0)
    }
    let s=new Set(digit)
    while(s.size>0){
      let items=Array.from(s)
      let num=items[Math.floor(Math.random()*items.length)]
      s.delete(num)
      if(valid(board,i,j,num)){
        board[i][j][0]=num
        if(dfs(board,i,j+1)===true){
          return true
        }
        board[i][j][0]=' '
        
      }
    }
    return false
}
function genvalid(){
    let board=[]
    for(let i=0;i<9;i++){
        board[i]=[]
        for(let j=0;j<9;j++){
        board[i][j]=[' ',1]
        }
    }
    dfs(board,0,0)
    return board
}
function makeempty(board){
  let grid = [] //initialize grid
  for (let i = 0; i < 9; i++) {
    grid[i] = []
    for (let j = 0; j < 9; j++) {
      if(Math.random()<0.3){
        grid[i][j] = [' ',0]
      }
      else{
        grid[i][j] = [board[i][j][0],1]
      }
    }
  }
  return grid
}  
  

  function test(board){
    for(let i=0;i<9;i++){
      for(let j=0;j<9;j++){
        if(board[i][j][1]===1) continue
        if(board[i][j][0]===' '){
          return [false,i,j]
        }
        if(valid(board,i,j,board[i][j][0])===false){
          return [false,i,j]
        }
      }
    }
    return [true,0,0]
  }
  export {genvalid,test,makeempty}