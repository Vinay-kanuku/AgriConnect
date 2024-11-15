import { Webchat, WebchatProvider } from "@botpress/webchat";

export default function ChatBot({ client, theme, isOpen, config }) {
  return (
    <WebchatProvider theme={theme} client={client} configuration={config}>
      <div style={{ display: isOpen ? "block" : "none" }}>
        <Webchat />
      </div>
    </WebchatProvider>
  );
}
