// Last updated: 10/11/2025, 10:42:52 PM
type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };

function jsonParse(str: string): JSONValue {
        return JSON.parse(str);
};