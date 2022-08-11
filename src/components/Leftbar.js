import "./leftbar.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import EqualizerOutlinedIcon from "@mui/icons-material/EqualizerOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
const Leftbar = () => {
  return (
    <div className="leftside__container">
      <div className="logo">
        <h1>C</h1>
        <span>coinverse</span>
      </div>
      <div className="navigation">
        <div className="home">
          <HomeOutlinedIcon />
          <span>Home</span>
        </div>
        <div className="exchange">
          <EqualizerOutlinedIcon />
          <span>Exchange</span>
        </div>
        <div className="wallet">
          <AccountBalanceWalletOutlinedIcon />
          <span>Wallet</span>
        </div>
        <div className="chat">
          <ModeCommentOutlinedIcon />
          <span>Chat</span>
        </div>
      </div>
    </div>
  );
};

export default Leftbar;
