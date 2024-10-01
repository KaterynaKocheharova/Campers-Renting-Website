import DatePicker from "react-datepicker";
import { CiCalendar } from "react-icons/ci";
import "react-datepicker/dist/react-datepicker.css";
import "./Dtepicker.css";
import css from "./Datepicker.module.css";

const Datepicker = ({ selected, onChange }) => {
  return (
    <DatePicker
      showIcon
      icon={<CiCalendar />}
      toggleCalendarOnIconClick
      selected={selected}
      onChange={onChange}
      dateFormat="yyyy/MM/dd"
      placeholderText="Booking date*"
    />
  );
};

export default Datepicker;
