import "./image.scss";
import Profile from "../../../assets/img/pASSPORT.jpg";
import { Link } from "react-router-dom";

const Image = () => {
  return (
    <div className="box">
      <div className="content">
        <img src={Profile} alt="profile image" className="profile" />
        <h2>Developer / UI/UX Designer</h2>
        <Link to="/contact">Hire Me</Link>
      </div>
    </div>
  );
};

export default Image;
