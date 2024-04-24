// To parse this data:
//
//   import { Convert } from "./file";
//
//   const users = Convert.toUsers(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface Users {
    "@odata.etag":          string;
    contentType:            ContentType;
    createdBy:              CreatedBy;
    createdDateTime:        Date;
    eTag:                   string;
    fields:                 Fields;
    "fields@odata.context": string;
    id:                     string;
    lastModifiedBy:         LastModifiedBy;
    lastModifiedDateTime:   Date;
    parentReference:        ParentReference;
    webUrl:                 string;
}

export interface ContentType {
    id:   string;
    name: Name;
}

export enum Name {
    Item = "Item",
}

export interface CreatedBy {
    user: User;
}

export interface User {
    displayName: string;
    email?:      string;
    id?:         string;
}

export interface Fields {
    "@odata.etag":                    string;
    _ComplianceFlags:                 string;
    _ComplianceTag:                   string;
    _ComplianceTagUserId:             string;
    _ComplianceTagWrittenTime:        string;
    _UIVersionString:                 string;
    AppAuthorLookupId?:               string;
    AppEditorLookupId?:               string;
    Attachments:                      boolean;
    AuthorLookupId:                   string;
    Company?:                         string;
    ContentType:                      Name;
    Created:                          Date;
    Edit:                             string;
    EditorLookupId:                   string;
    Email_x0020_Exchange_x0020_ID?:   string;
    EmailSelected:                    boolean;
    FirstName?:                       string;
    FolderChildCount:                 string;
    id:                               string;
    ItemChildCount:                   string;
    LinkTitle?:                       string;
    LinkTitleNoMenu?:                 string;
    Member_x0020_of:                  MemberX0020Of[];
    Member_x0020_of_x003a__x0020_Not: MemberX0020Of[];
    Mobillnummer?:                    string;
    Modified:                         Date;
    SMS_x0020_Exchange_x0020_ID?:     string;
    SMSSelected:                      boolean;
    SurName?:                         string;
    Title?:                           string;
}

export interface MemberX0020Of {
    LookupId:    number;
    LookupValue: string;
}

export interface LastModifiedBy {
    application?: Application;
    user:         User;
}

export interface Application {
    displayName: DisplayName;
    id:          string;
}

export enum DisplayName {
    EUCRolloutManagerII = "EUC Rollout Manager II",
}

export interface ParentReference {
    id:     string;
    siteId: string;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toUsers(json: string): Users[] {
        return cast(JSON.parse(json), a(r("Users")));
    }

    public static usersToJson(value: Users[]): string {
        return JSON.stringify(uncast(value, a(r("Users"))), null, 2);
    }
}

function invalidValue(typ: any, val: any, key: any, parent: any = ''): never {
    const prettyTyp = prettyTypeName(typ);
    const parentText = parent ? ` on ${parent}` : '';
    const keyText = key ? ` for key "${key}"` : '';
    throw Error(`Invalid value${keyText}${parentText}. Expected ${prettyTyp} but got ${JSON.stringify(val)}`);
}

function prettyTypeName(typ: any): string {
    if (Array.isArray(typ)) {
        if (typ.length === 2 && typ[0] === undefined) {
            return `an optional ${prettyTypeName(typ[1])}`;
        } else {
            return `one of [${typ.map(a => { return prettyTypeName(a); }).join(", ")}]`;
        }
    } else if (typeof typ === "object" && typ.literal !== undefined) {
        return typ.literal;
    } else {
        return typeof typ;
    }
}

function jsonToJSProps(typ: any): any {
    if (typ.jsonToJS === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
    if (typ.jsToJSON === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = '', parent: any = ''): any {
    function transformPrimitive(typ: string, val: any): any {
        if (typeof typ === typeof val) return val;
        return invalidValue(typ, val, key, parent);
    }

    function transformUnion(typs: any[], val: any): any {
        // val must validate against one typ in typs
        const l = typs.length;
        for (let i = 0; i < l; i++) {
            const typ = typs[i];
            try {
                return transform(val, typ, getProps);
            } catch (_) {}
        }
        return invalidValue(typs, val, key, parent);
    }

    function transformEnum(cases: string[], val: any): any {
        if (cases.indexOf(val) !== -1) return val;
        return invalidValue(cases.map(a => { return l(a); }), val, key, parent);
    }

    function transformArray(typ: any, val: any): any {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return invalidValue(l("array"), val, key, parent);
        return val.map(el => transform(el, typ, getProps));
    }

    function transformDate(val: any): any {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue(l("Date"), val, key, parent);
        }
        return d;
    }

    function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue(l(ref || "object"), val, key, parent);
        }
        const result: any = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps, key, ref);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps, key, ref);
            }
        });
        return result;
    }

    if (typ === "any") return val;
    if (typ === null) {
        if (val === null) return val;
        return invalidValue(typ, val, key, parent);
    }
    if (typ === false) return invalidValue(typ, val, key, parent);
    let ref: any = undefined;
    while (typeof typ === "object" && typ.ref !== undefined) {
        ref = typ.ref;
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
            : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
            : invalidValue(typ, val, key, parent);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number") return transformDate(val);
    return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
    return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
    return transform(val, typ, jsToJSONProps);
}

function l(typ: any) {
    return { literal: typ };
}

function a(typ: any) {
    return { arrayItems: typ };
}

function u(...typs: any[]) {
    return { unionMembers: typs };
}

function o(props: any[], additional: any) {
    return { props, additional };
}

function m(additional: any) {
    return { props: [], additional };
}

function r(name: string) {
    return { ref: name };
}

const typeMap: any = {
    "Users": o([
        { json: "@odata.etag", js: "@odata.etag", typ: "" },
        { json: "contentType", js: "contentType", typ: r("ContentType") },
        { json: "createdBy", js: "createdBy", typ: r("CreatedBy") },
        { json: "createdDateTime", js: "createdDateTime", typ: Date },
        { json: "eTag", js: "eTag", typ: "" },
        { json: "fields", js: "fields", typ: r("Fields") },
        { json: "fields@odata.context", js: "fields@odata.context", typ: "" },
        { json: "id", js: "id", typ: "" },
        { json: "lastModifiedBy", js: "lastModifiedBy", typ: r("LastModifiedBy") },
        { json: "lastModifiedDateTime", js: "lastModifiedDateTime", typ: Date },
        { json: "parentReference", js: "parentReference", typ: r("ParentReference") },
        { json: "webUrl", js: "webUrl", typ: "" },
    ], false),
    "ContentType": o([
        { json: "id", js: "id", typ: "" },
        { json: "name", js: "name", typ: r("Name") },
    ], false),
    "CreatedBy": o([
        { json: "user", js: "user", typ: r("User") },
    ], false),
    "User": o([
        { json: "displayName", js: "displayName", typ: "" },
        { json: "email", js: "email", typ: u(undefined, "") },
        { json: "id", js: "id", typ: u(undefined, "") },
    ], false),
    "Fields": o([
        { json: "@odata.etag", js: "@odata.etag", typ: "" },
        { json: "_ComplianceFlags", js: "_ComplianceFlags", typ: "" },
        { json: "_ComplianceTag", js: "_ComplianceTag", typ: "" },
        { json: "_ComplianceTagUserId", js: "_ComplianceTagUserId", typ: "" },
        { json: "_ComplianceTagWrittenTime", js: "_ComplianceTagWrittenTime", typ: "" },
        { json: "_UIVersionString", js: "_UIVersionString", typ: "" },
        { json: "AppAuthorLookupId", js: "AppAuthorLookupId", typ: u(undefined, "") },
        { json: "AppEditorLookupId", js: "AppEditorLookupId", typ: u(undefined, "") },
        { json: "Attachments", js: "Attachments", typ: true },
        { json: "AuthorLookupId", js: "AuthorLookupId", typ: "" },
        { json: "Company", js: "Company", typ: u(undefined, "") },
        { json: "ContentType", js: "ContentType", typ: r("Name") },
        { json: "Created", js: "Created", typ: Date },
        { json: "Edit", js: "Edit", typ: "" },
        { json: "EditorLookupId", js: "EditorLookupId", typ: "" },
        { json: "Email_x0020_Exchange_x0020_ID", js: "Email_x0020_Exchange_x0020_ID", typ: u(undefined, "") },
        { json: "EmailSelected", js: "EmailSelected", typ: true },
        { json: "FirstName", js: "FirstName", typ: u(undefined, "") },
        { json: "FolderChildCount", js: "FolderChildCount", typ: "" },
        { json: "id", js: "id", typ: "" },
        { json: "ItemChildCount", js: "ItemChildCount", typ: "" },
        { json: "LinkTitle", js: "LinkTitle", typ: u(undefined, "") },
        { json: "LinkTitleNoMenu", js: "LinkTitleNoMenu", typ: u(undefined, "") },
        { json: "Member_x0020_of", js: "Member_x0020_of", typ: a(r("MemberX0020Of")) },
        { json: "Member_x0020_of_x003a__x0020_Not", js: "Member_x0020_of_x003a__x0020_Not", typ: a(r("MemberX0020Of")) },
        { json: "Mobillnummer", js: "Mobillnummer", typ: u(undefined, "") },
        { json: "Modified", js: "Modified", typ: Date },
        { json: "SMS_x0020_Exchange_x0020_ID", js: "SMS_x0020_Exchange_x0020_ID", typ: u(undefined, "") },
        { json: "SMSSelected", js: "SMSSelected", typ: true },
        { json: "SurName", js: "SurName", typ: u(undefined, "") },
        { json: "Title", js: "Title", typ: u(undefined, "") },
    ], false),
    "MemberX0020Of": o([
        { json: "LookupId", js: "LookupId", typ: 0 },
        { json: "LookupValue", js: "LookupValue", typ: "" },
    ], false),
    "LastModifiedBy": o([
        { json: "application", js: "application", typ: u(undefined, r("Application")) },
        { json: "user", js: "user", typ: r("User") },
    ], false),
    "Application": o([
        { json: "displayName", js: "displayName", typ: r("DisplayName") },
        { json: "id", js: "id", typ: "" },
    ], false),
    "ParentReference": o([
        { json: "id", js: "id", typ: "" },
        { json: "siteId", js: "siteId", typ: "" },
    ], false),
    "Name": [
        "Item",
    ],
    "DisplayName": [
        "EUC Rollout Manager II",
    ],
};
