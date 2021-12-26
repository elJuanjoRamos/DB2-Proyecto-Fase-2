export const signUpService = async(body, url) => {
    const resp = await fetch(url, {
        method:'POST',
        body: body
    })
    const fetchJSON = await resp.json();
    return fetchJSON; 
}

export const signInService = async(body, url) => {
    const resp = await fetch(url, {
        method:'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
    })
    const fetchJSON = await resp.json();
    return fetchJSON; 
}