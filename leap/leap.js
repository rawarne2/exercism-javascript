class Year  {
    constructor(date) {
        this.date = date
    }
    isLeap() {
        return ((this.date % 4 === 0) && (this.date % 100 !== 0)) || (this.date % 400 == 0)
    }
}

export default Year