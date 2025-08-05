"use client";
import React, { useState } from "react";

function Contect() {
  let [result,setResult]=useState()
  const OnSubmit = async (event) => {

    event.preventDefault();

    const formData = new FormData(event.target);
    setResult('Sending...')
    formData.append("access_key", "e92c8ad0-748a-45f9-b5f1-6c12944fd4e2");
     const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });
    const name= formData.get('Name')
    const email=formData.get('Email')
    const message=formData.get('Message')

    if(!email){
      setResult("email is reqeured")
      return
    }
    if(!name){
      setResult("name is reqeured")
      return
    }
    if(!message){
      setResult("message is reqeured")
      return
    }

    const data= await response.json()

    if(data.success){
      alert('seding successful')
      setResult("")
      event.target.reset()
    }else{
      console.log('error man');
    }
  };
  return (
    <div className="my-30 flex flex-col items-center space-y-15 w-[80%] mx-auto">
      <div className="flex flex-col items-center gap-4 ">
        <div className="flex text-5xl">
          <h1 className="font-bold ">Contect</h1>
          <h1 className="underline font-mono">With Us</h1>
        </div>
        <div className="flex flex-col items-center gap-1">
          <p className="text-gray-500">Ready to make move ? Lets build your</p>
          <p className="text-gray-500">Futur Together</p>
        </div>
      </div>
      <form
        onSubmit={OnSubmit}
        className="w-full flex flex-col gap-10 items-center"
      >
        <div className="flex items-center gap-10  w-[60%] ">
          <div className="space-y-4 flex flex-col gap-2.5 items-start w-full">
            <label htmlFor="">Your name</label>
            <input
              name="Name"
              placeholder="Your name"
              className="border-1 border-solid border-gray-400 p-3 w-full"
              type="text"
            />
          </div>
          <div className="space-y-4 flex flex-col w-full gap-2.5 items-start">
            <label htmlFor="">Your Email</label>
            <input
              name="Email"
              placeholder="Your Email"
              className="border-1 border-solid border-gray-400 p-3 w-full"
              type="text"
            />
          </div>
        </div>
        <div className="w-[60%] flex flex-col gap-2.5">
          <label htmlFor="">Message</label>
          <textarea
            placeholder="Message..."
            className="p-2 w-full border-1 border-solid border-gray-400 h-[20rem]"
            name="Message"
            id=""
          ></textarea>
        </div>
        <button className="text-center w-[23%] bg-blue-500 rounded-sm text-white px-4 py-3 font-semibold">
          {result ? result : "Send Message"}
        </button>
      </form>
    </div>
  );
}

export default Contect;
