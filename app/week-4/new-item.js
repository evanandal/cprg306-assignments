"use client";
import { useState } from "react";

export default function NewItem() {
    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        if (quantity < 20) {
            setQuantity(quantity + 1);
        }
    };

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <main>
            <div style={{ display: 'flex', flexDirection: 'row' }} className="px-4 py-2 m-8 w-40 bg-pink-100">
                <div className="px-5 py-1 mb-3 w-35 rounded border border-violet-500 bg-white focus:bg-purple-100">
                    <label className="text-violet-700 font-semibold">{quantity}</label>
                    <button
                        type="button"
                        className="bg-rose-400 text-white rounded px-3 py-0.5 mr-1 disabled:bg-gray-300"
                        onClick={decrement}
                        disabled={quantity <= 1}
                    >
                        -
                    </button>
                    <button
                        type="button"
                        className="bg-emerald-500 text-white rounded px-3 py-0.5 disabled:bg-gray-300"
                        onClick={increment}
                        disabled={quantity >= 20}
                    >
                        +
                    </button>
                </div>
            </div>
        </main>
    );
}
