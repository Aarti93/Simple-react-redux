
//params is an object containing the parameters to be appended to the url
export const getUrlWithParams = (url, params) => {
    let paramString = "";
    if (params) {
        for (const param in params) {
            if (params.hasOwnProperty(param)) {
                paramString += `&${param}=${params[param]}`;
            }
        }
    }
    return `${url}?${paramString}`;
}