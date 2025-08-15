import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { FC } from "react"

const Privacy: FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="flex flex-col items-center justify-center py-24 sm:py-32">
        <div className="max-w-4xl w-full p-4">
          <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
          <p className="mb-4">
            FVM Tec. ("FVM Tec", "we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect your information when you use Hedit, our desktop app, and when you visit our website.
          </p>
          <p className="mb-4">
            By using Hedit or visiting our website, you agree to the terms of this Privacy Policy. If you do not agree, please do not use the Software or our website.
          </p>
          <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
          <h3 className="text-1xl font-bold mb-2">Desktop Application</h3>
          <p className="mb-4">
            The Hedit desktop application is designed to be privacy friendly. Hosts files, and all other data remain on your device.
          </p>
          <p className="mb-4">
            Some usage information such as license status, number of launches, app version, and operating system are sent to the FVM Tec. systems. This information is used to provide update functionality and display relevant messages.
          </p>
          <h3 className="text-1xl font-bold mb-2">Website</h3>
          <p className="mb-4">
            The Hedit website may collect the following information:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Usage statistics (e.g., pages visited, features used)</li>
            <li>Browser and device information</li>
            <li>Country code, derived from IP address</li>
            <li>Referral sources</li>
          </ul>
          <p className="mb-4">
            This website data helps us improve online services and user experience.
          </p>
          <h2 className="text-2xl font-bold mb-4">How We Use the Information</h2>
          <h3 className="text-1xl font-bold mb-2">Desktop Application</h3>
          <p className="mb-4">
            We use desktop app data to:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Validate user licenses</li>
            <li>Identify and address technical issues</li>
            <li>Provide updates and relevant messages</li>
          </ul>
          <h3 className="text-1xl font-bold mb-2">Website</h3>
          <p className="mb-4">
            We use website analytics data to:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Understand how visitors interact with our website</li>
            <li>Improve website performance and user experience</li>
            <li>Identify and address technical issues</li>
            <li>Optimize our content and marketing efforts</li>
          </ul>
          <h2 className="text-2xl font-bold mb-4">How We Protect Your Information</h2>
          <p className="mb-4">
            We take the following measures to protect any data we collect:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Any transmitted data is encrypted using industry-standard methods.</li>
            <li>Only authorized personnel have access to collected data.</li>
            <li>Website analytics data is stored securely in a database owned by Hedit.</li>
          </ul>
          <p className="mb-4">
            We do not sell, rent, or share your data with third parties.
          </p>
          <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
          <p className="mb-4">
            For website analytics data, you may have certain rights depending on your location:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Right to access information we have about you</li>
            <li>Right to request deletion of your data</li>
            <li>Right to opt-out of certain data collection</li>
          </ul>
          <p className="mb-4">
            To exercise these rights, please contact us using the information below.
          </p>
          <h2 className="text-2xl font-bold mb-4">Changes to This Policy</h2>
          <p className="mb-4">
            We may update this Privacy Policy from time to time. The latest version will always be available on our website. If significant changes are made, we will provide notice on our website.
          </p>
          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
          <p className="mb-4">
            If you have any questions or concerns about this Privacy Policy, please contact us at: hello@hedit.app
          </p>
          <p className="mb-4">
            By continuing to use Hedit, you acknowledge that you have read and understood this Privacy Policy and agree to its terms.
          </p>
          <hr className="my-4" />
          <p className="mb-4">
            This policy was last updated on 15 August 2025.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Privacy
