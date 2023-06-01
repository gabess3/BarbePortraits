import Navbar from "./components/Navbar/Navbar";
import Gallery from "./components/Gallery/Gallery";
import Footer from "./components/Footer/Footer";
import Bio from "./components/Bio/Bio";
import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import Header from "./components/Header/Header";
import Work from "./components/Work/Work";

function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Header />
      <Bio />
      <Gallery />
      <Work />
      <Footer />
    </>
  );
}

export default App;
