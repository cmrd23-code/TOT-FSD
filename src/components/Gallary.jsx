import React from "react";
import "../styles/gallary.css";
import s1 from "../assets/s1.jpeg";
import s2 from "../assets/s2.jpg";
import s3 from "../assets/s3.jpeg";
import GalleryProps from "./GalleryProps";
const Gallary = () => {
  const student = [
    {
      spic: s1,
      sroll: "1234",
      sname: "rohini",
      sbranch: "cse",
      scollege: "abes",
    },
    {
      spic: s2,
      sroll: "1235",
      sname: "rajesh",
      sbranch: "cse",
      scollege: "abes",
    },
    {
      spic: s3,
      sroll: "1236",
      sname: "reshu",
      sbranch: "cse",
      scollege: "abes",
    },
  ];
  return (
    <div className="box">
      {/*<img className="imageStyle" src={s1}></img>&nbsp;&nbsp;&nbsp;
      <img className="imageStyle" src={s2}></img>&nbsp;&nbsp;&nbsp;
      <img className="imageStyle" src={s2}></img>&nbsp;&nbsp;&nbsp;
      <img className="imageStyle" src={s2}></img>*/}
      {/*<GalleryProps spic={s1} sname="sumit" sroll="12345" sbranch="CSE" scollege="abes"/> 
      <GalleryProps spic={s2} sname="sumit" sroll="12345" sbranch="CSE" scollege="abes"/>
      {/*<GalleryProps
        spic={s3}
        sname="sumit"
        sroll="12345"
        sbranch="CSE"
        scollege="abes"
      />
      <GalleryProps
        spic={s4}
        sname="sumit"
        sroll="12345"
        sbranch="CSE"
        scollege="abes"
      />*/}
      {/* <GalleryProps data={student[0]} />
      <GalleryProps data={student[1]} />
      <GalleryProps data={student[2]} /> */}
      {student.map((ele) => (
        <div>
          <GalleryProps data={ele} />
        </div>
      ))}
    </div>
  );
};

export default Gallary;
