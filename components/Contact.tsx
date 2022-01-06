import emailjs from "emailjs-com";
import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const toastifySuccess = () => {
    toast("Message sent!", {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: "submit-feedback success",
      toastId: "notifyToast",
    });
  };

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jz52urn",
        "template_kizhaxs",
        (form.current),
        "user_NKvWn4AZyRJjhvf6e9NBj"
      )
      .then(
        (result) => {
          console.log(result.text);
          toastifySuccess();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section className="my-20 py-6 dark:bg-coolGray-800 dark:text-coolGray-50">
      <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
        <div className="py-6 md:py-0 md:px-6">
          <h1 className="text-4xl font-bold">Get in touch</h1>
          <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
          <div className="space-y-4">
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 mr-2 sm:mr-6">
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"></path>
              </svg>
              <span>
                1942 Shaheed Rajendra Singh Complex, Anisabad, Patna, Bihar
                800002
              </span>
            </p>
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 mr-2 sm:mr-6">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
              </svg>
              <a href="tel:+919905097454">
                {" "}
                <span>+91 9905097454</span>
              </a>
              <a className="ml-5" href="tel:919973597996">
                {" "}
                <span>+91 9973597996</span>
              </a>
            </p>
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 mr-2 sm:mr-6">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              <span>dental_surgeonravi@yahoo.co.in</span>
            </p>
          </div>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          noValidate={true}
          className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid">
          <label className="block">
            <span className="mb-1">Full name</span>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              name="user_name"
              placeholder="Enter Your Name"
              className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-coolGray-800  border-[1px] border-black p-[3px]"
            />
          </label>
          <label className="block">
            <span className="mb-1">Email address</span>
            <input
              type="email"
              value={email}
              name="user_email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email"
              className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-coolGray-800  border-[1px] border-black p-[3px]"
            />
          </label>
          <label className="block">
            <span className="mb-1">Message</span>
            <textarea
              value={message}
              name="message"
              onChange={(e) => setMessage(e.target.value)}
              rows={3}
              className="block w-full rounded-md  dark:bg-coolGray-800  border-[1px] border-black p-[3px]"></textarea>
          </label>
          <button
            type="submit"
            className="self-center px-8 py-3 text-xl rounded text-white bg-indigo-500 ">
            Submit
          </button>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
}
