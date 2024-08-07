import './Footer.css'
export default function Footer() {
    return (
        <footer>
            <div className="footer-section company-info">
                <h2>About Us</h2>
                <ul>
                    <li><a href="/about">Company Information</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                    <li><a href="/careers">Careers</a></li>
                    <li><a href="/blog">Blog</a></li>
                </ul>
            </div>
            <div className="footer-section customer-service">
                <h2>Customer Service</h2>
                <ul>
                    <li><a href="/contact">FAQs</a></li>
                    <li><a href="/shipping">Shipping Info</a></li>
                    <li><a href="/returns">Return Policy</a></li>
                    <li><a href="/privacy">Privacy Policy</a></li>
                    <li><a href="/terms">Terms & Conditions</a></li>
                </ul>
            </div>
            <div className="footer-section social-media">
                <h2>Follow Us</h2>
                <ul>
                    <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                    <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                    <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                </ul>
            </div>
            <div className="footer-section payment-methods">
                <h2>We Accept</h2>
                <ul>
                    <li><img src="/images/payment/visa.png" alt="Visa" /></li>
                    <li><img src="/images/payment/mastercard.png" alt="MasterCard" /></li>
                    <li><img src="/images/payment/paypal.png" alt="PayPal" /></li>
                    {/* Add more payment method icons as needed */}
                </ul>
            </div>
            <div className="footer-copyright">
                <p>&copy; 2024 Your Company Name. All Rights Reserved.</p>
            </div>
        </footer>
    );
}
