let people = [3,2,1,3]
let value = 4

//Calculate number of boats to carry ppl. Each boat 2 ppl and weight< limit


let maxBoats = (arr, limit) =>{

    arr.sort((a,b)=> a-b )


    let heavyP = arr.length -1
    let lightP = 0

    let boats = 0
while (heavyP >= lightP){
    if(arr[heavyP] + arr[lightP] <= limit){
        
        lightP++
        heavyP --
    }else {
        
        heavyP --
    }
    boats++
}
return boats


}

console.log(maxBoats(people, value))