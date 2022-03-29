import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import React from 'react'
import styles from './Email.module.css'
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';
import{ init } from '@emailjs/browser';

init(process.env.USER_ID);

export default function Emailjs() {

    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(process.env.SERVICE_ID, process.env.TEMPLATE_ID, e.target, process.env.USER_ID)
          .then((result) => {
            console.log(result.text);
            Swal.fire({
              icon: 'success',
              title: 'Message Sent Successfully'
            })
          }, (error) => {
            console.log(error.text);
            Swal.fire({
              icon: 'error',
              title: 'Ooops, something went wrong',
              text: error.text,
            })
          });
        e.target.reset()
      };


  return (
      
    <div className={styles.email}>
    <Form onSubmit={handleOnSubmit}>
      <Form.Field
        id='form-input-control-email'
        control={Input}
        label='Email'
        name='user_email'
        placeholder='Email…'
        required
        icon='mail'
        iconPosition='left'
      />
      <Form.Field
          id='form-input-control-last-name'
          control={Input}
          label='Name'
          name='user_name'
          placeholder='Name…'
          required
          icon='user circle'
          iconPosition='left'
        />
        <Form.Field
          id='form-textarea-control-opinion'
          control={TextArea}
          label='Message'
          name='user_message'
          placeholder='Message…'
          required
        />
        <Button type='submit' color='green'>Submit</Button>
      </Form>
    </div>

  )
}
