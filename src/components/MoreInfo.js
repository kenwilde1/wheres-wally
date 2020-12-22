import wally from "../images/wally.png";
import Odlaw from "../images/Odlaw.png";
import wizard from "../images/wizard.png";

const MoreInfo = ({ chars, toggleMore }) => {
  return (
    <div className="more-info">
      <div className="exit-button">
        <button onClick={toggleMore}>
          <i class="fa fa-times"></i>
        </button>
      </div>

      <ul>
        <li>
          <h3>Wally</h3>
          <img src={wally} alt="wally pic"></img>
          {!chars.includes("Wally") ? (
            <i class="fa fa-times-circle fa-3x"></i>
          ) : (
            <i class="fa fa-check-circle fa-3x"></i>
          )}
        </li>
        <li>
          <h3>Yllaw</h3>
          <img src={Odlaw} alt="wally pic"></img>
          {!chars.includes("Yllaw") ? (
            <i class="fa fa-times-circle fa-3x"></i>
          ) : (
            <i class="fa fa-check-circle fa-3x"></i>
          )}
        </li>
        <li>
          <h3>Wizard</h3>
          <img src={wizard} alt="wally pic"></img>
          {!chars.includes("Wizard") ? (
            <i class="fa fa-times-circle fa-3x"></i>
          ) : (
            <i class="fa fa-check-circle fa-3x"></i>
          )}
        </li>
      </ul>
    </div>
  );
};
export default MoreInfo;
