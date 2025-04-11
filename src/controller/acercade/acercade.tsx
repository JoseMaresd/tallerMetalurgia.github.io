import { Box, Typography, styled, Grid } from "@mui/material";
import React from "react";

// Estilos necesarios
const Container = styled(Box)({
  padding: "2rem",
  backgroundColor: "#f0f0f0",
  minHeight: "80vh",
});
const StyledMainImage = styled("img")({
  width: "700px",  // Tamaño específico
  height: "auto",
  borderRadius: "10px",
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
  margin: "5px 0",
  fontSize: "1.2rem",
  fontWeight: "bold",
  color: "#333",
});

const SectionHeader = styled(Typography)({
  textAlign: "center",
  fontSize: "1.5rem",
  marginBottom: "20px",
});

// Removed duplicate declaration of StyledMainImage

const CenteredImageBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "20px",
});

const ImageStyled = styled("img")({
  height: "100%",
  width: "100%",
  objectFit: "cover",
});

const Title = styled(Typography)({
  fontSize: "2rem",
  fontWeight: "bold",
  marginBottom: "1rem",
  color: "#800020",
});

const SubTitle = styled(Typography)({
  fontSize: "1.4rem",
  fontWeight: "600",
  marginTop: "1.5rem",
  color: "#333",
});

const Text = styled(Typography)({
  fontSize: "1rem",
  marginTop: "0.5rem",
  color: "#555",
});

export default function AcercaDe() {
  return (
    <Container>
      <Header>
        <Logo src="images/tecnm.png" alt="Logo TecNM" />
        <TitleBox>
          <TitleText>TECNOLOGICO NACIONAL DE MÉXICO</TitleText>
          <TitleText>INSTITUTO TECNOLÓGICO DE SALTILLO</TitleText>
        </TitleBox>
        <Logo src="images/esctec.png" alt="Escudo ITS" />
      </Header>

      <SectionHeader>🏠 Laboratorio de Metalugia</SectionHeader>
      <CenteredImageBox>
        <StyledMainImage src="images/placa.jpg" alt="ImagenTec"  />
      </CenteredImageBox>
      <Title>🔧 Cambios en el Laboratorio</Title>

      <SubTitle>🛠️ Mantenimiento</SubTitle>
      <Text>
        Se realiza mantenimiento constante en el taller, ya que la adquisición de nuevo material representa un alto
        costo. Esto permite extender la vida útil del equipo existente.
      </Text>

      <SubTitle>👥 Personal Clave</SubTitle>
      <ul>
        <li><Text>👨‍🔧 Técnico: Alejandro Quintana</Text></li>
        <li><Text>🧑‍💻 Soporte: Marcos Hernández</Text></li>
      </ul>

      <SubTitle>📍 Estado del Laboratorio</SubTitle>
      <Text>Todas las áreas del laboratorio actualmente se encuentran habilitadas y en funcionamiento.</Text>

      <SubTitle>💰 Equipos de Alto Costo</SubTitle>
      <ul>
        <li><Text>Molino laminador — Valor aproximado: $7 millones</Text></li>
        <li><Text>Muflas y medidores de temperatura — También implican altos costos</Text></li>
      </ul>

      <SubTitle>📅 Acreditación</SubTitle>
      <Text>En 2016 se obtuvo la acreditación ABET, lo cual implicó adecuaciones importantes al laboratorio.</Text>

      <SubTitle>🖼️ Galería AREA DE TRABAJO </SubTitle>
      <Text></Text>

      {/* Grid de imágenes */}
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Box sx={{ backgroundColor: "#ddd", height: "200px", textAlign: "center" }}>
            <ImageStyled src="images/areas.jpg" alt="Área de Trabajo" />
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Box sx={{ backgroundColor: "#ddd", height: "200px", textAlign: "center" }}>
            <ImageStyled src="images/1.jpg" alt="Molino Laminador" />
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Box sx={{ backgroundColor: "#ddd", height: "200px", textAlign: "center" }}>
            <ImageStyled src="images/2.jpg" alt="Área de Muflas" />
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Box sx={{ backgroundColor: "#ddd", height: "200px", textAlign: "center" }}>
            <ImageStyled src="images/3.jpg" alt="Molino Laminador" />
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Box sx={{ backgroundColor: "#ddd", height: "200px", textAlign: "center" }}>
            <ImageStyled src="images/4.jpg" alt="Área de Muflas" />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
