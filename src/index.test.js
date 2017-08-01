// @flow

import React from 'react';
import { shallow } from 'enzyme';
import remarkable from 'remarkable';
import MarkdownRenderer from './';

jest.mock('remarkable');

const markdown = '# This is a H1';
const html = '<h1>This is a H1</h1>';
const renderMock = jest.fn(() => html);

describe('MarkdownRenderer', () => {
  beforeEach(() => {
    remarkable.mockClear();
    renderMock.mockClear();

    remarkable.mockImplementation(() => ({
      render: renderMock,
    }));
  });

  it('should render correctly', () => {
    const markdownRenderer = shallow(
      <MarkdownRenderer markdown="# This is a H1" />,
    );

    expect(markdownRenderer.html()).toBe('<div><h1>This is a H1</h1></div>');
  });

  describe('remarkable', () => {
    describe('preset', () => {
      describe('should default preset to default', () => {
        it('if nothing passed', () => {
          shallow(
            <MarkdownRenderer markdown="# This is a H1" />,
          );

          expect(remarkable).toHaveBeenCalledTimes(1);
          expect(remarkable).toHaveBeenCalledWith('default', {});
        });

        it('if other options are passed', () => {
          shallow(
            <MarkdownRenderer markdown="# This is a H1" options={{ linkify: false }} />,
          );

          expect(remarkable).toHaveBeenCalledTimes(1);
          expect(remarkable).toHaveBeenCalledWith('default', { linkify: false });
        });
      });

      it('should pass down preset to remarkable', () => {
        shallow(
          <MarkdownRenderer markdown="# This is a H1" options={{ preset: 'full' }} />,
        );

        expect(remarkable).toHaveBeenCalledTimes(1);
        expect(remarkable).toHaveBeenCalledWith('full', {});
      });
    });

    describe('options', () => {
      it('should default to empty object', () => {
        shallow(
          <MarkdownRenderer markdown="# This is a H1" />,
        );

        expect(remarkable).toHaveBeenCalledTimes(1);
        expect(remarkable).toHaveBeenCalledWith('default', {});
      });

      it('should pass down options to remarkable', () => {
        shallow(
          <MarkdownRenderer markdown="# This is a H1" options={{ html: true, breaks: false, linkify: false }} />,
        );

        expect(remarkable).toHaveBeenCalledTimes(1);
        expect(remarkable).toHaveBeenCalledWith('default', { html: true, breaks: false, linkify: false });
      });
    });
  });

  it('should spread props', () => {
    const className = 'one two three';

    const markdownRenderer = shallow(
      <MarkdownRenderer markdown={markdown} className={className} />,
    );

    expect(markdownRenderer.hasClass(className)).toBe(true);
  });
});
