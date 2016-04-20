import React from 'react';
import Remarkable from 'remarkable';

function MarkdownRenderer(props) {
    // TODO: this should not be instantiated here and should be outside of the render method, but the tests fail
    const remarkable = new Remarkable();
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
