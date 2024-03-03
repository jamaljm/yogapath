"use client";
import React from "react";
import { useAuth } from "../../AuthContext";
import Link from "next/link";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../config/firebase";
import { useEffect } from "react";

export default function Navbar() {
  const [user, setUser] = React.useState<any>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);
  console.log(user);
  return (
    <header>
      <div className="bg-slate-50 z-50 relative w-full border-b-2 rounded-b-3xl border-green-200">
        <div className="px-4 mx-auto sm:px-6 lg:px-12">
          <nav className="relative flex items-center justify-between h-16 lg:h-16">
            <div className=" ">
              <div className="flex-shrink-0">
                <a href="#" title="" className="flex">
                  <img className="w-auto h-8 lg:h-10" src="/logof.png" alt="" />
                </a>
              </div>
            </div>
            <div className="hidden mr-32 lg:flex font-body4 lg:items-center gap-7">
              <Link
                href="#"
                title=""
                className="text-md font-medium text-green-800"
              >
                Yaga+
              </Link>

              <Link
                href="#"
                title=""
                className="text-md font-medium text-green-800"
              >
                Video
              </Link>

              <Link
                href="#"
                title=""
                className="text-md font-medium text-green-800"
              >
                Plans
              </Link>

              <Link
                href="#"
                title=""
                className="text-md font-medium text-green-800"
              >
                Profile
              </Link>
            </div>

            <div className="hidden lg:flex lg:items-center ">
              <div
                title=""
                className="flex items-center justify-center w-10 h-10 text-white bg-black rounded-full"
              >
                <img
                  src={user?.photoURL}
                  className="w-8 opacity-90 rounded-full"
                />{" "}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
