import React, { useState } from 'react';
import FAQ from './FAQ';
import '../styles/Facts.css';

function Questions () {
  const [faqs, setFaqs] = useState([
    {
      question: 'In Britain more than 300,000 tonnes of clothing end up in landfill every year.',
      answer: 'This has been estimated to be worth around £140 million. Read more here: http://www.wrap.org.uk/content/clothing-waste-prevention',
      open: true
    },
    {
      question: 'How much clothing is bought in the UK each minute?',
      answer: 'It’s estimated that more than two tonnes of clothing are bought each minute in the UK, more than any other country in Europe. That amount produces nearly 50 tonnes of carbon emissions – the same as driving 162,000 miles in a car. Read more here: https://oxfamapps.org.uk/shop-blog/sustainable-fashion/new-shocking-facts-about-the-impact-of-fast-fashion-on-our-climate/',
      open: false
    },
    {
      question: 'The average lifetime for a garment of clothing in the UK is estimated as 2.2years',
      answer: 'Extending the active life of clothing by nine months can significantly reduce its environmental impact. Read more here: http://www.wrap.org.uk/content/clothing-waste-prevention',
      open: false
    },
    { question: 'Buying just one white cotton shirt produces the same amount of emissions as driving 35 miles in a car.',
      answer: 'This amounts to 10.75kg of CO2 and other greenhouse gases. That’s because an item of clothing could travel 21748 miles – from a cotton field in the U.S, to production units in Bangladesh, to the shipment of the product to Germany and finally to the customer.Read more at https://www.marieclaire.co.uk/news/fashion-news/how-fast-fashion-is-impacting-the-planet-666984#gGe4H0yUddPazYsQ.99',
      open: false
    },
    { question: 'The global average water footprint for 1kg of cotton is 10,000 litres.',
      answer: 'Read more here: https://www.theguardian.com/sustainable-business/2015/mar/20/cost-cotton-water-challenged-india-world-water-day',
      open: false
    },
    { question: 'Fast fashion garments, which we wear less than 5 times and keep for 35 days, produce over 400% more carbon emissions per item per year than garments worn 50 times and kept for a full year.',
      answer: ' Read more here: https://www.forbes.com/sites/jamesconca/2015/12/03/making-climate-change-fashionable-the-garment-industry-takes-on-global-warming/#3f33a9d579e4',
      open: false
    },
    { question: 'Cotton is the world’s single largest pesticide-consuming crop, using 24% of all insecticides and 11% of all pesticides globally, adversely affecting soil and water.',
      answer: 'Read more here: https://www.forbes.com/sites/jamesconca/2015/12/03/making-climate-change-fashionable-the-garment-industry-takes-on-global-warming/#3f33a9d579e4',
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
        <div className="Questions-rectangle">
            <h1 className="Questions-title">FAQs</h1> 
          <div className="faqs">
            {faqs.map((faq, i) => (
              <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
            ))}
          </div>
        </div>
      );
  }

export default Questions;