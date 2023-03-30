import { Routes, Route } from "react-router-dom";
import UploadImage from "../components/UploadImages";
const Uploads = () => {
  return (
    <Routes>
      <Route path="/" element={<UploadImage />} />
    </Routes>
  );
};

export default Uploads;
