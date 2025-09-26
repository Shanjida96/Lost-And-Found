import React from "react";
import ErrorLottie from "../../assets/Lotties/Error 404.json";
import Lottie from "lottie-react";
const ErrorPage = () => {
  return (
    <div className="flex justify-center">
      <Lottie style={{ width: "600px" }} animationData={ErrorLottie} loop={true}></Lottie>
    </div>
  );
};

export default ErrorPage;
