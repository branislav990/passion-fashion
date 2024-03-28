import { useState } from "react";
import "./contactUs.css";
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
        <div className="contact-wrapper container">
            <form className="contact-form" onSubmit={handleSubmit}>
                <h2 className="contact-title">Contact us</h2>
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
    );
};

export default ContactUs;
