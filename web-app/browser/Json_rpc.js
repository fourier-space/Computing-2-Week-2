/**
 * Json_rpc is a client-side module that allows a funciton name to be registered
 * that will allow remote procedure calls to that function,
 * using the json-rpc 2.0 standard and return a promise of the result.
 * @namespace Json_rpc
 * @author A. Freddie Page
 * @version 2021/22
 */
const Json_rpc = Object.create(null);

const fetch = window.fetch;

const json = (response) => response.json();

let json_rpc_id = 0;

/**
 * Register a server-side function to make remote procedure calls to,
 * as if the function was a local one that returns a Promise.
 * @memberof Json_rpc
 * @function
 * @param {string} method_name The name of the method to make an RPC call to.
 * @returns {function} A function that represents a server-side function
 *   and returns a promise of its returned value.
 */
Json_rpc.method = function (method_name) {
    return function (...params) {

        const body = JSON.stringify({
            "jsonrpc": "2.0",
            "id": json_rpc_id,
            "method": method_name,
            "params": params
        });

        return fetch("/", {
            "method": "POST",
            "body": body,
            "headers": {
                "Content-Type": "application/json"
            }
        }).then(json).then((response_object) => response_object.result);
    };
};

export default Object.freeze(Json_rpc);
