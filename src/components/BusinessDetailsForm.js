import React from 'react'
import { formDetails } from './formDetails'
import { FormInputComponent } from './InputComponent'
import { FormSelectComponent } from './SelectComponent'

const BusinessDetailsForm = () => {
    return (
        <>
             <FormInputComponent details={formDetails.businessName} />
              <FormInputComponent details={formDetails.businessPhoneNum} />
   
              <FormSelectComponent details={formDetails.typeOfBusiness} />
              <FormSelectComponent details={formDetails.lendingPlatform} />

              <FormInputComponent details={formDetails.businessAddress} />
              <FormInputComponent details={formDetails.personalAddress} />
            
        </>
    )
}

export default BusinessDetailsForm
