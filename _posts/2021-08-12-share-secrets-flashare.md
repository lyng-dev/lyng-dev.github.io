---
title: "flasha.re - an open source project"
date: 2021-08-12 21:23:11 +0100
categories: [Open Source, Security, Project]
tags: [oss, project, security]
---

A pet project of mine is flashare, which is a web-based tool that makes it possible to share secrets in a secure way, while still being super simple to use and extremely fast.

We all try to share secrets in a safe way, because sometimes there is just no other practical way than to send the secret in the open. So we device ways to make it difficult for an attacker to somehow get that secret. For instance you might split the username and the password in two separate messages, and even send them over distinct communication channels. Though this helps alot, it's not really safe, because the information is stored both on your system, and on the recepients system, as well as on the cloud providers system, if you use, say, Microsoft Outlook, or Slack.

To solve this problem, [onetimesecret.com](https://onetimesecret.com), among others came up with a way to store your password in their system, and then you get a one-time URL to access it. And once accessed it would automatically be deleted. This is definitely better than just sending it in Email or IM. But it's not really secure. The secret is actually being sent to the server in a readable form. Albeit over a secure connection, but the system storing the secret could be compromised, and secondly, you're open to MITM-attacks for the duration the secret link exists and is not accessed by the expected person.

Wouldn't it be better if the secret was never sent in a readable form to the server?

That's what flasha.re makes possible, for now just with text. You can enter a secret, have it encrypted directly in the browser, with a randomly generated password, which is never passed to the server. It then generates a Secret-url similar to: https://flasha.re/secret/someKey#randomPassword - Why is this more secure ?

It just so happens that the URL Fragment is not sent by the browser to the server. So when we share this secret-link, and the recipient opens the secret-url, their browser will not send the randomPassword to the server. This greatly reduces the risk of MITM attacks, which is an inherent risk associated with other secret-sharing solutions.

Additionally, I've made it possible to use an additional custom password, so you can further decrease the risk getting your information stolen. Ofcourse you should still practice good information hygiene, such as not writing where user credentials belong, etc.
