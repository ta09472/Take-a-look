import Greeting from "./Greeting.js";
import Navbar from "./Navbar.js";

export default function App({ $target }) {
  this.state = {
    fetchedLanguages: [],
    selectedLanguages: [],
  };

  this.setState = (nextState) => {
    // TODO: 구현해야함
  };

  const navbar = new Navbar({
    $target,
    initialState: "",
  });

  const greeting = new Greeting({
    $target,
    initialState: "",
  });
}
