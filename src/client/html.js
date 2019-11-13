const html = ({ body, title, initialState }) => `
  <!DOCTYPE html>
  <html>
    <head>
    <script>window.__APP_INITIAL_STATE__ = ${initialState}</script>
      <title>${title}</title>
    </head>
    <body style="margin:0">
      <div id="app">${body}</div>
    </body>
  </html>
`;

export default html;
