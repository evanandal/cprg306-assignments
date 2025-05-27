import Link from "next/link";

export default function studentinfo() {
  return (
    <main>
      <h1>Name - Eva Nandal</h1>
      <ul>
        <li>GitHub Link - <Link href="https://github.com/evanandal/cprg306-assignments" className="text-cyan-600 hover:text-cyan-400">Click Here</Link></li>
      </ul>
    </main>
);
}