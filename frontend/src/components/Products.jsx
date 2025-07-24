import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import image11 from "../assets/11.jpg"

const Products = () => {
  const [field, setField] = useState("")
  const [filterData, setFilterData] = useState([])
  const productData = [
    {
      productName: "Gascon Watch 2021",
      description: "Lorem ipsum dolor sit amet...",
      price: "$150",
      image: "https://vela-develop.myshopify.com/cdn/shop/products/Image-8_590x.jpg?v=1606185928",
      discount: "20% OFF",
    },
    {
      productName: "Ana Wallet On A Strap",
      description: "Lorem ipsum dolor sit amet...",
      price: "$39.99",
      image: "https://vela-develop.myshopify.com/cdn/shop/products/Image-2_590x.jpg?v=1606185672",
      discount: null,
    },
    {
      productName: "Ageratum T-shirt",
      description: "Lorem ipsum dolor sit amet...",
      price: "$69",
      image: "https://vela-develop.myshopify.com/cdn/shop/products/Image-1_590x.jpg?v=1606185603",
      discount: "10% OFF",
    },
    {
      productName: "Cara Cig. All Black",
      description: "Lorem ipsum dolor sit amet...",
      price: "$99.99",
      image: "https://vela-develop.myshopify.com/cdn/shop/products/Image-4_590x.jpg?v=1606185762",
    },
    {
      productName: "Valmere T-Shirt",
      description: "Lorem ipsum dolor sit amet...",
      price: "$40",
      image: "https://vela-develop.myshopify.com/cdn/shop/products/Image-29_590x.jpg?v=1606186689",
      discount: "16% OFF",
    },
    {
      productName: "Bitsie Pumps",
      description: "Lorem ipsum dolor sit amet...",
      price: "$84",
      image: "https://vela-develop.myshopify.com/cdn/shop/products/product-image-1_590x.jpg?v=1589557906",
      discount: "16% OFF",
    },
    {
      productName: "V Pumps",
      description: "Lorem ipsum dolor sit amet...",
      price: "$34.90",
      image: "https://vela-develop.myshopify.com/cdn/shop/products/product-image-1_590x.jpg?v=1589557906",
      discount: "16% OFF",
    },
    {
      productName: "Testani Skirt dsfdfdf",
      description: "Lorem ipsum dolor sit amet...",
      price: "$75",
      image: image11,
      discount: "16% OFF",
    },

    {
      productName: "Powlowski - Keebler",
      description: "Devolved well-modulated toolset",
      image: "https://cdn.pixabay.com/photo/2019/11/22/08/01/shoes-4644338_1280.png",
      price: "$73.48"
    },
    {
      productName: "Yost and Sons",
      description: "Organized bifurcated ability",
      image: "https://cdn.pixabay.com/photo/2024/08/26/06/08/ai-generated-8998296_1280.jpg",
      price: "$23.49"
    },
    {
      productName: "Schinner, Gleason and Dietrich",
      description: "Open-source tertiary system engine",
      image: "https://cdn.pixabay.com/photo/2013/07/13/12/14/hat-159463_1280.png",
      price: "$56.78"
    },
    {
      productName: "Roberts, Gutmann and Pfeffer",
      description: "Optional demand-driven extranet",
      image: "https://cdn.pixabay.com/photo/2023/05/03/22/43/tennis-7968714_1280.png",
      price: "$53.34"
    },
    {
      productName: "Wiza, Dietrich and Ratke",
      description: "Assimilated context-sensitive knowledge user",
      image: "https://cdn.pixabay.com/photo/2023/08/14/10/53/ai-generated-8189650_1280.jpg",
      price: "$49.53"
    },
    {
      productName: "Ward - Hessel",
      description: "Reverse-engineered static software",
      image: "https://cdn.pixabay.com/photo/2022/09/14/09/41/iphone-7453863_1280.png",
      price: "$80.17"
    },
    {
      productName: "Reichel Group",
      description: "Synchronised demand-driven functionalities",
      image: "https://cdn.pixabay.com/photo/2016/03/31/22/48/bracelet-1297219_1280.png",
      price: "$22.52"
    },
    {
      productName: "Lueilwitz and Sons",
      description: "Visionary zero tolerance knowledge base",
      image: "https://cdn.pixabay.com/photo/2023/09/14/18/21/ai-generated-8253479_1280.jpg",
      price: "$25.22"
    },
    {
      productName: "Balistreri - Swaniawski",
      description: "Optimized logistical matrices",
      image: "https://cdn.pixabay.com/photo/2017/04/03/15/52/mobile-phone-2198770_1280.png",
      price: "$13.40"
    },
    {
      productName: "Armstrong - Braun",
      description: "Public-key coherent initiative",
      image: "https://cdn.pixabay.com/photo/2018/05/12/09/17/ring-with-pearls-3392725_1280.png",
      price: "$42.54"
    },
    {
      productName: "Kessler, Block and Ryan",
      description: "Public-key fault-tolerant internet solution",
      image: "https://cdn.pixabay.com/photo/2023/03/16/02/50/dress-shoes-7855820_1280.jfif",
      price: "$0.74"
    },
    {
      productName: "Shields - Thiel",
      description: "Universal composite flexibility",
      image: "https://cdn.pixabay.com/photo/2016/09/15/07/05/ring-1671094_1280.jpg",
      price: "$75.69"
    },
    {
      productName: "Hauck, Wolf and Jast",
      description: "Horizontal background challenge",
      image: "https://cdn.pixabay.com/photo/2016/09/06/14/12/ring-1649210_1280.jpg",
      price: "$93.43"
    },
    {
      productName: "Frami Group",
      description: "Streamlined system-worthy throughput",
      image: "https://cdn.pixabay.com/photo/2018/05/21/04/35/ring-3417372_1280.png",
      price: "$34.38"
    },
    {
      productName: "Beier - Purdy",
      description: "Open-source logistical customer loyalty",
      image: "https://cdn.pixabay.com/photo/2020/09/18/07/27/bracelet-5581077_1280.png",
      price: "$10.10"
    }

  ];

  const itemsPerPage = 12;
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = field
    ? filterData.slice(itemOffset, endOffset)
    : productData.slice(itemOffset, endOffset);
  const pageCount = field
    ? Math.ceil(filterData.length / itemsPerPage)
    : Math.ceil(productData.length / itemsPerPage);


  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % (
      field ? filterData.length : productData.length
    );
    setItemOffset(newOffset);
  };

  const searchHandle = (value) => {
    const lowerValue = value.toLowerCase();
    const searchData = productData.filter((item) =>
      item.productName.toLowerCase().includes(lowerValue)
    );
    setFilterData(searchData);
    setItemOffset(0);

  };
  const handleClear = () => {
    setField("")
    setFilterData([])

  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">

      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-gray-800 text-center" >Our Products</h2>
        <div className="flex items-center max-w-md mx-auto mb-10">
          <input
            type="text"
            placeholder="Search Your Desired Item"
            value={field}
            onChange={(e) => {
              setField(e.target.value);
              searchHandle(e.target.value);
            }}
            className="flex-1 h-10 rounded-l-2xl p-4 border border-gray-300 focus:outline-none"
          />
          {field && (
            <button
              onClick={handleClear}
              className="h-10 px-4 rounded-r-2xl bg-gray-200 hover:bg-gray-300 text-gray-600"
            >
              x
            </button>
          )}
        </div>
        {
          field ? (
            filterData.length === 0 ? (
              <h1>No data found</h1>
            ) : (
              filterData.map((index, item) => (
                <div key={index}> {item.productName}</div>
              ))
            )
          ) : (
            productData.map((index, item) => (
              <div key={index}> {item.productName}</div>
            ))
          )
        }
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {currentItems.map((item, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {item.discount && (
                <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                  {item.discount}
                </span>
              )}

              <img
                src={item.image}
                alt={item.productName}
                className="w-full h-48 object-cover rounded-t-xl"
              />

              <div className="p-5">
                <h1 className="font-semibold text-lg text-gray-800 pb-4">{item.productName}</h1>
                <h3 className="text-sm text-gray-600">{item.description}</h3>
                <div className='flex justify-between pt-7'>
                  <button className='bg-black text-white w-30 h-10 rounded-xl'>Add to Cart</button>
                  <p className="text-gray-800 font-bold text-xl mt-2">{item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-10 flex justify-center cursor-pointer">
          <ReactPaginate
            breakLabel="..."
            nextLabel="→"
            onPageChange={handlePageClick}
            pageRangeDisplayed={2}
            marginPagesDisplayed={1}
            pageCount={pageCount}
            previousLabel="←"
            containerClassName="flex items-center space-x-2"
            pageClassName="px-3 py-1 border border-gray-300 rounded-md cursor-pointer"
            activeClassName="bg-black text-white"
            previousClassName="px-3 py-1 border border-gray-300 rounded-md"
            nextClassName="px-3 py-1 border border-gray-300 rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
