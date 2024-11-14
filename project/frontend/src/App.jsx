import { useState } from "react";
import { getClient, Fab } from "@botpress/webchat";
import { buildTheme } from "@botpress/webchat-generator";
import ChatBot from "./ChatBot"; // Import the ChatBot component

const { theme, style } = buildTheme({
  themeName: "prism",
  themeColor: "#634433",
});

const clientId = "6e3aa582-3def-4789-972f-40d2277956b1";

export default function App() {
  const client = getClient({ clientId });
  const [isWebchatOpen, setIsWebchatOpen] = useState(false);

  const toggleWebchat = () => {
    setIsWebchatOpen((prevState) => !prevState);
  };

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <style>{style}</style>
      <Fab onClick={toggleWebchat} />
      <ChatBot
        client={client}
        theme={theme}
        isOpen={isWebchatOpen}
        config={{
          botName: "Customer Service",
          botAvatar: "https://picsum.photos/200/300",
          composerPlaceholder: "What would you like to know?",
          // Additional config settings
        }}
      />
    </div>
  );
}
