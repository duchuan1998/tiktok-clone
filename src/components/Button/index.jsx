import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

function Button({
  className,
  to,
  href,
  primary,
  outline,
  text,
  rounded,
  medium,
  large,
  children,
  lefticon,
  righticon,
  disabled,
  onClick,
  ...passedProps
}) {
  let Comp = "button";

  const props = { onClick, ...passedProps };

  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith("on") && typeof props[key] === "function") {
        delete props[key];
      }
    });
  }

  if (to) {
    Comp = Link;
    props.to = to;
  } else if (href) {
    Comp = "a";
    props.href = href;
  }

  const classes = cx("wrapper", {
    [className]: className,
    primary,
    outline,
    text,
    rounded,
    medium,
    large,
    disabled,
  });

  return (
    <Comp className={classes} {...props}>
      {lefticon && <span className={cx("icon")}>{lefticon}</span>}
      <span className={cx("title")}>{children}</span>
      {righticon && <span className={cx("icon")}>{righticon}</span>}
    </Comp>
  );
}

export default Button;
