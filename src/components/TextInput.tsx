"use client";
import React from "react";

const TextInput = ({
  id,
  title,
  type = "text",
  placeholder,
  value,
  onChange,
}: any) => {
  return (
    <>
      <p className="mb-1 font-medium text-gray-500">{title}</p>
      <div className="mb-4 flex flex-col">
        <div className="focus-within:border-blue-600 relative flex overflow-hidden rounded-md border-2 transition sm:w-80 lg:w-full">
          <input
            type={type}
            id={id}
            className="w-full border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
            placeholder={placeholder}
            // value={value}
            // onChange={onChange}
          />
        </div>
      </div>
    </>
  );
};

export default TextInput;
