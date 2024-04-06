const heights2 = [167, 190, 120, 165, 137];

function lowestHeight(heights) {
    let lowest = heights[0];
    for(const height of heights ){
    
        if(height < lowest){
            lowest = height;
        }
    }
    return lowest;
}

console.log(lowestHeight(heights2));
