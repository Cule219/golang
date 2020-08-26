package main

import "fmt"

func main() {
	// var card string = "Ace of Spades"
	card := "Ace of Spades"
	// card = "Five of Diamonds"
	card = newCard()

	cards := []string{card, " - ", newCard()}
	cards = append(cards, "Six of Spades")

	// printState()
	// fmt.Println(cards)
	for i, cd := range cards {
		fmt.Println(i, cd)
	}
}

func newCard() string {
	return "Five of Diamonds"
}
