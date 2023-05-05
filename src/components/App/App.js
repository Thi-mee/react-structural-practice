import AppRoutes from "./routes/AppRoutes";
import AuthProvider from "./providers/AuthProvider";
import { useEffect } from "react";


function App() {

  useEffect(() => {
    document.title = "Caching & Memoization";
  }, []);

  return (
    <AuthProvider excludedRoutes={["/"]} loginRoute="/login" registerRoute="/register">
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;
