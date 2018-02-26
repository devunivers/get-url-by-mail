# get-url-by-mail
Javascript package for getting email service's url by mail

## Install
`npm install --save get-url-by-mail`

## Usage

```js

let getUrlByMail = require('get-url-by-mail')

getUrlByMail('toto@gmail.com'); // { success: true, url: 'https://mail.google.com/mail/u/0/' }

getUrlByMail('toto@protonmail.com'); //{ success: true, url: 'https://mail.protonmail.com/inbox' }

getUrlByMail('totoomg.com');// { success: false, msg: 'String must be mail' }

```
