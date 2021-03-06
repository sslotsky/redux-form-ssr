export default (html, preloadedState) => `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>Redux Tech Blog</title>

      <link rel="stylesheet" href="/assets/styles.css">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Work+Sans:400,500">
      <link rel="stylesheet" href="https://unpkg.com/purecss@0.6.2/build/pure-min.css" integrity="sha384-UQiGfs9ICog+LwheBSRCt1o5cbyKIHbwjWscjemyBMT9YCUMZffs6UqUTd0hObXD" crossorigin="anonymous">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/violet/0.0.1/violet.min.css">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    </head>
    <body>
      <div id="app">${html}</div>
      <div id="devtools"></div>
    </body>
    <script>
      window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState)}
    </script>
    <script src="/assets/bundle.js"></script>
  </html>
`

