import nodemailer from "nodemailer";


const _sendEmail = async (body)=>{

try {
  
const transporter = nodemailer.createTransport({
  service:"gmail",
  auth: {
    user: process.env.EMAIL_NODEMAILER,
    pass: process.env.APP_PASSWORD,
  },
});

await transporter.sendMail(
  {
    from: `ECOM <${process.env.EMAIL_NODEMAILER}>`,
    ...body
  }
)


console.log("EMAIL sent ", body.to);


} catch (error) {
  console.log("Failed to send email >>>> ", error.message);
  throw new Error("Failed to send email");
}
}


export default _sendEmail;