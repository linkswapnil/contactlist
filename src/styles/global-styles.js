import { injectGlobal } from 'styled-components'

/* eslint no-unused-expressions: 0 */
injectGlobal`
  * {
    // border-radius: 0 !important;
  }
  
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    background: #f0f2f4;
  }
  
  .custom-height{
    min-height: calc(100vh - 8em);
}
.max-width-35{
  max-width:35em;
}
`
