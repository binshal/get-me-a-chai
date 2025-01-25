"use client";
import React, { useEffect, useState } from "react";
import Script from "next/script";
import { useSession } from "next-auth/react";
import { fetchuser, fetchpayments, initiate } from "@/actions/useractions";
import { useSearchParams } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Bounce } from "react-toastify";
import { useRouter } from "next/navigation";
import { notFound } from "next/navigation";

const PaymentPage = ({ username }) => {
  // const { data: session } = useSession()

  const [paymentform, setPaymentform] = useState({
    name: "",
    message: "",
    amount: "",
  });
  const [currentUser, setcurrentUser] = useState({});
  const [payments, setPayments] = useState([]);
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (searchParams.get("paymentdone") == "true") {
      toast("Thanks for your donation!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
    router.push(`/${username}`);
  }, []);

  const handleChange = (e) => {
    setPaymentform({ ...paymentform, [e.target.name]: e.target.value });
  };

  const getData = async () => {
    let u = await fetchuser(username);
    setcurrentUser(u);
    let dbpayments = await fetchpayments(username);
    setPayments(dbpayments);
  };

  const pay = async (amount) => {
    // Get the order Id
    let a = await initiate(amount, username, paymentform);
    let orderId = a.id;
    var options = {
      key: currentUser.razorpayid, // Enter the Key ID generated from the Dashboard
      amount: amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Get Me A Chai", //your business name
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      callback_url: `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
      prefill: {
        //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
        name: "Gaurav Kumar", //your customer's name
        email: "gaurav.kumar@example.com",
        contact: "9000090000", //Provide the customer's phone number for better conversion rates
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    var rzp1 = new Razorpay(options);
    rzp1.open();
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
      <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

      <div className="cover w-full bg-red-50 relative">
        <img
          className="object-cover w-full h-[350]"
          src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3IjoxOTIwLCJ3ZSI6MX0%3D/17.gif?token-time=1738627200&token-hash=9ELNdGxKi3Cy06RYQQPuTwrVfYJgf_TBjThU5A7wrSM%3D"
          alt=""
        />
        <div className="absolute -bottom-12 right-[46.5%] border-2 border-white rounded-full">
          <img
            className="rounded-full"
            width={95}
            height={95}
            src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/aa52624d1cef47ba91c357da4a7859cf/eyJoIjoxMDgwLCJ3IjoxMDgwfQ%3D%3D/4.gif?token-time=1739059200&token-hash=-0c3Y5Z4BdTFUd1sx8UvXdglqbr8nsWzbPYKizhlSpY%3D"
            alt=""
          />
        </div>
      </div>
      <div className="info flex justify-center items-center my-14 flex-col gap-2 mb-32">
        <div className="font-bold text-lg">@{username}</div>
        <div className="text-slate-400">Creating Animated art for VTT's</div>
        <div className="text-slate-400">
          16,044 members, 94 posts, $16,570/release
        </div>

        <div className="payment flex gap-3 w-[80%] mt-11">
          <div className="supporters w-1/2 bg-slate-900 rounded-lg text-white p-10">
            {/* List of all supporters as a leaderboard */}
            <h2 className="text-2xl font-bold my-5">Supporters</h2>
            <ul className="mx-5 text-md">
              <li className="my-4 flex gap-2 items-center">
                <img width={33} src="avatar.gif" alt="user- avatar" />
                <span>
                  Shubam donated <span className="font-bold">$30</span> with a
                  message "I support you"
                </span>
              </li>
              <li className="my-4 flex gap-2 items-center">
                <img width={33} src="avatar.gif" alt="user- avatar" />
                <span>
                  Shubam donated <span className="font-bold">$30</span> with a
                  message "I support you"
                </span>
              </li>
              <li className="my-4 flex gap-2 items-center">
                <img width={33} src="avatar.gif" alt="user- avatar" />
                <span>
                  Shubam donated <span className="font-bold">$30</span> with a
                  message "I support you"
                </span>
              </li>
            </ul>
          </div>

          <div className="makePayment w-1/2 bg-slate-900 rounded-lg text-white p-10">
            <h2 className="text-2xl font-bold my-5">Make a payment</h2>
            <div className="flex-col flex gap-2">
              <input
                onChange={handleChange}
                value={paymentform.name}
                name="name"
                type="text"
                className="w-full p-3 rounded-lg bg-slate-800"
                placeholder="Enter Name"
              />

              <input
                onChange={handleChange}
                value={paymentform.message}
                name="message"
                type="text"
                className="w-full p-3 rounded-lg bg-slate-800"
                placeholder="Enter Message"
              />

              <input
                onChange={handleChange}
                value={paymentform.amount}
                name="amount"
                type="text"
                className="w-full p-3 rounded-lg bg-slate-800"
                placeholder="Enter Amount"
              />
              <button className=" text-white bg-gradient-to-br from-[brown] to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2">
                Pay
              </button>
            </div>
            <div className="flex gap-2 mt-5">
              <button
                className="bg-slate-800 p-3 rounded-lg"
                onClick={() => pay(1000)}
              >
                Pay ₹10
              </button>
              <button
                className="bg-slate-800 p-3 rounded-lg"
                onClick={() => pay(2000)}
              >
                Pay ₹20
              </button>
              <button
                className="bg-slate-800 p-3 rounded-lg"
                onClick={() => pay(3000)}
              >
                Pay ₹30
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentPage;
