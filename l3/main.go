package main

import "fmt"

type contactInfo struct {
	email   string
	zipcode int
}

type person struct {
	firstName string
	lastName  string
	contact   contactInfo
}

func main() {
	alex := person{
		firstName: "Alex",
		lastName:  "Andersen",
		contact: contactInfo{
			email:   "alex.andersen@gmail.com",
			zipcode: 31313,
		},
	}
	fmt.Println(alex)
}
