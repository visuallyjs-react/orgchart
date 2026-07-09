# Organizational Chart

This project is a classic organization chart, with employees arranged in a hierarchy, with an inspector for the selected employee, allowing you to see and edit further details.

## Features

The organization chart demonstrates:

- Using React components to render vertices in your data set
- The [Hierarchy layout](https://visuallyjs.com/react/docs/apps/layouts/hierarchy), which positions vertices in a hierarchy, oriented either vertically or horizontally
- The `useZoom` hook, to render different content based on the current zoom level
- [Inspectors](https://visuallyjs.com/react/docs/apps/inspectors) - automatically wire up forms for editing the vertices in your dataset.
- The [Miniview component](https://visuallyjs.com/react/docs/reference/MiniviewComponent), which provides an interactive miniaturized view of the contents of the canvas

## Components

The application is built using several core components from `@visuallyjs/browser-ui-react`:

- **`SurfaceProvider`**: Provides the context and state management for the chart.
- **`SurfaceComponent`**: The main canvas area where the organizational structure is rendered.
- **`MiniviewComponent`**: Provides a navigation map for exploring large organizational structures.
- **`ControlsComponent`**: Standard zoom and pan controls.
- **`useZoom`** Hook, for hiding/showing content based on zoom level.

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
