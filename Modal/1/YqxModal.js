import React from "react";
import "./modal.css";
import PropTypes from "prop-types";

export  class YqxModal extends React.Component {
  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };
  render() {
    if (!this.props.show) {
      return null;
    }
    return (

      <div className="yqx_Mask">
          <div className="yqx_modal" id="modal">
              <div className="title">
                  <img src="../images/title.png" />
              </div>
              <div className="content">{this.props.children}</div>
              <div className="endcontent">
                  <div className="linkgenduo">更多优惠关注我</div>
              </div>
              <div className="toggle-button-actions">
                  <button className="toggle-button" onClick={this.onClose}>
                      狠心拒绝
                  </button>
              </div>
          </div>
      </div>
    );
  }
}
YqxModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired
};
export default YqxModal
