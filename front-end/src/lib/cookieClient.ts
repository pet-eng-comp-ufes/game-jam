import { getCookie, deleteCookie } from "cookies-next";

export function getCookieClient() {

    const token = getCookie("sessao")

    return token
}

export function deleteCookieClient() {

    deleteCookie("sessao")
}