export class Login {


    navbar = '#navbarText'
    register_link = '.nav-link'

    login_form = '.card-body'
    email = '#email'
    password = '#password'
    login_btn = '.btn.btn-primary'

    loginBtn() {
        cy.get(this.navbar).within(() => {
            cy.get(this.register_link).eq(3).click()
        })
    }

    loginForm() {
        cy.get(this.login_form).within(() => {
            cy.get(this.email).type(localStorage.getItem('User Email'))
            cy.get(this.password).type('vlad_test')
            cy.get(this.login_btn).click()
        })
    }
}