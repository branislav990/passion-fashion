import Navbar from "../navbar/Navbar";
import Footer from "./Footer";

const PrivacyPolicy = () => {
    return (
        <div>
            <Navbar />
            <h2>Privacy and Security</h2>
            <section className="privacy-section">
                <h3>Privacy</h3>
                <p>
                    Customer details such as names, mailing addresses, telephone
                    numbers and email addresses provided during the ordering
                    process are used to facilitate sales transactions and
                    improve our services to customers. Customer details will
                    only be used in accordance with the details described within
                    this statement. Once an order has been placed we may send
                    you information, by post or e-mail, on other books which may
                    be of interest. You may opt out of receiving this
                    information at any time either via the website, or by
                    contacting us by e-mail or telephone. We will never sell or
                    rent your data to third parties.
                </p>
            </section>
            <section className="privacy-section">
                <h3>Control of your personal information</h3>
                <p>
                    You may request details of personal information which we
                    hold about you under the 2018 The General Data Protection
                    Regulation (GDPR). If you would like a copy of the
                    information held on you please contact example@example.com.
                    If you believe that any information we are holding is
                    incorrect or incomplete, contacts us and we will promptly
                    correct the details.
                </p>
            </section>
            <hr />
            <section className="privacy-section">
                <h3>Cookies</h3>
                <p>
                    Our shopping basket and checkout require you to have cookies
                    enabled within your browser settings to function correctly.
                    This is in line with most other e-comerce sites. We do not
                    store any personal information in the cookie, and only a
                    meaningless randomly generated key to link you to your
                    basket contents. You may refuse to accept cookies by
                    activating the setting on your browser which allows you to
                    refuse the setting of cookies. However, if you select this
                    setting you may be unable to access certain parts of our
                    site. Unless you have adjusted your browser setting so that
                    it will refuse cookies, our system will issue cookies when
                    you log on to our site.
                </p>
            </section>
            <section>
                <h3>Security</h3>
                <p>
                    Pemberley Natural History Books attaches great importance to
                    protecting our customers' personal information. All personal
                    information supplied via our secure website is processed
                    with high levels of electronic and physical security, being
                    transmitted to us with 128-bit encryption using Secure
                    Sockets Layer (SSL) which is validated using a Secure
                    Certificate issued by GoDaddy. The information is not
                    permanently stored on our web server. All card payments are
                    processed via a secure payment gateway (Opayo/SagePay).
                    Secure payment by credit card is normally made during the
                    checkout process, however, customers who need to make a
                    payment securely, without placing an order, may use this
                    secure payment form. This may be to pay a pro-forma invoice,
                    complete a transaction, pay for an item not offered on the
                    website, or to make payment using new or updated card
                    information.
                </p>
            </section>
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
