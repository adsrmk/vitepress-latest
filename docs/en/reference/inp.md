# INP

[Interaction to Next Paint](https://web.dev/articles/inp)(INP) is a Core Web Vital that measures a page's overall responsiveness. As of March 2024, Google officially replaced FID (First Input Delay) with INP to provide a more comprehensive look at the user experience.

<img width="777" height="317" alt="image" src="https://github.com/user-attachments/assets/4af2b74f-70de-4183-8ee5-2f4dabb4b50a" />

<br>


While FID only measured the delay of the first interaction, INP measures the full time it takes for the page to visually respond to all user clicks, taps, and keyboard inputs.

<br>
To provide a smooth experience, aim for an INP of **200ms or less**. Anything between 200ms and 500ms needs improvement, and anything above 500ms is considered poor.


## Optimize INP

To keep interaction latency low, prioritize these strategies:

- **Break Up Long Tasks:** Use "yielding" techniques (like scheduler.yield() or setTimeout) to break large JavaScript functions into smaller pieces, allowing the browser to remain responsive.
- **Optimize CSS & Layout:** Reduce the complexity of CSS selectors and the total number of HTML elements (DOM size) to speed up the rendering of the next frame.
- **Avoid Main-Thread Blocking:** Move heavy non-UI logic to Web Workers so the main thread stays free for user interactions.
- **Immediate Feedback:** Ensure the UI provides an immediate visual response (like a button hover state or loader) even if the underlying process takes longer.
