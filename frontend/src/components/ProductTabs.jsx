import React, { useState } from "react";

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState("DESCRIPTION");
  const tabs = ["DESCRIPTION", "SHIPPING & RETURNS", "ADDITIONAL INFORMATION"];

  const renderTabContent = () => {
    switch (activeTab) {
      case "DESCRIPTION":
        return (
          <>
            <p className="py-6">
              This midi dress is made with a beautiful chiffon. The wrap
              silhouette and sunburst pleats make for a flattering, flirty fit.
              Feel free to throw this one in the wash — the permanent pleats
              will keep their shape.{" "}
            </p>
            <p className="pb-12">
              The Babaton classic — now in luxe vegan leather that's soft and
              supple. Just like the original, this version has intricate pleats
              that feel beautifully feminine.
            </p>

            <div className="py-6">
              <h1 className="text-2xl font-bold text-[#1f2021]">Sample Unordered List</h1>
              <ul className="list-inside list-disc m-2">
                <li>Vestibulum sit amet lobortis</li>
                <li>Phasellus sagittis tellus nec pharetra tempor</li>
                <li>Etiam suscipit urna at nisl posuere</li>
                <li>Cras fermentum ut quam vitae efficitur</li>
              </ul>
            </div>

            <div className="py-6">
              <h1 className="text-2xl font-bold text-[#1f2021]">Sample Ordered List</h1>
              <ol  className="list-inside list-decimal m-2">
                <li>Vestibulum sit amet lobortis</li>
                <li>Phasellus sagittis tellus nec pharetra tempor</li>
                <li>Etiam suscipit urna at nisl posuere</li>
                <li>Cras fermentum ut quam vitae efficitur</li>
              </ol>
            </div>

            <p>
              Nulla augue orci, consectetur eget nisi ac, facilisis ornare sem.
              Praesent blandit urna in mi viverra feugiat. Vivamus malesuada mi
              ligula, non mollis ex ultricies nec. Pellentesque velit dui,
              rutrum a iaculis sed, finibus sit amet dolor. Phasellus volutpat a
              nisi nec fringilla. Sed id arcu nulla. Mauris scelerisque enim non
              augue pellentesque tristique. Quisque erat ipsum, sodales sed nunc
              ac, congue blandit neque. Proin tempor elementum ullamcorper.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              feugiat sapien at ipsum ullamcorper, nec consequat nisl blandit.
              Aliquam dignissim ipsum eleifend velit interdum tincidunt.
            </p>
          </>
        );
      case "SHIPPING & RETURNS":
        return (
          <>
            <div className="my-8">
              <h1 className="text-[#1f2021] text-2xl font-bold pb-2">Returns Policy</h1>
              <p className="py-4">
                You may return most new, unopened items within 30 days of
                delivery for a full refund. We'll also pay the return shipping
                costs if the return is a result of our error (you received an
                incorrect or defective item, etc.).
              </p>
              <p className="py-4">
                You should expect to receive your refund within four weeks of
                giving your package to the return shipper, however, in many
                cases you will receive a refund more quickly. This time period
                includes the transit time for us to receive your return from the
                shipper (5 to 10 business days), the time it takes us to process
                your return once we receive it (3 to 5 business days), and the
                time it takes your bank to process our refund request (5 to 10
                business days).
              </p>
              <p className="py-4">
                If you need to return an item, simply login to your account,
                view the order using the 'Complete Orders' link under the My
                Account menu and click the Return Item(s) button. We'll notify
                you via e-mail of your refund once we've received and processed
                the returned item.
              </p>
            </div>
            <div className="my-8">
              <h1 className="text-[#1f2021] text-2xl font-bold pb-2">Shipping</h1>
              <p className="py-4">
                We can ship to virtually any address in the world. Note that
                there are restrictions on some products, and some products
                cannot be shipped to international destinations.
              </p>
              <p className="py-4">
                When you place an order, we will estimate shipping and delivery
                dates for you based on the availability of your items and the
                shipping options you choose. Depending on the shipping provider
                you choose, shipping date estimates may appear on the shipping
                quotes page.
              </p>
              <p className="py-4">
                Please also note that the shipping rates for many items we sell
                are weight-based. The weight of any such item can be found on
                its detail page. To reflect the policies of the shipping
                companies we use, all weights will be rounded up to the next
                full pound.
              </p>
            </div>
          </>
        );
      case "ADDITIONAL INFORMATION":
        return (
          <>
            <img src="/sizechart1.webp" className="object-cover mx-auto" />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-screen-xl bg-white flex flex-wrap justify-between mx-auto my-16">
      <div className="max-w-3xl mx-auto flex flex-wrap justify-center gap-6 pb-4">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`text-xl font-extrabold transition-colors ${
              activeTab === tab ? "text-[#dc3545]" : "text-[#1f2021]"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="my-8 space-y-4 text-[#6c757d] text-[0.9rem] leading-relaxed w-full mx-auto">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default ProductTabs;
