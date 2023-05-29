document.addEventListener('DOMContentLoaded', () => {

    const cardArray = [
        {
            name: 'fries',
            img: 'images/fries.jpg'
        },
        {
            name: 'burger',
            img: 'images/burger.jpg'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.jpeg'
        },
        {
            name: 'icecream',
            img: 'images/icecream.jpg'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
        {
            name: 'fries',
            img: 'images/fries.jpg'
        },
        {
            name: 'burger',
            img: 'images/burger.jpg'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.jpeg'
        },
        {
            name: 'icecream',
            img: 'images/icecream.jpg'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        }

    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []



    //create board
    function createBoard() {
        for (let i=0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/blank.jpg')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    //flip card
    function flipCard() {
        var cardID = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if ( cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    //check for match
    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match!')
            cards[optionOneId].setAttribute('src', 'images/white.jpg')
            cards[optionTwoId].setAttribute('src', 'images/white.jpg')
            cardsWon.push(cardsChoosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/black.jpg')
            cards[optionTwoId].setAttribute('src', 'images/black.jpg')
            alert('Sorry, try again!')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'Congratulations! You found them all!'
        }
    }

    createBoard();




    
})