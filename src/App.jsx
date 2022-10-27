import "./App.css";
import {
  faBars,
  faChevronDown,
  faChevronUp,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

function App() {
  const [openSide, setOpenSide] = useState(false);
  const [dropDown, setDropDown] = useState([false, false, false]);
  const [user, setUser] = useState({});
  const getUserData = async () => {
    try {
      const response = await fetch(
        " https://random-data-api.com/api/v2/users?size=1"
      );
      const data = await response.json();
      setUser(data);
    } catch {
      () => {
        console.log("err");
      };
    }
  };
  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className="App">
      <div className="fixed">
        <div className="top-bar">
          <div className="container">
            <div className="img-wrapper">
              <img src="/test.png" alt="" />
            </div>
            <div className="img-wrapper">
              <img src="/test.png" alt="" />
            </div>
          </div>
        </div>
        <div className="galaxy-cont">
          <h2 className="galaxy">Galaxy</h2>
        </div>
        <div className="wrapper">
          <h2 className="e-doc">E-Document System</h2>
        </div>
        <div className="padd">
          <div className="container staff-details">
            <h3>
              Staff Name:{" "}
              <span>
                {" "}
                {user?.first_name} {user?.last_name}
              </span>
            </h3>
            <h3>
              Staff Number: <span> {Math.floor(Math.random() * 1000)}</span>
            </h3>
            <h3>
              Job Title: <span> {user?.employment?.key_skill}</span>
            </h3>
            <h3>
              Department: <span> {user?.employment?.title}</span>
            </h3>
          </div>
        </div>
      </div>

      <div className="main-dashboard">
        <div
          onClick={() => setOpenSide(false)}
          className={`overlay ${openSide ? "open-overlay" : ""}`}
        ></div>
        <div className={`sidebar ${openSide ? "open-side" : ""}`}>
          <FontAwesomeIcon
            onClick={() => setOpenSide(false)}
            icon={faXmark}
            className="mobile"
          />
          <div className={`dropdown ${dropDown[0] ? "active-drop" : ""}`}>
            <p
              className="side-link"
              onClick={() =>
                setDropDown((prev) => {
                  if (prev[0]) {
                    return [false, false, false];
                  } else {
                    return [true, false, false];
                  }
                })
              }
            >
              <img src="/ico.png" alt="" />
              New Request{" "}
              <FontAwesomeIcon
                icon={dropDown[0] ? faChevronUp : faChevronDown}
              />
            </p>
            <div className="main-drop">
              <p className="drop-item">Administrative Approvals</p>
              <p className="drop-item">Administrative Approvals</p>
              <p className="drop-item">Administrative Approvals</p>
            </div>
          </div>
          <div className={`dropdown ${dropDown[1] ? "active-drop" : ""}`}>
            <p
              className="side-link"
              onClick={() =>
                setDropDown((prev) => {
                  if (prev[1]) {
                    return [false, false, false];
                  } else {
                    return [false, true, false];
                  }
                })
              }
            >
              <img src="/ico.png" alt="" />
              View Request{" "}
              <FontAwesomeIcon
                icon={dropDown[1] ? faChevronUp : faChevronDown}
              />
            </p>
            <div className="main-drop">
              <p className="drop-item">Administrative Approvals</p>
              <p className="drop-item">Administrative Approvals</p>
              <p className="drop-item">Administrative Approvals</p>
            </div>
          </div>
          <div className={`dropdown ${dropDown[2] ? "active-drop" : ""}`}>
            <p
              className="side-link"
              onClick={() =>
                setDropDown((prev) => {
                  if (prev[2]) {
                    return [false, false, false];
                  } else {
                    return [false, false, true];
                  }
                })
              }
            >
              <img src="/ico.png" alt="" />
              Setup
              <FontAwesomeIcon
                icon={dropDown[2] ? faChevronUp : faChevronDown}
              />
            </p>
            <div className="main-drop">
              <p className="drop-item">Administrative Approvals</p>
              <p className="drop-item">Administrative Approvals</p>
              <p className="drop-item">Administrative Approvals</p>
            </div>
          </div>
        </div>
        <FontAwesomeIcon
          onClick={() => setOpenSide(true)}
          icon={faBars}
          className="mobile"
        />
        <div className="dashboard">
          <h1>
            Last Request: <span>Inquires (Abcd Pqrs)</span> on{" "}
            <span>02-Oct-2022</span>
          </h1>
          <div className="summary">
            <div className="heading-row">
              <h2>Request Summary</h2>
              <div>
                <h2>Financial Year</h2>
                <select>
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                  <option value="2020">2020</option>
                </select>
              </div>
            </div>
            <div className="row">
              <h2>Administrative approvals</h2>
              <p>1</p>
            </div>
            <div className="row">
              <h2>Administrative approvals</h2>
              <p>1</p>
            </div>
            <div className="row">
              <h2>Administrative approvals</h2>
              <p>1</p>
            </div>
            <div className="row">
              <h2>Administrative approvals</h2>
              <p>1</p>
            </div>
            <div className="row">
              <h2>Administrative approvals</h2>
              <p>1</p>
            </div>
            <div className="row">
              <h2>Administrative approvals</h2>
              <p>1</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
