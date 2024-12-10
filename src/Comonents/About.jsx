export default function About() {
  return (
    <>
      <div className="bg-white py-10 mt-10">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-6">About SafeRentals</h2>
          <p className="text-gray-700 mb-8">
            SafeRentals is a user-friendly web application designed to address
            the challenges of finding rental housing in Nairobi, Kenya. Our
            platform bridges the gap between landlords and tenants, making it
            easier for landlords to showcase their vacant properties and for
            tenants to discover rental homes that suit their needs. Whether you
            are a student, a professional, or a family looking for a new place
            to call home, SafeRentals is here to simplify the process of finding
            safe, affordable, and convenient rental spaces.
          </p>
          <p className="text-gray-700 mb-8">
            Key features of SafeRentals include advanced search filters,
            interactive property listings, and seamless communication between
            landlords and tenants. By leveraging technology, we aim to make
            house hunting stress-free and efficient for everyone.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="text-center">
              <h3 className="text-4xl font-bold text-gray-800">441</h3>
              <p className="text-gray-600 mt-2">Landlords</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-gray-800">11,300</h3>
              <p className="text-gray-600 mt-2">Rental Houses</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-gray-800">180</h3>
              <p className="text-gray-600 mt-2">Areas Covered</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
