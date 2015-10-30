var React = require("react");
var ReactDOM = require("react-dom");
var CommentBox = require("./src/CommentBox");

ReactDOM.render(
    <CommentBox url="/api/comment.json" pollInterval={2000} />,
    document.getElementById('content')
);
