import React, { useContext } from "react";
import * as S from "./styles";
import { Variants } from "framer-motion";
import { MessageContext } from "../../providers/MessageProvider";
import CloseIcon from "../icons/Close";

const variants: Variants = {
  hidden: { y: "100%" },
  visible: { y: 0 },
};

const Message = () => {
  const { message, setMessage } = useContext(MessageContext);

  return (
    <S.Container
      variants={variants}
      initial="hidden"
      animate={message.show ? "visible" : "hidden"}
      transition={{ duration: 0.2 }}
    >
      <S.Message>{message.value}</S.Message>
      {message.isError ? (
        <S.CloseButton
          onClick={() => {
            setMessage({
              value: message.value,
              show: false,
              isError: message.isError,
            });
          }}
        >
          <CloseIcon color={"white"} />
        </S.CloseButton>
      ) : null}
    </S.Container>
  );
};

export default Message;
