import React, { useState, useEffect } from "react";
import Axios from "axios";

/*
id: 87958698721
join_url: "https://us02web.zoom.us/j/87958698721?pwd=aHJ2OTdZOXRJNU96djFaVmZFVjNHdz09"
start_time: "2022-05-12 13:03"
topic: "test "
*/

const CreateMeeting = (props) => {
  const [SuccessData, setSuccessData] = useState(null);
  const handleOnSubmit = (e) => {
    e.preventDefault();

    const topic = e.target.topic.value;
    const agenda = e.target.agenda.value;
    const date = e.target.date.value;
    const time = e.target.time.value;
    const invitees = e.target.invitees.value;

    const req_body = {
      topic: topic,
      agenda: agenda,
      invitees: invitees,
      start_date: date,
      start_time: time + ":00",
    };

    console.log("request body", req_body);

    Axios.post(
      `${process.env.REACT_APP_BACKEND_BASE_URL}/createMeeting`,
      req_body
    )
      .then((res) => {
        setSuccessData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="createMeeting">
      <div className="container">
        <h1 className="mb-5 mt-5">Create a New Meeting</h1>
        {SuccessData ? (
          <div className="card">
            <div class="alert alert-success" role="alert">
              Meeting Created
            </div>
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">id</th>
                    <th scope="col">Topic</th>
                    <th scope="col">start_time</th>
                    <th scope="col">join_url</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>{SuccessData.id}</td>
                    <td>{SuccessData.topic}</td>
                    <td>{SuccessData.start_time}</td>
                    <td>
                      <a href={SuccessData.join_url} target="_blank">
                        Click to join
                      </a>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(SuccessData.join_url);
                        }}
                        className="btn btn-primary btn-sm"
                      >
                        Copy to Clipboard
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleOnSubmit} className="row g-3">
                <div className="col-md-12">
                  <label for="inputAddress" className="form-label">
                    Meeting Topic
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="topic"
                    placeholder="Meeting Topic"
                  />
                </div>
                <div className="col-md-12">
                  <label for="inputAddress2" className="form-label">
                    Detailed Meeting Agenda
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="agenda"
                    placeholder="Agenda"
                  />
                </div>
                <div className="col-md-12">
                  <label for="inputAddress2" className="form-label">
                    Invitees
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="invitees"
                    placeholder="Invitees list seperated by Semicolon (;) "
                  />
                </div>

                <div className="col-md-6">
                  <label for="inputCity" className="form-label">
                    Start Date
                  </label>
                  <input type="date" className="form-control" name="date" />
                </div>
                <div className="col-md-6">
                  <label for="inputCity" className="form-label">
                    Start Time
                  </label>
                  <input type="time" className="form-control" name="time" />
                </div>

                <div className="col-md-12">
                  <button type="submit" className="btn btn-primary  btn-lg">
                    Schedule Meeting
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateMeeting;
