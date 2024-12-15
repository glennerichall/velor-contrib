import {URL_PREFERENCES} from "../contrib/urls.mjs";
import {ResourceApiWrapper} from "./ResourceApiWrapper.mjs";

export class PreferencesApi extends ResourceApiWrapper {
    constructor(rule) {
        super(URL_PREFERENCES, rule);
    }
}