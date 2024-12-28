import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <img
        className={cx("avatar")}
        src="https://p9-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/7318733995804459009~c5_300x300.webp?lk3s=a5d48078&nonce=98844&refresh_token=c517fc60229a85d61e6cf7879e674de4&x-expires=1735470000&x-signature=kXGzFgVajrn1S7h1uwtJ%2F4lqiAQ%3D&shp=a5d48078&shcp=c1333099"
        alt="avatar"
      />
      <div className={cx("info")}>
        <p className={cx("name")}>
          <span>Nguyen Van A</span>
          <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
        </p>
        <span className={cx("username")}>nguyenvana</span>
      </div>
    </div>
  );
}

export default AccountItem;
