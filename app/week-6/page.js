import Link from "next/link";
import ItemList from "./item-list";

export default function Page() {
    return (
        <main className="px-5 py-3 bg-slate-950">
            <h1 className="text-3xl font-bold text-white">Shopping List</h1>
            <ItemList />
            <Link href="/"className="text-teal-400 underline hover:text-teal-200">Home</Link>
        </main>
    );
}
