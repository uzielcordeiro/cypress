import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'

const loginPage = new LoginPage()
const dashboard = new DashboardPage()
const menuPage = new MenuPage()

describe('Orange HRM tests', () => {
    const selectorList = {
      
      firstNameField: "[name='firstName']",
      lastNameField: "[name='lastName'] "
    }

  it.only('User info update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWitAnyhUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboard.checkDashboardPage()

    menuPage.accessMyInfo()
    
  
  })

  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userFail.username)
    cy.get(selectorList.passwordField).type(userData.userFail.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredentialAlert)
  
  })
})


