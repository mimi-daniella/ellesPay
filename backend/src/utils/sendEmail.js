import nodemailer from "nodemailer";
export default async function sendEmail(to, subject, html) {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    try {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to,
        subject,
        html,
      });
      console.log("email sent successfully")
    } catch (error) {
      console.error("Error sending email: ", error);
      throw error;
    }

    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email: ", error);
    throw error;
  }
}
