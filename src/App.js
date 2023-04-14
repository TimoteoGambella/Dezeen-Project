import { ApiContext } from "./context/ApiContext.jsx";
import "./styles/styles.scss";
import { LoginProvider } from "./context/LoginContext.jsx";
import AppRouter from "./router/AppRouter.jsx";

function App() {



  return (
    <ApiContext>
        <LoginProvider>
          <div id="mobile-warning">
            <p>Este sitio está disponible sólo para desktop 1440px por el momento</p>
            <p>This site is available only for desktop 1440px at this moment</p>
          </div>
          <AppRouter/>
        </LoginProvider>
    </ApiContext>
  );
}



export default App;