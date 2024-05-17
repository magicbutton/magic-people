/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/
//GenerateMapModel v1.1
package applogic
import (
	//"encoding/json"
	//"time"
	"github.com/magicbutton/magic-people/database"
	"github.com/magicbutton/magic-people/services/models/usermodel"
   
)


func MapUserOutgoing(db database.User) usermodel.User {
    return usermodel.User{
        ID:        db.ID,
        CreatedAt: db.CreatedAt,
        UpdatedAt: db.UpdatedAt,
                Tenant : db.Tenant,
        Name : db.Name,
        Description : db.Description,
                System_id : db.System_id,
        Fullname : db.Fullname,

    }
}

func MapUserIncoming(in usermodel.User) database.User {
    return database.User{
        ID:        in.ID,
        CreatedAt: in.CreatedAt,
        UpdatedAt: in.UpdatedAt,
                Tenant : in.Tenant,
        Name : in.Name,
        Description : in.Description,
                System_id : in.System_id,
        Fullname : in.Fullname,

    }
}
