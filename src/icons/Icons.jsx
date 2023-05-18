import DeleteIcon from "@mui/icons-material/Delete";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import BadgeIcon from "@mui/icons-material/Badge";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import PersonIcon from "@mui/icons-material/Person";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import UploadIcon from "@mui/icons-material/Upload";
import DownloadIcon from "@mui/icons-material/Download";
import PinDropIcon from "@mui/icons-material/PinDrop";
import ApartmentIcon from "@mui/icons-material/Apartment";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import BusinessIcon from "@mui/icons-material/Business";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import PushPinIcon from "@mui/icons-material/PushPin";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LockIcon from "@mui/icons-material/Lock";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import EditIcon from "@mui/icons-material/Edit";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import PercentIcon from "@mui/icons-material/Percent";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

export const Icons = {
  delete: <DeleteIcon />,
  update: <PermContactCalendarIcon />,
  call: <CallIcon />,
  email: <EmailIcon />,
  aadhar: <FingerprintIcon />,
  pan: <BadgeIcon />,
  back: <ChevronLeftIcon />,
  person: <PersonIcon style={{ height: "100px", width: "100px" }} />,
  personIcon: <PersonIcon />,
  addUser: <PersonAddIcon style={{ marginRight: "4px" }} />,
  upload: <UploadIcon />,
  download: <DownloadIcon />,
  location: <PinDropIcon />,
  workPlace: <ApartmentIcon />,
  employmentType: <Diversity2Icon />,
  bussiness: <BusinessIcon />,
  salary: <CurrencyRupeeIcon style={{ marginTop: -5 }} />,
  smallRupee: (
    <CurrencyRupeeIcon
      style={{ marginTop: -5, width: "1rem", height: "1rem" }}
    />
  ),
  searchWorld: <TravelExploreIcon />,
  pin: <PushPinIcon />,
  bank: <AccountBalanceIcon />,
  account: <AccountBoxIcon />,
  password: <LockIcon />,
  next: <NavigateNextIcon style={{ marginTop: -2 }} />,
  camera: <CameraAltIcon />,
  login: <LoginIcon />,
  logout: <LogoutIcon />,
  edit: <EditIcon style={{ marginTop: -5, width: "1.2rem", marginLeft: -2 }} />,
  warning: (
    <WarningAmberIcon
      style={{ marginTop: -1, width: "1.2rem", marginRight: "10px" }}
    />
  ),
  error: (
    <ReportGmailerrorredIcon
      style={{ marginTop: -1, width: "1.2rem", marginRight: "10px" }}
    />
  ),
  info: <InfoOutlinedIcon />,
  success: (
    <TaskAltIcon
      style={{ marginTop: -1, width: "1.2rem", marginRight: "10px" }}
    />
  ),
  roi: <PercentIcon />,
  tenure: <TimerOutlinedIcon />,
  agent: <SupportAgentIcon />,
  wallet: (
    <AccountBalanceWalletIcon
      style={{
        width: "7rem",
        height: "10rem",
        marginRight: "10px",
        color: "#2124b1",
      }}
    />
  ),
  poolBalance: (
    <AccountBalanceIcon
      style={{
        width: "7rem",
        height: "10rem",
        marginRight: "10px",
        color: "#2124b1",
      }}
    />
  ),
};
