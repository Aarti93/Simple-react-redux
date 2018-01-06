import { urlConf, urlPathConf } from "../configs";
import {getUrlWithParams} from "./urlHelper";

export const getProductsBySearchQuery =  async (searchQuery) => {
    let url = `${urlConf.baseUrl}${urlPathConf.SEARCH}`;
    const params = {
        api_key: urlConf.apiKey,
        product: searchQuery
    };
    url = getUrlWithParams(url,params);
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json" 
        }
    };
    const response = await fetch(url, {method: "get"});
    const responseJSON = await response.json();
    return responseJSON.data;
}