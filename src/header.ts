export function header() {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta http-equiv="Content-Security-Policy" content="default-src localhost:* https:">
    <meta charset="utf-8">
    <title>abaplint.app - ABAP Static Analysis & Continuous Integration</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content ="abaplint.app - ABAP Static Analysis & Continuous Integration">
    <meta name="keywords" content ="ABAP, static analysis, quality assurance, code inspector, atc, code insights, continious integration">
    <link rel="stylesheet" href="/bootstrap.min.css">
    <link rel="stylesheet" href="/bootstrap-icons.css">
    <link rel="icon" href="/favicon.png">
    <meta property="og:image" content="https://blog.abaplint.app/favicon.png" />
  </head>
  <body>
  <nav class="navbar navbar-expand-md navbar-dark pt-1 pb-1 sticky-top bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="https://abaplint.app">abaplint.app</a>
    </div>
  </nav>
  <main class="container">`;
}