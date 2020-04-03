import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import { ContactList, ContactItem } from "../../components/ContactList";
// import "./style.css";

function Contact() {
    const [contact, setContact] = useState([{}]);

    useEffect(() => {
        API.getContact.then((res) => {
            // console.log(res);
            setContact(res);
        });
    }, []);

    return (
        <Container style={{ marginTop: 30, minHeight: "100vh" }}>
            <ContactList>
                {contact.map(item => {
                    return (
                        <ContactItem
                        email={item.email}
                        github={item.github}
                        linkedIn={item.linkedIn}
                        photo={item.photo}
                        />
                    );
                })
                }
            </ContactList>
        </Container>
    );
}

export default Contact;