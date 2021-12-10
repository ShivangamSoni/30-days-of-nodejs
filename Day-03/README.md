# Day-3: Regular Expressions in NodeJS

## Introduction

- RegEx/RegExp/Regular Expression is a sequence of characters describing a pattern
- It's used to match patterns in a String
- It can be used to Searching
- We can match patterns in data & Extract the Required Data
- It is used for Finding patterns in Data. Finding Patterns in data is a commonly performed task in Computing.
- Example of Patterns: Email, Phone Number, Special Characters, File Extensions, HTML tags, etc.

## Creating a Regular Expression

[Code for Reference](./createRegEx.js)

We ca create RegEx in two ways:

1. Using Regex Literals
2. Using `RegExp` Constructor Function

## Some Examples:

---

### Finding Specific Text

[Code for Reference](./findString.js)

In this example we are checking the number of occurrences of string "man" in a textFile

Pattern: `/man/gim`

- g: Global, means the pattern will match all the occurrences
- i: Case Insensitive
- m: Multiline Match

---

---

### Finding Number of Tags

[Code for Reference](./findTags.js)

We want to match all Opening & Closing the Tags present in HTML File

Pattern:` /<(\"[^\"]*\"|'[^']*'|[^'\">])*>/gim`

---

---

### Validating Email & Password

[Code for Reference](./validateEmailPassword.js)

For email we want to check:

- Domain
- Sub-Domain
- Exactly 1 Occurrence of @

Pattern: `/^[a-zA-Z0-9.!#$%&'*+/=?^_{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)\*$/`

For Password we want to check:

- 1 Capital Letter [A-Z]
- 1 Lowercase Letter [a-z]
- 1 Number [0-9]
- 1 Special Character [!, @, #, $, %, ^]
- Length between 6 & 16

Pattern: `/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/`

---

## Learning Summary

- Regular Expression
- Creating Regular Expression
  - Using Literals
  - Using `RegExp` Constructor Function
- Common RegEx Patterns:
  - Finding Text in String
  - Matching Tags in HTML, XML
  - Validating Email
  - Validating Password
