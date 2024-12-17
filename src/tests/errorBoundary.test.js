import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { act } from 'react';
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";

describe('ErrorBoundary Component', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    cleanup();
    container.remove();
  });

  test('renders children when no error occurs', () => {
    render(
      <ErrorBoundary>
        <div>Child Content</div>
      </ErrorBoundary>,
      { container }
    );
    
    // Check if child content is rendered
    expect(screen.getByText('Child Content')).toBeInTheDocument();
  });

  test('renders error message when an error occurs', () => {
    render(
      <ErrorBoundary>
        <div>Child Content</div>
      </ErrorBoundary>,
      { container }
    );

    // Simulate an error
    act(() => {
      window.dispatchEvent(new Event('error'));
    });

    // Check if the error message is displayed
    expect(screen.getByText('Code has problem fix it.')).toBeInTheDocument();
  });

  test('listens to errors and updates state accordingly', () => {
    render(
      <ErrorBoundary>
        <div>Child Content</div>
      </ErrorBoundary>,
      { container }
    );

    // Trigger a custom error event
    act(() => {
      const errorEvent = new Event('error');
      window.dispatchEvent(errorEvent);
    });

    // Assert that the error message is rendered
    expect(screen.getByText('Code has problem fix it.')).toBeInTheDocument();
  });

  test('removes error listener on unmount', () => {
    const { unmount } = render(
      <ErrorBoundary>
        <div>Child Content</div>
      </ErrorBoundary>,
      { container }
    );

    // Trigger a custom error event before unmounting
    act(() => {
      const errorEvent = new Event('error');
      window.dispatchEvent(errorEvent);
    });

    // Verify error message appears
    expect(screen.getByText('Code has problem fix it.')).toBeInTheDocument();

    // Unmount the component
    unmount();

    // Simulate another custom error event
    act(() => {
      const errorEvent = new Event('error');
      window.dispatchEvent(errorEvent);
    });

    // Verify that the error message is not displayed after unmount
    expect(screen.queryByText('Code has problem fix it.')).not.toBeInTheDocument();
  });
});
