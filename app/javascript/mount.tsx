import React from 'react';
import ReactDOM from 'react-dom';

export default function mount(components = {}) {
  document.addEventListener('DOMContentLoaded', () => {
    const mountPoints = document.querySelectorAll('[data-react-component]');

    mountPoints.forEach((mountPoint) => {
      const dataset = (mountPoint as HTMLElement).dataset;
      const componentName = dataset['reactComponent'];
      const Component = components[componentName];

      if (Component) {
        const props = JSON.parse(dataset['props']);
        ReactDOM.render(<Component {...props} />, mountPoint);
      } else {
        console.warn(
          'WARNING: No component found for: ',
          dataset.reactComponent,
          components
        );
      }
    });
  });
}
