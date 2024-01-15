import styles from "./app.module.css";
import { useState, useEffect } from "react";

function App() {
  const [formInput, setInputs] = useState({
    firstName: "Hi,",
    lastName: "Page Title",
  });
  const [docUtility, setDocUtility] = useState({ docWidth: "", docHeight: "" });

  useEffect(() => {
    document.title = formInput.firstName + " please resize the window " + formInput.lastName;

    let timer = setInterval(() => {
      setDocUtility({
        docWidth: window.innerWidth,
        docHeight: window.innerHeight,
      });
    }, 2000);

    return () => {
      clearInterval(timer);
    };
  }, [formInput]);

  return (
    <>
      <h1 className={styles.title}>
        Get page entity by minimizing or meximize Window
      </h1>
      {/* 
      <input
        placeholder="firstName"
        value={formInput.firstName}
        onChange={(e) => {
          setInputs({ ...formInput, firstName: e.target.value });
        }}
      />
      <input
        placeholder="lastName"
        value={formInput.lastName}
        onChange={(e) => {
          setInputs({ ...formInput, lastName: e.target.value });
        }}
      /> */}
      <div className={styles.elementDiv}>
        <div className={styles.widthEl}>
          <h3>
            Window Width: &nbsp;<span>{docUtility.docWidth}px</span>
          </h3>
        </div>
        <div className={styles.widthEl}>
          <h3>
            Window Height: &nbsp;<span>{docUtility.docHeight}px</span>
          </h3>
        </div>
      </div>
    </>
  );
}

export default App;
