"use client";
import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");

  const increment = () => {
    if (quantity < 20) setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const submitFunction = (event) => {
    event.preventDefault();

    let id = Math.random().toString(36).slice(2, 11);

    let item = {
      id,
      name,
      quantity,
      category,
    };

    onAddItem(item);

    setName("");
    setQuantity(1);
    setCategory("Produce");
  };

  const getName = (event) => setName(event.target.value);
  const getCategory = (event) => setCategory(event.target.value);

  return (
    <main>
      <form onSubmit={submitFunction} className="px-4 py-2 m-8 w-100 bg-slate-800 rounded-md">
        <div>
          <input
            required
            type="text"
            className="px-2 py-1 mb-3 w-92 rounded border border-amber-500 bg-white focus:bg-amber-100 text-black"
            placeholder="Item name"
            onChange={getName}
            value={name}
          />
        </div>
        <div className="mb-3 flex justify-between">
          <div className="flex flex-row justify-between px-5 py-1 w-35 rounded border border-amber-500 bg-white focus:bg-amber-100">
            <label className="text-black flex items-center">{quantity}</label>
            <div className="flex items-center">
              <button
                type="button"
                className="bg-amber-500 text-white rounded px-3 py-0.5 mr-1 disabled:bg-gray-600"
                onClick={decrement}
                disabled={quantity <= 1}
              >
                -
              </button>
              <button
                type="button"
                className="bg-amber-500 text-white rounded px-3 py-0.5 disabled:bg-gray-600"
                onClick={increment}
                disabled={quantity >= 20}
              >
                +
              </button>
            </div>
          </div>
          <div>
            <select
              className="px-2 py-1 h-9 rounded border border-amber-500 bg-white text-black focus:bg-amber-100"
              onChange={getCategory}
            >
              <option value="produce">Produce</option>
              <option value="dairy">Dairy</option>
              <option value="bakery">Bakery</option>
              <option value="meat">Meat</option>
              <option value="frozen foods">Frozen Foods</option>
              <option value="canned goods">Canned Goods</option>
              <option value="dry goods">Dry Goods</option>
              <option value="beverages">Beverages</option>
              <option value="snacks">Snacks</option>
              <option value="household">Household</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        <div>
          <button
            className="bg-amber-600 text-white rounded px-3 py-2 w-92 hover:bg-amber-700 active:bg-amber-400"
          >
            +
          </button>
        </div>
      </form>
    </main>
  );
}
