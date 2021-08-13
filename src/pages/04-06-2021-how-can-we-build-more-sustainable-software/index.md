---
path: "/how-can-we-build-more-sustainable-software"
date: "2021-06-04"
title: "How can we build more sustainable software?"
tags:
    - software-engineering
    - cloud
    - environment
    - climate-change
featuredImage: ""
isFeatured: true
---
In 2020, Brewdog announced its latest funding round, [Equity for Punks Tomorrow](https://www.brewdog.com/uk/equityforpunks/tomorrow-raise/welcome), aiming to push its sustainability efforts even further. No small feat for a company that is already carbon negative. With the funding, they intend to replace their fleet of vehicles with fully electric alternatives, generate renewable energy for a number of their breweries, and a whole lot more.

But decarbonisation is not exclusively a private-sector trend — and various public-sector organisations are also turning their attention to more climate-friendly practices. Take the case of the Department for Environment, Food and Rural Affairs (DEFRA). In September 2020, DEFRA published [Greening Government](https://www.gov.uk/government/publications/greening-government-ict-and-digital-services-strategy-2020-2025/greening-government-ict-and-digital-services-strategy-2020-2025), a policy paper setting out its strategy for providing digital services that are more sustainable.

This policy is not an isolated case either, with other government departments such as [the Treasury](https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/820284/190716_BEIS_Green_Finance_Strategy_Accessible_Final.pdf) and the [Department for Transport](https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/739460/road-to-zero.pdf) publishing similar papers in recent years.

As a growing number of industries are turning their attention to climate change and innovating to reduce their impact on the environment, we’re all on a journey to Net Zero — and that includes our tech. But how does software engineering fit into this picture, with the industry so handcuffed to its consumption of resources?

### What resources are needed to build software?
With data centres already consuming an [estimated 3% of global electricity](https://www.independent.co.uk/climate-change/news/global-warming-data-centres-to-consume-three-times-as-much-energy-in-next-decade-experts-warn-a6830086.html), energy is at the core of any discussion on the resources used when developing software. Electricity is used at every step of the software development life cycle — from the design and engineering all the way to deployment and hosting. Every interaction has an associated cost that could be measured in kWh and can therefore also be measured in tonnes of carbon dioxide equivalents (CO₂e).

When we think about this in real terms, it all adds up. For example, a weekly one-hour meeting on Zoom with 6 participants releases an estimated 0.05kg of CO₂e per meeting. Over the course of a year, that results in the same emissions as driving a petrol car almost 10 miles.

There is also an indirect impact associated with the hardware required for the software — materials (especially metals and plastics) are required to manufacture the underlying hardware needed for servers and networking devices.

Finally, many data centres use liquid cooling to alleviate the excess heat produced by the servers, preventing damage to their components. The coolant used for these systems is usually water, a resource that is already scarce for over 3.2 billion people.

## How can software engineers make greener services?
### Migrating to the cloud
Traditional on-premises infrastructure [only utilises between 12% and 18% of its capacity](https://www.nrdc.org/energy/files/data-center-efficiency-assessment-IP.pdf), whereas cloud server utilisation is around 65%. This statistic, alongside the fact that cloud customers consume 77% fewer servers means that those same customers [reduce their carbon footprint by a whopping 88%](https://aws.amazon.com/blogs/aws/cloud-computing-server-utilization-the-environment/). Cloud infrastructure processed 60% of workloads in 2019, with that figure [estimated to hit 94% by the end of 2021](https://www.cisco.com/c/en/us/solutions/executive-perspectives/annual-internet-report/index.html).

These statistics mean that the question is no longer whether or not we should migrate to the cloud. Instead, we should consider whether the cloud providers are providing their services in a sustainable manner.

Each cloud provider approaches sustainability differently — Azure is leading the way in innovating to reduce its impact. Microsoft has [committed to four key environmental targets](https://azure.microsoft.com/en-us/global-infrastructure/sustainability/#carbon-benefits), including using 100% renewable energy by 2025. They introduced [liquid immersion cooling](https://news.microsoft.com/innovation-stories/datacenter-liquid-cooling/) in its data centres to help them reach these lofty targets.

At AWS, [servers use free-air cooling systems](https://www.aboutamazon.com/news/aws/reducing-water-usage-in-aws-data-centers) that incorporate reclaimed or recycled water to provide direct evaporative cooling in summer months, ensuring the air is of a low enough temperature to sufficiently cool the infrastructure. Some sites have even installed on-site water treatment systems to reduce their overall water usage footprint.

Amazon, Microsoft and Google are also purchasing varying quantities of renewable energy from external sources to further reduce their reliance on fossil fuels.

### Adopting serverless architecture
Migrating applications to the cloud is only one piece of the puzzle, however. Adopting a serverless architecture is critical as it enables us to use what is necessary with little-to-no waste. Using a serverless architecture means that your application runs on infrastructure managed by a cloud provider.

Examples of these types of infrastructure are AWS’ Fargate, Azure’s CosmosDB and GCP’s Cloud Functions. This infrastructure is shared (unless a dedicated host/instance is requested) and billed on usage. Sharing infrastructure means utilisation of the underlying infrastructure is maximised while billing based on usage encourages reduction and optimisation wherever possible.

### Optimise your functionality
The final method of reducing the [impact your services have on the environment is to optimise](https://webkit.org/blog/8970/how-web-content-can-affect-power-usage/). Optimising the functionality working behind-the-scenes on an application or website, even if it only accounts for a performance boost of a few milliseconds, contributes exponentially when we change our viewpoint. A few additional milliseconds taken when a single piece of functionality is used quickly multiplies when talking about millions of uses and multiple applications that are powering hundreds of products.

So how can we make websites more energy efficient?

* Add a Dark Mode
* Block bots and web scrapers
* Design to use static content wherever possible
* Implement caching and use a CDN
* Reduce the quantity or size of images and videos
* Reduce the variety of fonts
* Use system fonts where possible

Some are even taking things a step further, developing free and open tools that allow users to make sustainability more visible. Examples include the [Cloud Sustainability Console](https://pauldjohnston.medium.com/climate-change-and-seeing-your-cloud-carbon-footprint-4e03c195a799), [green hosting checks](https://www.thegreenwebfoundation.org/) and [carbon footprint calculators](https://www.websitecarbon.com/) for websites.

### How can non-technical teams help?
Other teams can reduce a company’s impact in several ways. They can contribute indirectly by setting sustainability targets and monitoring how the business adheres to these targets. Microsoft has built a [Sustainability Calculator](https://appsource.microsoft.com/en-GB/product/power-bi/coi-sustainability.sustainability_dashboard) to make monitoring and reporting progress towards environmental targets easier for their customers.

They can also impact the company’s carbon footprint more directly. Organisations must empower their teams to participate in actions that, although small, all add up, such as:

* Car sharing
* Cycle to Work schemes
* Recycling bins in office spaces
* Sustainable suppliers

Net Zero is no small feat for any industry or geography. We all have to take whatever small steps we can to wean ourselves off wasteful, carbon-emitting processes. These small steps can then grow exponentially into visibly significant changes. This is particularly difficult for any industries that have become accustomed to a particular way of working, of which software engineering is far from alone.