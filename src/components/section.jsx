import React from "react";

class Section extends React.Component {
  render() {
    const cardStyle = {
      backgroundColor: "purple",
      padding: "20px",
      borderRadius: "5px",
    };
    return (
      <>
        <div style={{ backgroundColor: "purple" }}>section </div>
        <div style={cardStyle}> Another inline styling</div>
      </>
    );
  }
}

export default Section;
