import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyinfoPage from '../pages/myInfoPage.js'

const loginPage = new LoginPage()
const dashboard = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyinfoPage()

describe('Orange HRM tests', () => {
    
  it('User info update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWitAnyhUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboard.checkDashboardPage()

    menuPage.accessMyInfo()
    myInfoPage.fillPersonalDetails('firstName', 'lastName', 'nickName')
    myInfoPage.fillEmployeelDetails('employeeId', 'otherId', 'Drivers Number', '2025-07-29', '123456' , '009090')
    myInfoPage.fillStatus()
    myInfoPage.seveForm()
    
  
  })

  it('Login - Fail', () => {
    loginPage.accessLoginPage() 
    loginPage.loginWitAnyhUser(userData.userFail.username, userData.userFail.password)
    loginPage.checkAccessInvalid()
    
  
  })
})


