import React from "react";
import { withRouter } from "react-router";
import Color from "../HOC/Color";
import logo from "../assets/images/logo.png";
import { connect } from "react-redux";

class Home extends React.Component {
  // componentDidMount() {
  //   setTimeout(() => {
  //     this.props.history.push("/todo");
  //   }, 3000);
  // }

  handleDeleteUser = (user) => {
    console.log(`>>> check user delete: `, user);
    this.props.deleteUserRedux(user);
  };

  handleCreateUser = () => {
    this.props.addUserRedux();
  };

  render() {
    console.log(">>> check props: ", this.props);
    let listUsers = this.props.dataRedux;
    return (
      <>
        <div>Hello world</div>
        <div>
          <img src={logo} style={{ marginTop: "20px" }} />
        </div>
        <div>
          {listUsers &&
            listUsers.length > 0 &&
            listUsers.map((item, index) => {
              return (
                <div key={item.id}>
                  {index + 1} - {item.name}
                  &nbsp;
                  <span onClick={() => this.handleDeleteUser(item)}>x</span>
                </div>
              );
            })}
        </div>
        <button onClick={() => this.handleCreateUser()}>Add new</button>
      </>
    );
  }
}

// export default withRouter(Home);

const mapStateProps = (state) => {
  return { dataRedux: state.users };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteUserRedux: (userDelete) =>
      dispatch({ type: "DELETE_USER", payload: userDelete }),
    addUserRedux: () => dispatch({ type: "CREATE_USER" }),
  };
};

export default connect(mapStateProps, mapDispatchToProps)(Color(Home));
// export default Color(Home);
