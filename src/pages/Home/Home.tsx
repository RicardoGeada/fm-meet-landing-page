import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import MainContent from "../../components/MainContent/MainContent";
import "./Home.scss";

function Home() {
  return (<>
    <Header/>
    <Hero/>
    <MainContent/>
    <Footer />
  </>);
}

export default Home;