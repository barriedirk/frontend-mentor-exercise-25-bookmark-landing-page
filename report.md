Improved your solution?Generate a new report to resolve errors and warnings.
Reports are only visible to you
aria-required-children
(2 occurrences)
error

Certain ARIA roles must contain particular children

<div class="feature_tabs tabs" role="tablist" aria-label="Features of our App">

Learn more
landmark-unique
(1 occurrence)
warning

Ensures landmarks are unique

<nav class="header__nav flex flex-row justify-center items-center" aria-label="Main navigation">

Learn more 


Improved your solution?Generate a new report to resolve errors and warnings.
Reports are only visible to you
no-redundant-role
(1 occurrence)
error

Redundant role "banner" on <header>

<header id="header" class="header" role="banner">

Learn more
aria-label-misuse
(2 occurrences)
error

"aria-label" cannot be used on this element

<svg class="logo" width="148" height="25" aria-label="Bookmark logo">

Learn more
unique-landmark
(2 occurrences)
error

Landmarks must have a non-empty and unique accessible name (aria-label or aria-labelledby)

<nav class="header__nav flex flex-row justify-center items-center" aria-label="Main navigation">

Learn more
no-implicit-button-type
(1 occurrence)
error

<button> is missing recommended "type" attribute

<button id="headerBtnToggle" class="header__toggle bg-transparent border-0" aria-label="Toggle navig ...

Learn more
prefer-native-element
(1 occurrence)
error

Prefer to use the native <ul> element

<div class="cards flex flex-col sm:flex-row items-center justify-center gap-2 md:gap-6" role="list">

Improved your solution?Generate a new report to resolve errors and warnings.
Reports are only visible to you
property-no-unknown
(7 occurrences)
error

Use only valid CSS properties to ensure consistent rendering and avoid unexpected styling failures.

heigth: 220px;

Learn more
frontend-mentor/no-fixed
(4 occurrences)
warning

Avoid position: fixed as it can cause content to be cut off when zoomed, creating accessibility issues for users who need to enlarge content.

position: fixed;

Learn more
frontend-mentor/prefers-reduced-motion
(16 occurrences)
warning

Provide alternatives for users who prefer reduced motion to prevent motion sickness and other accessibility issues.

--default-transition-duration: 150ms;

Learn more
declaration-block-no-duplicate-properties
(2 occurrences)
warning

Remove duplicate properties to improve code maintainability and prevent unexpected styling behavior.

font-weight: bold;

Learn more
declaration-no-important
(1 occurrence)
warning

Avoid !important as it breaks the natural cascade and makes future style changes more difficult to implement.

display: none !important;

Learn more
declaration-property-unit-disallowed-list
(95 occurrences)
warning

Consider using relative units (em, rem) instead of absolute units (px, pt) to support resizing and improve accessibility.

width: 1px;

Learn more
declaration-property-value-keyword-no-deprecated
(1 occurrence)
warning

Replace deprecated keyword values with modern alternatives to ensure better browser compatibility.

appearance: button;

Learn more
no-duplicate-selectors
(4 occurrences)
warning

Consolidate duplicate selectors to maintain an organized and efficient stylesheet.

.tabs__contain {
  grid-area: tabs__contain;
}

Learn more
selector-max-specificity
(2 occurrences)
warning

Keep selector specificity low to maintain a flat hierarchy that is easier to maintain and override when needed.

body.is-expanded .header .container {
    background-color: transparent;
  }

Learn more
frontend-mentor/use-logical-properties
(27 occurrences)
info

Use logical properties (e.g., inline-start instead of left) to support different reading directions and improve internationalization.

margin-top: calc(var(--spacing) * 9);

Learn more
frontend-mentor/encourage-css-functions
(121 occurrences)
info

Consider using CSS functions like calc(), min(), and clamp() to create more responsive and flexible layouts that adapt to different viewport sizes.

font-size: 1em;

Learn more
frontend-mentor/encourage-css-variables
(2 occurrences)
info

Use CSS custom properties (variables) to centralize values, improve consistency, and make site-wide changes easier to implement.

border: 1px solid rgba(151, 151, 151, 0.1);

Learn more
frontend-mentor/max-width-media-query
(1 occurrence)
info

Consider using min-width instead of max-width and using a mobile-first approach, which can lead to cleaner code and better performance on smaller devices.

@media screen and (max-width: 50em) {
  .header__nav-link {
    font-size: 20px;

Learn more
media-feature-range-notation
(17 occurrences)
info

Consider using prefix notation for media queries (e.g., min-width: instead of width >=) for better browser compatibility.

@media (width >= 40rem) {
      max-width: 40rem;
    }

Learn more 