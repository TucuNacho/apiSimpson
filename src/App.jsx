import { Container, Button } from "react-bootstrap";
import Frase from "./components/Frase";
import logo from './assets/logosimpson.png'

function App() {
  //  https://thesimpsonsquoteapi.glitch.me/quotes
  return (
    <>
      <Container className="text-center my-5">
        <img src={logo} alt="Logo simpson" className="w-50 mb-4" />

        {/* <div>
          <Spinner animation="grow" variant="info" />
        </div> */}

        <Frase></Frase>

        <Button variant="warning" className="mt-4">
          Enviar
        </Button>
      </Container>
    </>
  );
}

export default App;
