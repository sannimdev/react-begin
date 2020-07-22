import React, { Component } from "react";

class Hello extends Component {
  static defaultProps = {
    name: "이름없음",
    color: "aqua",
  };
  render() {
    const { isSpecial, name, color } = this.props;
    return (
      <div style={{ color }}>
        {isSpecial && <b>*</b>}
        안녕하세요 {name}님. {isSpecial ? "(스페셜하다)" : "(스페셜하지않다)"}
      </div>
    );
  }
}

// function Hello({ color, name, isSpecial }) {
//   return (
//     <div style={{ color }}>
//       {/* {isSpecial ? <b>*</b> : null}
//       {null}
//       {false}
//       {undefined} */}
//       {isSpecial && <b>*</b>}
//       안녕하세요 {name}님{isSpecial ? "(스페셜하다)" : "(스페셜하지않다)"}
//     </div>
//   );
// }

// Hello.defaultProps = { name: "이름 없음", color: "aqua" };

export default Hello;
