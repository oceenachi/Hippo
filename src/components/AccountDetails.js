import React from 'react'
import { formDetails } from './formDetails'
import { FormInputComponent } from './InputComponent'
import { FormSelectComponent } from './SelectComponent'

const AccountDetails = () => {
    return (
        <>
             <FormInputComponent details={formDetails.bvn} />
              <FormInputComponent details={formDetails.accountNumber} />
              <FormSelectComponent details={formDetails.bankName} />

              <FormInputComponent details={formDetails.businessAccountName} />

    
            
        </>
    )
}

export default AccountDetails
