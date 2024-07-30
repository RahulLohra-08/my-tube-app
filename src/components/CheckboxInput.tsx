'use client'
import React from 'react';

const CheckboxInput = ({ id, label, checked, onChange } : any) => {
  return (
    <div className="mb-4 flex items-center">
      <input
        type="checkbox"
        id={id}
        className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id} className="ml-2 text-gray-700">
        {label}
      </label>
    </div>
  );
};

export default CheckboxInput;
