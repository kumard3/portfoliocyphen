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
    <div
      id="contact"
      className="grid max-w-screen-xl grid-cols-1 items-center gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32  dark:text-gray-100"
    >
      <div className="flex flex-col justify-between">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
            Let's talk!
          </h2>
        </div>
        <img src="/Sendingemails_Flatline.png" alt="" className="w-[30rem]" />
      </div>

      <form
        ref={form}
        onSubmit={sendEmail}
        noValidate={true}
        className="flex flex-col py-6 text-2xl space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid"
      >
        <label className="block">
          <span className="mb-1">Full name</span>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            name="user_name"
            placeholder="Enter Your Name"
            className="block w-full px-3 py-2  rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-coolGray-800  border-[1px] border-black p-[3px]"
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
            className="block w-full px-3 py-2 rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-coolGray-800  border-[1px] border-black p-[3px]"
          />
        </label>
        <label className="block">
          <span className="mb-1">Message</span>
          <textarea
            value={message}
            name="message"
            placeholder="Enter your Message"
            onChange={(e) => setMessage(e.target.value)}
            rows={3}
            className="block w-full px-3 py-2   rounded-md  min-h-[10rem] border-[1px] border-black p-[3px]"
          ></textarea>
        </label>
        <button
          type="submit"
          className="self-center px-8 py-3 text-2xl rounded text-white font-bold gradientbutton "
        >
          Submit
        </button>
      </form>

      <ToastContainer />
    </div>
  );
}
