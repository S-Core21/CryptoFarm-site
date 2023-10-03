import React from 'react'
import './Form.css'
import { useState } from 'react'
import { PaystackButton } from 'react-paystack'
import axios from 'axios'

const Form = () => {

    // const [payment, setPayment] = useState(false)
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phno: 0,
        gender:'',
        occupation: '',
        knowlegde: '',
        amt: 11000
    })

    
    const config = {
        reference: new Date().getTime().toString(),
        email: formData.email,
        amount : `${formData.amt}00`,
        publicKey: 'pk_test_3303cd23fcec00465c9596ec32a2cb7b66554316'
    }
    const body = {
        firstname: 'a',
        lastname: 'a',
        email: 'a',
        phno: 0,
        gender:'a',
        occupation: 'a',
        knowlegde: 'a',
        amt: 11000
    }

    function handleSubmit (e){
        e.preventDefault()
        axios.post('https://cryptofarmer-api.onrender.com/users', body)
        .then(res=>{
            console.log(res)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    const handleSuccess = (response) =>{
        console.log('Payment Successful')
        // handleSubmit()
    }
    const handleError = (response) =>{
        console.log('Payment Unsuccessful')
        // add my logic
    }

    function handleChnage(e){
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
 



  return (
    <div className='form-con'>
        <header>
            <h1>
                Get Started  
            </h1>
        </header>
        <form>
            <div>
            <label htmlFor='firstname'>
                First Name: 
                </label>
                <input 
                required={true}
                type="text"
                name='firstname'
                value={formData.firstname}
                onChange={handleChnage}
                />
            </div>
            <div>
            <label htmlFor='lastname'>
                Last Name: 
                </label>
                <input 
                required={true}
                type="text"
                name='lastname'
                value={formData.lastname}
                onChange={handleChnage}
                />
            </div>
            <div>
            <label htmlFor='email'>
                Email: 
                </label>
                <input 
                required={true}
                type="text"
                name='email'
                value={formData.email}
                onChange={handleChnage}
                />
            </div>
            <div>
            <label htmlFor='phno'>
                Phone Number:                                                                                                                  
                </label>
                <input 
                required={true}
                type="number"
                name='phno'
                value={formData.phno}
                onChange={handleChnage}
                />
            </div>
            <div>
            <label htmlFor='phno'>
                Gender:                                                                                                                  
                </label>
                <select name='gender' value={formData.gender} onChange={handleChnage}>
                    <option value="">Select a Gender</option>
                    <option value="Male">Male</option>
                    <option value="female">Female</option>
                </select>
            </div>
            <div>
            <label htmlFor='occupation'>
                Occupation:                                                                                                                 
                </label>
                <input 
                required={true}
                type="text"
                name='occupation'
                value={formData.occupation}
                onChange={handleChnage}
                />
            </div>
            <div>
            <label htmlFor='knowlegde'>
                Knowlegde:                                                                                                                 
                </label>
                <input 
                required={true}
                type="text"
                name='knowlegde'
                value={formData.knowlegde}
                onChange={handleChnage}
                />
            </div>
            <div>
            <label htmlFor='amt'>
                Amount:                                                                                                                 
                </label>
                <input 
                required={true}
                type="text"
                name='amt'
                value={formData.amt}
                onChange={handleChnage}
                readOnly={true}
                />
            </div>
            
            <div>
                <button type='submit' className='form-sub' onClick={handleSubmit}>
                    Submit 
                </button>
            </div>
        </form>
        <div>
                <PaystackButton 
                    text='Make Payment'
                    className='paystack'
                    callback = {handleSuccess}
                    close ={handleError}
                    disabled={false}
                    embed={false}
                    reference={config.reference}
                    email={config.email}
                    amount={config.amount}
                    publicKey={config.publicKey}
                    tag='button'
                /> 
            </div>
    </div>
  )
}

export default Form