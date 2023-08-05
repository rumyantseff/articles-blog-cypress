import { VisitSite } from './visit_site'
import { RegisterUser } from './register_user'
import { Login } from './login'

const visitSite = new VisitSite()
const registerUser = new RegisterUser()
const login = new Login()

let shared = {}


describe('Articles blog testing', () => {
  it('Articles blog', () => {
    visitSite.visitSite()

    registerUser.registerBtn()
    registerUser.registerForm()
    registerUser.profileDetails(shared)
    registerUser.logoutUser()

    login.loginBtn()
    login.loginForm()
  })
})