import React, { Component } from "react";

class ScheduleDemo extends Component {
  render() {
    return (
      <section className="schedule-demo">
        <div className="container">
          <h3>
            Convert Your Platform Visitors to <span>Paid Customers</span>
          </h3>

          <p>Set up a time to connect with one of our experts.</p>

          <ul>
            <li>
              <input type="text" placeholder="Name" />
            </li>
            <li>
              <input type="text" placeholder="Email id" />
            </li>
            <li>
              <input type="text" placeholder="Mobile Number" />
            </li>
            <li>
              <input type="text" placeholder="Country" />
            </li>
            <li>
              <button class="button button-primary">Schedule Demo</button>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default ScheduleDemo;
