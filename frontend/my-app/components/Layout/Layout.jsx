import Navbar from "components/homepage/navbar";
import IconList from "components/iconlist/IconList";
import { Fragment } from "react";
import { useState } from "react";
import FacultyForm from "components/form/FacultyForm";
import StudentForm from "components/form/studentForm";
import BookForm from "components/form/BookForm";


export default function Layout() {
    const [homeClick, sethomeClick] = useState(false);
    const [facultyForm, setfacultyForm] = useState(false);
    const [studentForm, setstudentForm] = useState(false);
    const [bookForm, setbookForm] = useState(false)
  return <Fragment>
           <Navbar
        sethomeClick={sethomeClick}
        homeClick={homeClick}
        setfacultyForm={setfacultyForm}
        facultyForm={facultyForm}
        setstudentForm={setstudentForm}
        studentForm={studentForm}
        setbookForm={setbookForm}
        bookForm={bookForm}
      />
      <IconList />
      {facultyForm && <FacultyForm />}
      {studentForm && <StudentForm />}
      {bookForm&& <BookForm/>}
         </Fragment>;
}

