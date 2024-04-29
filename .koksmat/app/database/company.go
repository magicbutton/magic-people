/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/   
//version: pølsevogn1
package database

import (
	"time"
            "github.com/magicbutton/magic-people/database/databasetypes"

	"github.com/uptrace/bun"
)

type Company struct {
	bun.BaseModel `bun:"table:company,alias:company"`

	ID             int     `bun:"id,pk,autoincrement"`
	CreatedAt      time.Time `bun:",nullzero,notnull,default:current_timestamp"`
	UpdatedAt      time.Time `bun:",nullzero,notnull,default:current_timestamp"`
	DeletedAt      time.Time `bun:",soft_delete,nullzero"`
        Tenant string `json:"tenant"`
    Name string `json:"name"`
    Description string `json:"description"`
    Vatnumber string `json:"vatnumber"`
    Phonenumber string `json:"phonenumber"`
    Address string `json:"address"`
    City string `json:"city"`
    Postalcode string `json:"postalcode"`
    Country databasetypes.Reference `json:"country"`

}

