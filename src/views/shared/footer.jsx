import { Component } from "react";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {
        position: "fixed",
        left: 0,
        bottom: 0,
        width: "100%",
        display: "block",
      },
    };
    this.closeFooter = this.closeFooter.bind(this);
  }
  closeFooter() {
    let newState = { style: { ...this.state.style , display: 'none' }};
    this.setState(newState);
  }

  render() {
    return (
      <div className="p-3 bg-dark text-center" style={this.state.style}>
        <small
          className="close text-white float-left"
          onClick={() => {
            this.closeFooter()
          }}
        >
          X
        </small>
        <h6>Nguyễn App</h6>
        <small>Bản quyền thuộc về Nguyễn</small>
      </div>
    );
  }
}

export default Footer;
