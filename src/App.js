import Cutnav from './Components/Navbar/Navbar';
import Counter from './Components/Counter/Counter';
import About from './Components/About/About';
import Slider from './Components/Slider/Slider';
import Productlist from './Components/Cards/Productlist';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Cutnav />
      <About title="welcome to our shope" desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
      Similique, ab quisquam! Odit temporibus voluptates, enim dolore veritatis 
      suscipit tempore laborum modi sint distinctio repellat fugit voluptatibus. 
      Quos neque repellat consequatur?" />
      <Counter />
      < Slider />
      <Productlist />
      <Footer />
    </div>
  );
}

export default App;
