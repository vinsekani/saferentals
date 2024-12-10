export default function Privacy() {
  return (
    <>
      <div className="bg-gray-50 py-10">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-center text-2xl font-bold mb-6">
            Privacy & Policy
          </h2>
          <div className="text-gray-800 space-y-4">
            <p>
              SafeRentals is committed to protecting the privacy and security of
              all users. We ensure that personal data, including contact
              information and property details, is handled with the utmost care.
              Our privacy policy outlines how we collect, use, and store user
              data:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                <strong>Data Collection:</strong> SafeRentals collects only the
                necessary information required to provide our services, such as
                email addresses, property details, and search preferences.
              </li>
              <li>
                <strong>Data Usage:</strong> User data is used solely to
                facilitate interactions between landlords and tenants and to
                improve the platform's features.
              </li>
              <li>
                <strong>Data Security:</strong> All data is stored securely
                using advanced encryption methods and is never shared with third
                parties without user consent.
              </li>
              <li>
                <strong>Transparency:</strong> Users have full control over
                their data and can update or delete their information at any
                time.
              </li>
            </ul>
            <p>
              By using SafeRentals, users agree to our terms of service and
              privacy policy, which are accessible on the platform. We encourage
              users to review these policies to understand their rights and
              responsibilities.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
