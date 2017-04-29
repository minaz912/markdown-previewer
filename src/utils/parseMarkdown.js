import marked from 'marked';

const parseMarkdown = (inputSyntax) => {
  return marked(inputSyntax);
};

export default parseMarkdown;
