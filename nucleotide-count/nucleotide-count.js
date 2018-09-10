// '? C G ?'

let nucleotides = [ 'A', 'C', 'G', 'T' ]


let NucleotideCounts = (DNA) => {
    let counter = [ 0,0,0,0 ]
    let arr = DNA.split('')
    arr.map((val) => {
        if (nucleotides.indexOf(val) === -1){
            throw Error('Invalid nucleotide in strand')
        }
        for (let i = 0; i < nucleotides.length; i++) {
            if(val === nucleotides[i]) {
                counter[i] = counter[i] + 1
            }
        }
    })
    return counter.join(' ')
}

export default NucleotideCounts