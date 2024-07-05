"use client";
import { useRouter } from "next/navigation";
import classes from "./style.module.css";
import { useEffect } from "react";

const Modal = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  const closeHandler = () => {
    if (history.length && history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };

  // old browser support
  // useEffect(() => {
  //   document.body.style.overflow = "hidden";
  //   return () => {
  //     document.body.style.overflow = "auto";
  //   };
  // }, []);

  return (
    <div className={`${classes.modal} no-scroll-doc`}>
      <div className={classes.bg} onClick={closeHandler}></div>
      <div className={classes.content}>
        <button className={classes.closeBtn} onClick={closeHandler}>
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
