import Image from "next/image";
import BotaoAv from "../components/botaoAv";
 
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center bg-linear-to-br from-slate-900 via-slate-700 to-slate-500 font-poppins w-full h-screen">
      <main className="flex flex-col items-center justify-center w-1/3 text-center border-8 border-gray-500 rounded-lg shadow-3xl shadow-gray-800 py-25 bg-gray-900 ">
        <h1 className="text-6xl font-bold text-white">
          Gerador de <span className="text-blue-300">PDF</span>
        </h1>
 
        <p className="mt-3 text-2xl text-white">
          Um exemplo simples usando{" "}
          <a
            href="https://react-pdf.org/"
            className="text-blue-300 hover:underline"
          >
            React PDF
          </a>
        </p>
 
        <div className="mt-6">

          <BotaoAv />
        </div>
      </main>
    </div>
  );
}