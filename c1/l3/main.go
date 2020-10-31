package main

import "fmt"

func main() {
	alex := person{
		firstName: "Alex",
		lastName:  "Andersen",
		contactInfo: contactInfo{
			email:   "alex.andersen@gmail.com",
			zipcode: 31313,
		},
	}
	alex.updateName("Alexey")
	alex.print()
}

type contactInfo struct {
	email   string
	zipcode int
}

type person struct {
	firstName string
	lastName  string
	contactInfo
}

func (p *person) updateName(newFirstName string) {
	p.firstName = newFirstName
}

func (p person) print() {
	fmt.Println(p)
}
