import React, { useState, Fragment } from 'react';
import FAQ from './FAQ';
import '../styles/Facts.css';

function Question () {
  const [faqs, setFaqs] = useState([
    {
      question: 'In Britain more than 300,000 tonnes of clothing end up in landfill every year.',
      answer: <a style={{display: "table-cell"}} href="http://www.wrap.org.uk/content/clothing-waste-prevention" target="_blank">Read more here</a>,
      open: true
    },
    {
      question: 'How much clothing is bought in the UK each minute?',
      answer: <a style={{display: "table-cell"}} href="http://www.wrap.org.uk/content/clothing-waste-prevention" target="_blank">Read more here</a>,
      open: false
    },
    {
      question: 'The average lifetime for a garment of clothing in the UK is estimated as 2.2years',
      answer: <a style={{display: "table-cell"}} href="https://oxfamapps.org.uk/shop-blog/sustainable-fashion/new-shocking-facts-about-the-impact-of-fast-fashion-on-our-climate/" target="_blank">Read more here</a>,
      open: false
    },
    { question: 'Buying just one white cotton shirt produces the same amount of emissions as driving 35 miles in a car.',
      answer: <a style={{display: "table-cell"}} href="https://www.marieclaire.co.uk/news/fashion-news/how-fast-fashion-is-impacting-the-planet-666984#gGe4H0yUddPazYsQ.99" target="_blank">Read more here</a>,
      open: false
    },
    { question: 'The global average water footprint for 1kg of cotton is 10,000 litres.',
      answer: <a style={{display: "table-cell"}} href="https://www.theguardian.com/sustainable-business/2015/mar/20/cost-cotton-water-challenged-india-world-water-day" target="_blank">Read more here</a>,
      open: false
    },
    { question: 'Fast fashion garments, which we wear less than 5 times and keep for 35 days, produce over 400% more carbon emissions per item per year than garments worn 50 times and kept for a full year.',
      answer:  <a style={{display: "table-cell"}} href="https://www.forbes.com/sites/jamesconca/2015/12/03/making-climate-change-fashionable-the-garment-industry-takes-on-global-warming/#3f33a9d579e4" target="_blank">Read more here</a>,
      open: false
    },
    { question: 'Cotton is the world’s single largest pesticide-consuming crop, using 24% of all insecticides and 11% of all pesticides globally, adversely affecting soil and water.',
      answer: <a style={{display: "table-cell"}} href="https://www.forbes.com/sites/jamesconca/2015/12/03/making-climate-change-fashionable-the-garment-industry-takes-on-global-warming/#3f33a9d579e4" target="_blank">Read more here</a>,
      open: false
    },
    { question: 'What is the Issue with the Textile Industry?',
      answer: <a style={{display: "table-cell"}} href="http://www.lsx.org.uk/blog/textile-issue-london-textile-forum-2018/" target="_blank">Read more here</a>,
      open: false
    },
    { question: 'The UK could save £3billion per year',
      answer:<a style={{display: "table-cell"}} href="https://clothesaid.co.uk/about-us/facts-on-clothes-recycling/" target="_blank">Read more here</a>,
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
    </Fragment>  
  );
}

export default Question;