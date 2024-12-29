import { React, useEffect, useState } from "react";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faPlus,
  faSpinner,
  faXmarkCircle,
} from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-regular-svg-icons";

import styles from "./Header.module.scss";
import assets from "../../../../assets";
import { Wrapper as PopperWrapper } from "../../../Popper";
import AccountItem from "../../../AccountItem";
import Button from "../../../Button";

const cx = classNames.bind(styles);

function Header() {
  const [search, setSearch] = useState("");
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setAccounts([]);
    }, 0);
  });

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
