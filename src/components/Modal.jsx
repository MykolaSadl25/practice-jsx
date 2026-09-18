import { Component } from "react";
import style from "./Modal.module.css";

class Modal extends Component {
  render() {
    return (
      <div className={style.backdrop} onClick={this.props.closeModal}>
        <div className={style.modal}>
          <img src={this.props.selectedImg} alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;
