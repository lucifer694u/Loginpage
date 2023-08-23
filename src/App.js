import { Appst } from "./styled components/App.style";
// import Login from "./components/Login";
import { Appbody } from "./styled components/App.style";

import { Image } from "./styled components/App.style";
import Imagesec from "./components/Imagesec";
import Login from "./components/Login";
function App() {
  return (
    <Appst>
      <Appbody>
        <Imagesec />
        <Login />
      </Appbody>
    </Appst>
  );
}

export default App;
