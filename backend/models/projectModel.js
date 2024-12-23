const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/codeIDE');

const projectSchema = new mongoose.Schema({
  title: String,
  createdBy: String,
  date: {
    type: Date,
    default: Date.now
  },
  htmlCode: {
    type: String,
    default: `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
  <h1> Hello World </h1>
</body>

</html>`
  },
  cssCode: {
    type: String,
    default: `body {
margin: 0;
padding: 0;
box-sizing: border-box;
}`
  },
  jsCode: {
    type: String,
    default: 'console.log("Hello World")'
  },
  pythonCode: {
    type: String,
    default: '# Write your Python code here\nprint("Hello World")'
  },
  javaCode: {
    type: String,
    default: `public class Main {
      public static void main(String[] args) {
        System.out.println("Hello World");
      }
    }`
  },
  cCode: {
    type: String,
    default: `#include <stdio.h>

    int main() {
      printf("Hello World\n");
      return 0;
    }`
  },
  cppCode: {
    type: String,
    default: `#include <iostream>

    int main() {
      std::cout << "Hello World" << std::endl;
      return 0;
    }`
  },
  phpCode: {
    type: String,
    default: `<?php
    echo "Hello World";
    ?>`
  },
  rubyCode: {
    type: String,
    default: '# Write your Ruby code here\nputs "Hello World"'
  },
  goCode: {
    type: String,
    default: `package main

    import "fmt"

    func main() {
      fmt.Println("Hello World")
    }`
  },
  sqlCode: {
    type: String,
    default: '-- Write your SQL queries here\nSELECT * FROM table_name;'
  },
  shellCode: {
    type: String,
    default: '# Write your shell script here\necho "Hello World"'
  },
  jsonCode: {
    type: String,
    default: `{
      "message": "Hello World"
    }`
  },
  xmlCode: {
    type: String,
    default: `<?xml version="1.0" encoding="UTF-8"?>
    <message>Hello World</message>`
  },
  markdownCode: {
    type: String,
    default: `# Hello World\nThis is a Markdown document.`
  },
  typescriptCode: {
    type: String,
    default: `// Write your TypeScript code here\nconst message: string = "Hello World";\nconsole.log(message);`
  }
});

module.exports = mongoose.model("Project", projectSchema);
