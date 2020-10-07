export const isBrowser = () => typeof window !== "undefined"

export const getUser = () => 
    isBrowser() && window.localStorage.getItem("netlifyUser")
    ? JSON.parse(window.localStorage.getItem("netlifyUser"))
    : {}

export const isLoggedIn = () => {
    if (!isBrowser()) {
        return false
    }
 
    return !!getUser()
}

export const login = callback => {
    if (isLoggedIn()) {
        callback(getUser())
    } else {
        netlifyIdentity.open()
        netlifyIdentity.on("login", user => {
        setUser(user)
        callback(user)
        })
    }
}
