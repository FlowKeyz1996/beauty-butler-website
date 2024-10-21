import React from 'react';

const termsAndConditionsData = [
  {
    id: 1,
    header: 'Introduction',
    text: `‍These terms and conditions outline the rules and regulations for the use of Beauty Butler's Website.
           By accessing this website we assume you accept these terms and conditions in full. 
           Do not continue to use Beauty Butler's website if you do not accept all of the terms and conditions stated on this page.
           
           The following terminology applies to these Terms and Conditions, Privacy Statement, and Disclaimer Notice and any or all Agreements:
           "Client", "You" and "Your" refers to you, the person accessing this website and accepting the Company's terms and conditions. 
           "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. 
           "Party", "Parties", or "Us", refers to both the Client and ourselves, or either the Client or ourselves.`,
  },
  {
    id: 2,
    header: 'License',
    text: `Unless otherwise stated, Beauty Butler and/or its licensors own the intellectual property rights for all material on Beauty Butler. 
           All intellectual property rights are reserved. You may view and/or print pages from http://www.mybeautybutler.com for your own personal use subject to restrictions set in these terms and conditions.
           
           You must not:
           1. Republish material from http://www.mybeautybutler.com
           2. Sell, rent or sub-license material from http://www.mybeautybutler.com
           3. Reproduce, duplicate or copy material from http://www.mybeautybutler.com`,
  },
  {
    id: 3,
    header: 'User Comments',
    text: `This Agreement shall begin on the date hereof. Certain parts of this website offer the opportunity for users to post and exchange opinions, information, material, and data ('Comments') in areas of the website. 
           Beauty Butler does not screen, edit, publish or review Comments prior to their appearance on the website and Comments do not reflect the views or opinions of Beauty Butler, its agents or affiliates. Comments reflect the view and opinion of the person who posts such view or opinion.`,
  },
  {
    id: 4,
    header: 'Content Liability',
    text: `We shall have no responsibility or liability for any content appearing on your website. 
           You agree to indemnify and defend us against all claims arising out of or based upon your Website. 
           No link(s) may appear on any page on your website or within any context containing content or materials that may be interpreted as libelous, obscene, or criminal, 
           or which infringes, otherwise violates, or advocates the infringement or other violation of, any third-party rights.`,
  },
  {
    id: 5,
    header: 'Reservation of Rights',
    text: `We reserve the right at any time and in our sole discretion to request that you remove all links or any particular link to our Website. 
           You agree to immediately remove all links to our Website upon such request. 
           We also reserve the right to amend these terms and conditions and its linking policy at any time.`,
  },
];

const TermsandConditions = () => {
  return (
    <div className="relative bg-white  mt-[-30px] p-8 rounded-tl-3xl rounded-tr-3xl">
      {termsAndConditionsData.map((section) => (
        <div key={section.id} className="mb-6">
          <h2 className="text-xl font-semibold mb-4">{section.header}</h2>
          <p className="text-gray-600 whitespace-pre-line">{section.text}</p>
        </div>
      ))}
    </div>
  );
};

export default TermsandConditions;
