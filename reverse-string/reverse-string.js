// let reverseString = str => {
//     return str.split("").reverse().join("")
// }

//both functions work

let reverseString = str => {
    let arr = str.split("")
    let revArr = []
    for(let i = str.length -1; i >= 0; i--) {
        revArr.push(arr[i])
    }
    return revArr.join("")
}

export default reverseString