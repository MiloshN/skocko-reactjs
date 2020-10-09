export default (_state, _action) => {
  switch (_action.type) {
    case "USER_LOGINED":
      return {
        ..._state,
        user: true,
      };
    default:
      return _state;
  }
};
