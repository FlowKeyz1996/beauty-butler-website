import React from 'react';

const termsAndConditionsData = [
  {
    id: 1,
    header: 'General Terms',
    text: [
      `1.1. These terms of use govern the use of our website and mobile application (collectively called the “Platform”) and define the legally binding terms on which you access, browse, register or otherwise use the Platform to enjoy our services. The terms of use apply to all users of the Platform including guest users.`,
      `1.2. By using our Platforms in any manner, you confirm that you accept these terms of use and that you agree to comply with and be bound by them.`,
      `1.3. You understand that breach of any of these terms of use may result in your rights to use the services on the Platform being restricted, suspended or withdrawn.`,
      `1.4. We may amend these terms of use at any time by amending this page. Please check this page from time to time to take notice of any changes we make as they will be binding on you. If you are an existing user, we will.`,
      `1.5. If you do not agree to these terms of use, you must not access this Platform or use the services.`,
    ],
  },
  {
    id: 2,
    header: 'Services',
    text: [
      `2.1. This Platform allows users to request one of our Butlers to deliver your favourite services to your home.`,
      `2.2. The platform contains a variety of beauty service providers you can choose to order your preferred beauty treatment from and have them delivered to you.`,
      `2.3. Beauty Butler may not be affiliated or have any form of partnerships with these salons. We are only responsible for ordering the service on your behalf and instructions and we get them delivered to you without hassle. Because we execute your orders.`,
      `2.4. We operate the Platform and implement the tools and technical means to enable this relationship to work smoothly. We do not have possession of any treatments or service offered at discounts. Beauty Butler is not a part or subsidiary of any of the salons listed on this platform.`,
      `2.5. We have no control over and do not guarantee the existence, quality and safety of treatments advertised. We do not guarantee the truth or accuracy of salon offers and the ability of service providers to deliver a service as described.`,
    ],
  },
  {
    id: 3,
    header: 'Acceptance of Terms',
    text: [
      `3.1. This Agreement shall begin on the date hereof. Certain parts of this website offer the opportunity for users to post and exchange opinions, information, material, and data ('Comments') in areas of the website.`,
      `3.2. Beauty Butler does not screen, edit, publish or review Comments prior to their appearance on the website and Comments do not reflect the views or opinions of Beauty Butler, its agents or affiliates.`,
      `3.3. Comments reflect the view and opinion of the person who posts such view or opinion.`,
    ],
  },
  {
    id: 4,
    header: 'Information',
    text: [
      `• You agree to grant Beauty Butler an irrevocable right to collect and use any information you provide Us, or we collect from You, for the specific purpose of providing you with our services.`,
      `• You hereby agree and authorise us to verify the information provided by you to us against your information including but not limited to your phone number, date of birth, Identification (I.D) card, or Passport Number, business registration details and contact information, and any other information that will enable us to identify your or your business and comply with the regulatory “Know Your Customer” (KYC) requirements in your country.`,
      `• Beauty Butler reserves the right to request for further information from you pertaining to you or the creation of your Account at any time. Failure to provide such information within the time required by Beauty Butler may result in Beauty Butler declining to accept your request or a delay in the creation of your Account.`,
      `• You consent that we may disclose and or transfer your information to third parties or any other entity we deem necessary to perform our obligations to you under this Agreement.`,
      `• All other provisions regarding the use of your personal information are contained in our Privacy Policy.`,
    ],
  },
  {
    id: 5,
    header: 'Submissions',
    text: [
      `• If you submit to us or post through our Services any business information, testimonial, comment, review, suggestion, or any work of authorship (collectively a “Submission”) - Submissions may be data, text, files, information, usernames, images, graphics, photos, profiles, audio and video clips, links and other content or materials that you display, post, submit, or make available on the Platform - including without limitation, Submissions about any of our products or services, you agree that such Submissions may be used by us in any manner. Please do not make or send any Submission to us that you consider containing confidential or proprietary information. No submission sent to us shall be treated or considered as confidential information.`,
      `• By submitting or sending a Submission to us, you:`,
      `  - Represent and warrant to us that the Submission is original to you, that no other party has any rights thereto, and that any moral rights in such submission have been waived; and`,
      `  - Grant to us a royalty-free, unrestricted, worldwide, perpetual, irrevocable, non-exclusive and fully transferable, assignable and sublicensable right and license to use, reproduce, publish, distribute, display, translate, summarise, modify and adapt such Submission (in whole or in part) and or/to incorporate it in other works in any form, media, or technology now known or later developed, in our sole discretion, with or without your name.`,
    ],
  },
  {
    id: 6,
    header: 'Users’ Representations & Warranties',
    text: [
      `• Representations and warranties are statements and promises made by you to WithSplice, which we rely on as being accurate in our dealings with you. You make the following representations and warranties to us at the time of agreeing to these Terms and every time you use our Services:`,
      `  - You are over the age of 18 (eighteen) years.`,
      `  - You are of sound mind and have the capacity to enter into a legally binding contract.`,
      `  - All personal information that you provide about yourself is accurate and true to the best of your knowledge.`,
      `  - All information that you provide about your business is accurate and true.`,
      `  - All information that you provide about your properties is accurate and true.`,
      `  - You shall not create more than one account or create an account for anyone other than yourself (with the exception of accounts created for corporate organisations).`,
      `  - You are not breaching any Applicable Laws or regulations that are applicable to you or any company, or legal entity.`,
    ],
  },
  {
    id: 7,
    header: 'Payment',
    text: [
      `• For business Users, the Service shall be provided via a flexible, affordable and automated weekly, monthly, quarterly, bi-annually, annually subscription payment arrangement for which each business shall be required to pay the stipulated fees based on your subscription.`,
      `• For other Users, Beauty Butler may process payments for appointments and orders made with businesses onboarded on the Platform. For these payments, WithSplice shall use the payment methods you provide, and payments shall be remitted to business in the applicable currency.`,
      `• All Users shall be required to provide some financial information for our payment service providers. Each User warrants to provide complete and accurate payment information.`,
      `• Payments to Beauty Butler shall be made through any of the stipulated payment gateways provided on the Platform.`,
      `• Payments processed by Beauty Butler shall include any applicable taxes and additional fees including currency conversion costs which shall be borne by the customers.`,
      `• Beauty Butler shall notify you of the applicable price for the Service and reserves the right to adjust its pricing where necessary.`,
      `• By providing your credit card or other payment information accepted by our payment service provider, you are expressly agreeing that we are authorised to charge the relevant fees for your use of the Service, together with any applicable taxes.`,
      `• Beauty Butler utilises a third-party payment processor to link your payment card to the platform. Payment processing and other services related to your use of the platform are subject to the privacy policies, terms, and conditions of the payment processor and your credit card issuer, in addition to these Terms of Service.`,
      `• Beauty Butler strives to ensure the payment services are always available, but cannot guarantee uninterrupted access or guarantee the absence of errors or viruses. WithSplice shall not be responsible for errors or liabilities resulting from errors made by the payment processor or third parties.`,
      `• Businesses may have a Cancellation Policy, which will be disclosed and confirmed upon booking an appointment. If the business has this policy in place, WithSplice may charge your card up to the full appointment cost as determined by the business. If you cancel outside of the time frame specified in the business's policy, you shall not be eligible for a refund unless agreed upon directly with the business.`,
      `• If you disagree with any payment transaction, you can submit such complaint to support@mybeautybutler.com within 30 (thirty) days of the payment transaction (“Dispute Period”).`,
    ],
  },
  {
    id: 8,
    header: 'Intellectual Property',
    text: [
      `• The Service and all rights in our product name, trade names, logos, service marks, slogans, product packaging, its original content, features and functionality are owned by Beauty Butler and its licensors, and they are protected by copyright, trademark, and other laws of the United Kingdom, foreign countries and international conventions. Beauty Butler hereby grants Users a limited, revocable, non-exclusive, non-sublicensable, and non-transferable license to (i) download, view, copy, and print any Beauty Butler Content solely for your personal and non-commercial purposes.`,
      `• You understand that except for the limited rights expressly granted to you, no other right or license to any Beauty Butler intellectual property or the Service is granted and no such right or license shall be implied.`,
      `• By making any User Content available through our Service, you grant to Beauty Butler a non-exclusive, royalty-free, transferable, sublicensable, worldwide right and license to (i) use, copy, modify, create derivative works based upon, distribute, publicly display, publicly perform, and distribute your User Content in connection with operating and providing the Service and Content to you and to other Users for the purposes of performing the Service, including in other media formats and via any media channels. You also grant each User a non-exclusive license to access and use your User Content as permitted through the functionality of the Service and under these Terms.`,
      `• You represent and warrant that: (i) you either own or have the necessary rights to submit the User Content you provide to us, or have permission from the rightful owner to submit User Content; (ii) you have the authority to grant Beauty Butler the rights described in these Terms; and (iii) neither your User Content nor your use of your User Content will infringe, misappropriate, or violate a third party’s intellectual property rights, or rights of publicity or privacy, or result in a breach of contract between you and a third party.`,
    ],
  },
  {
    id: 9,
    header: 'Prohibited Activities',
    text: [
      `• 1.1 You shall not use the Platform for any purpose that is prohibited by these Terms. You are responsible for all of your activity in connection with the Service. Violation of our rules may result in the termination and cancellation of your Account. You acknowledge and agree that we may terminate any Beauty Butler Account at any time for any reason (including, but not limited to, our independent assessment or the receipt of claims or allegations from third parties or authorities).
      2.1 Users shall not utilise the Platform or the Services for any illegal purpose.
      3.1 You are solely responsible for compliance with any and all laws, rules, regulations, and tax obligations that may apply to your use of the Services. In connection with your use of the Platform, you will not and will not assist or enable others to:
      breach or circumvent any applicable laws or regulations, agreements with third-parties, third-party rights, or our Terms;
      use the Platform or any content therein for any commercial or other purposes that are not expressly permitted by these Terms or in a manner that falsely implies endorsement, partnership or otherwise misleads others as to your affiliation with Beauty Butler;
      copy, store or otherwise access or use any information, including personally identifiable information about any other User, contained on the Platform in any way that is inconsistent with Beauty Butler’s Privacy Policy or these Terms or that otherwise violates the privacy rights of Users or third parties;
      use the Platform in connection with the distribution of unsolicited commercial messages ("spam");
      use the Platform with the intention to circumvent any subscription fees or for any other reason;
      request, accept or make any payment for orders outside of the Platform. If you do so, you acknowledge and agree that you: (i) would be in breach of these Terms; (ii) accept all risks and responsibility for such payment, and (iii) hold Beauty Butler harmless from any liability for such payment;
      discriminate against or harass anyone on the basis of race, tribe, origin, religion, gender, physical or mental disability, medical condition, marital status, or age, or otherwise engage in any abusive or disruptive behaviour;
      use, display, mirror or frame the Platform or Collective Content, or any individual element within the Platform, Beauty Butler’s name, any trademark, logo or other proprietary information belonging to Beauty Butler, or the layout and design of any page or form contained on a page in the Platform, without Beauty Butler’s express written consent;
      dilute, tarnish or otherwise harm Beauty Butler’s brand in any way, including through unauthorised use of Collective Content, registering and/or using derivative terms in domain names, trade names, trademarks or other source identifiers, or registering and/or using domains names, trade names, trademarks or other source identifiers that closely imitate or are confusingly similar to Beauty Butler’s domains, trademarks, taglines, promotional campaigns or Collective Content;
      use any robots, spider, crawler, scraper or other automated means or processes to access, collect data or other content from or otherwise interact with the Platform for any purpose;
      avoid, bypass, remove, deactivate, impair, descramble, or otherwise attempt to circumvent any technological measure implemented by Beauty Butler or any of Beauty Butler’s providers or any other third party to protect the Platform;
      attempt to decipher, decompile, disassemble or reverse engineer any of the software used to provide the Platform;
      take any action that damages or adversely affects, or could damage or adversely affect the performance or proper functioning of the Platform;
      violate or infringe anyone else’s rights or otherwise cause harm to anyone.
      4.1 You acknowledge that Beauty Butler has no obligation to monitor the access to or use of the Platform by any User or to review, disable access to, or edit any User Content, but has the right to do so to (i) operate, secure and improve the Platform (including without limitation for fraud prevention, risk assessment, investigation and customer support purposes); (ii) ensure Users’ compliance with these Terms; (iii) comply with applicable law or the order or requirement of a court, law enforcement or other administrative agency or governmental body; (iv) respond to User Content that it determines is harmful or objectionable; or (v) as otherwise set forth in these Terms. Users agree to cooperate with and assist Beauty Butler in good faith, and to provide Beauty Butler with such information and take such actions as may be reasonably requested by Beauty Butler with respect to any investigation undertaken by Beauty Butler or a representative of Beauty Butler regarding the use or abuse of the Platform.`,
    ],
  },
];

const TermsandConditions = () => {
  return (
    <article className="relative bg-white mt-[-30px] p-8 rounded-tl-3xl rounded-tr-3xl">
      <p className="text-gray-700 mb-6 font-euclidlight">
        Welcome to www.mybeautybutler.com, a proprietary website/application of Beauty Butler Limited (“Beauty Butler”, “we”, “us”). 
        By accessing this Platform, you ("User”, “you”, “your”) agree to our terms and conditions below. 
        We understand that legal documents may be lengthy and boring and most often than not you want to skip them, 
        but it is important that you read these terms carefully before using the Platform. 
        By using this Platform, you agree to be legally bound by these terms. 
        If you do not understand any of the terms of this agreement, please contact us at hello@mybeautybutler.com. 
        We’re more than happy to guide you.
      </p>
      {termsAndConditionsData.map((section) => (
        <section key={section.id} aria-labelledby={`section-${section.id}`} className="mb-8">
          <h2
            id={`section-${section.id}`}
            className="text-xl font-semibold mb-4 font-apfelregular text-gray-800"
          >
            {`${section.id}. ${section.header}`}
          </h2>
          {section.text.map((paragraph, index) => (
            <p
              key={index}
              className="text-gray-600 whitespace-pre-line mb-4 leading-relaxed font-euclidlight"
            >
              {paragraph}
            </p>
          ))}
        </section>
      ))}
    </article>
  );
};

export default TermsandConditions;
