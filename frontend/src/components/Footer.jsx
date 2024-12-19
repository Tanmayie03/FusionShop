const Footer = () => {
  return (
    <div className="p-8 bg-slate-900">
      <div className="grid justify-around grid-cols-2 pb-8 lg:grid-cols-6">
        <div className="flex flex-col">
          <h1 className="py-2 text-gray-400">ABOUT</h1>
          <ul className="text-sm text-white">
            <li className="hover:text-slate-300">Contact Us</li>
            <li className="hover:text-slate-300">About Us</li>
            <li className="hover:text-slate-300">Careers</li>
            <li className="hover:text-slate-300">Cartify Store</li>
            <li className="hover:text-slate-300">Cartify Wholesale</li>
            <li className="hover:text-slate-300">Information</li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h1 className="py-2 text-gray-400">HELP</h1>
          <ul className="text-sm text-white">
            <li className="hover:text-slate-300">Paymets</li>
            <li className="hover:text-slate-300">Shipping</li>
            <li className="hover:text-slate-300">Cancellation</li>
            <li className="hover:text-slate-300">Return</li>
            <li className="hover:text-slate-300">FAQ</li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h1 className="py-2 text-gray-400">CONSUMER POLICY</h1>
          <ul className="text-sm text-white">
            <li className="hover:text-slate-300">Cancellation</li>
            <li className="hover:text-slate-300">Terms to use</li>
            <li className="hover:text-slate-300">Security</li>
            <li className="hover:text-slate-300">Privacy</li>
            <li className="hover:text-slate-300">Sitemap</li>
            <li className="hover:text-slate-300">Return</li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h1 className="py-2 text-gray-400">SOCIAL</h1>
          <ul className="text-sm text-white">
            <li className="hover:text-slate-300">Facebook</li>
            <li className="hover:text-slate-300">YouTube</li>
            <li className="hover:text-slate-300">Twitter</li>
          </ul>
        </div>
        <div className="flex flex-col border-gray-600 lg:pl-8 lg:border-l">
          <h1 className="py-2 text-gray-400">MAIL US</h1>
          <ul className="text-sm text-white">
            <li className="hover:text-gray-300">
              Cartify Internet Private Limited,
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
          <ul className="text-sm text-white hover:text-gray-200">
            <li>Cartify Internet Private Limited,</li>
            <li>Buildings Alyssa, Begonia &amp;</li>
            <li>Clove Embassy Tech Village,</li>
            <li>Outer Ring Road,</li>
            <li>Devarabeesanahalli Village,</li>
            <li>Bengaluru, India</li>
          </ul>
        </div>
      </div>
      <div className="grid items-center justify-around grid-cols-2 pt-4 text-white border-t border-gray-600 lg:grid-cols-3">
        <img src="./images/cartify-white.png" className="w-12" />

        <p className="hidden md:block lg:w-80">
          @2024 Cartify Ltd. All rights reserved
        </p>
        <p className="text-sm">Terms of Use | Cookie & Privacy Policy</p>
      </div>
    </div>
  );
};

export default Footer;
