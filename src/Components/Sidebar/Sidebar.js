import React from 'react';
import 'tw-elements';
import home from '../../images/icons/home.png'
import logo from '../../images/icons/Shape.png'
import intels from '../../images/icons/star.png'
import leads from '../../images/icons/user.png'
import accounts from '../../images/icons/building.png'
import preferences from '../../images/icons/cog.png'
import integration from '../../images/icons/link.png'
import team from '../../images/icons/users.png'
import help from '../../images/icons/comments-alt.png'
import {Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div class="w-72 h-screen sticky top-0 shadow-md bg-white flex-none" id="sidenavSecExample">
  <div class="pt-4 pb-2 px-6">
    <a href="#!">
      <div class="flex items-center">
        <div class="shrink-0">
          <img src={logo} class="rounded-full w-10" alt="Avatar" />
        </div>
        <div class="ml-5">
          <Link to='/mainpage' class="text-2xl font-bold">B2Brain</Link>
          <p ></p>
        </div>
      </div>
    </a>
  </div>
  <ul class="relative px-1">
    <li class="relative">
      <Link to='/dashboard' class="flex items-center py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="primary">
        <img src={home} alt="" />
        <span className='ml-3 font-semibold text-xl'>Dashboard</span>
        </Link>
    </li>
    <li class="relative">
      <a class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="primary">
        <img src={intels} alt="" />
        <span className='ml-3 font-semibold text-xl'>Intels</span>
      </a>
    </li>
    <li class="relative">
      <a class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="primary">
        <img src={leads} alt="" />
        <span className='ml-3 font-semibold text-xl'>Leads</span>
      </a>
    </li>
        {/* Account */}
    <li class="relative" id="sidenavSecEx3">
      <a class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer" data-mdb-ripple="true" data-mdb-ripple-color="primary" data-bs-toggle="collapse" data-bs-target="#collapseSidenavSecEx3" aria-expanded="false" aria-controls="collapseSidenavSecEx3">
       <img src={accounts} alt="" />
        <span className='ml-3 font-semibold text-xl'>Accounts</span>
        <svg aria-hidden="true" focusable="false" data-prefix="fas" class="w-3 h-3 ml-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
        </svg>
      </a>
      <ul class="relative accordion-collapse collapse" id="collapseSidenavSecEx3" aria-labelledby="sidenavSecEx3" data-bs-parent="#sidenavSecExample">
        <li class="relative">
          <a href="#!" class="flex items-center font-semibold py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="primary">Manage All</a>
        </li>
        <li class="relative">
          <a href="#!" class="flex items-center font-semibold py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="primary">Track New Accounts</a>
        </li>
        <li class="relative">
          <a href="#!" class="flex items-center font-semibold py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="primary">Bulk Import</a>
        </li>
      </ul>
    </li>

    {/* Preferences */}
    <li class="relative" id="sidenavSecEx4">
      <a class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer" data-mdb-ripple="true" data-mdb-ripple-color="primary" data-bs-toggle="collapse" data-bs-target="#collapseSidenavSecEx4" aria-expanded="false" aria-controls="collapseSidenavSecEx4">
        <img src={preferences} alt="" />
        <span className='ml-3 font-semibold text-xl'>Preferences</span>
        <svg aria-hidden="true" focusable="false" data-prefix="fas" class="w-3 h-3 ml-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
        </svg>
      </a>
      <ul class="relative accordion-collapse collapse" id="collapseSidenavSecEx4" aria-labelledby="sidenavSecEx4" data-bs-parent="#sidenavSecExample">
        <li class="relative">
          <a href="#!" class="flex items-center font-semibold  py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="primary">Product Focus</a>
        </li>
        <li class="relative">
          <a href="#!" class="flex items-center font-semibold py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="primary">Intel Preferences</a>
        </li>
        <li class="relative">
          <a href="#!" class="flex items-center font-semibold py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="primary">Lead Persona</a>
        </li>
      </ul>
    </li>

    {/* Integrations */}
    <li class="relative">
      <a class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="primary">
        <img src={integration} alt="" />
        <span className='ml-3 font-semibold text-xl'>Integrations</span>
      </a>
    </li>
    {/* Team */}
    <li class="relative">
      <a class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="primary">
        <img src={team} alt="" />
        <span className='ml-3 font-semibold text-xl'>Team</span>
      </a>
    </li>
    {/* Help support */}
    <li class="relative">
      <a class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="primary">
        <img src={help} alt="" />
        <span className='ml-3 font-semibold text-xl'>Help / Support</span>
      </a>
    </li>
  </ul>
</div>


        
    );
};

export default Sidebar;