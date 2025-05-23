import Link from "next/link";

export default function studentinfo() {
  return (
    <main>
      <h1 className="text-3xl">Name - Eva Nandal</h1>
      <h1 className="text-3xl">Student ID - 000952053</h1>
      <h3 className="text-2xl">GitHub Link - <Link href="https://github.com/evanandal/cprg306-assignments" className="text-cyan-600 hover:text-cyan-400">Click Here</Link></h3>
   </main>
);
}