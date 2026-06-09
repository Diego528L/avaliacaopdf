// "use client" = este componente roda no navegador (obrigatório aqui)
"use client";
 
// dados de exemplo (depois podem vir de um formulário)
import CurriculoSimples from "./modelopdf";
import dynamic from "next/dynamic"; // para carregar o PDFDownloadLink só no navegador
 
const PDFDownloadLink = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFDownloadLink),
  { ssr: false },
); // para evitar confusão com o nome do componente
 
export default function Botao2() {
  return (
    // PDFDownloadLink gera o PDF e cria o link de download
    <PDFDownloadLink
      className="px-18 py-4 bg-teal-500 text-white rounded-lg hover:bg-pink-300 hover:text-black transition-colors text-2xl font-bold mt-10 duration-500"
      document={<CurriculoSimples />} // qual PDF gerar
      fileName="modelo.pdf" // nome do arquivo
    >
      {/* enquanto gera mostra "Gerando...", depois "Baixar PDF" */}
      {({ loading }) => (loading ? "Gerando..." : "Baixar PDF")}
    </PDFDownloadLink>
  );
}
 