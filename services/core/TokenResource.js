import Cookies from "universal-cookie"


const getCookie = (req) => {
  let cookies
  if (req) {
    cookies = new Cookies(req)
  } else {
    cookies = new Cookies()
  }
  return cookies
}

export const getToken = (req) => {
  const cookies = getCookie(req)

  return cookies.get('token')
}

export const setToken = (value) => {
  const cookies = getCookie(req)
  cookies.set('token', value)
}
