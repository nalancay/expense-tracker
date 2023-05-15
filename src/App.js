import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "components/Navbar";
import Home from "pages/Home";
import Login from "pages/Login";
import { useAuthContext } from "hooks/useAuthContext";
import Signup from "pages/Signup";

function App() {
  const { user, authIsReady } = useAuthContext();

  return (
    <div>
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={user ? <Home /> : <Login />} />
            {!user && <Route path="/signup" element={<Signup />} />}
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
