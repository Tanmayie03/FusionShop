const Footer = () => {
  return (
    <div className="p-8 bg-gray-800">
      <div className="grid justify-around grid-cols-2 pb-8 lg:grid-cols-6">
        <div className="flex flex-col">
          <h1 className="py-2 text-gray-400">ABOUT</h1>
          <ul className="text-sm text-white cursor-pointer">
            <li className="hover:text-gray-300">Contact Us</li>
            <li className="hover:text-gray-300">About Us</li>
            <li className="hover:text-gray-300">Careers</li>
            <li className="hover:text-gray-300">FusionShop Store</li>
            <li className="hover:text-gray-300">FusionShop Wholesale</li>
            <li className="hover:text-gray-300">Information</li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h1 className="py-2 text-gray-400">HELP</h1>
          <ul className="text-sm text-white cursor-pointer">
            <li className="hover:text-gray-300">Payments</li>
            <li className="hover:text-gray-300">Shipping</li>
            <li className="hover:text-gray-300">Cancellation</li>
            <li className="hover:text-gray-300">Return</li>
            <li className="hover:text-gray-300">FAQ</li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h1 className="py-2 text-gray-400">CONSUMER POLICY</h1>
          <ul className="text-sm text-white cursor-pointer">
            <li className="hover:text-gray-300">Cancellation</li>
            <li className="hover:text-gray-300">Terms to use</li>
            <li className="hover:text-gray-300">Security</li>
            <li className="hover:text-gray-300">Privacy</li>
            <li className="hover:text-gray-300">Sitemap</li>
            <li className="hover:text-gray-300">Return</li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h1 className="py-2 text-gray-400">SOCIAL</h1>
          <ul className="text-sm text-white cursor-pointer">
            <li className="hover:text-gray-300">Facebook</li>
            <li className="hover:text-gray-300">YouTube</li>
            <li className="hover:text-gray-300">Twitter</li>
          </ul>
        </div>
        <div className="flex flex-col border-gray-600 lg:pl-8 lg:border-l">
          <h1 className="py-2 text-gray-400">MAIL US</h1>
          <ul className="text-sm text-white cursor-pointer">
            <li className="hover:text-gray-300">
              FusionShop Internet Private Limited,
            </li>
            <li className="hover:text-gray-300">
              Buildings Alyssa, Begonia &amp;
            </li>
            <li className="hover:text-gray-300">Clove Embassy Tech Village,</li>
            <li className="hover:text-gray-300">Outer Ring Road,</li>
            <li className="hover:text-gray-300">Devarabeesanahalli Village,</li>
            <li className="hover:text-gray-300">Bengaluru, India</li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h1 className="py-2 text-gray-400">ADDRESS</h1>
          <ul className="text-sm text-white cursor-pointer hover:text-gray-200">
            <li>FusionShop Internet Private Limited,</li>
            <li>Buildings Alyssa, Begonia &amp;</li>
            <li>Clove Embassy Tech Village,</li>
            <li>Outer Ring Road,</li>
            <li>Devarabeesanahalli Village,</li>
            <li>Bengaluru, India</li>
          </ul>
        </div>
      </div>
      <div className="grid items-center justify-around grid-cols-2 pt-4 text-white border-t border-gray-600 cursor-pointer lg:grid-cols-3">
        <img src="./images/fusionshop-white.png" className="w-12" />

        <p className="hidden md:block lg:w-80">
          @2024 FusionShop Ltd. All rights reserved
        </p>
        <p className="text-sm">Terms of Use | Cookie & Privacy Policy</p>
      </div>
    </div>
  );
};

export default Footer;
