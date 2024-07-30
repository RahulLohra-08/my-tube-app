import React from 'react';

const ProfileInput = ({ id, type = 'file', onChange } : any) => {
  return (
    <div className="mb-4 flex flex-col">
      <div className="focus-within:border-blue-600 relative flex overflow-hidden rounded-md border-2 transition sm:w-80 lg:w-full">
        <input
          type={type}
          id={id}
          className="w-full border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default ProfileInput;
