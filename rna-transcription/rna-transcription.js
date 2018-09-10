let transcriptions = {
    C: 'G', 
    G: 'C', 
    A: 'U',
    T: 'A'
}

let toRna = (DNA) => {
    let arr = DNA.split('')
    return arr.map((nucleotide) => {
        if (!transcriptions[nucleotide]) {
            throw Error('Invalid input DNA.')
        }
        else {
             return transcriptions[nucleotide]
        }
    }).join('')
}

export {toRna}