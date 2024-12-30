import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Menu.module.scss";
import Button from "../../Button";

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
  return (
    <Button
      className={cx("menu-item", {
        separate: data.separate,
      })}
      to={data.to}
      lefticon={data.icon && <FontAwesomeIcon icon={data.icon} />}
      onClick={onClick}
    >
      <span className={cx("title")}>{data.title}</span>
    </Button>
  );
}

export default MenuItem;
