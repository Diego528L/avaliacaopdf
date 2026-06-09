import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
 
const estilos = StyleSheet.create({
  pagina: {
    padding: 40,
    backgroundColor: "#f5f5f5",
  },
 
  cabecalho: {
    backgroundColor: "red",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
 
  nome: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
    marginBottom: 5,
  },
 
  cargo: {
    fontSize: 14,
    color: "#d9a441",
    marginBottom: 15,
  },
 
  contato: {
    fontSize: 11,
    color: "#dce7e5",
    marginBottom: 4,
  },
 
  secao: {
    marginTop: 15,
  },
 
  titulo: {
    fontSize: 16,
    color: "#2a9d8f",
    fontWeight: "bold",
    marginBottom: 8,
  },
 
  texto: {
    fontSize: 12,
    marginBottom: 4,
    color: "#555",
  },
});
 
export default function CurriculoSimples() {
  return (
    <Document>
      <Page size="A4" style={estilos.pagina}>
        <View style={estilos.cabecalho}>
          <Text style={estilos.nome}>Diego Leandro Alves</Text>
 
          <Text style={estilos.cargo}>Contabilidade</Text>
 
          <Text style={estilos.contato}>diego.alves528@gmail.com</Text>
 
          <Text style={estilos.contato}>(35) 9 9999-0000</Text>
 
          <Text style={estilos.contato}>Lavras, MG</Text>
        </View>
 
        <View style={estilos.secao}>
          <Text style={estilos.titulo}>Resumo</Text>
 
          <Text style={estilos.texto}>
            Habilidades contabeis,
          </Text>
        </View>
 
        <View style={estilos.secao}>
          <Text style={estilos.titulo}>Habilidades</Text>
 
          <Text style={estilos.texto}>• Pacote Office</Text>
 
          <Text style={estilos.texto}>• Comunicação</Text>
 
          <Text style={estilos.texto}>• Trabalho em Equipe</Text>
          <Text style={estilos.texto}>• Consultorias contabeis</Text>
        </View>
      </Page>
    </Document>
  );
}