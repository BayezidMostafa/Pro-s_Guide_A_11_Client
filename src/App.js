import { RouterProvider } from "react-router-dom";
import { routes } from "./Router/Routes/Routes";
// import background from './assets/background/background.jpg'

const App = () => {
  return (
    <div style={{backgroundImage:`url(})`, backgroundSize:"cover"}}>
      <RouterProvider router={routes}/>
    </div>
  );
}

export default App;
