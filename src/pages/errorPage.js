
import React from "react";
import Lottie from "lottie-react";
import error from "../img/404-error.json";

export default function ErrorPage() {
  return (
    <div>
      <Lottie animationData={error} loop={true} />
    </div>
  )
}
