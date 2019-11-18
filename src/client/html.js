
const html = ({ body, title, initialState }) => `
  <!DOCTYPE html>
  <html>
    <head>
    <script>window.__APP_INITIAL_STATE__ = ${initialState}</script>
      <title>${title}</title>
    </head>
    <body>
      <div id="root">${body}</div>
    </body>
  </html>
`;

export default html;
