import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  /***
    The new CSS reset - version 1.11 (last updated 20.9.2023)
    GitHub page: https://github.com/elad2412/the-new-css-reset
  ***/

  /*
    Remove all the styles of the "User-Agent-Stylesheet", except for the 'display' property
    - The "symbol *" part is to solve Firefox SVG sprite bug
    - The "html" element is excluded, otherwise a bug in Chrome breaks the CSS hyphens property (https://github.com/elad2412/the-new-css-reset/issues/36)
  */
  *:where(:not(html, iframe, canvas, img, svg, video, audio):not(svg *, symbol *)) {
    all: unset;
    display: revert;
  }

  /* accessibility - focus visible */
  *:not(
    [tabindex='-1'],
    input[type='text'], 
    input[type='number'],
    [contenteditable='true']
  ):focus {
    --line-width: 0.2rem;

    z-index: 1;
    outline: var(--line-width) solid ${({ theme }) => theme.palette.info.main};
    /* outline-offset: var(--line-width); */

  }

  /* Preferred box-sizing value */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Fix mobile Safari increase font-size on landscape mode */
  html {
    -moz-text-size-adjust: none;
    -webkit-text-size-adjust: none;
    text-size-adjust: none;

    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
  }

  form {
    width: 100%;
  }

  /* Reapply the pointer cursor for anchor tags */
  a, button {
    cursor: pointer;
  }

  /* Remove list styles (bullets/numbers) */
  ol, ul, menu {
    list-style: none;
  }

  /* For images to not be able to exceed their container */
  img {
    max-inline-size: 100%;
    max-block-size: 100%;
  }

  /* removes spacing between cells in tables */
  table {
    border-collapse: collapse;
  }

  /* Safari - solving issue when using user-select:none on the <body> text input doesn't working */
  input, textarea {
    -webkit-user-select: auto;
    user-select: auto;
  }

  /* revert the 'white-space' property for textarea elements on Safari */
  textarea {
    white-space: revert;
  }

  /* minimum style to allow to style meter element */
  meter {
    -webkit-appearance: revert;
    appearance: revert;
  }

  /* preformatted text - use only for this feature */
  :where(pre) {
    all: revert;
    box-sizing: border-box;
  }

  /* reset default text opacity of input placeholder */
  ::placeholder {
    color: unset;
  }

  /* remove default dot (•) sign */
  ::marker {
    content: initial;
  }

  /* fix the feature of 'hidden' attribute.
  display:revert; revert to element instead of attribute */
  :where([hidden]) {
    display: none;
  }

  /* revert for bug in Chromium browsers
  - fix for the content editable attribute will work properly.
  - webkit-user-select: auto; added for Safari in case of using user-select:none on wrapper element*/
  :where([contenteditable]:not([contenteditable="false"])) {
    -moz-user-modify: read-write;
    -webkit-user-modify: read-write;
    overflow-wrap: break-word;
    -webkit-line-break: after-white-space;
    line-break: after-white-space;
    -webkit-user-select: auto;
    user-select: auto;
  }

  /* apply back the draggable feature - exist only in Chromium and Safari */
  :where([draggable="true"]) {
    -webkit-user-drag: element;
  }

  /* Revert Modal native behavior */
  :where(dialog:modal) {
    all: revert;
    box-sizing: border-box;
  }


`