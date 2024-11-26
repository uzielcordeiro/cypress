class MyinfoPage{
    selectorsList(){
        const selectors = {
            
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName'] "
        }

        return selectors
    }
        fillPersonalDetails(FirstName,lastName,nickName) {
            cy.get(this.selectorsList().firstNameField).clear().type(FirstName)
            cy.get(this.selectorsList().lastNameField).clear().type(lastName)
            //cy.get(this.selectorsList().genericField).eq().clear().type(nickName)
        }

        fillEmployeelDetails(employeeId,otherId,driversLicenseNumber,expiryDate,ssnNumber,sinNumber) {
            cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId)
            // cy.get(this.selectorsList().genericField).eq(5).clear().type(otherId)
            // cy.get(this.selectorsList().genericField).eq(6).clear().type(driversLicenseNumber)
            // cy.get(this.selectorsList().genericField).eq(7).clear().type(expiryDate)
            // cy.get(this.selectorsList().dataCloseButton).click()
            // cy.get(this.selectorsList().genericField).eq(8).clear().type(ssnNumber)
            // cy.get(this.selectorsList().genericField).eq(9).clear().type(sinNumber)


        }
        
        seveForm(){
            cy.get(this.selectorsList().submitbutton).eq(0).click({force: true})
            cy.get('body').should('contain', 'Successfully Update')
            cy.get('.oxd-toast-close')
        }
        fillStatus(){
            cy.get(this.selectorsList().genericCombobox).eq(0).click({force: true})
            cy.get(this.selectorsList().secondItemCombobox).click
            cy.get(this.selectorsList().genericCombobox).eq(1).click({force: true})
            cy.get(this.selectorsList().thirdItemCombobox).click()
        }
}

export default MyinfoPage