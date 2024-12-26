"use client";

import React, { useState } from "react";
import { ClipboardCopy } from "lucide-react";

const CopyCodeButton = ({ code }: { code: string }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <button
      className=" absolute z-40 right-0 flex flex-row gap-2"
      onClick={copyToClipboard}
    >
      {copied ? (
        "Copiado!"
      ) : (
        <>
          <ClipboardCopy className="mr-2 h-4 w-4" />
          Copiar código
        </>
      )}
    </button>
  );
};

export default CopyCodeButton;
