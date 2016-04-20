import React from 'react';
import Remarkable from 'remarkable';

const remarkable = new Remarkable();

function MarkdownRenderer(props) {
    const html = remarkable.render(props.markdown);

    return (
        <div className={props.className} dangerouslySetInnerHTML={{ __html: html }}></div>
    );
}

MarkdownRenderer.propTypes = {
    markdown: React.PropTypes.string.isRequired,
    className: React.PropTypes.string,
};

export default MarkdownRenderer;
