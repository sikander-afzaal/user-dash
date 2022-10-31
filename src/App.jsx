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
  const [randomNum, setRandomNum] = useState(1);
  const [user, setUser] = useState([]);
  const getUserData = async () => {
    try {
      const response = await fetch(
        "https://random-data-api.com/api/v2/users?size=6"
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
    setRandomNum(Math.ceil(Math.random() * 5));
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
                {user[0]?.first_name} {user[0]?.last_name}
              </span>
            </h3>
            <h3>
              Staff Number: <span> {Math.floor(Math.random() * 1000)}</span>
            </h3>
            <h3>
              Job Title: <span> {user[0]?.employment?.key_skill}</span>
            </h3>
            <h3>
              Department: <span> {user[0]?.employment?.title}</span>
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
              {Array(randomNum)
                .fill(false)
                .map((elem, idx) => {
                  return (
                    <p key={idx + "p"} className="drop-item">
                      {user[idx]?.employment?.title}
                    </p>
                  );
                })}
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
              {Array(randomNum)
                .fill(false)
                .map((elem, idx) => {
                  return (
                    <p key={idx + "p"} className="drop-item">
                      {user[idx]?.employment?.title}
                    </p>
                  );
                })}
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
              {Array(randomNum)
                .fill(false)
                .map((elem, idx) => {
                  return (
                    <p key={idx + "p"} className="drop-item">
                      {user[idx]?.employment?.title}
                    </p>
                  );
                })}
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
            Last Request:{" "}
            <span>
              {user[0]?.employment?.title} {user[0]?.date_of_birth}
            </span>
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
            {user?.map((elem, idx) => {
              return (
                <div key={idx + "row"} className="row">
                  <h2>{elem?.employment?.title}</h2>
                  <p>{Math.ceil(Math.random() * 100)}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
