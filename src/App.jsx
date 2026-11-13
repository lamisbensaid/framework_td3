import Header from "./componants/Header/Header";
import Destinations from "./componants/Destinations/Destinations";
import Footer from "./componants/Footer/Footer";


import "./App.css";

function App() {
  return (
     <div className="App">
        <Header/>
        <main>
         <Destinations/>
        </main>
        <Footer/>
     </div>
  );
}
export default App;
