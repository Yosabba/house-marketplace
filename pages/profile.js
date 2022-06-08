import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Zoom } from "react-toastify";
import Nav from "../components/Nav";
import Head from "next/head";

export default function Profile() {
  const auth = getAuth();
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: auth.currentUser.email,
    name: auth.currentUser.displayName,
  });

  const onLogout = () => {
    auth.signOut();
    toast.success("Logged out", {
      position: toast.POSITION.TOP_LEFT,
    });
    router.push("/");
  };

  console.log(auth.currentUser);

  return (
    <main className="py-4">
      <Head>
        <title>Profile</title>
        <meta name="description" content="House Marketplace" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <ToastContainer
        pauseOnHover={false}
        transition={Zoom}
        hideProgressBar={true}
      />
      <section className="flex items-center justify-around pb-4 ">
        <h1 className="text-4xl">Profile</h1>
        <button
          onClick={onLogout}
          className="bg-green-400 rounded-lg px-4 py-2 font-medium hover:bg-green-300 transition duration-500"
        >
          Log Out
        </button>
      </section>

      <section>
          <h1 className="text-xl font-light">{`Hello, ${auth.currentUser.displayName}`}</h1>
      </section>
    </main>
  );
}
