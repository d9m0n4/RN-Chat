import {AuthProvider} from "./providers/AuthProvider";
import {LogBox} from "react-native";
import Navigation from "./navigation/Navigation";

export default function App() {
  return (
    <AuthProvider>
          <Navigation />
    </AuthProvider>
  );
}

LogBox.ignoreAllLogs()