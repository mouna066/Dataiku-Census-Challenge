export default async (url = '', options = {}) => {
    const response = await fetch(url, options)

    if (response.status >= 200 && response.status <= 299) {
        return response.json()
    } else {
        throw Error(response.statusText)
    }
}
