# TTFB

**Time to First Byte** (TTFB) is a foundational performance metric that measures the time between the browser's request for a page and the arrival of the first byte of data from the server. 
While other metrics (like LCP) focus on the frontend, TTFB is the primary indicator of server responsiveness and network efficiency.
<br>

<img width="1654" height="477" alt="image" src="https://github.com/user-attachments/assets/dcef7d01-79fd-453a-b1d8-18ae35d262e1" />

<br>

## Process
TTFB is not a single measure of speed, but the result of three distinct phases working together:

- **Request Transmission:** How fast the browser’s request reaches the server over the network.
- **Server Processing:** How long the server spends handling the request—executing application logic (PHP/Node.js), querying databases, and generating the HTML.
- **Response Delivery:** How quickly the first byte of the generated response is sent back to the user’s browser.


## Target benchmarks

To ensure your website delivers a fast and smooth experience, it's important to monitor Time To First Byte (TTFB). The table below outlines recommended performance ranges and how they impact user experience:
<br>

| TTFB Range        | Rating             | Notes                                   |
|------------------|--------------------|-----------------------------------------|
| Under 200 ms     | Gold Standard      | High-performance sites |
| Under 600 ms     | Good               | Acceptable performance for most sites   |
| 600 ms – 1800 ms | Needs Improvement  | May impact user experience              |
| Over 1800 ms     | Poor               | Likely to cause noticeable delays       |



