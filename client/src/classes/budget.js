
class Budget {
    constructor(sections) {
        this.sections = sections
        this.transactions = []
    }

    // Getters

    get maxSpending() {
        return this.sections.reduce((total, section) => total + section.max, 0)
    }

    // Methods

    addTransaction(transaction){
        this.transactions = [...this.transactions, transaction]
    }

    removeTransaction(transaction){
        const index = this.transactions.indexOf(transaction)
        this.transaction = this.transaction.splice(index, 1)
    }
}

export default Budget