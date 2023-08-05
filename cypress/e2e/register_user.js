export class RegisterUser {


    navbar = '#navbarText'
    register_link = '.nav-link'

    register_form = '.card-body'
    name = '#name'
    email = '#email'
    password = '#password'
    password_confirm = '#password-confirm'
    register_btn = '.btn.btn-primary'

    profile_btn = '#navbarDropdown'
    logout = '.dropdown-item.text-dark'

    my_profile = '.nav-link'
    profile_card = '.list-group'
    email_info = '.list-group-item strong'

    registerBtn() {
        cy.get(this.navbar).within(() => {
            cy.get(this.register_link).eq(4).click()
        })
    }

    registerForm() {
        cy.get(this.register_form).within(() => {
            cy.get(this.name).type('Vlad')
            cy.get(this.email).type(`${Date.now()}@testmail.com`)
            cy.get(this.password).type('vlad_test')
            cy.get(this.password_confirm).type('vlad_test')
            cy.get(this.register_btn).click()
        })
    }

    profileDetails(shared) {
        cy.get(this.my_profile).contains('My profile').click()
        cy.get(this.profile_card).within(() => {
            cy.get(this.email_info).eq(2).then(($email) => {
                let email = $email.text()
                Cypress.env('email', email)
                localStorage.setItem('User Email', email)
            })
        })
    }

    logoutUser() {
        cy.get(this.profile_btn).click()
        cy.get(this.logout).click()
    }
}