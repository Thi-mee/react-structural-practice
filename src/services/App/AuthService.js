
const users = [
  {
    id: 1,
    email: "timi@test.com",
    password: "password"
  },
  {
    id: 2,
    email: "timid@test.com",
    password: "password"
  },
  {
    id: 3,
    email: "timini@test.com",
    password: "password"
  },
]

class AuthObject {
  constructor(isAuthenticated, user, login, logout, error) {
    this.isAuthenticated = isAuthenticated;
    this.user = user;
    this.login = login;
    this.logout = logout;
    this.error = error ?? null;
  }
}

const checkLocalStorage = () => {
  const user = localStorage.getItem('c&m-user')
  if (!!user) return JSON.parse(user)
  else return null
}

class AuthService {
  _users = users
  get users() {
    return this._users
  }

  login = ({ email, password, shouldRemember }) => {
    const foundUser = this._users.find(user => user.email === email && user.password === password)
    if (foundUser) {
      shouldRemember && localStorage.setItem('c&m-user', JSON.stringify(foundUser))
      return new AuthObject(true, foundUser, this.login, this.logout, null)
    }
    else {
      return new AuthObject(false, null, this.login, this.logout, { message: 'Invalid email or password' })
    }
  }

  logout = () => {
    localStorage.removeItem('c&m-user')
    return new AuthObject(false, null, this.login, null)
  }

  init = () => {
    const user = checkLocalStorage()
    if (!!user) return new AuthObject(true, user, this.login, this.logout)
    else return new AuthObject(false, null, this.login, this.logout)
  }
}


const authService = new AuthService();

export default authService;