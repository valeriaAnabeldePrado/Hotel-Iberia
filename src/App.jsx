import NavBar from "./components/Nav/NavBar";
import { Home, HabitacionesYs, Contacto } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import "./App.css";


function App() {
  
  return (
    <div className="App">
      <HelmetProvider>
        <Helmet>
          <title>Hotel Iberia</title>
          <meta name="author" content="Lobo Mauro Andrés, de Prado Valeria Anabel" />
          <meta name="description" content="En el Hotel Iberia ofrecemos a los huéspedes, un espacio de descanso, confort y excelente nivel de servicio, el mismo esta bicado en pleno centro de la Ciudad de Neuquén" />
          <meta name="keywords" content="Hotel Iberia, Neuquén, capital, descanso, confort, vacaciones"></meta>
        </Helmet>
      </HelmetProvider>
      <NavBar />
      <Routes>
        <Route path="/*" element={<Home/>} />
        <Route path="/habitacionesYs//*" element={<HabitacionesYs/>} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </div>
  );
}

export default App;
