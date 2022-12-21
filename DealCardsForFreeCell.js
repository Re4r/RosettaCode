function FreeCellRNG(seed) {
    return {
        lastNum: seed,
        next() {
            this.lastNum = ((214013 * this.lastNum) + 2531011) % (Math.pow(2, 31));
            return this.lastNum;
        }
    };
};

function getDeck() {
    const ranks = ['A', 'K', 'Q', 'J', 'T', '9', '8', '7', '6', '5', '4', '3', '2', '1'];
    const suits = ['C', 'D', 'H', 'S'];
    const cards = [];

    for (let i = 0; i < ranks.length; i++) {
        for (let j = 0; j < suits.length; j++) {
            cards.push(`${ranks[i]}${suits[j]}`);
        }
    }
    return cards;
};

function dealFreeCell(seed) {
    const rng = FreeCellRNG(seed);
    const deck = getDeck();
    const deltCards = [[], [], [], [], [], [], []];
    let currentColumn = 0;
    let currentRow = 0;
    let rand;
    let temp;
    let card;

    while (deck.length > 0) {
        rand = rng.next() % deck.length;

        temp = deck[deck.length - 1];
        deck[deck.length - 1] = deck[rand];
        deck[rand] = temp;

        card = deck.pop();

        deltCards[currentRow].push(card);
        currentColumn++;

        if (currentColumn === 8) {
            currentColumn = 0;
            currentRow++;
        }
    }
    return deltCards;
};

console.table(dealFreeCell(617));

