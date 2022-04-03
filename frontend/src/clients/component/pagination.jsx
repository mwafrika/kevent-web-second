import React from 'react';

const pagination = () => {
  return (
    <div class="container flex justify-center mx-auto py-10">
      <ul class="flex">
        <li>
          <button class="h-10 px-5 text-gray-600 bg-white border border-r-0 border-gray-600 hover:bg-gray-100">
            Prev
          </button>
        </li>
        <li>
          <button class="h-10 px-5 text-gray-600 bg-white border border-r-0 border-gray-600 ">
            1
          </button>
        </li>
        <li>
          <button class="h-10 px-5 text-gray-600 bg-white border border-r-0 border-gray-600 hover:bg-gray-100">
            2
          </button>
        </li>
        <li>
          <button class="h-10 px-5 text-white bg-gray-600 border border-r-0 border-gray-600 ">
            3
          </button>
        </li>
        <li>
          <button class="h-10 px-5 text-gray-600 bg-white border border-gray-600 hover:bg-gray-100">
            Next
          </button>
        </li>
      </ul>
    </div>
  );
};

export default pagination;
