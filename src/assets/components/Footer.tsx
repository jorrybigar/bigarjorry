import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFutbol } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { faDice } from "@fortawesome/free-solid-svg-icons";
import { faCashRegister } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="fixed-bottom navbar-light bg-light">
      <div className="container-fluid pt-3">
        <div className="row text-center">
          <div className="col">
            <a href="#" className="text-secondary">
              <FontAwesomeIcon icon={faFutbol} className="fs-1" />
              <p>Sports</p>
            </a>
          </div>
          <div className="col">
            <a href="#" className="text-secondary">
              <FontAwesomeIcon icon={faStar} className="fs-1" />
              <p>Favorites</p>
            </a>
          </div>
          <div className="col">
            <a href="#" className="text-secondary">
              <FontAwesomeIcon icon={faUserPlus} className="fs-1" />
              Invites
            </a>
          </div>
          <div className="col">
            <a href="#" className="text-secondary">
              <FontAwesomeIcon icon={faDice} className="fs-1" />
              <p>Casino</p>
            </a>
          </div>
          <div className="col">
            <a href="#" className="text-secondary">
              <FontAwesomeIcon icon={faCashRegister} className="fs-1" />
              <p>Cashier</p>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
