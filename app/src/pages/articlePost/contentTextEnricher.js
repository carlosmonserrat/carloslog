import {blogPostDate, blogPostTitle} from "./style.module.css";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {materialDark} from "react-syntax-highlighter/dist/cjs/styles/prism";
import reactStringReplace from "react-string-replace";
import React from "react";

const descriptionPattern = /{description}(.*?){description}/gs
const keywordsPattern = /{keywords}(.*?){keywords}/gs
const authorPattern = /{author}(.*?){author}/gs
const titlePattern = /\/\/\/(.*?)\/\/\//gs
const paragraphPattern = /{p}(.*?){p}/gs
const codePattern = /{code}(.*?){code}/gs

const textSyntaxRules = new Map()

//Description meta tag
textSyntaxRules.set(
  descriptionPattern,
  (match) => (
    <meta name="description" content={match}/>
  )
)

//Keywords meta tag
textSyntaxRules.set(
  keywordsPattern,
  (match) => (
    <meta name="keywords" content={match}/>
  )
)

//Author meta tag
textSyntaxRules.set(
  authorPattern,
  (match) => (
    <meta name="author" content={match}/>
  )
)

//Paragraph meta tag
textSyntaxRules.set(
  paragraphPattern,
  (matchParagraph, i) => (
    <p className={blogPostDate}>
      {matchParagraph}
    </p>
  )
)

//Title meta tag
textSyntaxRules.set(
  titlePattern,
  (match) => (
    <h1 className={blogPostTitle}>
      {match}
    </h1>
  )
)

//Code highlighter meta tag
textSyntaxRules.set(
  codePattern,
  (matchCode) => (
    <SyntaxHighlighter language="scala" style={materialDark}>
      {matchCode}
    </SyntaxHighlighter>
  )
)

export const textEnrich = (text) => {
  let result = text;
  textSyntaxRules.forEach((value, key) => {
      result = reactStringReplace(result, key, value)
    }
  )
  return result
}

export default textEnrich