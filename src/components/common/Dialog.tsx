import React, { useEffect, useState } from "react";
import "../../assets/styles/components/common/dialog.scss";

interface IDialog {
  onClose: () => void;
  children: React.ReactNode;
}

const Dialog: React.FC<IDialog> = ({ onClose, children }) => {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    document.body.classList.add("body--opened-dialog");

    return () => {
      document.body.classList.remove("body--opened-dialog");
    };
  }, []);

  const startCloseAnimation = () => {
    setIsClosing(true);

    setTimeout(() => {
      onClose();
    }, 500);
  };

  //   const handleKeyClose = (e: React.KeyboardEvent<HTMLElement>) => {
  //     if (e.key === "Escape") {
  //       startCloseAnimation();
  //     }
  //   };

  return (
    <section
      className={isClosing ? "dialog dialog--closing " : "dialog"}
      onClick={startCloseAnimation}
      //   onKeyDown={handleKeyClose}
      //   tabIndex={0}
    >
      <article
        className={
          isClosing
            ? "dialog__content dialog__content--closing"
            : "dialog__content"
        }
        onClick={(e: React.MouseEvent<HTMLElement>) => e.stopPropagation()}
      >
        <button
          className="dialog__content-close-button"
          title="Close"
          onClick={startCloseAnimation}
        >
          <span className="dialog__content-close-button-item"></span>
          <span className="dialog__content-close-button-item"></span>
        </button>
        {children}
      </article>
    </section>
  );
};

export default Dialog;
