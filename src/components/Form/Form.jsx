import React, { useEffect } from 'react'
import './Form.css'
import { useState } from 'react'
import { PaystackButton } from 'react-paystack'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Form = () => {
    const [payment, setPayment] = useState(false)
    const [paymentSuccess, setPaymentSuccess] = useState(false)
    const [success, setSuccess] = useState(false)
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phno: '',
        gender: '',
        occupation: '',
        knowlegde: '',
        txid: '',
        amt: 11000
    })


    const config = {
        reference: new Date().getTime().toString(),
        email: formData.email,
        amount: `${formData.amt}00`,
        publicKey: 'pk_test_3303cd23fcec00465c9596ec32a2cb7b66554316'
    }
    const body = {
        firstname: formData.firstname,
        lastname: formData.lastname,
        email: formData.email,
        phno: formData.phno,
        gender: formData.gender,
        occupation: formData.occupation,
        knowlegde: formData.knowlegde,
        amt: 11000
    }

    function handleSubmit(e) {
        e.preventDefault()
        setSuccess(true)
            axios.post('https://cryptofarmer-api.onrender.com/users', body)
            .then(res => {
                console.log(res)
                setPayment(true)
                setSuccess(false)
                setPaymentSuccess(true)
            })
            .catch(err => {
                console.log(err)
                setSuccess(false)
                setPayment(false)
                setPaymentSuccess(false)
            })
        
    }

    const handleSuccess = (response) => {
        console.log('Payment Successful')
        console.log(response)
    }
    const handleError = (response) => {
        console.log('Payment Unsuccessful')
        console.log(response)
        // add my logic
    }

    function handleChnage(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }


    return (
        <div className='form-con' >
            <header>
                <h1>
                    Get Started
                </h1>
            </header>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='firstname'>
                        First Name:
                    </label>
                    <input
                        type="text"
                        name='firstname'
                        value={formData.firstname}
                        onChange={handleChnage}
                        required
                    />
                </div>
                <div>
                    <label htmlFor='lastname'>
                        Last Name:
                    </label>
                    <input
                        type="text"
                        name='lastname'
                        value={formData.lastname}
                        onChange={handleChnage}
                        required={true}
                    />
                </div>
                <div>
                    <label htmlFor='email'>
                        Email:
                    </label>
                    <input
                        type="text"
                        name='email'
                        value={formData.email}
                        onChange={handleChnage}
                        required={true}
                    />
                </div>
                <div>
                    <label htmlFor='phno'>
                        Phone Number:
                    </label>
                    <input
                        type="number"
                        name='phno'
                        value={formData.phno}
                        onChange={handleChnage}
                        required={true}
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
                        type="text"
                        name='occupation'
                        value={formData.occupation}
                        onChange={handleChnage}
                        required={true}
                    />
                </div>
                <div>
                    <label htmlFor='knowlegde'>
                        Knowlegde:
                    </label>
                    <input
                        type="text"
                        name='knowlegde'
                        value={formData.knowlegde}
                        onChange={handleChnage}
                        required={true}
                    />
                </div>
                <div>
                    <label htmlFor='amt'>
                        Amount:
                    </label>
                    <input
                        type="text"
                        name='amt'
                        value={formData.amt}
                        onChange={handleChnage}
                        required={true}
                        readOnly={true}
                    />
                </div>
                <div>
                    {
                        !payment && <PaystackButton
                            text='Make Payment'
                            className='paystack'
                            callback={handleSuccess}
                            close={handleError}
                            disabled={false}
                            embed={false}
                            reference={config.reference}
                            email={config.email}
                            amount={config.amount}
                            publicKey={config.publicKey}
                            tag='button'
                        />
                    }
                </div>
                <div>
                    <label htmlFor='amt'>
                        Transaction reference:
                    </label>
                    <input
                        type="number"
                        name='txid'
                        value={formData.txid}
                        onChange={handleChnage}
                        required={true}
                    />
                </div>
                <small style={{ color: 'gray' }}>
                    Check your mail for payment reciept and transaction reference
                </small>
                <div>
                    <button type='submit' className='form-sub'>
                        {success ? 'Loading..' : 'Proceed'}
                    </button>
                </div>
            </form>
            {
                paymentSuccess && <div className='modal'>
                <h2>
                    Registration Complete
                </h2>
                <Link>
                <img src="/images/whatsapp.png" alt="" />
                    Click to Join Whatsapp Group
                </Link>
            </div>
            }
            
        </div>
    )
}

export default Form