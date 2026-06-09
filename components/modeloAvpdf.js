import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";

const estilos = StyleSheet.create({
  pagina: {
    padding: 30,
    backgroundColor: "#f5f5f5",
    fontFamily: "Helvetica",
  },

  linhaColunas: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },

  blocoSuperior: {
    width: "48%",
    borderWidth: 2,
    borderColor: "#333",
    borderRadius: 8,
    padding: 15,
    backgroundColor: "#fff",
    minHeight: 120,
  },

  gridQuadrados: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignContent: "space-around",
    flex: 1,
  },
  miniQuadrado: {
    width: "40%",
    height: 35,
    borderWidth: 2,
    borderColor: "#444",
    marginBottom: 5,
  },


  gridCirculos: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    flex: 1,
  },
  miniCirculo: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#444",
    backgroundColor: "#d9d9d9",
  },

  blocoGrande: {
    borderWidth: 2,
    borderColor: "#333",
    borderRadius: 8,
    padding: 20,
    backgroundColor: "#fff",
    marginBottom: 15,
    minHeight: 180,
  },

  blocoMeioEsquerdo: {
    width: "55%",
    borderWidth: 2,
    borderColor: "#333",
    borderRadius: 12,
    padding: 15,
    backgroundColor: "#fff",
    minHeight: 100,
  },
  blocoMeioDireito: {
    width: "40%",
    borderWidth: 2,
    borderColor: "#333",
    borderRadius: 4,
    padding: 15,
    backgroundColor: "#fff",
    minHeight: 100,
  },


  blocoInferiorLargo: {
    borderWidth: 2,
    borderColor: "#333",
    borderRadius: 6,
    padding: 15,
    backgroundColor: "#fff",
    marginBottom: 25,
    minHeight: 60,
  },

  linhaTexto: {
    height: 4,
    backgroundColor: "#666",
    marginBottom: 10,
    borderRadius: 2,
  },

  linhaRodape: {
    borderBottomWidth: 2,
    borderBottomColor: "#333",
    marginTop: 6,
  },
});

export default function PDFelementos() {
  return (
    <Document>
      <Page size="A4" style={estilos.pagina}>

        <View style={estilos.linhaColunas}>
          <View style={estilos.blocoSuperior}>
            <View style={estilos.gridQuadrados}>
              <View style={{
                width: 20, height: 20,
                backgroundColor: "#0d9488"
              }} />
              <View style={{
                width: 20, height: 20,
                backgroundColor: "#0d9488"
              }} />
              <View style={{
                width: 20, height: 20,
                backgroundColor: "#0d9488"
              }} />
              <View style={{
                width: 20, height: 20,
                backgroundColor: "#0d9488"
              }} />
            </View>
          </View>

          <View style={estilos.blocoSuperior}>
            <View style={estilos.gridCirculos}>
              <View style={{
                width: 20, height: 20,
                borderRadius: 46,
                backgroundColor: "#f59e0b"
              }} />
              <View style={{
                width: 20, height: 20,
                borderRadius: 46,
                backgroundColor: "#f59e0b"
              }} />
              <View style={{
                width: 20, height: 20,
                borderRadius: 46,
                backgroundColor: "#f59e0b"
              }} />
            </View>
          </View>
        </View>

        <View style={estilos.blocoGrande}>
          <View style={[estilos.Texto, {
            height: 9,
             width: "70%",
             marginTop: 10,
             backgroundColor: "#0d9488",
             borderRadius: 5
          }]} />

          <View style={[estilos.Texto, {
            height: 9,
            width: "60%",
              marginTop: 10,
            backgroundColor: "#0d9488",
            borderRadius: 5
          }]} />

          <View style={[estilos.Texto, {
            height: 9,
            width: "45%",
            marginTop: 10,
             backgroundColor: "#0d9488",
              borderRadius: 5
          }]} />
          <View style={[estilos.linhaTexto, {
            height: 9,
            width: "25%",
            marginTop: 10,
            backgroundColor: "#0d9488",
             borderRadius: 5
          }]} />
        </View>

        <View style={estilos.linhaColunas}>
          <View style={estilos.blocoMeioEsquerdo}>
            <Text style={estilos.Texto}>"...no fluxo da história basta apenas Um!!! </Text>
            <Text style={estilos.Texto}>...um personagem, um cenário, um conflito... e o leitor já tem tudo para se perder na narrativa."</Text>
            <Text style={estilos.Texto}>- Gustavo Ávila</Text>
          </View>

          <View style={estilos.blocoMeioDireito}>
            <Text style={estilos.Texto}>"...nem os mais sábios conseguem ver o quadro todo!..." </Text>
            <Text style={estilos.Texto}>"...nem os Deuses podem com um idiota!..."</Text>
            <Text style={estilos.Texto}>- Anônimo</Text>
          </View>
        </View>

        <View style={estilos.blocoInferiorLargo}>
          <Text style={estilos.Texto}>"...a vida é um eterno recomeço, e cada dia é uma nova chance de ser feliz!..." </Text>
          <Text style={estilos.Texto}>- Anônimo</Text>
        </View>

        <View style={{ marginTop: "15" }}>
          <View
            style={{
              height: 9,
              width: "100%",
              backgroundColor: "green",
              borderRadius: 5,
              marginTop: 12, }}/>
 
          <View
            style={{
              height: 9,
              width: "100%",
              backgroundColor: "purple", // azul
              borderRadius: 5,
              marginTop: 12, }}/>
 
          <View
            style={{
              height: 9,
              width: "100%",
              backgroundColor: "orange", // amarelo
              borderRadius: 5,
              marginTop: 12, }} />
        </View>

      </Page>
    </Document>
  );
}