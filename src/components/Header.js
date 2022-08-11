import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import "./header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <p>Welcome back</p>
        <h6>John Wick</h6>
      </div>
      <div className="header__right">
        <EmailOutlinedIcon />
        <NotificationsNoneOutlinedIcon />
        <div className="user__image">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXJ5MygTLp9djg2JFzViPzoMU5p_5obekERQ&usqp=CAU"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
