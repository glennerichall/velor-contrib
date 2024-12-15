import {ResourceApiWrapper} from "./ResourceApiWrapper.mjs";
import {URL_API_KEYS} from "../contrib/urls.mjs";

export class ApiKeyApi extends ResourceApiWrapper {
    constructor(rule) {
        super(URL_API_KEYS, rule);
    }
}