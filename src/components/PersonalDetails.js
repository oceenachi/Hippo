import React from 'react'
import DateComponent from './DateComponent'
import { formDetails } from './formDetails'
import { FormInputComponent } from './InputComponent'
import { FormSelectComponent } from './SelectComponent'

const PersonalDetails = ({ data, updateData, error, setError}) => {
    return (
        <>
            <FormInputComponent details={formDetails.firstname} data={data} updateData={updateData} error={error} setError={setError}/>
              <FormInputComponent details={formDetails.lastName} data={data} updateData={updateData} error={error} setError={setError}/>
   
              <FormSelectComponent details={formDetails.gender} data={data} updateData={updateData} error={error} setError={setError}/>
              <FormSelectComponent details={formDetails.marital} data={data} updateData={updateData} error={error} setError={setError}/>

              <DateComponent details={formDetails.dob} data={data} updateData={updateData} error={error} setError={setError}/>
              <FormSelectComponent details={formDetails.highestQual} data={data} updateData={updateData} error={error} setError={setError}/>
         
              <FormInputComponent details={formDetails.email} data={data} updateData={updateData} error={error} setError={setError}/>
              <FormInputComponent details={formDetails.phone} data={data} updateData={updateData} error={error} setError={setError}/>

            
        </>
    )
}

export default PersonalDetails
