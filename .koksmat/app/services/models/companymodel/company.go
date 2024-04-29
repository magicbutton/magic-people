/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/   
//GenerateGoModel v1
package companymodel
import (
	"encoding/json"
	"time"
    "github.com/magicbutton/magic-people/database/databasetypes"
)

func UnmarshalCompany(data []byte) (Company, error) {
	var r Company
	err := json.Unmarshal(data, &r)
	return r, err
}

func (r *Company) Marshal() ([]byte, error) {
	return json.Marshal(r)
}

type Company struct {
    ID        int    `json:"id"`
    CreatedAt time.Time `json:"created_at"`
    UpdatedAt time.Time `json:"updated_at"`
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
