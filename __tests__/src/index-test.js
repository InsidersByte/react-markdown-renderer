/* eslint-env jest */

jest.unmock('../../src');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Remarkable from 'remarkable';
import MarkdownRenderer from '../../src';

describe('MarkdownRenderer', () => {
    const markdown = '# This is a H1  \n## This is a H2  \n###### This is a H6';
    let renderMock = null;

    beforeEach(() => {
        renderMock = jest.fn();

        Remarkable.mockImplementation(() => ({
            render: renderMock,
        }));
    });

    // afterEach(() => {
    //     expect(Remarkable.mock.instances.length).toEqual(1);
    // });

    describe('sets innerHTML', () => {
        let containerNode;
        let html;

        afterEach(() => {
            expect(renderMock.mock.calls.length).toEqual(1);
            expect(renderMock).toBeCalledWith(markdown);

            const markdownRendererNode = containerNode.children[0];

            expect(markdownRendererNode).toBeDefined();
            expect(markdownRendererNode).not.toBe(null);
            expect(markdownRendererNode.innerHTML).toBe(html);
        });

        describe('marked returns html', () => {
            beforeEach(() => {
                html = '<h1>This is a H1</h1>';
                renderMock.mockReturnValueOnce(html);
            });

            it('sets innerHTML to html', () => {
                const markdownRenderer = TestUtils.renderIntoDocument(
                    <div>
                        <MarkdownRenderer markdown={markdown} />
                    </div>
                );

                containerNode = ReactDOM.findDOMNode(markdownRenderer);
            });
        });

        describe('marked returns empty string', () => {
            beforeEach(() => {
                html = '';
                renderMock.mockReturnValueOnce(html);
            });

            it('sets innerHTML to empty string', () => {
                const markdownRenderer = TestUtils.renderIntoDocument(
                    <div>
                        <MarkdownRenderer markdown={markdown} />
                    </div>
                );

                containerNode = ReactDOM.findDOMNode(markdownRenderer);
            });
        });
    });

    describe('applies className', () => {
        it('defaults empty', () => {
            const markdownRenderer = TestUtils.renderIntoDocument(
                <div>
                    <MarkdownRenderer markdown={markdown} />
                </div>
            );

            const containerNode = ReactDOM.findDOMNode(markdownRenderer);
            const markdownRendererNode = containerNode.children[0];

            expect(markdownRendererNode.className).toBe('');
        });

        it('applies className', () => {
            const className = 'one two three';

            const markdownRenderer = TestUtils.renderIntoDocument(
                <div>
                    <MarkdownRenderer markdown={markdown} className={className} />
                </div>
            );

            const containerNode = ReactDOM.findDOMNode(markdownRenderer);
            const markdownRendererNode = containerNode.children[0];

            expect(markdownRendererNode.className).toBe(className);
        });
    });
});
