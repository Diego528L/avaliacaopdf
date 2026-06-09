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
 
export default function ModeloPDFDinamico({dados}) {
  return (
    <Document>
      <Page size="A4" style={estilos.pagina}>
        <View style={estilos.cabecalho}>
          <Text style={estilos.nome}>{dados.nome}</Text>
 
          <Text style={estilos.cargo}>{dados.cargo}</Text>
 
          <Text style={estilos.texto}>Email:{dados.email}</Text>
 
          <Text style={estilos.contato}>habilidades:{dados.habilidades}</Text>
 
        
        </View>
 
        <View style={estilos.secao}>
          <Text style={estilos.titulo}>Resumo</Text>
 
          <Text style={estilos.texto}>{dados.resumo}</Text>
        </View>
 
        <View style={estilos.secao}>
          <Text style={estilos.titulo}></Text>
 
          <Text style={estilos.texto}>• </Text>
 
          <Text style={estilos.texto}>• </Text>
 
          <Text style={estilos.texto}>•</Text>
          <Text style={estilos.texto}>•</Text>
        </View>
      </Page>
    </Document>
  );
}