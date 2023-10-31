import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainArch = () => {
  return (
    <>
      <nav>
        <Header></Header>
      </nav>
      <main className="min-h-[calc(100vh-288px)]">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
};
export default MainArch;
