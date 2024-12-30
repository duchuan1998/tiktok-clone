import { React, useState } from "react";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightToBracket,
  faCoins,
  faEarthAsia,
  faEllipsisVertical,
  faGear,
  faMagnifyingGlass,
  faPlus,
  faXmarkCircle,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCirclePlay,
  faMessage,
  faMoon,
  faQuestionCircle,
  faUser,
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
    to: "/feedback",
  },
  {
    title: "Dark mode",
    icon: faMoon,
  },
];

const userMenu = [
  {
    title: "View profile",
    icon: faUser,
    to: "/@huan",
  },
  {
    title: "Get Coins",
    icon: faCoins,
    to: "/coins",
  },
  {
    title: "Settings",
    icon: faGear,
    to: "/setting",
  },
  ...menuItems,
  {
    title: "Log out",
    icon: faArrowRightToBracket,
    to: "/logout",
    separate: true,
  },
];

function Header() {
  const [search, setSearch] = useState("");
  const [accounts, setAccounts] = useState([]);
  const currentUser = true;

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

        <div
          className={cx("actions", {
            "logged-in": currentUser,
          })}
        >
          {currentUser ? (
            <>
              <Button
                className={cx("upload-btn")}
                outline
                medium
                lefticon={<FontAwesomeIcon icon={faPlus} />}
              >
                Upload
              </Button>

              <div>
                <Tippy
                  interactive={true}
                  render={() => (
                    <div tabIndex="-1">
                      <PopperWrapper className={cx("inbox-popper")}>
                        <span>Inbox</span>
                      </PopperWrapper>
                    </div>
                  )}
                >
                  <button className={cx("inbox-btn")}>
                    <FontAwesomeIcon
                      className={cx("fa-message")}
                      icon={faMessage}
                    />
                  </button>
                </Tippy>
              </div>
            </>
          ) : (
            <>
              <Button primary medium>
                Log in
              </Button>
            </>
          )}

          <Menu
            items={currentUser ? userMenu : menuItems}
            onChange={handleMenuChange}
          >
            {currentUser ? (
              <button className={cx("setting-list-btn")}>H</button>
            ) : (
              <button className={cx("more-btn")}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
