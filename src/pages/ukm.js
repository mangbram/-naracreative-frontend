import * as React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "./navbar";
import "./style.css";
import "./table.css";
import Footer from "./footer";

axios
  .get("https://raw.githubusercontent.com/mangbram/nc_api/main/nc_api.json")
  .then(function (response) {
    console.log(response.data);
    var list =``
    for (let index = 0; index < response.data.length; index++) {
      list +=
      `
      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="py-3 px-6">
        ${response.data[index].id}
      </td>
      <td scope="row" className="py-3 px-6">
        <img src=${response.data[index].url}  width="100px" height="100px"/>
      </td>
      <td scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        ${response.data[index].nama}
      </td>
      <td scope="row" className="py-3 px-6">
        ${response.data[index].deskripsi}
      </td>
    </tr>
      `
    }
    document.getElementById('listukm').innerHTML = list
  });
export default function UKM() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                No
              </th>
              <th scope="col" className="py-3 px-6">
                Logo
              </th>
              <th scope="col" className="py-3 px-6">
                Nama
              </th>
              <th scope="col" className="py-3 px-6">
                Deskripsi
              </th>
            </tr>

          </thead>
          <tbody id="listukm" className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <td scope="row" className="py-3 px-6">
                1
              </td>
              <td scope="row" className="py-3 px-6">
                <img src="https://ik.imagekit.io/naracreativeimg/naracreativeimage/logo_atletik.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1670944337640" width="100px" height="100px"/>
              </td>
              <td scope="row" className="py-3 px-6">
                Jurnalistik Citra
              </td>
              <td scope="row" className="py-3 px-6">
                Adalah sebuah UKM yang dirintis untuk mengurus pers
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
}
