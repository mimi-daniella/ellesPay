import { auth } from "../firebase.js";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

export function sendOtp(phoneNumber) {
  const recaptchaVerifier = new RecaptchaVerifier(
    "recaptcha-container",
    { size: "invisible" },
    auth
  );

  signInWithPhoneNumber(auth, phoneNumber, recaptchaVerifier).then((confirmationResult) => {
    window.confirmationResult = confirmationResult;
    console.log("OTP sent");
  })
  .catch((error) =>{
    console.error("Error sending OTP: ", error);
  })
}
