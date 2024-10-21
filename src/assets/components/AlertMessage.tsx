import React from "react";

interface Props {
  alertType: string;
  message: string;
}

const AlertMessage = ({ alertType, message }: Props) => {
  return (
    <div className="container-fluid">
      <div
        className={"mt-5 alert text-center alert-".concat(alertType)}
        role="alert"
      >
        <p>{message}</p>
      </div>
    </div>
  );
};

export default AlertMessage;
