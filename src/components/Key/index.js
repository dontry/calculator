import BaseView from "./BaseView";
import ClearView from "./ClearView";
import { connect } from "react-redux";
import { pressKey } from "../../actions";

const mapStateToProps = ({ lastActionType }) => ({
  lastActionType
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(pressKey(ownProps.keyType, ownProps.keyValue));
    }
  };
};

const BaseKey = connect(
  null,
  mapDispatchToProps
)(BaseView);

const ClearKey = connect(
  mapStateToProps,
  mapDispatchToProps
)(ClearView);

export { BaseView, ClearKey };
export default BaseKey;
