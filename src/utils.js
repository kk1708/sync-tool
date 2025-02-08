import MarkdownIt from "markdown-it";

export function hasReadmeChanged(oldContent, newContent) {
  const markdown = new MarkdownIt();

  const oldRendered = markdown.render(oldContent.trim());
  const newRendered = markdown.render(newContent.trim());

  return oldRendered !== newRendered;
}
