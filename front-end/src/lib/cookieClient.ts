import { getCookie, deleteCookie } from "cookies-next/client";

export function getCookieClient() {

    const token = getCookie("sessao")

    return token
}

export function deleteCookieClient() {

    deleteCookie("sessao")
}