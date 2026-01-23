# ARIA (Accessible Rich Internet Applications)

ARIA stands for **Accessible Rich Internet Applications**. It is a set of attributes you can add to HTML elements to provide more information to assistive technologies (like screen readers) when semantic HTML isn't enough. ARIA helps bridge the gap for complex UI components, such as tabs, menus, and live content updates, that don't have a native HTML equivalent.

Think of ARIA as a way to add extra context. It tells a screen reader:
- the role of an element (e.g., this `<div>` is a button),
- its current state (e.g., it’s disabled),
- or one of its properties (e.g., this checkbox is checked).

## The First Rule of ARIA: Don’t Use ARIA

The most important principle of ARIA is to use it as a **last resort**. The official W3C specification puts it this way:

> “If you can use a native HTML element or attribute with the semantics and behavior you require already built in, instead of re-purposing an element and adding an ARIA role, state or property to make it accessible, then do so.”

### In Practice, This Means

- Instead of `<div role="button">`, use `<button>`.
- Instead of `<div role="navigation">`, use `<nav>`.
- Instead of `<div role="checkbox" aria-checked="true">`, use `<input type="checkbox" checked>`.

Native HTML elements have built-in keyboard accessibility, focus management, and semantics. When you use ARIA, you are making a promise that you will manually implement all of that expected behavior with JavaScript. Incorrectly used ARIA can make a site **less accessible** than having no ARIA at all.

## When to Use ARIA

You should only use ARIA when you have a component that cannot be built with semantic HTML. Common use cases include:

### Custom Interactive Widgets
Components like sliders, tabs, accordions, or custom menus that have no native HTML equivalent.

### Communicating Live Changes
When content on a page updates dynamically without a page reload (e.g., a “new message” notification or search results appearing as you type), ARIA *live regions* can tell a screen reader to announce the change.

### Providing Additional Labels
To give an accessible name to an element that has no visible text label, such as an icon-only button.

## Roles, States, and Properties

ARIA attributes fall into two main categories:

### Roles
Define the type of element and tell a screen reader what the element is.

- `role="tablist"`: A container for a set of tabs.
- `role="tab"`: An individual tab.
- `role="tabpanel"`: The content panel associated with a tab.
- `role="alert"`: A message with important, time-sensitive information.

### States and Properties
Describe the current condition or characteristics of an element.

- `aria-expanded="true"` / `"false"`: Indicates whether a collapsible element (like an accordion) is open or closed.
- `aria-hidden="true"`: Hides an element from assistive technologies.
- `aria-label="Close"`: Provides an accessible name for an element (e.g., a button with an “X” icon).
- `aria-required="true"`: Indicates that a form input is required.

## Key Takeaway

Always start with semantic HTML. Only add ARIA to enhance accessibility where native elements fall short, and be sure to test with a screen reader to confirm it behaves as expected.
