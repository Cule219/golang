package main

func main() {
	// var card string = "Ace of Spades"
	// card := "Ace of Spades"
	// card = "Five of Diamonds"
	// card = newCard()

	// cards := []string{card, " - ", newCard()}
	// cards = append(cards, "Six of Spades")

	cards := newDeck()

	// printState()
	// fmt.Println(cards)

	cards.print()
}

func newCard() string {
	return "Five of Diamonds"
}
