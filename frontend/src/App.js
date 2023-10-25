import Layout from "./components/Layouts";
import GlobalStyles from "./styles/GlobalStyles";

import { VideoContextProvider } from "./contexts/VideoContext";

function App() {
  return (
    <>
      <VideoContextProvider>
        <Layout />
      </VideoContextProvider>
      <GlobalStyles />
    </>

  );
}

export default App;
