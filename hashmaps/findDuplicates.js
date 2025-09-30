function findDuplicates(arr) {
    let seen = {};

    let duplicates = []

    for (let char of arr){
        if (seen[char]){
            duplicates.push(char)
        }
        else {
            seen[char] = true
        }
    }
    return duplicates
}

console.log(findDuplicates([1,2,3,4,5,1,2,3]))