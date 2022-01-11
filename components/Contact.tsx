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
        // @ts-ignore: Null as String error.
        form.current,
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
    <div id="contact" className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-coolGray-100 text-coolGray-800">
    <div className="flex flex-col justify-between">
      <div className="space-y-2">
        <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's talk!</h2>
        <div className="text-coolGray-600">Vivamus in nisl metus? Phasellus.</div>
      </div>
      <img src="assets/svg/doodle.svg" alt="" className="p-6 h-52 md:h-64"/>
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

      <ToastContainer />
    </div>
  );
}
