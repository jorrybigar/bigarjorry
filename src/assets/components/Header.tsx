import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar } from "@fortawesome/free-regular-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faWallet } from "@fortawesome/free-solid-svg-icons";

interface Props {
  balance: number;
}

const Header = ({ balance }: Props) => {
  return (
    <>
      <nav className="sticky-top navbar-light">
        <div className="container-fluid py-2 bg-white">
          <div className="row">
            <div className="col">
              <div className="row justify-content-start align-items-center text-primary-color">
                <div className="col-2">
                  <FontAwesomeIcon icon={faChartBar} className="fs-2" />
                </div>
                <div className="col">
                  <h1>FUN88</h1>
                </div>
              </div>
            </div>
            <div className="col text-primary-color">
              <div className="row justify-content-end align-items-center pt-1">
                <div className="col-2 ">
                  <FontAwesomeIcon
                    icon={faWallet}
                    className="fs-2 text-secondary"
                  />
                </div>
                <div className="col-7">
                  <p className="fs-4 m-auto fw-bold">
                    {"$".concat(balance.toString())}
                  </p>
                </div>
                <div className="col-3 border-left-primary">
                  <FontAwesomeIcon icon={faUser} className="fs-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
