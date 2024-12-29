import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Menu.module.scss";
import Button from "../../Button";

const cx = classNames.bind(styles);

function MenuItem({ data }) {
  return (
    <Button
      className={cx("menu-item")}
      lefticon={<FontAwesomeIcon icon={data.icon} />}
    >
      <span className={cx("title")}>{data.title}</span>
    </Button>
  );
}

export default MenuItem;
