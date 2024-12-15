import {getResourceApi} from "velor-api/api/api/ResourceApi.mjs";

export class ResourceApiWrapper {
    #rule;
    #name;

    constructor(name, rule) {
        this.#rule = rule;
        this.#name = name;
    }

    get request() {
        let request = getResourceApi(this).for(this.#name);

        if (this.#rule) {
            request = request.withRule(this.#rule);
        }
        return request;
    }

    create(item) {
        return this.request.create().send(item);
    }

    delete(itemId) {
        return this.request.delete(itemId).send();
    }

    getOne(query) {
        return this.request.getOne(query).send();
    }

    getMany(query) {
        return this.request.getMany(query).send();
    }
}