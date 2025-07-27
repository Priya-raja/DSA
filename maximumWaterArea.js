let height = [5,6,7,8,3,4,9]


let maxAreaFunction = (arr)=>{

    let l = 0;
    let r = (arr.length) - 1

    let maxArea = 0

    while( l < r){

        maxArea = Math.max((Math.min(arr[l], arr[r]) * (r- l)), maxArea)
        console.log(arr[l],arr[r], r-l)

        if(arr[l] < arr[r]){
            l++
        }else {
            r--
        }
       
    }
     
    return maxArea

}

console.log(maxAreaFunction(height))