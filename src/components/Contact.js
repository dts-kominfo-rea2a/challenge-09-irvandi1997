// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';
import './Contact.css';

const Contact = ({ contacts }) => {
    return (
        <div>
            {
                contacts.map((contact, i) => 
                    <div className="contact" key={i}>
                        <div style={{ flexGrow: 4 }}>
                            <img src={contact.photo} alt="Monica" width="150px" style={{ borderRadius: "50%" }} />
                        </div>
                        <div style={{ flexGrow: 8 }}>
                            <h4>{contact.name}</h4>
                            <p>{contact.phone}</p>
                            <p>{contact.email}</p>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Contact;