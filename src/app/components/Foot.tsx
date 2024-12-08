import Link from "next/link"

function Foot() {
  return (
    <div>
        <div>
        <footer className="text-blue-500 p-6 m-4 mt-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
     
        <div>
          <h2 className="text-2xl font-bold mb-4">Morent</h2>
          <p className="text-gray-500">
            Morent is committed to providing reliable, affordable, and safe car rental services that empower mobility for everyone.
          </p>
        </div>

   
        <div>
          <h3 className="text-xl font-semibold mb-4">About</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="text-gray-500 hover:text-black">
                Our Story
              </Link>
            </li>
            <li>
              <Link href="/team" className="text-gray-500 hover:text-black">
                Team
              </Link>
            </li>
            <li>
              <Link href="/careers" className="text-gray-500 hover:text-black">
                Careers
              </Link>
            </li>
          </ul>
        </div>

     
        <div>
          <h3 className="text-xl font-semibold mb-4">Community</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/blog" className="text-gray-500 hover:text-black">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/events" className="text-gray-500 hover:text-black">
                Events
              </Link>
            </li>
            <li>
              <Link href="/partners" className="text-gray-500 hover:text-black">
                Partnerships
              </Link>
            </li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-xl font-semibold mb-4">Socials</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="https://facebook.com"
                className="text-gray-500 hover:text-black"
              >
                Facebook
              </Link>
            </li>
            <li>
              <Link
                href="https://twitter.com"
                className="text-gray-500 hover:text-black"
              >
                Twitter
              </Link>
            </li>
            <li>
              <Link
                href="https://instagram.com"
                className="text-gray-500 hover:text-black"
              >
                Instagram
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
        </div>
        <div className="flex justify-center items-center space-x-4 mt-4">
        <p className="text-gray-500 ">2024 Sibghat ullah. All rights reserved</p>
        <p className="text-gray-500 hidden lg:block">Privacy & Policy</p>
        <p className="text-gray-500 hidden lg:block">Terms & Condition</p>
      </div>
    </div>
  )
}

export default Foot