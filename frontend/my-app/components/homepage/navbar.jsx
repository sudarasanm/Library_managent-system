import React from "react";
import styles from "./homepage.module.css";
import searchicon from "../../assests/images/Vector.png";
import Image from "next/image";

function Navbar(props) {
  return (
    <div className={styles.navbarcontainer}>
      <div>
        <button
          className={styles.buttoncontainer}
          onClick={() => props.sethomeClick(!props.homeClick)}
        >
          HOME
        </button>
      </div>
      <div className={styles.input}>
        <input type="search" />
        <Image className="searchicon" src={searchicon} alt="searchicon" width="2rem" height="2rem" />
      </div>
      <div>
        <button
          className={styles.btn}
          onClick={() => props.setfacultyForm(!props.facultyForm)}
        >
          CREATE FACULTY
        </button>
        <button
          className={styles.btn}
          onClick={() => props.setstudentForm(!props.studentForm)}
        >
          CREATE STUDENT
        </button>
        <button
          className={styles.btn}
          onClick={() => props.setbookForm(!props.bookForm)}
        >
          CREATE BOOK
        </button>
      </div>
    </div>
  );
}

export default Navbar;
