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
  const [isWebchatOpen, setIsWebchatOpen] = useState(true);

  return (
    <div className="d-flex justify-content-around">
      <div style={{ width: "80%", height: "70vh" }}>
        <style>{style}</style>
        {/* <Fab onClick={toggleWebchat} /> */}
        <ChatBot
          client={client}
          theme={theme}
          isOpen={isWebchatOpen}
          config={{
            botName: "AgriConnect ChatBot",
            botAvatar: "https://picsum.photos/200/300",
            composerPlaceholder: "What would you like to know?",
            // Additional config settings
          }}
        />
      </div>
    </div>
  );
}
