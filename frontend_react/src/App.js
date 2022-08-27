import "./App.scss";
import container from "./components";
import index from "./container";

const { Navbar } = container;
const { About, Footer, Header, Skills, Testimonial, Work } = index;

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
