import { React, useState } from "react";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEarthAsia,
  faEllipsisVertical,
  faMagnifyingGlass,
  faMoon,
  faXmarkCircle,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCirclePlay,
  faQuestionCircle,
} from "@fortawesome/free-regular-svg-icons";

import styles from "./Header.module.scss";
import assets from "../../../../assets";
import { Wrapper as PopperWrapper } from "../../../Popper";
import AccountItem from "../../../AccountItem";
import Button from "../../../Button";
import Menu from "../../../Popper/Menu";

const cx = classNames.bind(styles);

const menuItems = [
  {
    title: "Creator tools",
    icon: faCirclePlay,
  },
  {
    title: "English",
    icon: faEarthAsia,
    children: {
      title: "Language",
      data: [
        {
          title: "Vietnamese",
          code: "vi",
        },
        {
          title: "English",
          code: "en",
        },
      ],
    },
  },
  {
    title: "Feedback and help",
    icon: faQuestionCircle,
    to: "https://www.tiktok.com/feedback",
  },
  {
    title: "Dark mode",
    icon: faMoon,
  },
];

function Header() {
  const [search, setSearch] = useState("");
  const [accounts, setAccounts] = useState([]);

  const handleMenuChange = (menuItem) => {
    console.log(menuItem);
  };

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <img src={assets.logo} alt="TikTok" />
        </div>

        <Tippy
          interactive={true}
          visible={accounts.length > 0}
          render={(attrs) => (
            <div className={cx("search-result")} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <h4 className={cx("search-title")}>Accounts</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx("search")}>
            <input
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            {search && (
              <button className={cx("clear-btn")} onClick={() => setSearch("")}>
                <FontAwesomeIcon icon={faXmarkCircle} />
              </button>
            )}

            {/* <FontAwesomeIcon className={cx("loading")} icon={faSpinner} /> */}

            <button
              className={cx("search-btn", {
                "search-btn--enabled": search,
              })}
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </Tippy>

        <div className={cx("actions")}>
          <Button primary medium>
            Log in
          </Button>

          <Menu items={menuItems} onChange={handleMenuChange}>
            <button className={cx("more-btn")}>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </button>
          </Menu>
          {/* <button className={cx("upload-btn")}>
            <FontAwesomeIcon className={cx("fa-plus")} icon={faPlus} />
            Upload
          </button>
          <button className={cx("inbox-btn")}>
            <FontAwesomeIcon className={cx("fa-message")} icon={faMessage} />
          </button>
          <button className={cx("setting-list-btn")}>H</button> */}
        </div>
      </div>
    </header>
  );
}

export default Header;
