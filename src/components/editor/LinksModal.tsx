import React, { useState } from "react";
import { ButtonWrapper } from "../button/Button";


type ModalProps = {
  setIsOpen: (isopen: boolean) => void;
  submitUrl: (url: string) => void;
};
const LinksModal: React.FC<ModalProps> = ({ setIsOpen, submitUrl }) => {
  const [url, setUrl] = useState("");
  const handleSubmit = () => {
    submitUrl(url);
    setUrl("");
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded shadow-lg">
        <h2 id="url-input" className="text-lg font-bold mb-2">
          Enter URL
        </h2>
        <input
          type="text"
          id="url-input"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="border p-2 w-full mb-4"
          placeholder="https://example.com"
        />
        <div className="flex justify-end gap-5">
          <ButtonWrapper
            onClick={() => {
              setIsOpen(false);
            }}
          >
            Cancel
          </ButtonWrapper>
          <ButtonWrapper  onClick={handleSubmit}>
            Submit
          </ButtonWrapper>
        </div>
      </div>
    </div>
  );
};

export default LinksModal;
