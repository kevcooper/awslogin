// ==UserScript==
// @name     awslogin
// @include  https://signin.aws.amazon.com/saml
// @version  1
// @grant    none
// @run-at document-end
// ==/UserScript==

const t = `
{{ awslogin }}
`

const s = document.createElement('script')
s.text = t
document.body.appendChild(s)
