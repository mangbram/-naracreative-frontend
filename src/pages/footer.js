import * as React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import logo from "./image/logo.png";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <>
      <footer className="bg-black rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2022{" "}
          <a href="/" className="hover:underline">
            Tugas Akhir WEB DEV UI™
          </a>
          . All Rights Reserved.
        </span>
      </footer>
    </>
  );
}
