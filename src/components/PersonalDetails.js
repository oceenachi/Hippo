import React from 'react'
import DateComponent from './DateComponent'
import { formDetails } from './formDetails'
import { FormInputComponent } from './InputComponent'
import { FormSelectComponent } from './SelectComponent'

const PersonalDetails = () => {
    return (
        <>
            <FormInputComponent details={formDetails.firstname} />
              <FormInputComponent details={formDetails.lastName} />
   
              <FormSelectComponent details={formDetails.gender} />
              <FormSelectComponent details={formDetails.marital} />

              <DateComponent details={formDetails.dob} />
              <FormSelectComponent details={formDetails.highestQual} />
         
              <FormInputComponent details={formDetails.email} />
              <FormInputComponent details={formDetails.phone} />

            
        </>
    )
}

export default PersonalDetails
