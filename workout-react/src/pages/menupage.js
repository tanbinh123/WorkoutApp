import React from "react";
import "../css/styles.css";
import "../utility/renderitems";
import WorkoutCreatePage from "../pages/workoutcreatepage";

class MenuPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: props.uName,
      start: false,
      user: "",
      workoutCreate: false,
      useWorkouts: false,
    };
    // this.handleLogout = this.handleLogout.bind(this);
    this.handleCreateWorkout = this.handleCreateWorkout.bind(this);
  }
  handleCreateWorkout() {
    this.setState({
      workoutCreate: true,
    });
  }

  render() {
    if (this.state.workoutCreate) {
      return (
        <div className="app" style={{ margin: "10%" }}>
          <WorkoutCreatePage uName={this.state.userName} />
        </div>
      );
    }

    return (
      <div className="app" style={{ margin: "10%" }}>
        <header className="app-header">
          <link
            href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
            rel="stylesheet"
            id="bootstrap-css"
          />
        </header>

        <h1>Logged in Successfully as {this.state.userName}</h1>
        <div>
          <div className="flex-container">
            <div className="menu-card">
                <h6 className="workout-menu">Create Workout</h6>
              <img
                src={require("../img/DemoWorkoutImg.png")}
                onClick={() => this.handleCreateWorkout()}
              />
            </div>

            <div className="menu-card">
                <h6 className="workout-menu">Workout</h6>
              <img
                src={require("../img/DemoWorkoutImg.png")}
                onClick={() => this.handleLogout()}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default MenuPage;
