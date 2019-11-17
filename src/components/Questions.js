import React, { useState, Fragment } from 'react';
import FAQ from './FAQ';
import '../styles/Facts.css';
import PlantBanner from './PlantBanner';

function Question () {
  const [faqs, setFaqs] = useState([
    {
      question: 'In Britain more than 300,000 tonnes of clothing end up in landfill every year.',
      answer: <a style={{display: "table-cell"}} href="http://www.wrap.org.uk/content/clothing-waste-prevention" target="_blank">Read more here</a>,
      open: true
    },
    {
      question: 'A single t-shirt takes 2,700 liters of water to make. The same amount of water an average person drinks over the course of 900 days.',
      answer: <a style={{display: "table-cell"}} href="https://bettercotton.org/about-bci/cottons-water-footprint-how-one-t-shirt-makes-a-huge-impact-on-the-environment/" target="_blank">Read more here</a>,
      open: false
    },
    {
      question: 'The UK is the epicentre of fast fashion in Europe, with each person buying an estimated 26.7kg of clothing every year, compared to an average 15.6kg for people across Germany, Denmark, France, Italy, the Netherlands and Sweden.',
      answer: <a style={{display: "table-cell"}} href="https://unearthed.greenpeace.org/2019/09/12/fast-facts-about-fast-fashion/" target="_blank">Read more here</a>,
      open: false
    },
    {
      question: 'The ILO estimates that 170 million are engaged in child labour, with many making textiles and garments to satisfy the demand of consumers in Europe, the US, and beyond.',
      answer: <a style={{display: "table-cell"}} href="https://labs.theguardian.com/unicef-child-labour/" target="_blank">Read more here</a>,
      open: false
    },
    {
      question: 'The carbon footprint of new clothes bought in the UK every second is as big as driving a car from London to the Costa Del Sol and back.',
      answer: <a style={{display: "table-cell"}} href="https://oxfamapps.org.uk/shop-blog/sustainable-fashion/new-shocking-facts-about-the-impact-of-fast-fashion-on-our-climate/" target="_blank">Read more here</a>,
      open: false
    },
    { question: 'Buying just one white cotton shirt produces the same amount of emissions as driving 35 miles in a car.',
      answer: <a style={{display: "table-cell"}} href="https://www.marieclaire.co.uk/news/fashion-news/how-fast-fashion-is-impacting-the-planet-666984#gGe4H0yUddPazYsQ.99" target="_blank">Read more here</a>,
      open: false
    },
    { question: 'Only 10% of the clothes people donate to thrift stores or charities get sold, the rest goes to landfill.',
      answer: <a style={{display: "table-cell"}} href="https://www.1millionwomen.com.au/blog/5-crazy-facts-new-fashion-documentary-true-cost/" target="_blank">Read more here</a>,
      open: false
    },
    { question: 'Most of our clothes are made in places where workers’ rights are nonexistent.',
    answer:<a style={{display: "table-cell"}} href="https://www.sustainyourstyle.org/old-working-conditions" target="_blank">Read more here</a>,
    open: false
    },
    { question: 'Fast fashion garments, which we wear less than 5 times and keep for 35 days, produce over 400% more carbon emissions per item per year than garments worn 50 times and kept for a full year.',
      answer:  <a style={{display: "table-cell"}} href="https://www.forbes.com/sites/jamesconca/2015/12/03/making-climate-change-fashionable-the-garment-industry-takes-on-global-warming/#3f33a9d579e4" target="_blank">Read more here</a>,
      open: false
    },
    { question: 'More than 90% of that cotton is now genetically modified, using vast amounts of water as well as chemicals. Cotton production is now responsible for 18% of worldwide pesticide use and 25% of total insecticide use.',
      answer: <a style={{display: "table-cell"}} href="https://truecostmovie.com/learn-more/environmental-impact/" target="_blank">Read more here</a>,
      open: false
    },
    { question: 'The average UK household owns around £4,000 worth of clothes and about 30% of it hasn’t been worn in the last year.',
      answer:<a style={{display: "table-cell"}} href="http://www.wrapcymru.org.uk/SCAP2020targetstraderelease" target="_blank">Read more here</a>,
      open: false
    },
    { question: 'Fashion’s consumption of resources – especially water and oil – is projected to double by 2030.',
    answer:<a style={{display: "table-cell"}} href="https://www.commonobjective.co/article/measuring-fashion-s-ecological-footprint" target="_blank">Read more here</a>,
    open: false
    },
    { question: '90% of waste water in developing countries is discharged in rivers without treatment. 22,000 litres of toxic waste is dumped into rivers by tanneries in Bangladesh every day.',
    answer:<a style={{display: "table-cell"}} href="https://www.sustainyourstyle.org/en/whats-wrong-with-the-fashion-industry" target="_blank">Read more here</a>,
    open: false
    },
    { question: 'In Bangladesh over three million people, 85% of whom are women, work in the garment industry. A garment factory helper’s wage starts at just £25 a month, with sewing operators earning just £32 a month – far below a living wage.',
    answer:<a style={{display: "table-cell"}} href="https://waronwant.org/fashion-victims-facts" target="_blank">Read more here</a>,
    open: false
    },
  ]);

  

  const toggleFAQ = index => {
    setFaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open
      } else {
        faq.open = false;
      }

      return faq;
    })) 
  }

  return (
    <Fragment>
      <div className="Title-Page">
          <div className="Title-Rectangle">
              <h1 className="Title">Facts.</h1>
              <h2 className="Banner-text-facts">What is the true impact of the fast fashion industry on our planet? Below you'll find facts and links to enlightening sources.</h2>
          </div>
      </div>
      <div className="faqs">
        {faqs.map((faq, i) => (
          <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>
      <PlantBanner />
    </Fragment>  
  );
}

export default Question;