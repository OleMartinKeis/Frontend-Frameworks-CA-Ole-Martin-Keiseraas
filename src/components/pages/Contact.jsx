import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import styles from "../../scss/form/Form.module.scss"

function ContactForm() {
    const [formData, setFormData] = useState({
        fullName: '',
        subject: '',
        email: '',
        body: '',
    });

    const [formErrors, setFormErrors] = useState({
        fullName: '',
        subject: '',
        email: '',
        body: '',
    });

    const validateForm = () => {
        let valid = true;
        const newErrors = { ...formErrors };

        
    if (formData.fullName.length < 3) {
        newErrors.fullName = 'Full Name must be at least 3 characters';
        valid = false;
    } else {
        newErrors.fullName = '';
    }

        
    if (formData.subject.length < 3) {
        newErrors.subject = 'Subject must be at least 3 characters';
        valid = false;
    } else {
        newErrors.subject = '';
    }

        
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Invalid email address';
        valid = false;
    } else {
        newErrors.email = '';
    }

        
    if (formData.body.length < 3) {
        newErrors.body = 'Body must be at least 3 characters';
        valid = false;
    } else {
        newErrors.body = '';
    }

    setFormErrors(newErrors);
        return valid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

    if (validateForm()) {
        console.log('Form data:', formData);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className={styles['centered-form']}>
            <Form onSubmit={handleSubmit} className='mb-3'>
                <Form.Group controlId="fullName">
                    <Form.Label className={styles['form-label']}>Full Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        isInvalid={formErrors.fullName}
                    />
                    <Form.Control.Feedback type="invalid">
                        {formErrors.fullName}
                    </Form.Control.Feedback>
                </Form.Group>
    
                <Form.Group controlId="subject">
                    <Form.Label className={styles['form-label']}>Subject</Form.Label>
                    <Form.Control
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        isInvalid={formErrors.subject}
                    />
                    <Form.Control.Feedback type="invalid">
                        {formErrors.subject}
                    </Form.Control.Feedback>
                </Form.Group>
    
                <Form.Group controlId="email">
                    <Form.Label className={styles['form-label']}>Email</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        isInvalid={formErrors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                        {formErrors.email}
                    </Form.Control.Feedback>
                </Form.Group>
        
                <Form.Group controlId="body">
                    <Form.Label className={styles['form-label']}>Body</Form.Label>
                    <Form.Control
                        as="textarea"
                        name="body"
                        value={formData.body}
                        onChange={handleChange}
                        isInvalid={formErrors.body}
                    />
                    <Form.Control.Feedback type="invalid">
                        {formErrors.body}
                    </Form.Control.Feedback>
                </Form.Group>
        
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default ContactForm;