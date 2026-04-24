"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function HomeBanner() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen flex items-start justify-center bg-white px-4 pt-16">
      <div className="w-full max-w-[600px] bg-white rounded-[12px] p-10 flex flex-col items-center gap-6">
        
        <div className="flex items-center gap-3">
          <Image
            src="https://cdn-icons-png.flaticon.com/512/2111/2111615.png"
            alt="Slack"
            width={34}
            height={34}
          />
          <h1 className="text-[30px] font-bold text-black">
            Slack
          </h1>
        </div>

        <p className="text-[50px] font-semibold text-center text-black leading-snug whitespace-nowrap">
          Enter your email address to <br /> sign in
        </p>

        <p className="text-[14px] text-gray-500 text-center">
          Or choose another way to sign in.
        </p>

        <div className="flex flex-col gap-[20px] w-[400px]">

        <input
          type="text"
          placeholder="name@work-email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 text-sm outline-none border boder-gray-500 rounded-[8px]"
        />

        <button className="w-full bg-[#611f69] text-white py-3 rounded-[8px] text-sm font-medium hover:bg-[#4a1550]">
         Sign in with email
        </button>

        </div>

        <p className="text-[12px] text-gray-500 uppercase tracking-wide">
          OR SIGN IN WITH
        </p>

        <div className="flex flex-row gap-3 w-full ">
          <button className="flex items-center justify-center gap-2 border border-gray-300 rounded-[8px] py-2 w-full hover:bg-gray-50 w-[400px]">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
              alt="Google"
              width={18}
              height={18}
            />
            <span className="text-sm text-gray-700">Google</span>
          </button>

          <button className="flex items-center justify-center gap-2 border border-gray-300 rounded-[8px] py-2 w-full hover:bg-gray-50">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/0/747.png"
              alt="Apple"
              width={18}
              height={18}
            />
            <span className="text-sm text-gray-700">Apple</span>
          </button>
        </div>

        <p className="text-[12px] text-gray-500 text-center">
          Having trouble? Try entering a workspace URL
        </p>

      </div>
    </div>
  );
}