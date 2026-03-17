import { useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  // Update form state
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Show alert messages
  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 5000);
  };

  // Submit form via EmailJS
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      console.log("Form submitted:", formData);
      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_PUBLIC_KEY
      );

      setIsLoading(false);
      setFormData({ name: "", email: "", message: "" });
      showAlertMessage("success", "Your message has been sent!");
    } catch (error) {
      setIsLoading(false);
      console.error(error);
      showAlertMessage("danger", "Something went wrong!");
    }
  };

  return (
    <section id="contact" className="relative flex items-center justify-center c-space section-spacing">
      
      {/* Background Particles */}
      <Particles
        className="absolute inset-0 -z-50"
        quantity={80}
        ease={80}
        color={"#f7c5d3"} // soft pink particles to match your brand
        refresh
      />

      {/* Alerts */}
      {showAlert && <Alert type={alertType} text={alertMessage} />}

      {/* Form Card */}
      <div className="flex flex-col items-center justify-center max-w-md p-8 mx-auto border border-white/10 rounded-2xl bg-gradient-to-t from-neutral-900/50 to-neutral-800/50 backdrop-blur-md">
        
        {/* Header */}
        <div className="flex flex-col items-start w-full gap-3 mb-8">
          <h2 className="text-heading">Let's Connect</h2>
          <p className="font-normal text-neutral-300">
            Have a project idea, collaboration, or just want to say hi? 
            Fill the form below and I'll get back to you.
          </p>
        </div>

        {/* Contact Form */}
        <form className="w-full" onSubmit={handleSubmit}>
          
          {/* Name */}
          <div className="mb-5">
            <label htmlFor="name" className="field-label">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="field-input field-input-focus"
              placeholder="Shivam Tiwari"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div className="mb-5">
            <label htmlFor="email" className="field-label">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="field-input field-input-focus"
              placeholder="shivam@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Message */}
          <div className="mb-5">
            <label htmlFor="message" className="field-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className="field-input field-input-focus"
              placeholder="Write your message here..."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-3 text-lg font-semibold text-white rounded-md bg-gradient-to-r from-pink-400 to-pink-600 hover:scale-105 transition-transform"
          >
            {!isLoading ? "Send Message" : "Sending..."}
          </button>

        </form>
      </div>
    </section>
  );
};

export default Contact;