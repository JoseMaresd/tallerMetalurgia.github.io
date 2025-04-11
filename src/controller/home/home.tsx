import { Box, Typography, styled } from "@mui/material";
import React from "react";

// 🧱 Estilos
const Container = styled(Box)({
  padding: "2rem",
  backgroundColor: "#f0f0f0",
  minHeight: "100vh",
});

const Header = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: "30px",
});

const Logo = styled("img")({
  width: "100px",
  height: "auto",
});

const TitleBox = styled(Box)({
  textAlign: "center",
});

const TitleText = styled(Typography)({
  fontSize: "1.2rem",
  fontWeight: "bold",
  margin: "5px 0",
  color: "#333",
});

const SectionHeader = styled(Typography)({
  textAlign: "center",
  fontSize: "1.5rem",
  marginBottom: "20px",
});

const CenteredImageBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  marginBottom: "20px",
});

const MainImage = styled("img")({
  maxWidth: "100%",
  height: "auto",
  borderRadius: "10px",
});

const Text = styled(Typography)({
  fontSize: "1rem",
  marginTop: "0.5rem",
  color: "#555",
});

const Section = styled(Box)({
  marginTop: "1.5rem",
});

const Footer = styled(Box)({
  marginTop: "3rem",
  paddingTop: "1rem",
  borderTop: "1px solid #ccc",
  textAlign: "center",
});

export default function Home() {
  return (
    <Container>
      {/* 🧭 Header */}
      <Header>
        <Logo src="images/tecnm.png" alt="Logo TecNM" />
        <TitleBox>
          <TitleText>TECNOLOGICO NACIONAL DE MÉXICO</TitleText>
          <TitleText>INSTITUTO TECNOLÓGICO DE SALTILLO</TitleText>
        </TitleBox>
        <Logo src="images/esctec.png" alt="Escudo ITS" />
      </Header>

      {/* 🏠 Página de Inicio */}
      <SectionHeader>🏠 Página de Inicio</SectionHeader>

      <CenteredImageBox>
        <MainImage src="images/imagen_tec.png" alt="Imagen Tec Saltillo" />
      </CenteredImageBox>

      {/* ✏️ Opinión General */}
      <Section>
        <Text>Estudiar en el Tec Saltillo es una experiencia única...</Text>
        <Text>Los profesores son uno de los grandes puntos fuertes de la institución...</Text>
        <Text>Otro aspecto importante es la diversidad de actividades extracurriculares...</Text>
      </Section>

      {/* 🎯 Misión */}
      <Section>
        <Typography variant="h6" color="primary" sx={{ marginTop: "1.5rem" }}>
          🎯 Misión
        </Typography>
        <Text>-</Text>
        <Text>-</Text>
      </Section>

      {/* 🌟 Visión */}
      <Section>
        <Typography variant="h6" color="primary" sx={{ marginTop: "1.5rem" }}>
          🌟 Visión
        </Typography>
        <Text>-</Text>
        <Text>-</Text>
      </Section>

      {/* 📞 Footer */}
      <Footer>
        <Typography variant="h6">CONTÁCTANOS</Typography>
        <Text>Teléfono: 844 288 9460</Text>
        <Text>
          Correo:{" "}
          <a href="mailto:se_saltillo@tecnm.mx">se_saltillo@tecnm.mx</a>
        </Text>
        <Text>Dirección: Avenida Universidad No. 123, Saltillo, Coahuila</Text>
      </Footer>
    </Container>
  );
}
