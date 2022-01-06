// /* eslint-disable @next/next/no-img-element */
// /* eslint-disable react/no-unescaped-entities */

// export default function Contact() {
//   return (
//     <div id="contact" className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 ">
      // <div className="flex flex-col justify-center items-center">
      //   <div className="space-y-2">
      //     <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
      //       Let's talk!
      //     </h2>
      //   </div>
      //   <img
      //     src="/Sendingemails_Flatline.png"
      //     alt=""
      //     className=""
      //   />
      // </div>
//       <form
       
//         className="space-y-6 ng-untouched ng-pristine ng-valid"
//       >
//         <div>
//           <label htmlFor="name" className="text-sm">
//             Full name
//           </label>
//           <input
//             id="name"
//             type="text"
//             placeholder=""
//             className="w-full p-3 rounded bg-gray-200"
//           />
//         </div>
//         <div>
//           <label htmlFor="email" className="text-sm">
//             Email
//           </label>
//           <input
//             id="email"
//             type="email"
//             className="w-full p-3 rounded bg-gray-200"
//           />
//         </div>
//         <div>
//           <label htmlFor="message" className="text-sm">
//             Message
//           </label>
//           <textarea
//             id="message"
//             className="w-full p-3 rounded bg-gray-200"
//           ></textarea>
//         </div>
//         <button
//           type="submit"
//           className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-[#F13223] text-white"
//         >
//           Send Message
//         </button>
//       </form>
//     </div>
//   );
// }

import emailjs from "emailjs-com";
import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

export default function Contact():any {
  const form = useRef();
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
  const onSubmit = async () => {
    try {
      setDisabled(true);
      const templateParams = {
        name: name,
        email: email,
        subject: "Enquiry from Cyphen Website",
        message: message,
      };
      console.log("clicked");

      await emailjs.send(
        "service_cyphen",
        "template_cyphen",
        templateParams,
        "user_tyXS0Bp77AA2dojDUXUsX"
      );

      reset();
      toastifySuccess();
      setDisabled(false);
    } catch (e) {
      console.log(e);
    }
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qewa4v7",
        "template_d4cb1j5",
        form.current,
        "user_awl2UrmRm8vFKnPjJbrjr"
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
      <div className="flex flex-col justify-center items-center">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
            Let's talk!
          </h2>
        </div>
        <img
          src="/Sendingemails_Flatline.png"
          alt=""
          className=""
        />
      </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          noValidate=""
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
              rows="3"
              className="block w-full rounded-md  dark:bg-coolGray-800  border-[1px] border-black p-[3px]"></textarea>
          </label>
          <button
            type="submit"
           className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-[#F13223] text-white">
Submit
          </button>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
}