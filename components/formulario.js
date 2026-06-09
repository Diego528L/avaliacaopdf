'use client';
import { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import ModeloPDFDinamico from "./modelopdfdinamico";
const PDFDownloadLink = dynamic(
    () => import("@react-pdf/renderer").then((m) => m.PDFDownloadLink),
    { ssr: false },
);

export default function Formulario() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [cargo, setCargo] = useState("");
    const [habilidades, setHabilidades] = useState("");
    const dados = { nome, email, cargo, habilidades }


    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <div className="flex items-start justify-start w-full px-15">
                <h1 className="text-2xl font-bold">Dados do Currículo</h1>
            </div>
            <form className="flex">
                <div className="flex flex-col m-5">

                    <h2>Nome</h2>
                    <input className="border-2 w-100 h-10 mb-4" type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        placeholder="Digite seu nome" />


                    <h2>email</h2>
                    <input className="border-2 w-100 h-10" type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Digite seu email" />
                </div>
                <div className="flex flex-col m-5">


                    <h2>Cargo</h2>
                    <input className="border-2 w-100 h-10 mb-4" type="text"
                        value={cargo}
                        onChange={(e) => setCargo(e.target.value)}
                        placeholder="Digite seu cargo" 
                        />


                    <h2>Habilidades</h2>
                    <textarea className="border-2 w-100 h-10" type="text"
                        value={habilidades}
                        onChange={(e) => setHabilidades(e.target.value)}
                        placeholder="Digite suas habilidades" />
                </div>

            </form>
            <PDFDownloadLink document={<ModeloPDFDinamico dados={dados} />} fileName="curriculo.pdf"
                classname="bg-blue-700 text-white px-4 py-2 rounded-md text-center hover:bg-blue-500 transition-colors ">
                Baixar Curriculo</PDFDownloadLink>
            <Link href="/" className="bg-green-500 text-white px-4 py-2 rounded-md text-center hover:bg-green-600 transition-colors m-5">
                Voltar
            </Link>



        </div>
    );
}