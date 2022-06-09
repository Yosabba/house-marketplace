import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Zoom } from "react-toastify";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const resetPassword = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();

      await sendPasswordResetEmail(auth, email);
      toast.success("Password reset email sent", {
        position: toast.POSITION.BOTTOM_CENTER,
      });

      setEmail("");
    } catch (error) {
      toast.error("An Error Occurred", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
      console.log(error.message);
    }
  };

  const onChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <main className="pt-28">
      <Head>
        <title>Forgot Password</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ToastContainer
        pauseOnHover={false}
        transition={Zoom}
        hideProgressBar={true}
      />
      <h1 className="text-4xl font-bold text-center my-7">Forgot Password ?</h1>

      <section className="flex flex-col items-center justify-center">
        {/*  */}
        <form className="w-full max-w-lg" onSubmit={resetPassword}>
          <div className="flex flex-col items-center">
            <input
              className="shadow  border rounded w-72 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Enter your email"
              name="email"
              value={email}
              onChange={onChange}
            />
          </div>
          <div className="flex flex-col items-center py-8">
            <button
              className="bg-green-400 rounded-lg px-4 py-2 font-medium hover:bg-green-300 transition duration-500"
              type="submit"
            >
              Reset Password
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
