// Last updated: 10/11/2025, 10:41:45 PM
type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };

function jsonParse(str: string): JSONValue {
        return eval(`() => (${str})`)();
};