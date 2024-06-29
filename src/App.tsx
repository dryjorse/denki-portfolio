import { Route, Routes, useLocation } from "react-router-dom";
import { routes } from "./constants/routes";
import Contacts from "./components/contacts/Contacts";
import "./i18n";
import Language from "./components/language/Language";
import { useEffect } from "react";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);

  return (
    <div className="App">
      <Language />
      <Routes>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
      <Contacts />
    </div>
  );
}

export default App;
