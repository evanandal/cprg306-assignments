import NewItem from "./new-item";
import Link from "next/link";


export default function Page() {
    return (
        <main>
            <p>Week 4</p>
            <NewItem />
            <Link href="/" className="text-cyan-600 underline hover:text-cyan-300">Home</Link>
        </main>
    );
}