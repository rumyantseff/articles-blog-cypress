export class VisitSite {


    main_page = Cypress.env('protocol') + '://' + Cypress.env('site_url') + Cypress.env('domain')

    visitSite() {
        cy.visit(this.main_page)
    }
}