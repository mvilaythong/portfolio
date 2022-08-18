const dealCards = (arr) => {

    let player = []
    let computer = []

    arr.forEach((card, index) => {

        if(index % 2 == 0){
            player.push(card)
        } else {
            computer.push(card)
        }
    })

    return { player, computer }
}

const updateValue = (arr) => {

    let updatedArr = arr.map((card) => {

        switch(card.value){
            case "JACK":
                card.value = 11
                break
            case "QUEEN":
                card.value = 12
                break
            case "KING":
                card.value = 13
                break
            case "ACE":
                card.value = 14
                break
            default:
                card.value = Number(card.value)
        }
        
        return card

    })

    return updatedArr

}

const sortHand = (a, b) => {
    return a.value - b.value
}

module.exports = {
    dealCards,
    updateValue,
    sortHand
}