# Organizational Chart Implementation

This document describes how the Organizational Chart is implemented using `@visuallyjs/browser-ui-react` and `@visuallyjs/browser-ui`.

## Components

The application is built using several core components from `@visuallyjs/browser-ui-react`:

- **`SurfaceProvider`**: Provides the context and state management for the chart.
- **`SurfaceComponent`**: The main canvas area where the organizational structure is rendered.
- **`MiniviewComponent`**: Provides a navigation map for exploring large organizational structures.
- **`ControlsComponent`**: Standard zoom and pan controls.

### Custom Components
- **`PersonComponent`**: A custom JSX component for rendering individual employees, including their name, role, and avatar.
- **`OrgchartInspector`**: A property editor and search component for finding and selecting individuals within the organization.

## Configuration Options

- **`renderOptions`**: Configures the underlying VisuallyJS surface, including node and edge styles.
- **`viewOptions`**: Maps the "person" node type to the custom `PersonComponent` for JSX rendering.

## Interaction Logic
The chart features interactive selection: when a person is selected in the inspector, the application programmatically centers the view on that person and zooms in using the `centerOnAndZoom` method of the surface.

## Showing content based on zoom

The `useZoom` hook is used to show extra details about each user when the zoom level is greater than 1.

## CSS Integration
- **VisuallyJS Core**: The core styles are included in `src/index.css` via `@import "@visuallyjs/browser-ui/css/visuallyjs.css";`.
- **App Styles**: Custom styles for the employee cards and the organizational layout are imported from `orgchart.css`.
