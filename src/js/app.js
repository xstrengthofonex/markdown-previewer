let renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
    return `<a target="_blank" href="${href}">${text}` + '</a>';
}

var placeholder = 
`# Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![FreeCodeCamp Logo](https://secure.meetupstatic.com/photos/event/4/c/b/b/600_468259643.jpeg)
`

function loadMarkdownIntoPreview(markdownString){
    $("#preview").html(marked(markdownString, {renderer: renderer}));
}

$(document).ready(function(){
    console.log("App loaded");
    let editor = $("#editor");
 
    marked.setOptions({
        breaks: true,
      });

    editor.val(placeholder);

    loadMarkdownIntoPreview(editor.val());

    editor.on('input change keyup', function(){
        loadMarkdownIntoPreview(editor.val());
    });

});