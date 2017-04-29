export const parseMdSyntax = (mdVal) => {
  return {
    type: 'PARSE_MARKDOWN',
    payload: mdVal
  };
};
