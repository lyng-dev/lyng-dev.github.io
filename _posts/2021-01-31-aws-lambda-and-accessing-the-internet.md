---
title: Does AWS Lambda have internet access by default ?
date: 2021-01-31 19:47:02 +0100
categories: [Amazon Webservice, Networking]
tags: [aws, lambda]
---

# Do AWS Lambdas have internet access by default ?

**TL;DR:**
*Question*: If you deploy the simplest lambda you can think of, can that Lambda function access resources on the open Internet ?
*Answer*: Yes!

---

>“Your assumptions are your windows on the world. Scrub them off every once in a while, or the light won't come in.”
― Isaac Asimov

The past few weeks I have been working on a small serverless application consisting of a few lambdas, some SQS and a few bits and bobs to string together an ETL-like construct for enriching some models.

One of the lambda functions needed to go retrieve some data from a few external APIs, enrich the data-model, and pass it on to the next SQS queue.

I thought, *"Right, so I know that for the Lambda to gain internet access, I need to attach it to a VPC, thereby giving it internet access."*.

When I started implementing the infrastructure, I knew from the past month that I had attached another lambda to a VPC, and done something similar. But this time, I was attaching to a different VPC, and it wasn't working.

DOWN THE RABBIT HOLE I WENT

I started debugging the VPC, I started talking to other colleagues, explaining my situation and my expectations, what I was experiencing, and I felt like my assumptions had been confirmed, that it should be working.

As it turned out, this was not entirely true to begin with. And to compound matters further I was too stubborn to realize that this assumption (that I still don't know where I got from) was false.

What is true, on the other hand, is that you CAN attach an AWS Lambda function to a VPC, let it both be able to access internal resources of that VPC, and it is also possible for an lambda function to have internet access from inside a VPC. But in my case, the VPC was not yet in a state where all the necessary infrastructure was in place (unlike the VPC I had used the previous week).

I found out during the weekend, when I decided to do some more research, and better understand AWS Lambda. Something had to be wrong with my assumption. And it wasn't more than 35 minutes into reading documentation, that I stumbled upon the answer:

**By default, Lambda runs your functions in a secure VPC with access to AWS services and the internet. Lambda owns this VPC, which isn't connected to your account's default VPC. When you connect a function to a VPC in your account, the function can't access the internet unless your VPC provides access.** 

*FACEPALM*

Read more here:
- https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html#vpc-internet
