package applogic

import (
	"github.com/magicbutton/magic-people/database"
	"github.com/magicbutton/magic-people/services/models/personmodel"
)

func MapPersonOutgoing(item database.Person) personmodel.Person {
	return personmodel.Person{
		ID:        item.ID,
		CreatedAt: item.CreatedAt,
		UpdatedAt: item.UpdatedAt,

		Name:      item.Name,
		Firstname: item.Firstname,
		Lastname:  item.Lastname,

		Email:       item.Email,
		Uniqueid:    item.Uniqueid,
		Description: item.Description,
	}
}

func MapPersonIncoming(item personmodel.Person) database.Person {

	return database.Person{
		ID:          item.ID,
		CreatedAt:   item.CreatedAt,
		UpdatedAt:   item.UpdatedAt,
		Displayname: item.Displayname,
		Name:        "firstname: " + item.Firstname + " lastname: " + item.Lastname + " email: " + item.Email + " uniqueid: " + item.Uniqueid + " displayname: " + item.Displayname,
		Description: item.Description,
		Uniqueid:    item.Uniqueid,
		Firstname:   item.Firstname,
		Lastname:    item.Lastname,

		Email: item.Email,
	}
}
