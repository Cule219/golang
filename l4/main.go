package main

import "fmt"

func main() {
	// colors := make(map[string]string)
	colors := map[string]string{
		"red":  "FF0000",
		"blue": "blue",
	}

	colors["white"] = "#FFF"

	delete(colors, "white")

	printMap(colors)
}

func printMap(m map[string]string) {
	for color, hex := range m {
		fmt.Println("Hex code for ", color, " is ", hex)
	}
}
