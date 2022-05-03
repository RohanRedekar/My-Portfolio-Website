import "./contact.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";

export const Contact = () => {
  return (
    <div id='contact' className='contact'>
      <h1>Get In Touch</h1>
      <div className='contact_logos'>
        <div>
          <a href='https://www.linkedin.com/in/rohan-redekar/' target='_blank'>
            <LinkedInIcon className='contact_svg' />
          </a>
        </div>
        <div>
          <a href='mailto:rohanredekar100@gmail.com' target='_blank'>
            <EmailIcon className='contact_svg' />
          </a>
        </div>
        <div>
          <a href='https://twitter.com/RohanRedekar1' target='_blank'>
            <TwitterIcon className='contact_svg' />
          </a>
        </div>
      </div>
      <h3>
        Made With{" "}
        <span style={{ color: "red", background: "transparent" }}>❤</span> By
        Rohan
      </h3>
    </div>
  );
};
