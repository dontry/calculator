import view from "./view";
import { connect } from "react-redux";
import { pressKey } from "../../actions";

export { view };

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      console.log("dispatch key " + ownProps.keyType);
      dispatch(pressKey(ownProps.keyType, ownProps.keyValue));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(view);
