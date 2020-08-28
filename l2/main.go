package main

// 771373807116 FedEx
import (
	"fmt"
	"io/ioutil"
	"os"
	"strings"
)

func main() {
	// cards := newDeck()

	// hand, cards := deal(cards, 5)
	// hand.print()
	// fmt.Println(cards.toString())

	// cards.saveToFile("my_cards")
	cards := newDeckFromFile("my_cards")
	cards.print()
}

func (d deck) toString() string {
	return strings.Join([]string(d), ",")
}

func (d deck) saveToFile(filename string) error {
	return ioutil.WriteFile(filename, []byte(d.toString()), 0666)
}

func newDeckFromFile(filename string) deck {
	bs, err := ioutil.ReadFile(filename)
	if err != nil {
		fmt.Println("Error:", err)
		os.Exit(1)
	}
	return deck(strings.Split(string(bs), ","))
}
