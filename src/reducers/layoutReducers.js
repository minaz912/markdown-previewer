import parseMarkdown from '../utils/parseMarkdown';

let initialState = {
  parseMarkdown: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'PARSE_MARKDOWN':
      return {parsedMarkdown: parseMarkdown(action.payload.input)};
    default:
      return state;
  }
};
