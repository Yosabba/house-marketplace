import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { db } from "../firebase.config";
import { setDoc, doc, serverTimestamp } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Zoom } from "react-toastify";

export default function Home() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      toast.success("Signed up", {
        position: toast.POSITION.BOTTOM_CENTER,
      });

      const user = userCredential.user;

      updateProfile(user, {
        displayName: formData.name,
      });

      const formDataCopy = { ...formData };
      delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp();
      

      await setDoc(doc(db, "users", user.uid), formDataCopy);

      setFormData({
        email: "",
        password: "",
        name: "",
      });
    } catch (error) {
      console.log(error);
      toast.error("An Error Occured", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    }
  };

  return (
    <main className="pt-12">
      <Head>
        <title>Sign up</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ToastContainer
        pauseOnHover={false}
        transition={Zoom}
        hideProgressBar={true}
      />

      <section className="flex mt-4 mb-4 flex-col items-center">
        <h1 className=" text-6xl font-semibold pb-4">Create an account</h1>
        <br />
        <form onSubmit={onSubmit} className="flex flex-col items-center">
          <input
            className="rounded-lg py-2 w-72 focus:outline-gray-200 indent-8 transition duration-300 bg-[url('/badgeIcon.svg')] bg-no-repeat bg-left"
            type="text"
            placeholder="Name"
            onChange={onChange}
            value={formData.name}
            id="name"
          />
          <input
            className="rounded-lg py-2 w-72 focus:outline-gray-200 indent-8 transition duration-300 mt-4 bg-[url('/personIcon.svg')] bg-no-repeat bg-left"
            type="text"
            placeholder="Username or Email"
            onChange={onChange}
            value={formData.email}
            id="email"
          />
          <br />
          <input
            className="rounded-lg py-2 w-72 focus:outline-gray-200 indent-8 transition duration-300 bg-[url('/lockIcon.svg')] bg-no-repeat bg-left"
            type="password"
            placeholder="Password"
            onChange={onChange}
            value={formData.password}
            id="password"
          />
          <br />
          <Link href="/">
            <span className="ml-60 pt-2 hover:cursor-pointer text-green-500 hover:text-green-400 transition duration-300">
              Sign in Instead
            </span>
          </Link>

          <button className="my-8 bg-green-500 rounded-lg py-2 px-6 w-72 text-white hover:bg-green-400 transition duration-500">
            Sign up
          </button>
        </form>
      </section>
    </main>
  );
}
