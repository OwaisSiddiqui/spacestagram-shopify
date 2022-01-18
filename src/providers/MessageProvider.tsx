import React, { useEffect, useState } from "react";
import { createContext } from "react";

interface MessageContextProps {
  message: { value: string; show: boolean; isError: boolean };
  setMessage(message: MessageContextProps["message"]): void;
}

export const MessageContext = createContext<MessageContextProps>({
  message: {
    value: "",
    show: false,
    isError: false,
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setMessage: () => {},
});

interface MessageProviderProps {
  children: React.ReactNode;
}

export const MessageProvider = ({ children }: MessageProviderProps) => {
  const [message, setMessage] = useState<MessageContextProps["message"]>({
    isError: false,
    show: false,
    value: "",
  });

  useEffect(() => {
    if (message.show && message.value && !message.isError) {
      const unShowMessage = setTimeout(() => {
        setMessage({ value: message.value, show: false, isError: false });
      }, 1000);

      return () => {
        clearTimeout(unShowMessage);
      };
    }
  }, [message]);

  return (
    <MessageContext.Provider value={{ message, setMessage }}>
      {children}
    </MessageContext.Provider>
  );
};
