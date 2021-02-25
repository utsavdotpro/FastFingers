import React from "react";
import { useSnackbar } from "./hooks";

const TYPE = {
  SUCCESS: { color: "text-green-400", label: "Success" },
  WARNING: { color: "text-yellow-400", label: "Warning" },
  ERROR: { color: "text-red-400", label: "Error" },
  INFO: { color: "text-blue-400", label: "Info" },
};

const buildMessage = (type, message) => {
  return (
    <>
      <b className={type.color}>{type.label}: </b> {message}
    </>
  );
};

const buildSuccessMessage = (message) => {
  return buildMessage(TYPE.SUCCESS, message);
};

const buildWarningMessage = (message) => {
  return buildMessage(TYPE.WARNING, message);
};

const buildErrorMessage = (message) => {
  return buildMessage(TYPE.ERROR, message);
};

const buildInfoMessage = (message) => {
  return buildMessage(TYPE.INFO, message);
};

export default function Snackbar({ isShown = false, children }) {
  return (
    <div
      className={`absolute bottom-0 mb-6 py-3 px-5 bg-opacity-30 bg-black text-white rounded-md text-sm transition-all ${
        isShown ? "opacity-1" : "invisible opacity-0"
      }`}
    >
      {children}
    </div>
  );
}

export {
  useSnackbar,
  buildSuccessMessage,
  buildWarningMessage,
  buildErrorMessage,
  buildInfoMessage,
};
