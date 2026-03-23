
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import WhatsAppBtn from "./components/WhatsAppBtn";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
    <Navbar />
      <AppRoutes />
      <WhatsAppBtn />
      <Footer />
    </>
  );
}

export default App;