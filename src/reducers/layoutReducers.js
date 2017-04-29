export default (state= [], action) => {
  switch (action.type) {
    case 'PARSE_MARKDOWN':


      return Object.assign({}, action.parsedMarkdown);
    default:
      return state;
  }
};
