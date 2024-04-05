import { useState, useCallback } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let currLength = 0;
  const [length, setlength] = useState(8);
  const [useNum, setUseNum] = useState(true);
  const [spChar, setSpChar] = useState(true);
  const [password, setPassword] = ("");

  let passwordGenerator = useCallback(() => {
    let chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let char2 = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()";
    let char3 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let char4 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()"

    let password = "";

    if (useNum && spChar) {
          for (var i = 0; i < length; i++) {
            var randomNumber = Math.floor(Math.random() * char2.length);
            password += char2.substring(randomNumber, randomNumber +1);
        }
     }
     else if(useNum && !spChar) {
      for (var i = 0; i < length; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber +1);
     }}

     else if(!useNum && spChar) {
      for (var i = 0; i < length; i++) {
        var randomNumber = Math.floor(Math.random() * char4.length);
        password += char4.substring(randomNumber, randomNumber +1);
     }}

     else {
      for (var i = 0; i < length; i++) {
        var randomNumber = Math.floor(Math.random() * char3.length);
        password += char3.substring(randomNumber, randomNumber +1);
     }}

     document.querySelector(".displayField").innerText = password;

  }, [length, useNum, spChar, setPassword])

  let copyPassword = useCallback(() => {
    // console.log(password);
    // window.navigator.clipboard.writeText(password);
    let pswd = document.getElementById('displayID').innerHTML;
    window.navigator.clipboard.writeText(pswd);
    console.log(pswd);
  }, [password])

  // document.querySelector(".displayField").innerText = password;
  // console.log(password);

  

  return (
    <>
    <h1>Password Generator</h1>
      <div className="upperDiv">
        <div class="displayField" id="displayID">Password</div>
        <button type="button" class="btn btn-primary" onClick={copyPassword}>Copy</button>
      </div>

      <div className="lowerDiv">
        <input type="range" class="form-range" min="8" max="20" id="customRange2" onChange={(e) => {
          setlength(e.target.value);
          passwordGenerator;
        }} />

        <div
          class="btn-group"
          role="group"
          aria-label="Basic checkbox toggle button group"
        >
          <input
            type="checkbox"
            class="btn-check"
            id="btncheck1"
            autocomplete="off"
            onChange={passwordGenerator}
          />
          <label class="btn btn-outline-primary" for="btncheck1">
            Numbers
          </label>

          <input
            type="checkbox"
            class="btn-check"
            id="btncheck2"
            autocomplete="off"
            onChange={passwordGenerator}
          />
          <label class="btn btn-outline-primary" for="btncheck2">
            Special Characters
          </label>
        </div>
<br />
        <button type="button" class="btn btn-success" id="generateBtn" onClick={passwordGenerator}>Generate</button>
        
      </div>
    </>
  );
}

export default App;
