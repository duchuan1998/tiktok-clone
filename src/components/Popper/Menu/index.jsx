import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import { Wrapper as PopperWrapper } from "../../Popper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../Button";
import MenuItem from "./MenuItem";

const cx = classNames.bind(styles);

function Menu({ children, data = [] }) {
  const renderItem = (items) => {
    return items.map((item, index) => <MenuItem key={index} data={item} />);
  };

  return (
    <Tippy
      interactive={true}
      placement="bottom-end"
      delay={[0, 500]}
      render={(attrs) => (
        <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx("menu-wrapper")}>
            {renderItem(data)}
          </PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
