import { Header } from "./layout/components/Header";
import { Footer } from "./layout/components/Footer";
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <Header />

      <main className="max-w-full mt-17 flex-1">
        <h1>Bonjour</h1>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default App;
