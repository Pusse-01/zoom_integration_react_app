import React from "react";
import "./App.css";
import { ZoomMtg } from "@zoomus/websdk";
// import MyForm from './components/form';
const bodyParser = require("body-parser");
const crypto = require("crypto");
const cors = require("cors");
const KJUR = require("jsrsasign");

ZoomMtg.setZoomJSLib("https://source.zoom.us/2.4.0/lib", "/av");

ZoomMtg.preLoadWasm();
ZoomMtg.prepareWebSDK();
ZoomMtg.i18n.load("en-US");
ZoomMtg.i18n.reload("en-US");

console.log(window.location);

function App() {

  var ZOOM_SDK_KEY = process.env.REACT_APP_ZOOM_SDK_KEY || "";
  var ZOOM_SDK_SECRET = process.env.REACT_APP_ZOOM_SDK_SECRET || "";

  var getMeetingEndpoint = `${process.env.REACT_APP_BACKEND_BASE_URL}/get_meetings`;


  var role = 1;
  var leaveUrl = window.location.href;
  var userName = "Call Center - Agent";
  var userEmail = "dinesh@sp-solutions.biz";
  var passWord = "123456";
  var registrantToken = "";

  function get_meetings() {
    fetch(getMeetingEndpoint, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((response) => {
        // console.log(response);
        // meetingNumber = response;
        const signature = createSignature(parseInt(response));
        console.log(response);
        startMeeting(signature, parseInt(response));
        return response;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function createSignature(meetingNumber) {
    const iat = Math.round(new Date().getTime() / 1000) - 30;
    const exp = iat + 60 * 60 * 2;

    const oHeader = { alg: "HS256", typ: "JWT" };

    const oPayload = {
      sdkKey: ZOOM_SDK_KEY,
      mn: meetingNumber,
      role: role,
      iat: iat,
      exp: exp,
      appKey: ZOOM_SDK_SECRET,
      tokenExp: iat + 60 * 60 * 2,
    };

    const sHeader = JSON.stringify(oHeader);
    const sPayload = JSON.stringify(oPayload);
    const signature = KJUR.jws.JWS.sign(
      "HS256",
      sHeader,
      sPayload,
      ZOOM_SDK_SECRET
    );
    return signature;
  }

  function startMeeting(signature, meetingID) {
    document.getElementById("zmmtg-root").style.display = "block";

    ZoomMtg.init({
      leaveUrl: leaveUrl,
      success: (success) => {
        console.log(success);

        ZoomMtg.join({
          signature: signature,
          meetingNumber: meetingID,
          userName: userName,
          sdkKey: ZOOM_SDK_KEY,
          userEmail: userEmail,
          passWord: passWord,
          tk: registrantToken,
          success: (success) => {
            console.log(success);
            ZoomMtg.record({
              record: true,
            });
          },
          error: (error) => {
            console.log(error);
          },
        });
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  return (
    <div className="App">
      <main>
        <h1>Zoom Meeting SDK Sample React</h1>
        <button onClick={get_meetings}>Start Meeting</button>
      </main>
    </div>
  );
}

export default App;
