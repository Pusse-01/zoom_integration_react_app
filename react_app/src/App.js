import React from 'react';
import './App.css';
import { ZoomMtg } from '@zoomus/websdk';
// import MyForm from './components/form';
const bodyParser = require('body-parser')
const crypto = require('crypto')
const cors = require('cors')
const KJUR = require('jsrsasign')

ZoomMtg.setZoomJSLib('https://source.zoom.us/2.4.0/lib', '/av');

ZoomMtg.preLoadWasm();
ZoomMtg.prepareWebSDK();
// loads language files, also passes any error messages to the ui
ZoomMtg.i18n.load('en-US');
ZoomMtg.i18n.reload('en-US');

function App() {

  var API_KEY = 'pnnUcpQSS4-aV1pPrFi9Ng'
  var API_SEC = 'hnZYNbmowkIs039SJE3MKx6umc4p29YxbA6H'
  var ZOOM_SDK_KEY = 'RnGHHOJG8zC3K0WTOuAltmjmMye0NT0HsHbW'
  var ZOOM_SDK_SECRET = 'RIJMIRrDa5LEVUlUjf0KC1T5pVUuhR0zBKL0'
  // setup your signature endpoint here: https://github.com/zoom/meetingsdk-sample-signature-node.js
  var signatureEndpoint = 'http://localhost:4000/'
  var createMeetingEndpoint = 'https://54.165.82.130/createmeeting'
  var getMeetingEndpoint = 'https://54.165.82.130/get_meetings'
  // This Sample App has been updated to use SDK App type credentials https://marketplace.zoom.us/docs/guides/build/sdk-app
  var sdkKey = 'RnGHHOJG8zC3K0WTOuAltmjmMye0NT0HsHbW'
  var meetingNumber = '86359361045'
  var role = 1
  var leaveUrl = 'https://Pusse-01.github.io/zoom_integration_react_app'
  var userName = 'User'
  var userEmail = 'meulabs.sl@gmail.com'
  var passWord = ''
  // pass in the registrant's token if your meeting or webinar requires registration. More info here:
  // Meetings: https://marketplace.zoom.us/docs/sdk/native-sdks/web/client-view/meetings#join-registered
  // Webinars: https://marketplace.zoom.us/docs/sdk/native-sdks/web/client-view/webinars#join-registered
  var registrantToken = ''


function get_meetings() {
  fetch(getMeetingEndpoint, {
      method: 'GET'
    }).then(res => res.json())
    .then(response => {
      // console.log(response);
      // meetingNumber = response;
      const signature = createSignature(parseInt(response));
      console.log(response)
      startMeeting(signature,parseInt(response))
      return response;
    }).catch(error => {
      console.error(error)
    })
}

function create_meeting() {
  fetch(createMeetingEndpoint, {
      method: 'POST',
      body: JSON.stringify({
    topic: "TestA",
    agenda:"testA",
    start_date:"2022-06-04",
    start_time: "15:59:00Z"
})
    }).then(res => res.json())
    .then(response => {
      console.log(response)
    }).catch(error => {
      console.error(error)
    })
}

  // function getSignature() {
  //   fetch(signatureEndpoint, {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({
  //       meetingNumber: meetingNumber,
  //       role: role
  //     })
  //   }).then(res => res.json())
  //   .then(response => {
  //     startMeeting(response.signature)
  //   }).catch(error => {
  //     console.error(error)
  //   })
  // }

  function createSignature(meetingNumber){
    const iat = Math.round(new Date().getTime() / 1000) - 30;
  const exp = iat + 60 * 60 * 2

  const oHeader = { alg: 'HS256', typ: 'JWT' }

  const oPayload = {
    sdkKey: ZOOM_SDK_KEY,
    mn: meetingNumber,
    role: role,
    iat: iat,
    exp: exp,
    appKey: ZOOM_SDK_SECRET,
    tokenExp: iat + 60 * 60 * 2
  }

  const sHeader = JSON.stringify(oHeader)
  const sPayload = JSON.stringify(oPayload)
  const signature = KJUR.jws.JWS.sign('HS256', sHeader, sPayload, ZOOM_SDK_SECRET)
  return signature;
}

  function startMeeting(signature, meetingID) {
    document.getElementById('zmmtg-root').style.display = 'block'

    ZoomMtg.init({
      leaveUrl: leaveUrl,
      success: (success) => {
        console.log(success)

        ZoomMtg.join({
          signature: signature,
          meetingNumber: meetingID,
          userName: userName,
          sdkKey: sdkKey,
          userEmail: userEmail,
          passWord: passWord,
          tk: registrantToken,
          success: (success) => {
            console.log(success)
            ZoomMtg.record({
                record: true
            });
          },
          error: (error) => {
            console.log(error)
          }
        })

      },
      error: (error) => {
        console.log(error)
      }
    })
  }

  


function join_meeting(){
  const signature = createSignature(meetingNumber);
  startMeeting(signature, meetingNumber)

}

  return (
    <div className="App">
      <main>
        <h1>Zoom Meeting SDK Sample React</h1>
        <button onClick={join_meeting}>Start Meeting</button>
      </main>
      {/* <main>
  <div> 
    <button onClick={create_meeting}>Create Meeting</button>
  </div>
</main>
<main>
  <div> 
    <button onClick={get_meetings}>Get Meetings</button>
  </div>
</main> */}
    </div>
  );
}

export default App;
