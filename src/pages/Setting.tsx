import { useState } from "react";
import AlertHoc from "../components/withPopup";
import Button from "../components/Button";
import Popup from "../components/Popup";
import { useNavigate } from "react-router-dom";

const Setting = ({
  popup, setPopup
}: any) => {
  const [display, setDisplay] = useState(false);
  const navigate = useNavigate();
  const handleDeleteProfile = () => {
    localStorage.removeItem("userObject");
    setPopup(true);
    setDisplay(false);
    navigate("/");
  };
  return (
    <>
      {popup == true && <Popup message="Your profile has been deleted." />}
      <div className="mt-14 flex flex-col items-center ml-8">
        <div className="flex items-center">
          <p className="font-medium text-lg text-gray-700 mr-4 ">Do you want to delete profile?</p>
          <Button onClick={() => setDisplay(display ? false : true)}>{display ? 'NO' : "YES"}</Button>
        </div>
        {display && <Button onClick={handleDeleteProfile}>Delete Profile</Button>}
      </div>
    </>
  )
}

export default AlertHoc(Setting)