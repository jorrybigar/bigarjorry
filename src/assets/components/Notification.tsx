import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";

interface Props {
  text: string;
}

const Notification = ({ text }: Props) => {
  return (
    <>
      <div className="container-fluid d-flex align-items-center">
        <div className="p-2">
          <FontAwesomeIcon icon={faBell} className="fs-1 text-warning" />
        </div>
        <p className="text-primary-color pt-2">{text}</p>
      </div>
    </>
  );
};

export default Notification;
