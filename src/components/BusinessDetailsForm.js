import React from 'react'
import { formDetails } from './formDetails'
import { FormInputComponent } from './InputComponent'
import { FormSelectComponent } from './SelectComponent'

const BusinessDetailsForm = ({ data, updateData, error, setError}) => {
    return (
        <>
             <FormInputComponent details={formDetails.businessName} data={data} updateData={updateData} error={error} setError={setError}/>
              <FormInputComponent details={formDetails.businessPhoneNum} data={data} updateData={updateData} error={error} setError={setError}/>
   
              <FormSelectComponent details={formDetails.typeOfBusiness} data={data} updateData={updateData} error={error} setError={setError} />
              <FormSelectComponent details={formDetails.lendingPlatform} data={data} updateData={updateData} error={error} setError={setError}/>

              <FormInputComponent details={formDetails.businessAddress} data={data} updateData={updateData} error={error} setError={setError}/>
              <FormInputComponent details={formDetails.personalAddress} data={data} updateData={updateData} error={error} setError={setError} />
            
        </>
    )
}

export default BusinessDetailsForm
