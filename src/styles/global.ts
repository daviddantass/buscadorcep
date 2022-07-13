import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

* {
   margin: 0;
   padding: 0;
   outline: 0;
   box-sizing: border-box;
   font-weight: 500;
   font-size: 14px;
   line-height: 24px;
}

html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}`
