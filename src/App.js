import { BrowserRouter } from "react-router-dom"
import Navbar from "./Component/Navbar"
import WebRouters from "./WebRouters"

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <br />
      <h1>Student App</h1>
      <WebRouters />
    </BrowserRouter>
  )
}

export default App;