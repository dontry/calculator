import view from "./view";
import { connect } from "react-redux";

export { view };

const mapStateToProps = state => ({
  display: state.displayResult
});

export default connect(mapStateToProps)(view);
