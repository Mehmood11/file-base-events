import React from "react";
import classes from "./button.module.css";
import Link from "next/link";

export default function Button(props) {
  if (props.link) {
    return (
      <Link href={props.link}>
        <p className={classes.btn}>{props.children}</p>
      </Link>
    );
  }

  return (
    <button className={classes.btn} onClick={props.onClick}>
      {props.children}
    </button>
  );
}
