import React from 'react';
import { Button } from '../Button/Button';

const ContactForm = () => {
    return (
        <div className='contactForm'>
            <div className='contactForm__container'>
                <div className='contactForm__title'>
                    <h2>Contactez-nous</h2>
                </div>
                <div className='contactForm__input'>
                    <div className='contactForm__input__group'>
                        <label>
                            Nom
                        </label>
                        <input type='text' className='contactForm__input-text' placeholder='nom'></input>
                    </div>
                    <div className='contactForm__input__group'>
                        <label>
                            Email
                        </label>
                        <input type='text' className='contactForm__input-text' placeholder='johndoe@john.fr'></input>
                    </div>
                    <div className='contactForm__input__group'>
                        <label>
                            Message
                        </label>
                        <textarea className='contactForm__input-textarea' placeholder='message'/>
                    </div>
                </div>
                <div className='contactForm__action'>
                    <Button
                        label={"ENVOYER"}
                        backgroundColor={"#FFD166"}
                    />
                </div>
            </div>
        </div>
    )
};

export default ContactForm;