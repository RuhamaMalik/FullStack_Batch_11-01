import { useState } from 'react';


const Footer = () => {
  const [openSection, setOpenSection] = useState(null); // 'company', 'explore', 'location'

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const isSectionOpen = (section) => openSection === section;
  return (
    <>
      <section className="bg-red-600 text-white py-4 -mb-6 mx-4 rounded-lg shadow-lg  relative z-10">

  <div className="max-w-7xl mx-auto px-4">
    <h3 className="text-2xl font-semibold mb-2">Subscribe to our newsletter</h3>

    <form
      className="flex flex-col sm:flex-row gap-3"
      action="https://velatheme.us13.list-manage.com/subscribe/post-json?u=4d8c80acdd82f3c48d27467f6&amp;id=d52e6e4f14&amp;c=?"
      method="post"
      target="_blank"
    >
      <input
        type="email"
        name="EMAIL"
        required
        placeholder="Your email"
        className="bg-white p-2 rounded text-black flex-1"
      />
      <button type="submit" className="bg-white text-red-600 px-4 py-2 rounded font-semibold">
        Subscribe
      </button>
    </form>

    <ul className="flex gap-3 mt-4">
      <li><a href="https://www.facebook.com/shopify"><i className="fab fa-facebook text-white text-lg"></i></a></li>
      <li><a href="https://twitter.com/shopify"><i className="fab fa-twitter text-white text-lg"></i></a></li>
      <li><a href="https://www.pinterest.com/shopify"><i className="fab fa-pinterest text-white text-lg"></i></a></li>
      <li><a href="https://instagram.com/shopify"><i className="fab fa-instagram text-white text-lg"></i></a></li>
      <li><a href="https://www.youtube.com/user/shopify"><i className="fab fa-youtube text-white text-lg"></i></a></li>
    </ul>
  </div>
</section>

 
  <footer className="bg-black text-white">
    <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <div className={`border lg:border-0 p-4 rounded-md border border-white shadow-md transition-all duration-300 ${
        isSectionOpen('ccontact') ? 'border border-white shadow-md' : ''
      }`}>
        <h4 className="text-xl font-semibold mb-4 cursor-pointer
         sm:cursor-default"
        onClick={()=>{toggleSection('contact')}}>Contact information</h4>
        <ul className={`rounded-lg transition-all ${isSectionOpen('contact') ? 'block' : 'hidden' 
        } sm:block`}>
          <p>Call Us 24/7 Free</p>
        <p className="text-2xl font-bold my-2"><a href="tel:1 001 234 5678">1 001 234 5678</a></p>
        <p className="mb-2"><a href="mailto:support@domain.com">support@domain.com</a></p>
        <p>60, 29th Street, San Francisco, CA</p>
        <div className="flex gap-2 mt-4">
          <a href="#">
            <img src="https://cdn.shopify.com/s/files/1/0282/2858/3562/files/google-play.png" alt="Google Play" className="h-10" /></a>
          <a href="#">
            <img src="https://cdn.shopify.com/s/files/1/0282/2858/3562/files/app-store.png" alt="App Store" 
            className="h-10" /></a>
           
        </div>
         </ul>
      </div>

     <div className={`border lg:border-0 p-4 rounded-md border border-white shadow-md transition-all duration-300 ${
        isSectionOpen('company') ? 'border border-white shadow-md' : ''
      }`}>
        <h4 className="text-xl font-semibold mb-4 cursor-pointer
        sm:cursor-default"
        onClick={()=>{toggleSection('company')}}>Company</h4>
        <ul className={`rounded-lg transition-all ${isSectionOpen('company') ? 'block' : 'hidden' 
        } sm:block`}>
          <li><a href="#" className="hover:underline">About Us</a></li>
          <li><a href="#" className="hover:underline">Shop Products</a></li>
          <li><a href="#" className="hover:underline">My Cart</a></li>
          <li><a href="#" className="hover:underline">Checkout</a></li>
          <li><a href="#" className="hover:underline">Contact Us</a></li>
          <li><a href="#" className="hover:underline">Order Tracking</a></li>
        </ul>
      </div>

     <div className={`border lg:border-0 p-4 rounded-md border border-white 
     shadow-md transition-all duration-100 ${
        isSectionOpen('explore') ? 'border border-white shadow-md' : ''
      }`}>
        <h4 className="text-xl font-semibold mb-4 cursor-pointer
          sm:cursor-default "
        onClick={()=>{toggleSection('explore')}}>Explore</h4>
        <ul className={`rounded-lg transition-all ${isSectionOpen('explore') ? 'block' : 'hidden' 
        } sm:block`}>
          <li><a href="#" className="hover:underline">Gift a Smile</a></li>
          <li><a href="#" className="hover:underline">Creybit Cares</a></li>
          <li><a href="#" className="hover:underline">Size Guide</a></li>
          <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          <li><a href="#" className="hover:underline">Refund Policy</a></li>
          <li><a href="#" className="hover:underline">Terms of Service</a></li>
        </ul>
      </div>

     <div className={`border lg:border-0 p-4 rounded-md border border-white 
     shadow-md transition-all duration-300 ${
        isSectionOpen('location') ? 'border border-white shadow-md' : ''
      }`}>
        <h4 className="text-xl font-semibold mb-4 cursor-pointer
          sm:cursor-default"
        onClick={()=>{toggleSection('location')}}>Our location</h4>
        <a href="https://goo.gl/maps/9nRR47Z2qstkfTyP8" target="_blank" >
          <img src="https://vela-develop.myshopify.com/cdn/shop/files/footer-map.png?v=1613731231" alt="map" 
         className={`rounded-lg transition-all duration-300 ${
          isSectionOpen('location') ?'block' : 'hidden'
        } sm:block`} />
        </a>
      </div>
    </div>

  
    



  <div class="border-t-4 border-gray-500 bg-black  w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        Copyright &copy; 2020 Velatheme. All Rights Reserved
    </span>
     <span className="sr-only">Payment methods</span>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
                  <svg className="icon" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" role="img" width="38" height="24" aria-labelledby="pi-visa"><title id="pi-visa">Visa</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"/><path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"/><path d="M28.3 10.1H28c-.4 1-.7 1.5-1 3h1.9c-.3-1.5-.3-2.2-.6-3zm2.9 5.9h-1.7c-.1 0-.1 0-.2-.1l-.2-.9-.1-.2h-2.4c-.1 0-.2 0-.2.2l-.3.9c0 .1-.1.1-.1.1h-2.1l.2-.5L27 8.7c0-.5.3-.7.8-.7h1.5c.1 0 .2 0 .2.2l1.4 6.5c.1.4.2.7.2 1.1.1.1.1.1.1.2zm-13.4-.3l.4-1.8c.1 0 .2.1.2.1.7.3 1.4.5 2.1.4.2 0 .5-.1.7-.2.5-.2.5-.7.1-1.1-.2-.2-.5-.3-.8-.5-.4-.2-.8-.4-1.1-.7-1.2-1-.8-2.4-.1-3.1.6-.4.9-.8 1.7-.8 1.2 0 2.5 0 3.1.2h.1c-.1.6-.2 1.1-.4 1.7-.5-.2-1-.4-1.5-.4-.3 0-.6 0-.9.1-.2 0-.3.1-.4.2-.2.2-.2.5 0 .7l.5.4c.4.2.8.4 1.1.6.5.3 1 .8 1.1 1.4.2.9-.1 1.7-.9 2.3-.5.4-.7.6-1.4.6-1.4 0-2.5.1-3.4-.2-.1.2-.1.2-.2.1zm-3.5.3c.1-.7.1-.7.2-1 .5-2.2 1-4.5 1.4-6.7.1-.2.1-.3.3-.3H18c-.2 1.2-.4 2.1-.7 3.2-.3 1.5-.6 3-1 4.5 0 .2-.1.2-.3.2M5 8.2c0-.1.2-.2.3-.2h3.4c.5 0 .9.3 1 .8l.9 4.4c0 .1 0 .1.1.2 0-.1.1-.1.1-.1l2.1-5.1c-.1-.1 0-.2.1-.2h2.1c0 .1 0 .1-.1.2l-3.1 7.3c-.1.2-.1.3-.2.4-.1.1-.3 0-.5 0H9.7c-.1 0-.2 0-.2-.2L7.9 9.5c-.2-.2-.5-.5-.9-.6-.6-.3-1.7-.5-1.9-.5L5 8.2z" fill="#142688"/></svg>
                </li><li>
                  <svg className="icon" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" role="img" width="38" height="24" aria-labelledby="pi-master"><title id="pi-master">Mastercard</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"/><path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"/><circle fill="#EB001B" cx="15" cy="12" r="7"/><circle fill="#F79E1B" cx="23" cy="12" r="7"/><path fill="#FF5F00" d="M22 12c0-2.4-1.2-4.5-3-5.7-1.8 1.3-3 3.4-3 5.7s1.2 4.5 3 5.7c1.8-1.2 3-3.3 3-5.7z"/></svg>
                </li><li>
                  <svg className="icon" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="pi-american_express" viewBox="0 0 38 24" width="38" height="24"><title id="pi-american_express">American Express</title><path fill="#000" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3Z" opacity=".07"/><path fill="#006FCF" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32Z"/><path fill="#FFF" d="M22.012 19.936v-8.421L37 11.528v2.326l-1.732 1.852L37 17.573v2.375h-2.766l-1.47-1.622-1.46 1.628-9.292-.02Z"/><path fill="#006FCF" d="M23.013 19.012v-6.57h5.572v1.513h-3.768v1.028h3.678v1.488h-3.678v1.01h3.768v1.531h-5.572Z"/><path fill="#006FCF" d="m28.557 19.012 3.083-3.289-3.083-3.282h2.386l1.884 2.083 1.89-2.082H37v.051l-3.017 3.23L37 18.92v.093h-2.307l-1.917-2.103-1.898 2.104h-2.321Z"/><path fill="#FFF" d="M22.71 4.04h3.614l1.269 2.881V4.04h4.46l.77 2.159.771-2.159H37v8.421H19l3.71-8.421Z"/><path fill="#006FCF" d="m23.395 4.955-2.916 6.566h2l.55-1.315h2.98l.55 1.315h2.05l-2.904-6.566h-2.31Zm.25 3.777.875-2.09.873 2.09h-1.748Z"/><path fill="#006FCF" d="M28.581 11.52V4.953l2.811.01L32.84 9l1.456-4.046H37v6.565l-1.74.016v-4.51l-1.644 4.494h-1.59L30.35 7.01v4.51h-1.768Z"/></svg>

                </li><li>
                  <svg className="icon" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" width="38" height="24" role="img" aria-labelledby="pi-paypal"><title id="pi-paypal">PayPal</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"/><path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"/><path fill="#003087" d="M23.9 8.3c.2-1 0-1.7-.6-2.3-.6-.7-1.7-1-3.1-1h-4.1c-.3 0-.5.2-.6.5L14 15.6c0 .2.1.4.3.4H17l.4-3.4 1.8-2.2 4.7-2.1z"/><path fill="#3086C8" d="M23.9 8.3l-.2.2c-.5 2.8-2.2 3.8-4.6 3.8H18c-.3 0-.5.2-.6.5l-.6 3.9-.2 1c0 .2.1.4.3.4H19c.3 0 .5-.2.5-.4v-.1l.4-2.4v-.1c0-.2.3-.4.5-.4h.3c2.1 0 3.7-.8 4.1-3.2.2-1 .1-1.8-.4-2.4-.1-.5-.3-.7-.5-.8z"/><path fill="#012169" d="M23.3 8.1c-.1-.1-.2-.1-.3-.1-.1 0-.2 0-.3-.1-.3-.1-.7-.1-1.1-.1h-3c-.1 0-.2 0-.2.1-.2.1-.3.2-.3.4l-.7 4.4v.1c0-.3.3-.5.6-.5h1.3c2.5 0 4.1-1 4.6-3.8v-.2c-.1-.1-.3-.2-.5-.2h-.1z"/></svg>
                </li><li>
                  <svg className="icon" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" role="img" width="38" height="24" aria-labelledby="pi-diners_club"><title id="pi-diners_club">Diners Club</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"/><path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"/><path d="M12 12v3.7c0 .3-.2.3-.5.2-1.9-.8-3-3.3-2.3-5.4.4-1.1 1.2-2 2.3-2.4.4-.2.5-.1.5.2V12zm2 0V8.3c0-.3 0-.3.3-.2 2.1.8 3.2 3.3 2.4 5.4-.4 1.1-1.2 2-2.3 2.4-.4.2-.4.1-.4-.2V12zm7.2-7H13c3.8 0 6.8 3.1 6.8 7s-3 7-6.8 7h8.2c3.8 0 6.8-3.1 6.8-7s-3-7-6.8-7z" fill="#3086C8"/></svg>
                </li>

        
        <li>
                  <svg className="icon" viewBox="0 0 38 24" width="38" height="24" role="img" aria-labelledby="pi-discover" fill="none" xmlns="http://www.w3.org/2000/svg"><title id="pi-discover">Discover</title><path fill="#000" opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"/><path d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32z" fill="#fff"/><path d="M3.57 7.16H2v5.5h1.57c.83 0 1.43-.2 1.96-.63.63-.52 1-1.3 1-2.11-.01-1.63-1.22-2.76-2.96-2.76zm1.26 4.14c-.34.3-.77.44-1.47.44h-.29V8.1h.29c.69 0 1.11.12 1.47.44.37.33.59.84.59 1.37 0 .53-.22 1.06-.59 1.39zm2.19-4.14h1.07v5.5H7.02v-5.5zm3.69 2.11c-.64-.24-.83-.4-.83-.69 0-.35.34-.61.8-.61.32 0 .59.13.86.45l.56-.73c-.46-.4-1.01-.61-1.62-.61-.97 0-1.72.68-1.72 1.58 0 .76.35 1.15 1.35 1.51.42.15.63.25.74.31.21.14.32.34.32.57 0 .45-.35.78-.83.78-.51 0-.92-.26-1.17-.73l-.69.67c.49.73 1.09 1.05 1.9 1.05 1.11 0 1.9-.74 1.9-1.81.02-.89-.35-1.29-1.57-1.74zm1.92.65c0 1.62 1.27 2.87 2.9 2.87.46 0 .86-.09 1.34-.32v-1.26c-.43.43-.81.6-1.29.6-1.08 0-1.85-.78-1.85-1.9 0-1.06.79-1.89 1.8-1.89.51 0 .9.18 1.34.62V7.38c-.47-.24-.86-.34-1.32-.34-1.61 0-2.92 1.28-2.92 2.88zm12.76.94l-1.47-3.7h-1.17l2.33 5.64h.58l2.37-5.64h-1.16l-1.48 3.7zm3.13 1.8h3.04v-.93h-1.97v-1.48h1.9v-.93h-1.9V8.1h1.97v-.94h-3.04v5.5zm7.29-3.87c0-1.03-.71-1.62-1.95-1.62h-1.59v5.5h1.07v-2.21h.14l1.48 2.21h1.32l-1.73-2.32c.81-.17 1.26-.72 1.26-1.56zm-2.16.91h-.31V8.03h.33c.67 0 1.03.28 1.03.82 0 .55-.36.85-1.05.85z" fill="#231F20"/><path d="M20.16 12.86a2.931 2.931 0 100-5.862 2.931 2.931 0 000 5.862z" fill="url(#pi-paint0_linear)"/><path opacity=".65" d="M20.16 12.86a2.931 2.931 0 100-5.862 2.931 2.931 0 000 5.862z" fill="url(#pi-paint1_linear)"/><path d="M36.57 7.506c0-.1-.07-.15-.18-.15h-.16v.48h.12v-.19l.14.19h.14l-.16-.2c.06-.01.1-.06.1-.13zm-.2.07h-.02v-.13h.02c.06 0 .09.02.09.06 0 .05-.03.07-.09.07z" fill="#231F20"/><path d="M36.41 7.176c-.23 0-.42.19-.42.42 0 .23.19.42.42.42.23 0 .42-.19.42-.42 0-.23-.19-.42-.42-.42zm0 .77c-.18 0-.34-.15-.34-.35 0-.19.15-.35.34-.35.18 0 .33.16.33.35 0 .19-.15.35-.33.35z" fill="#231F20"/><path d="M37 12.984S27.09 19.873 8.976 23h26.023a2 2 0 002-1.984l.024-3.02L37 12.985z" fill="#F48120"/><defs><linearGradient id="pi-paint0_linear" x1="21.657" y1="12.275" x2="19.632" y2="9.104" gradientUnits="userSpaceOnUse"><stop stop-color="#F89F20"/><stop offset=".25" stop-color="#F79A20"/><stop offset=".533" stop-color="#F68D20"/><stop offset=".62" stop-color="#F58720"/><stop offset=".723" stop-color="#F48120"/><stop offset="1" stop-color="#F37521"/></linearGradient><linearGradient id="pi-paint1_linear" x1="21.338" y1="12.232" x2="18.378" y2="6.446" gradientUnits="userSpaceOnUse"><stop stop-color="#F58720"/><stop offset=".359" stop-color="#E16F27"/><stop offset=".703" stop-color="#D4602C"/><stop offset=".982" stop-color="#D05B2E"/></linearGradient></defs></svg>
                </li>
    </ul>
    </div>

  </footer>
  
    </>
  )
}

export default Footer



