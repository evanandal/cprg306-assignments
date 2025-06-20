"use client";

import { useState } from "react";
import Item from "./item";
// import ItemData from "./items.json";

export default function ItemList({ items }) {
    let itemArray = items.map((item) => ({ ...item }));

    let [sortBy, setSortBy] = useState("name");

    const handleSortBy = (event) => setSortBy(event.target.value);

    itemArray = itemArray.sort((a, b) => {
        let sort = sortBy;

        if (sortBy == "grouped category") {
            sort = "category";
        }

        let itemA = a[sort].toUpperCase();
        let itemB = b[sort].toUpperCase();
        if (itemA < itemB) return -1;
        if (itemA > itemB) return 1;
        return 0;
    });

    let groupedItems = itemArray.reduce((accumulator, item) => {
        const category = item.category;

        if (!accumulator[category]) {
            accumulator[category] = [];
        }

        accumulator[category].push(item);
        return accumulator;
    }, {});

    return (
        <section>
            <div>
                <label className="text-black">Sort by:</label>
                <button
                    className="bg-teal-700 text-white w-30 h-8 m-3 disabled:bg-teal-400"
                    type="button"
                    value="name"
                    onClick={handleSortBy}
                    disabled={sortBy == "name"}
                >
                    Name
                </button>
                <button
                    className="bg-teal-700 text-white w-30 h-8 m-3 disabled:bg-teal-400"
                    type="button"
                    value="category"
                    onClick={handleSortBy}
                    disabled={sortBy == "category"}
                >
                    Category
                </button>
                <button
                    className="bg-teal-700 text-white w-30 h-14 m-3 disabled:bg-teal-400"
                    type="button"
                    value="grouped category"
                    onClick={handleSortBy}
                    disabled={sortBy == "grouped category"}
                >
                    Grouped Category
                </button>
            </div>
            <div>
                {sortBy === "grouped category" &&
                    Object.entries(groupedItems).map(([category, items]) => (
                        <div key={category}>
                            <h2 className="text-2xl capitalize text-white">{category}</h2>
                            {items.map((item) => (
                                <Item key={item.id} item={item} />
                            ))}
                        </div>
                    ))}
                {sortBy !== "grouped category" &&
                    itemArray.map((item) => (
                        <Item key={item.id} item={item} />
                    ))}
            </div>
        </section>
    );
}
