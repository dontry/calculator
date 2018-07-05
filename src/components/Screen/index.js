import view from "./view";
import { connect } from "react-redux";

export { view };

const mapStateToProps = state => {
  console.log(state);
  return {
    data: state.displayResult
  };
};

export default connect(mapStateToProps)(view);
