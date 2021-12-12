export const BASE_URL = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/stefani";

export const token = localStorage.getItem("token")

export const headers = {
    headers: {
        auth: token
    }
}