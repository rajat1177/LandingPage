import React from 'react'

export const Footer = () => {
  return (
    <div>
        <footer className="bg-gray-800 text-white">
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-evenly gap-10  ">
        {/* Navigation Links */}
        <div className="mb-10">
          <h2 className="text-lg font-semibold text-red-600 mb-4">Quick Links</h2>
          <ul>
            <li className="">
              <a href="#" className="text-gray-400 hover:text-red-600">
                Home
              </a>
            </li>
            <li className="">
              <a href="#" className="text-gray-400 hover:text-red-600">
                About Us
              </a>
            </li>
            <li className="">
              <a href="#" className="text-gray-400 hover:text-red-600">
                Services
              </a>
            </li>
            <li className="">
              <a href="#" className="text-gray-400 hover:text-red-600">
                Contact
              </a>
            </li>
          </ul>
        </div>
        {/* Contact Information */}
        <div className="">
          <h2 className="text-lg font-semibold text-red-600 mb-4">Contact Us</h2>
          <p className="text-gray-400">1234 Street Name</p>
          <p className="text-gray-400">City, State, 12345</p>
          <p className="text-gray-400">
            Email:{" "}
            <a href="mailto:info@example.com" className="hover:text-red-600">
              info@example.com
            </a>
          </p>
          <p className="text-gray-400">
            Phone:{" "}
            <a href="tel:+1234567890" className="hover:text-red-600">
              +1 234 567 890
            </a>
          </p>
        </div>
        {/* Social Media Icons */}
        <div className="">
          <h2 className="text-lg font-semibold text-red-600 mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-red-600">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M24 4.56c-.89.39-1.83.65-2.83.76a4.92 4.92 0 0 0 2.16-2.71c-.95.57-2 .98-3.12 1.2a4.92 4.92 0 0 0-8.39 4.48A13.94 13.94 0 0 1 1.64 3.16a4.92 4.92 0 0 0 1.52 6.57 4.89 4.89 0 0 1-2.23-.61v.06a4.92 4.92 0 0 0 3.95 4.82 4.9 4.9 0 0 1-2.22.08 4.93 4.93 0 0 0 4.59 3.42 9.86 9.86 0 0 1-6.11 2.1c-.4 0-.79-.02-1.17-.07a13.93 13.93 0 0 0 7.54 2.21c9.05 0 14-7.5 14-14 0-.21 0-.42-.02-.63A10.02 10.02 0 0 0 24 4.56z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-red-600">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.96 3.66 9.07 8.44 9.95.62.11.85-.27.85-.6 0-.3-.01-1.09-.02-2.14-3.43.75-4.15-1.65-4.15-1.65-.56-1.42-1.36-1.8-1.36-1.8-1.11-.76.08-.75.08-.75 1.23.09 1.88 1.26 1.88 1.26 1.09 1.87 2.86 1.33 3.55 1.02.11-.79.42-1.33.76-1.64-2.74-.31-5.63-1.37-5.63-6.09 0-1.35.48-2.46 1.26-3.33-.13-.31-.55-1.56.12-3.25 0 0 1.03-.33 3.38 1.27.98-.27 2.03-.4 3.08-.4 1.05 0 2.1.14 3.08.4 2.35-1.6 3.38-1.27 3.38-1.27.68 1.69.26 2.94.13 3.25.78.87 1.26 1.98 1.26 3.33 0 4.74-2.9 5.77-5.66 6.08.43.37.82 1.11.82 2.24 0 1.62-.01 2.93-.01 3.33 0 .33.23.72.85.6 4.78-.88 8.44-4.99 8.44-9.95 0-5.5-4.46-9.96-9.96-9.96z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-red-600">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22.54 6.42c-.8.36-1.66.6-2.56.71a4.57 4.57 0 0 0 2-2.52 9.11 9.11 0 0 1-2.88 1.1 4.53 4.53 0 0 0-7.72 4.13 12.84 12.84 0 0 1-9.32-4.72 4.53 4.53 0 0 0 1.4 6.04 4.49 4.49 0 0 1-2.05-.57v.06c0 2.18 1.55 4.01 3.6 4.42a4.56 4.56 0 0 1-2.04.08 4.53 4.53 0 0 0 4.22 3.13A9.07 9.07 0 0 1 2 19.54 12.78 12.78 0 0 0 9.28 21c7.54 0 11.67-6.25 11.67-11.67 0-.18-.01-.36-.02-.53a8.38 8.38 0 0 0 2.05-2.14l-.02-.01z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="pt-2 border-t border-gray-700  text-center">
        <p className="text-gray-400">© 2024 Your Company. All rights reserved.</p>
      </div>
    </div>
  </footer>
  </div>
  )
}

