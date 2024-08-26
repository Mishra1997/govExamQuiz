// src/Contact.js
import React, { useState } from 'react';
import Header from './Header'
import './Contact.css'
import {Card} from 'react-bootstrap'
const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

   
const formUrl='https://docs.google.com/forms/d/1pCqxEhYVz_PZBiRt2vOY-RKVZm3GYpIj3R2aBNv3wnM/formResponse'
        const formDataGoogle = new FormData();
        formDataGoogle.append('entry.2005620554', formData.name); 
        formDataGoogle.append('entry.1045781291', formData.email); 
        formDataGoogle.append('entry.839337160', formData.message); 

        fetch(formUrl, {
            method: 'POST',
            mode: 'no-cors',
            body: formDataGoogle
        })
        .then(() => {
            alert('Form Submitted Successfully');
            setFormData({ name: '', email: '', message: '' });
        })
        .catch((error) => {
            console.error('Error!', error.message);
        });
    };

    return (

        <div className="contact-container" >
           
            <Header/>
<Card id='contact-card'>
    <Card.Title>

    <h2>Contact Us</h2>
    </Card.Title>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder='Your Name'
                        value={formData.name}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '8px' }}
                        required
                    />
                </div>
            
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder='Email Id'
                        value={formData.email}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '8px' }}
                        required
                    />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="message" style={{ display: 'block', marginBottom: '5px' }}>Message:</label>
                    <input
                        id="message"
                        name="message"
                        placeholder='Message '
                        value={formData.message}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '8px', height: '150px' }}
                        required
                    />
                </div>
                <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007BFF', color: '#fff', border: 'none', cursor: 'pointer' ,float:'right',borderRadius:"4px"}}>
                    Submit
                </button>
            </form>
</Card>

           
         
        
       
        </div>
     
    );
};

export default Contact;
