# Semantic HTML

Semantic HTML means using HTML elements according to their purpose, or meaning, rather than just for their appearance.  
It is the practice of giving content on a page structure and meaning by using the correct element for the job.

Instead of relying on generic `<div>` and `<span>` tags for everything, we use a rich vocabulary of HTML5 elements to describe the content.  
This makes the code more readable for developers, better for search engines (SEO), and, most importantly, far more accessible for people using assistive technologies like screen readers.

<img width="686" height="427" alt="image" src="https://github.com/user-attachments/assets/ff809238-7958-4cda-b887-d62690cc18fe" />


## Why Is It Important?

**Accessibility:**  
Screen readers use the HTML structure to understand and navigate a page. A user can ask their screen reader to list all headings or jump to the main navigation. With non-semantic HTML (like a `<div>` styled to look like a button), this context is lost. Using a real `<button>` element provides built-in keyboard accessibility and tells the screen reader its purpose.

**Readability & Maintainability:**  
Code becomes easier for other developers to understand and maintain. `<header>`, `<nav>`, `<main>`, and `<footer>` are instantly recognizable.

**SEO:**  
Search engines can better understand the structure and importance of your content, which can improve search rankings.

## The "Div Soup" Problem

A common anti-pattern is creating layouts entirely from `<div>` elements, often called "div soup." While it's possible to make this look correct with CSS, it has no structural meaning.

### Non-Semantic Example (Avoid This)

```html
<div id="header">
  <div id="nav">...</div>
</div>
<div id="main-content">
  <div class="article">
    <h1>Article Title</h1>
    <p>Content...</p>
  </div>
</div>
<div id="footer">...</div>
```


## Solution 
HTML5 provides a wide range of elements to structure a page properly.

```html
<header>
  <nav>...</nav>
</header>
<main>
  <article>
    <h1>Article Title</h1>
    <p>Content...</p>
  </article>
</main>
<footer>...</footer>
```


## Key Semantic Elements to Use

You should always prefer a semantic element over a generic one if a suitable one exists. Here are some of the most important ones:

- `<header>`: The introductory content for a page or a section.
- `<nav>`: Contains the primary navigation links for a site.
- `<main>`: The main, unique content of the page. There should only be one per page.
- `<section>`: A thematic grouping of content, typically with a heading.
- `<article>`: A self-contained piece of content that could be distributed independently (e.g., a blog post, a product).
- `<aside>`: Content that is tangentially related to the content around it (e.g., a sidebar, a pull quote).
- `<footer>`: The footer for a page or section, often containing metadata, copyright, or contact info.
- `<figure>` and `<figcaption>`: Used to group an image, diagram, or code snippet with its caption.
- `<button>`: For any element that performs an action when clicked. Do not use `<div>` or `<a>` tags for buttons.
