// solution credit : https://www.youtube.com/watch?v=CTqBOiciqc4

const updateMatrix = function(mat) {
    // let mat = [[0,0,0],[0,1,0],[1,1,1]];
    let dirs  = [[0,-1], [0,1],[1,0], [-1,0]];
    let queue = [];

    for(let i = 0; i < mat.length; i++){
        for ( let j = 0; j <mat[0].length; j++){
          if(mat[i][j] === 0){
            queue.push([i,j,0]); // third param is distance
          }  
          else {
            mat[i][j] = Infinity; // all non-zero nums are set to a huge value to check to see if count is less than this, in a huge grid distance could be v large
          }
        }
    }

    // bfs
    while (queue.length) {
        let [currX, currY, dist] = queue.shift(); // a fancy way of declaring 3 vars from the position de-queued

        if (mat[currX][currY] > dist) {
            mat[currX][currY]  = dist;
        }

        for(let [x,y] of dirs){
            let [nextX, nextY, nextVal] = [currX+x, currY+y, dist +1]
        
            if(nextX <  0 || nextX  > mat.length - 1 || nextY < 0 || nextY > mat[0].length-1){ // check out of bounds
                continue;
            }

            if(mat[nextX][nextY] === Infinity) { // found a 1 ..perform bfs on this element by pushing on to q
                queue.push([nextX, nextY, nextVal])
            }
        }
    }

    return mat
}

updateMatrix([[0,0,0],[0,1,0],[1,1,1]]);