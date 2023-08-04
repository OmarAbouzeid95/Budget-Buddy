
const findUser = async (url, user) => {
    const res = await fetch(url, {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(user)
    })
    const data = await res.json()
    return data
}


export {findUser}