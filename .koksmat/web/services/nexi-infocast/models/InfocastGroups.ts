// To parse this data:
//
//   import { Convert } from "./file";
//
//   const infocastGroups = Convert.toInfocastGroups(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface InfocastGroups {
    FieldValues: FieldValues;
}

export interface FieldValues {
    _ColorHex:                 null;
    _ColorTag:                 null;
    _CommentCount:             string;
    _CommentFlags:             string;
    _ComplianceFlags:          string;
    _ComplianceTag:            string;
    _ComplianceTagUserId:      string;
    _ComplianceTagWrittenTime: string;
    _CopySource:               null;
    _Emoji:                    null;
    _HasCopyDestinations:      null;
    _IsCurrentVersion:         boolean;
    _Level:                    number;
    _ModerationComments:       null;
    _ModerationStatus:         number;
    _UIVersion:                number;
    _UIVersionString:          string;
    _VirusInfo:                string;
    _VirusStatus:              string;
    _VirusVendorID:            string;
    AccessPolicy:              string;
    AppAuthor:                 AppAuthor;
    AppEditor:                 AppAuthor | null;
    Attachments:               boolean;
    Author:                    AppAuthor;
    ComplianceAssetId:         null;
    ContentTypeId:             ContentTypeID;
    ContentVersion:            string;
    Created:                   Date;
    Created_x0020_Date:        Date;
    Editor:                    AppAuthor;
    File_x0020_Type:           null;
    FileDirRef:                FileDirRef;
    FileLeafRef:               string;
    FileRef:                   string;
    FolderChildCount:          string;
    FSObjType:                 string;
    GUID:                      string;
    Hidden:                    boolean;
    ID:                        number;
    InstanceID:                null;
    ItemChildCount:            string;
    Last_x0020_Modified:       Date;
    MetaInfo:                  string;
    Modified:                  Date;
    NoExecute:                 string;
    Notes_x0020_ID:            string;
    Order:                     number;
    OriginatorId:              string;
    Owner:                     null | string;
    owshiddenversion:          number;
    ParentUniqueId:            ParentUniqueID;
    ProgId:                    string;
    Restricted:                string;
    ScopeId:                   ScopeID;
    SMLastModifiedDate:        Date;
    SMTotalFileCount:          AppAuthor;
    SMTotalFileStreamSize:     string;
    SMTotalSize:               AppAuthor;
    SortBehavior:              AppAuthor;
    SyncClientId:              AppAuthor;
    Title:                     string;
    UniqueId:                  string;
    WorkflowInstanceID:        null;
    WorkflowVersion:           number;
}

export interface AppAuthor {
    Email?:      Email;
    LookupId:    number;
    LookupValue: null | string;
    TypeId:      AppAuthorTypeID;
}

export enum Email {
    Empty = "",
    JacobNielsenNexigroupCOM = "jacob.nielsen@nexigroup.com",
    JesperPedersenExternalNexigroupCOM = "jesper.pedersen@external.nexigroup.com",
}

export enum AppAuthorTypeID {
    C956Ab5416Bd4C1889D2996F57282A6F = "{c956ab54-16bd-4c18-89d2-996f57282a6f}",
    F1D34Cc09B504A78Be78D5Facfcccfb7 = "{f1d34cc0-9b50-4a78-be78-d5facfcccfb7}",
}

export interface ContentTypeID {
    StringValue: string;
    TypeId:      ContentTypeIDTypeID;
}

export enum ContentTypeIDTypeID {
    Da0F1E90296F480EBc27Cefe51Eff241 = "{da0f1e90-296f-480e-bc27-cefe51eff241}",
}

export enum FileDirRef {
    SitesInfoCastListsInfocastGroups = "/sites/InfoCast/Lists/Infocast Groups",
}

export enum ParentUniqueID {
    Ee0E512089B94F1CA68FF40A11C6B959 = "{EE0E5120-89B9-4F1C-A68F-F40A11C6B959}",
}

export enum ScopeID {
    The8099Ec0B1E814Bea96570A7826157231 = "{8099EC0B-1E81-4BEA-9657-0A7826157231}",
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toInfocastGroups(json: string): InfocastGroups[] {
        return cast(JSON.parse(json), a(r("InfocastGroups")));
    }

    public static infocastGroupsToJson(value: InfocastGroups[]): string {
        return JSON.stringify(uncast(value, a(r("InfocastGroups"))), null, 2);
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
    "InfocastGroups": o([
        { json: "FieldValues", js: "FieldValues", typ: r("FieldValues") },
    ], false),
    "FieldValues": o([
        { json: "_ColorHex", js: "_ColorHex", typ: null },
        { json: "_ColorTag", js: "_ColorTag", typ: null },
        { json: "_CommentCount", js: "_CommentCount", typ: "" },
        { json: "_CommentFlags", js: "_CommentFlags", typ: "" },
        { json: "_ComplianceFlags", js: "_ComplianceFlags", typ: "" },
        { json: "_ComplianceTag", js: "_ComplianceTag", typ: "" },
        { json: "_ComplianceTagUserId", js: "_ComplianceTagUserId", typ: "" },
        { json: "_ComplianceTagWrittenTime", js: "_ComplianceTagWrittenTime", typ: "" },
        { json: "_CopySource", js: "_CopySource", typ: null },
        { json: "_Emoji", js: "_Emoji", typ: null },
        { json: "_HasCopyDestinations", js: "_HasCopyDestinations", typ: null },
        { json: "_IsCurrentVersion", js: "_IsCurrentVersion", typ: true },
        { json: "_Level", js: "_Level", typ: 0 },
        { json: "_ModerationComments", js: "_ModerationComments", typ: null },
        { json: "_ModerationStatus", js: "_ModerationStatus", typ: 0 },
        { json: "_UIVersion", js: "_UIVersion", typ: 0 },
        { json: "_UIVersionString", js: "_UIVersionString", typ: "" },
        { json: "_VirusInfo", js: "_VirusInfo", typ: "" },
        { json: "_VirusStatus", js: "_VirusStatus", typ: "" },
        { json: "_VirusVendorID", js: "_VirusVendorID", typ: "" },
        { json: "AccessPolicy", js: "AccessPolicy", typ: "" },
        { json: "AppAuthor", js: "AppAuthor", typ: r("AppAuthor") },
        { json: "AppEditor", js: "AppEditor", typ: u(r("AppAuthor"), null) },
        { json: "Attachments", js: "Attachments", typ: true },
        { json: "Author", js: "Author", typ: r("AppAuthor") },
        { json: "ComplianceAssetId", js: "ComplianceAssetId", typ: null },
        { json: "ContentTypeId", js: "ContentTypeId", typ: r("ContentTypeID") },
        { json: "ContentVersion", js: "ContentVersion", typ: "" },
        { json: "Created", js: "Created", typ: Date },
        { json: "Created_x0020_Date", js: "Created_x0020_Date", typ: Date },
        { json: "Editor", js: "Editor", typ: r("AppAuthor") },
        { json: "File_x0020_Type", js: "File_x0020_Type", typ: null },
        { json: "FileDirRef", js: "FileDirRef", typ: r("FileDirRef") },
        { json: "FileLeafRef", js: "FileLeafRef", typ: "" },
        { json: "FileRef", js: "FileRef", typ: "" },
        { json: "FolderChildCount", js: "FolderChildCount", typ: "" },
        { json: "FSObjType", js: "FSObjType", typ: "" },
        { json: "GUID", js: "GUID", typ: "" },
        { json: "Hidden", js: "Hidden", typ: true },
        { json: "ID", js: "ID", typ: 0 },
        { json: "InstanceID", js: "InstanceID", typ: null },
        { json: "ItemChildCount", js: "ItemChildCount", typ: "" },
        { json: "Last_x0020_Modified", js: "Last_x0020_Modified", typ: Date },
        { json: "MetaInfo", js: "MetaInfo", typ: "" },
        { json: "Modified", js: "Modified", typ: Date },
        { json: "NoExecute", js: "NoExecute", typ: "" },
        { json: "Notes_x0020_ID", js: "Notes_x0020_ID", typ: "" },
        { json: "Order", js: "Order", typ: 3.14 },
        { json: "OriginatorId", js: "OriginatorId", typ: "" },
        { json: "Owner", js: "Owner", typ: u(null, "") },
        { json: "owshiddenversion", js: "owshiddenversion", typ: 0 },
        { json: "ParentUniqueId", js: "ParentUniqueId", typ: r("ParentUniqueID") },
        { json: "ProgId", js: "ProgId", typ: "" },
        { json: "Restricted", js: "Restricted", typ: "" },
        { json: "ScopeId", js: "ScopeId", typ: r("ScopeID") },
        { json: "SMLastModifiedDate", js: "SMLastModifiedDate", typ: Date },
        { json: "SMTotalFileCount", js: "SMTotalFileCount", typ: r("AppAuthor") },
        { json: "SMTotalFileStreamSize", js: "SMTotalFileStreamSize", typ: "" },
        { json: "SMTotalSize", js: "SMTotalSize", typ: r("AppAuthor") },
        { json: "SortBehavior", js: "SortBehavior", typ: r("AppAuthor") },
        { json: "SyncClientId", js: "SyncClientId", typ: r("AppAuthor") },
        { json: "Title", js: "Title", typ: "" },
        { json: "UniqueId", js: "UniqueId", typ: "" },
        { json: "WorkflowInstanceID", js: "WorkflowInstanceID", typ: null },
        { json: "WorkflowVersion", js: "WorkflowVersion", typ: 0 },
    ], false),
    "AppAuthor": o([
        { json: "Email", js: "Email", typ: u(undefined, r("Email")) },
        { json: "LookupId", js: "LookupId", typ: 0 },
        { json: "LookupValue", js: "LookupValue", typ: u(null, "") },
        { json: "TypeId", js: "TypeId", typ: r("AppAuthorTypeID") },
    ], false),
    "ContentTypeID": o([
        { json: "StringValue", js: "StringValue", typ: "" },
        { json: "TypeId", js: "TypeId", typ: r("ContentTypeIDTypeID") },
    ], false),
    "Email": [
        "",
        "jacob.nielsen@nexigroup.com",
        "jesper.pedersen@external.nexigroup.com",
    ],
    "AppAuthorTypeID": [
        "{c956ab54-16bd-4c18-89d2-996f57282a6f}",
        "{f1d34cc0-9b50-4a78-be78-d5facfcccfb7}",
    ],
    "ContentTypeIDTypeID": [
        "{da0f1e90-296f-480e-bc27-cefe51eff241}",
    ],
    "FileDirRef": [
        "/sites/InfoCast/Lists/Infocast Groups",
    ],
    "ParentUniqueID": [
        "{EE0E5120-89B9-4F1C-A68F-F40A11C6B959}",
    ],
    "ScopeID": [
        "{8099EC0B-1E81-4BEA-9657-0A7826157231}",
    ],
};
