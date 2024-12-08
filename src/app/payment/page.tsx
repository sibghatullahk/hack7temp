import Customnav from "../components/Customnav";
import Foot from "../components/Foot";

export default function PaymentForm() {
  return (

    <div>
        <Customnav/>
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg flex flex-col lg:flex-row">
        {/* Left Section: Payment Form */}
        <div className="flex-1 p-6 space-y-6">
          {/* Billing Information */}
          <div>
            <h2 className="text-lg font-semibold text-blue-500">Billing Information</h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-2 border rounded-lg"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-2 border rounded-lg"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full p-2 border rounded-lg"
              />
              <input
                type="text"
                placeholder="Address"
                className="w-full p-2 border rounded-lg"
              />
            </div>
          </div>

{/* Rental Information */}
<div>
  <h2 className="text-lg font-semibold text-blue-500">Rental Information</h2>
  <div className="space-y-4">
    <div>
      <label htmlFor="pickup-location" className="block text-sm font-medium">
        Pick-up Location
      </label>
      <input
        id="pickup-location"
        type="text"
        name="pickupLocation"
        title="Enter pick-up location"
        className="w-full p-2 border rounded-lg"
      />
    </div>
    <div>
      <label htmlFor="pickup-date" className="block text-sm font-medium">
        Pick-up Date
      </label>
      <input
        id="pickup-date"
        type="date"
        name="pickupDate"
        title="Select pick-up date"
        className="w-full p-2 border rounded-lg"
      />
    </div>
    <div>
      <label htmlFor="dropoff-date" className="block text-sm font-medium">
        Drop-off Date
      </label>
      <input
        id="dropoff-date"
        type="date"
        name="dropoffDate"
        title="Select drop-off date"
        className="w-full p-2 border rounded-lg"
      />
    </div>
  </div>
</div>


          {/* Payment Method */}
          <div>
            <h2 className="text-lg font-semibold text-blue-500">Payment Method</h2>
            <div className="space-y-4">
              <label className="flex items-center space-x-2">
                <input type="radio" name="payment" className="form-radio" />
                <span>Credit Card</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="radio" name="payment" className="form-radio" />
                <span>Debit Card</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="radio" name="payment" className="form-radio" />
                <span>PayPal</span>
              </label>
              <div className="space-y-2">
                <input
                  type="text"
                  placeholder="Card Number"
                  className="w-full p-2 border rounded-lg"
                />
                <div className="flex space-x-4">
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="w-1/2 p-2 border rounded-lg"
                  />
                  <input
                    type="text"
                    placeholder="CVV"
                    className="w-1/2 p-2 border rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Confirmation and Pay Now */}
          <button className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg hover:bg-blue-600">
            Pay Now
          </button>
        </div>

        {/* Right Section: Rental Summary */}
        <div className="bg-gray-50 p-6 lg:w-1/3">
          <h2 className="text-lg font-semibold text-blue-500 mb-4">Rental Summary</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Car:</span>
              <span>Toyota Corolla</span>
            </div>
            <div className="flex justify-between">
              <span>Pick-up Date:</span>
              <span>Dec 10, 2024</span>
            </div>
            <div className="flex justify-between">
              <span>Return Date:</span>
              <span>Dec 15, 2024</span>
            </div>
            <div className="flex justify-between">
              <span>Price per Day:</span>
              <span>$50</span>
            </div>
            <hr />
            <div className="flex justify-between font-semibold">
              <span>Total:</span>
              <span>$250</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Foot></Foot>
    </div>
  );
}
