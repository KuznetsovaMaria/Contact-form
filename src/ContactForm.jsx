import { useNavigate } from 'react-router';
import { useFormik } from 'formik';
import * as yup from 'yup';

export default function ContactForm() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      queryType: '',
      message: '',
      consent: false,
    },

    validationSchema: yup.object({
      firstName: yup
        .string()
        .required('Name is required*')
        .max(30, 'Name is longer than 30 characters'),
      lastName: yup
        .string()
        .required('Last name is required*')
        .max(30, 'Last name longer than 30 characters'),
      email: yup
        .string()
        .email('Invalid email address')
        .required('Email is required*'),
      queryType: yup
        .string()
        .required('Choose your query type*'),
      message: yup
        .string()
        .min(7, 'Please tell us more')
        .max(500, 'Your message is longer than expected!')
        .required('Please tell us about your request'),
      consent: yup
        .bool()
        .oneOf(
          [true],
          'Consent is required for us to contact you'
        ),
    }),
    onSubmit: (values) => {
      console.log(values);
      navigate('/form-submitted');
    },
  });

  return (
    <div className="form-container">
      <form
        id="contact-form"
        onSubmit={formik.handleSubmit}
      >
        <fieldset className="section-horizontal">
          <legend id="form-title">Contact us</legend>
          <fieldset className="section">
            <legend
              htmlFor="input-first-name"
              className={
                formik.touched.firstName &&
                formik.errors.firstName
                  ? 'errorMsg'
                  : ''
              }
            >
              {formik.touched.firstName &&
              formik.errors.firstName
                ? formik.errors.firstName
                : 'Name*'}
            </legend>
            <input
              type="text"
              id="firstName"
              placeholder="Enter First Name"
              onChange={formik.handleChange}
              value={formik.values.firstName}
              onBlur={formik.handleBlur}
            ></input>
          </fieldset>
          <fieldset className="section">
            <legend
              htmlFor="input-last-name"
              className={
                formik.touched.lastName &&
                formik.errors.lastName
                  ? 'errorMsg'
                  : ''
              }
            >
              {formik.touched.lastName &&
              formik.errors.lastName
                ? formik.errors.lastName
                : 'Last name*'}
            </legend>
            <input
              id="lastName"
              type="text"
              placeholder="Enter Last Name"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </fieldset>
        </fieldset>
        <fieldset className="section">
          <legend
            htmlFor="input-email"
            className={
              formik.touched.email && formik.errors.email
                ? 'errorMsg'
                : ''
            }
          >
            {formik.touched.email && formik.errors.email
              ? formik.errors.email
              : 'Email address*'}
          </legend>
          <input
            id="email"
            type="email"
            placeholder="Enter email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </fieldset>
        <fieldset className="section">
          <legend
            className={
              formik.touched.queryType &&
              formik.errors.queryType
                ? 'errorMsg'
                : ''
            }
          >
            {formik.touched.queryType &&
            formik.errors.queryType
              ? formik.errors.queryType
              : 'Query type*'}
          </legend>
          <fieldset
            id="queryType"
            className="section-horizontal"
            value={formik.values.queryType}
            onChange={formik.handleChange}
          >
            <div>
              <input
                id="general-query"
                type="radio"
                name="queryType"
                value="General query"
              />
              <label htmlFor="general-query">
                General query
              </label>
            </div>
            <div>
              <input
                id="support-request"
                type="radio"
                name="queryType"
                value="Support request"
              />
              <label htmlFor="support-request">
                Support request
              </label>
            </div>
          </fieldset>
        </fieldset>
        <fieldset className="section">
          <legend
            htmlFor="message"
            className={
              formik.touched.message &&
              formik.errors.message
                ? 'errorMsg'
                : ''
            }
          >
            {formik.touched.message && formik.errors.message
              ? formik.errors.message
              : 'Message*'}
          </legend>
          <textarea
            id="message"
            type="text"
            placeholder="Enter your message"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </fieldset>
        <div className="section-horizontal">
          <input
            id="consent"
            type="checkbox"
            onChange={formik.handleChange}
          />
          <label
            htmlFor="consent"
            className={
              formik.touched.consent &&
              formik.errors.consent
                ? 'errorMsg'
                : ''
            }
          >
            {formik.touched.consent && formik.errors.consent
              ? formik.errors.consent
              : 'I consent to being contacted by the team*'}
          </label>
        </div>
        <button
          type="submit"
          className="btn-submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
