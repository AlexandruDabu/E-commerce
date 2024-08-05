import { useState } from 'react';
import './Contact.css'
import Question from './Question';
export default function Contact() {
    const freqQuestions=[
        {
            question: 'What payment methods do you accept?',
            answear: 'We accept various payment methods, including credit/debit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay. We also support some alternative payment methods depending on your region.'
        },
        {
            question: 'How can I track my order?',
            answear: "Once your order has shipped, you'll receive a confirmation email with a tracking number and a link to track your package. You can also log in to your account and view your order history for tracking information."
        },
        {
            question: 'What is your return policy?',
            answear: "We offer a [number]-day return policy. Items must be returned in their original condition with all tags and packaging. Please visit our Returns page for detailed instructions and to initiate a return."
        },
        {
            question: 'How long does shipping take?',
            answear: "Shipping times vary depending on your location and the shipping method selected. Typically, domestic orders arrive within [number] business days, while international orders may take [number] to [number] weeks. You can check estimated delivery times at checkout."
        }
    ]
    const [indexActive, setIndexActive] = useState(null);
    return (
        <div className="contactBody">
            <div className="headerContact">
                <h1>Contact Us</h1>
            </div>
            <div className="faqContact">
                <div className='faqQuestions'>
                    <h2>Most freq asked questions</h2>
                    {freqQuestions.map((question,index) => (
                        <Question key={index} index={index} question={question} indexActive = {indexActive} setIndexActive={setIndexActive}/>
                    ))}
                </div>
                <div className='faqDataContact'>
                    <h2>You can also find us at:</h2>
                    <div className='faqMiniContact'><p>Address</p><a href="https://www.google.com/maps/place/Str.Drumul+Gura+Siriului+Nr.+81-83" target="_blank">Str. Drumul Gura Siriului Nr. 81-83</a></div>
                    <div className='faqMiniContact'><p>Phone</p><a href="tel:+40756361705">+40 756 361 705</a></div>
                    <div className='faqMiniContact'><p>Email</p><a href="mailto:alexandrufelix2020@gmail.com">alexandrufelix2020@gmail.com</a></div>
                </div>
                
            </div>
            <div className="formContact">
                    <h2>Any other problems?</h2>
                    <form>
                        <div className='form-group-bigContact'>
                            <div className="form-group-contact">
                                <input type="text" id="name" name="name" required placeholder='Name'/>
                            </div>
                            <div className="form-group-contact">
                                <input type="email" id="email" name="email" required placeholder='Email' />
                            </div>
                        </div>
                        <div className="form-group-contact">
                            <textarea id="message" name="message" rows="10" cols="50" required placeholder='Describe your problem'></textarea>
                        </div>
                    <button className='loginButton' type="submit">Submit</button>
                    </form>
            </div>
        </div>
    )
}