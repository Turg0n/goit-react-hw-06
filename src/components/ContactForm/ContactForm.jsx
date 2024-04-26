import { nanoid } from 'nanoid';
import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './ContactForm.module.css';

const initialValues = {
  name: '',
  number: '',
};
const ContactPlan = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too short!')
    .max(50, 'Too long!')
    .required('Required'),
  number: Yup.string()
    .matches(
      /(?:([+]\d{1,4})[-.\s]?)?(?:[(](\d{1,3})[)][-.\s]?)?(\d{1,4})[-.\s]?(\d{1,4})[-.\s]?(\d{1,9})/g,
      'Invalid phone number'
    )
    .min(3, 'Must be at least 3 characters')
    .max(50, 'Must be no more than 50 characters')
    .required('Required'),
});

export default function ContactForm({ addContact }) {
  const nameFieldId = useId();
  const numberFieldId = useId();

  function handleSubmit(values, actions) {
    addContact({
      id: nanoid(),
      name: values.name,
      number: values.number,
    });
    actions.resetForm();
  }
  
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactPlan}
    >
      <Form className={css.contactForm}>
        <div>
          <label className={css.formLabel} htmlFor={nameFieldId}>
            Name
          </label>
          <Field
            className={css.formField}
            type="text"
            name="name"
            id={nameFieldId}
          />
          <ErrorMessage className={css.alert} name="name" component="span" />
        </div>
        <div>
          <label className={css.formLabel} htmlFor={numberFieldId}>
            Number
          </label>
          <Field
            className={css.formField}
            type="tel"
            name="number"
            id={numberFieldId}
          />
          <ErrorMessage
            className={css.alert}
            name="number"
            component="span"
          />
        </div>
        <button className={css.addBtn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}