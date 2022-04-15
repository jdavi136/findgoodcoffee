import React from "react";

export default function Header() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-transparent p-6">
      <div className="flex items-center flex-shrink-0 text-back mr-6">
        <span className="font-semibold text-xl tracking-tight hover:text-brown-dark hover:cursor-pointer">
          FIND GOOD ☕️
        </span>
      </div>
      <div class="block lg:hidden">
        <button class="flex items-right px-3 py-2 border rounded text-back">
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div class="w-full block-inline lg:flex lg:w-auto ">
        <div class="text-sm lg:flex-grow">
          <a
            href="/login"
            class="block mt-4 lg:inline-block lg:mt-0 text-back hover:text-brown-dark mr-4 "
          >
            LOGIN
          </a>
          <a
            href="/signup"
            class="block mt-4 lg:inline-block lg:mt-0 text-back hover:text-brown-dark mr-4"
          >
            SIGNUP
          </a>
        </div>
      </div>
    </nav>
  );
}
