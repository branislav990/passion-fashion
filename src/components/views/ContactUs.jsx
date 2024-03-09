import { useState } from "react";
import Navbar from "../navbar/Navbar";
import Footer from "./Footer";
import "./contactUs.css";
import contactUsImg from "../../assets/contact-us.png";
import Swal from "sweetalert2";

const ContactUs = () => {
    const [messageData, setMessageData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setMessageData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        Swal.fire({
            position: "center",
            icon: "success",
            title: "Your message was sent successfully",
            showConfirmButton: false,
            timer: 3000,
        });
    };

    return (
        <div>
            <Navbar />
            <div className="contact-wrapper">
                {/* <div className="img-wrapper">
                    <img
                        className="contact-img"
                        src={contactUsImg}
                        alt="Contact us"
                    />
                </div> */}
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="contact-input">
                        <input
                            type="text"
                            name="name"
                            value={messageData.name}
                            placeholder="Name"
                            required
                            onChange={handleChange}
                        />
                    </div>
                    <div className="contact-input">
                        <input
                            type="email"
                            name="email"
                            value={messageData.email}
                            placeholder="Email"
                            required
                            onChange={handleChange}
                        />
                    </div>
                    <div className="contact-input">
                        <textarea
                            value={messageData.message}
                            name="message"
                            placeholder="Message"
                            required
                            onChange={handleChange}
                        />
                    </div>

                    <input
                        type="submit"
                        value="Send Message"
                        className="input-submit"
                    />
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default ContactUs;
