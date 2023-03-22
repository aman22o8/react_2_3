const Box = (props) => {
  //  Write your code here.
  const { boxStyle, boxHeading } = props;
  return <h1 className={`heading_box_font ${boxStyle}`}>{boxHeading}</h1>;
};

const Eelement = () => (
  //  Write your code here.
  <div className="bg_container">
    <h1 className="main_heading">BOXES</h1>
    <div className="box_container">
      <Box boxStyle="small_box" boxHeading="Small" />
      <Box boxStyle="medium_box" boxHeading="Medium" />
      <Box boxStyle="large_box" boxHeading="Large" />
    </div>
  </div>
);

ReactDOM.render(<Eelement />, document.getElementById("root"));
