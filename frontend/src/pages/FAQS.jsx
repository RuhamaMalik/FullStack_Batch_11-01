import { useState } from 'react';

const sections = [
  {
    title: 'What does shopify do?',
    content: 'Shopify is a complete ecommerce solution that allows you to set up an online store to sell your goods. It lets you organize your products, customize your storefront, accept credit card payments, track and respond to orders — all with a few clicks of the mouse.'
  },
  {
    title: 'How do I install Shopify?',
    content: 'Shopify is web based ecommerce software. This means there’s no installation required and it works with all operating systems (including Windows and MacOS). Vendor host Shopify so you don’t have to worry about installing, upgrading or maintaining any software or web servers.'
  },
  {
    title: 'Which languages are supported?',
    content: 'The ecommerce storefront, checkout, email communications, etc, of a shop can be in any language. The administrative interface of a shop is in English.'
  },
  {
    title: 'I cannot upload theme to my Shopify store. What is the problems?',
   content: 'Please make sure that you follow below steps: 1/ Download the package from themeforest.net (the file is in zip format)2/ Extract the file you\'ve just downloaded.3/ Find the file in the unzipped folder "themes": velatheme_{{version}}_package_v1.x.x.zip, then you just need to upload this file to your Shopify store.'

  },
   {
    title: 'What I have to do when I need your support?',
   content:   'title: How to contact support?',
  content: `To save your time and reach our support quickly, please follow below steps:\n
1/ Create a staff account for us (with Themes permission and Settings permission) http://docs.shopify.com/manual/settings/account/staff-members\n
2/ Capture screenshot or video for the issue you get.\n
3/ Specify which template and version you are using.\n
4/ Describe clearly how to reproduce the issue.\n
5/ Send all information (staff account, screenshot, video, template name and version, description of the issues, link) to velatheme@gmail.com`

  },
   {
    title: 'How do I pay for an order?',
   content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident , sunt in culpa qui officia deserunt mollit anim id est laborum. '

  },
   {
    title: `I don't have an account`,
   content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident , sunt in culpa qui officia deserunt mollit anim id est laborum. '

  },
  {
    title: 'Where can I find tutorials and guides?',
   content: `You can find detailed tutorials and guides for your ecommerce website at the Shopify Help Center.`

  },
  {
    title: 'How do I reset my password?',
   content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident , sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. '

  },
  {
    title: `How do I cancel my membership?`,
   content: 'Funt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'

  },
  {
    title: `Why you may see the No access page?`,
   content: 'Funt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'

  }
];

export default function PoliciesPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">FAQS</h1>
      <div className="space-y-4">
        {sections.map((section, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={index} className="border rounded-lg shadow-sm ">
              <button
                onClick={() => toggle(index)}
                className={`w-full text-left px-4 py-3 font-semibold flex justify-between items-center transition-colors duration-300 
                  ${isOpen ? 'bg-black text-white' : 'bg-white text-gray-800'}
                `}
              >
                {section.title}
                <span className="text-xl">{isOpen ? '-' : '+'}</span>
              </button>

              <div
                className={`transition-all duration-800 ease-in-out overflow-hidden
                  ${isOpen ? 'max-h-96 opacity-100 py-4 px-4 bg-gray-100' : 'max-h-0 opacity-0'}
                `}
              >
                <p className="text-gray-700">{section.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
