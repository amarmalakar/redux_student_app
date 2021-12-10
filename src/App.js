import { BrowserRouter } from "react-router-dom"
import Navbar from "./Component/Navbar"
import WebRouters from "./WebRouters"

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <br />
      <WebRouters />
    </BrowserRouter>
  )
}

export default App;