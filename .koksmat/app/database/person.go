/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/   
//version: pølsevogn2
package database

import (
	"time"
    
	"github.com/uptrace/bun"
)

type Person struct {
	bun.BaseModel `bun:"table:person,alias:person"`

	ID             int     `bun:"id,pk,autoincrement"`
	CreatedAt      time.Time `bun:",nullzero,notnull,default:current_timestamp"`
	UpdatedAt      time.Time `bun:",nullzero,notnull,default:current_timestamp"`
	DeletedAt      time.Time `bun:",soft_delete,nullzero"`
        Tenant string `bun:"tenant"`
    Name string `bun:"name"`
    Description string `bun:"description"`
    Email string `bun:"email"`
    Displayname string `bun:"displayname"`
    Firstname string `bun:"firstname"`
    Lastname string `bun:"lastname"`
    Uniqueid string `bun:"uniqueid"`
    Nationality_id int `bun:"nationality_id"`

}

