import React from 'react';

export default function Item({ itemObj }) {
    let { name, quantity, category } = itemObj;

    return (
        <div className="bg-indigo-100 p-2 w-100 m-4 rounded shadow-md">
            <h3 className="text-xl font-bold text-teal-700">{name}</h3>
            <p className="text-sm text-gray-800">Buy {quantity} in {category}</p>
        </div>
    );
}
