import {URL_LOGIN} from "./urls.mjs";
import {UrlBuilder} from "velor-api/api/request/UrlBuilder.mjs";
import {
    AUTH_GITHUB,
    AUTH_GOOGLE,
    AUTH_MAGIC_LINK,
    AUTH_OPENID,
    AUTH_TOKEN
} from "./authProviders.mjs";

export function getProviderUrl(urls, provider) {
    return new UrlBuilder(urls[URL_LOGIN]).params({provider}).buildUrl();
}

export function getGoogleLoginUrl(urls) {
    return getProviderUrl(urls, AUTH_GOOGLE);
}

export function getTokenLoginUrl(urls) {
    return getProviderUrl(urls, AUTH_TOKEN);
}

export function getMagicLinkLoginUrl(urls) {
    return getProviderUrl(urls, AUTH_MAGIC_LINK);
}

export function getGithubLoginUrl(urls) {
    return getProviderUrl(urls, AUTH_GITHUB);
}

export function getOpenIdLoginUrl(urls) {
    return getProviderUrl(urls, AUTH_OPENID);
}

