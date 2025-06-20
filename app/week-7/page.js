"use client";

import Link from "next/link";
import ItemList from "./item-list";
import NewItem from "./new-item";
import items from "./items.json";
import { useState } from "react";

export default function Page() {
    const [itemList, setItems] = useState(items);

    const handleAddItem = (item) => {
        setItems((prev) => [...prev, item]);
    };

    return (
        <main className="px-5 py-3 bg-slate-950">
            <h1 className="text-3xl font-bold text-white">Shopping List</h1>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={itemList} />
            <Link href="/" className="text-teal-400 underline hover:text-teal-200">
                Home
            </Link>
        </main>
    );
}
