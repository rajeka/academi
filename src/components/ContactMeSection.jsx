import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import FullScreenSection from './FullScreenSection';
import emailjs from 'emailjs-com';
import toast from 'react-hot-toast';
import { FiCheckCircle, FiAlertCircle } from 'react-icons/fi';

// Yup validation schema
const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  serviceType: Yup.string().required('Please select a service'),
  message: Yup.string().min(10, 'Message too short').required('Required'),
});
export default function ContactMeSection() {
  const serviceTypeLabels = {
    hireMe: 'Freelance project proposal',
    openSource: 'Open source consultancy session',
    other: 'Other...',
  };
  const sendEmail = (values, { resetForm }) => {
    const selectedLabel = serviceTypeLabels[values.serviceType] || '';
    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          name: values.name,
          email: values.email,
          serviceType: selectedLabel,
          message: values.message,
        },
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        toast.custom((t) => (
          <div
            className={`flex items-center gap-3 shadow-lg rounded-lg p-3 text-white ${
              t.visible ? 'animate-enter' : 'animate-leave'
            }`}
            style={{ background: '#16a34a' }} // Tailwind's green-600
          >
            <FiCheckCircle size={20} />
            <span>Message sent successfully!</span>
          </div>
        ));

        resetForm();
      })
      .catch((err) => {
        console.log('Email send error: ', err);
        toast.custom((t) => (
          <div
            className={`flex items-center gap-3 shadow-lg rounded-lg p-3 text-white ${
              t.visible ? 'animate-enter' : 'animate-leave'
            }`}
            style={{ background: '#dc2626' }} // Tailwind's red-600
          >
            <FiAlertCircle size={20} />
            <span>Failed to send message. Please try again later.</span>
          </div>
        ));
      });
  };

  return (
    <FullScreenSection
      isDarkBackground
      className="bg-[#512DA8] min-w-auto flex items-start h-[83vh] justify-center"
    >
      <div className="flex flex-col w-[90%] ml-8 items-start justify-between mx-auto  shadow rounded">
        <h1 className="text-2xl font-bold mb-1 pl-4 pt-4">Contact Us</h1>

        <Formik
          initialValues={{ name: '', email: '', serviceType: '', message: '' }}
          validationSchema={ContactSchema}
          onSubmit={sendEmail}
        >
          {({ isSubmitting }) => (
            <Form className="flex flex-col gap-4 w-[90vw] p-4">
              {/* Name Field */}
              <div>
                <label className=" font-bold mb-1">Name</label>
                <Field
                  name="name"
                  type="text"
                  className="w-full border rounded p-2 "
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block font-bold mb-1">Email</label>
                <Field
                  name="email"
                  type="email"
                  className="w-full border rounded p-2"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              {/* Service Type Select */}
              <div>
                <label className="block  font-bold mb-1">Service Type</label>
                <Field
                  as="select"
                  name="serviceType"
                  className="w-full  rounded p-2 border border-zinc-200 text-zinc-200 bg-[#512DA8]"
                >
                  <option value="">Select a service</option>
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">
                    Open source consultancy session
                  </option>
                  <option value="other">Other...</option>
                </Field>
                <ErrorMessage
                  name="serviceType"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              {/* Message Field */}
              <div>
                <label className="block font-bold mb-1">Message</label>
                <Field
                  as="textarea"
                  name="message"
                  rows="4"
                  className="w-full border rounded p-2"
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-purple-600 font-semibold text-zinc-200 py-2 rounded hover:bg-purple-500"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </FullScreenSection>
  );
}
