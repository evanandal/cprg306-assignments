import Link from "next/link";
import NewItem from "./new-item";

export default function Page() {
    return (
        <main className="font-serif text-grey-200">
            <p>Week 5</p>
            <NewItem />
            <Link href="/" className="text-cyan-600 underline hover:text-cyan-300">Home</Link>
        </main>
    );
}
