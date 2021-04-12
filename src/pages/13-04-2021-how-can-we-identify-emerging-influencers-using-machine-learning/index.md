---
path: "/how-can-we-identify-emerging-influencers-using-machine-learning"
date: "2021-04-13"
title: "How Can We Identify Emerging Influencers Using Machine Learning?"
tags:
    - software-engineering
    - cloud
    - product-management
    - project-management
featuredImage: "/pexels-cristian-dina.jpg"
isFeatured: true
---
In the age of social media more than ever, marketing teams are turning to influencers to advertise their new, innovative products or services. The number of followers, impressions and engagements all impact traffic, which in turn helps drive one very important metric - sales. This makes the ability to identify the next up-and-coming influencer all the more important and valuable, with 61% of marketers agreeing that it’s difficult to find the right influencers for a campaign.

Influencer marketing is an industry that has seen rapid growth over the past few years with an increase between 40 and 50 percent year on year, according to [Influencer Marketing Hub](https://influencermarketinghub.com/influencer-marketing-benchmark-report-2020/). It allows companies to increase brand awareness and trust through directly interacting with their target audience in a way never seen before in other strands of marketing.

![Graph showing estimated year-on-year growth of the influencer marketing industry](/influencer-marketing-graph.jpg "Graph taken from InfluencerMarketingHub's State of Influencer Marketing report")

Take [Gymshark](https://www.gymshark.com/), recently valued at £1.3bn, this fitness clothing brand was one of the earliest adopters of the influencer marketing model. They are renowned for marketing products through their community of Instagram influencers and YouTubers, with their success being a testament to the importance of influencer marketing, showing that when done right it can be a key driver to exponential growth. 

As an industry, influencer marketing is expected to hit [$10bn in 2020](https://digitalmarketinginstitute.com/en-gb/blog/20-influencer-marketing-statistics-that-will-surprise-you), growing enormously from just $3bn in 2017. Increasingly companies are valuing the involvement of influencers in their marketing, so it is now more important than ever to be able to identify emerging influencers and those with the most potential to drive success for a brand. 

## So what makes an influencer?
The most obvious type of influencer are celebrities - individuals with large numbers of followers who are often idolized. Similarly, other types of influencers include industry experts, thought leaders and bloggers.
These categories, although relatively vague terms, all have some similar traits that provide us with some insight on what features to look for when trying to identify the next big influencer.
Common traits in these categories are that the individuals often have a sizable audience that they engage with through some kind of platform, and in most cases, they are individuals who talk about topics in a particular niche. For example, Andrew Ng could be considered an influencer due to his sizeable audience on Twitter, where he regularly posts about machine learning.

## How do we quantify influence?
As with a large amount of machine learning problems, being able to express a complex idea like influence is paramount to identifying trends. In the context of social media, there are three main types of data we can use:
1. Number of Followers
2. Number of Impressions
3. Engagements

The number of followers and impressions, when measured over time, gives us an idea of the reach of the potential influencer. Engagements then give us information about how the individual is able to convert that reach, giving us insight into how likely the users that are viewing the posts are to be motivated into doing a particular thing, such as purchasing a product.

## How do we predict an emerging influencer?
A [paper published by students at Stanford University](http://cs229.stanford.edu/proj2014/Ruishan%20Liu,%20Yang%20Zhao,%20Liuyu%20Zhou,%20Predict%20Influencers%20in%20the%20Social%20Network.pdf) discusses a potential solution, while Kaggle (a website which hosts data science and machine learning competitions) [has several others](https://www.kaggle.com/c/predict-who-is-more-influential-in-a-social-network). Kaggle's most effective entry makes use of a Bayesian Optimized Light Gradient Boosted Machine that is trained using data that compares two individual's social media statistics, including those discussed above. Bayesian optimization is a process that allows us to fine-tune hyper-parameters for a machine learning model. [LightGBM is a relatively new gradient boosting framework that uses tree-based learning](https://medium.com/@pushkarmandot/https-medium-com-pushkarmandot-what-is-lightgbm-how-to-implement-it-how-to-fine-tune-the-parameters-60347819b7fc) and differs from other tree-based algorithms in that the tree grows vertically (leaf-wise) rather than horizontally (level-wise).

![Diagram Illustrating Leaf-wise Tree Growth](/leaf-wise.png "Illustration of Leaf-wise Growth")

![Diagram Illustrating Level-wise Tree Growth](/level-wise.png "Illustration of Level-wise Growth")

Some advantages of LightGBM is that it is fast, requires a lower amount of memory and supports GPU learning, however, it is quite sensitive to overtraining. In this implementation, the LightGBM manages to correctly identify which of the two individuals are the most influential with around 87% accuracy, making this model ideal for assisting in deciding between a relatively low number of potential influencers. However, despite this being one of the most accurate machine learning solutions for this problem, it is held back by the need for a large amount of curated data in order to be effective. This means that access to a large volume of user data needs to be accessed via an API or by web scraping, before then pre-processing the data into a given format to be used by the model.

## What can we do to improve the implementation?
The difficulty in quantifying influence is that these values better describe an individual’s reach rather than their influence. However, we could also use Natural Language Processing techniques such as sentiment analysis, named entity recognition and document classification to analyse the post itself, along with the text-based engagements. This would give us a better understanding of what topics and what type of posts get a better reach as well as which of these garner the most positive interactions.

## How do you decide if the influencer you’ve predicted is right for you?
Even with the work mentioned above, the influencer may not necessarily be the right fit for the strategy you have in mind. In order to build brand awareness or to increase a social following, you might need to choose a macro-influencer, whereas to reach an ideal audience a micro-influencer might be a better choice. The relevancy of the influencer's usual posts and the quality of the post could also contribute to choosing a different influencer.