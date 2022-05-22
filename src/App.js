import React from "react";

import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// components
import Home from "./components/Home"
import Meeting from "./components/Meeting"
import CreateMeeting from "./components/CreateMeeting"
import MeetingRecorder from "./components/MeetingRecorder"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route strict path="/" element={<Home />} />
        <Route strict path="/meetingrecorder" element={<MeetingRecorder />} />
        <Route strict path="/meeting" element={<Meeting />} />
        <Route strict path="/meeting/:id" element={<Meeting />} />
        <Route strict path="/create-meeting" element={<CreateMeeting />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
