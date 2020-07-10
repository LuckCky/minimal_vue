export function authHeader () {
  // return authorization header with jwt token
  const user = JSON.parse(localStorage.getItem('user'))

  if (user && user.token) {
    return { authorization: user.token, User: user.username }
  } else {
    return {}
  }
}
