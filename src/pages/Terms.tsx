import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { FC } from "react"

const Terms: FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="flex flex-col items-center justify-center py-24 sm:py-32">
        <div className="max-w-4xl w-full p-4">
          <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
          <p className="mb-4">
            Hedit is a desktop hosts file editor developed and owned by FVM Tec. ("FVM Tec", "we", "us", or "our"). By downloading, installing, or using Hedit ("Software"), you ("user", "you", or "your") agree to these Terms of Service ("Terms"). Please read them carefully before using Hedit.
          </p>
          <p className="mb-4">
            If you do not agree to these Terms, you must not download, install, or use this Software.
          </p>
          <h2 className="text-2xl font-bold mb-2">License</h2>
          <p className="mb-4">
            Subject to your compliance with these Terms and the license referenced below, we grant you a limited, non-exclusive, non-transferable, revocable license to download, install, and use Hedit for your personal or internal business purposes. This license does not grant you any ownership rights to the Software.
          </p>
          <h2 className="text-2xl font-bold mb-2">License Restrictions</h2>
          <p className="mb-4">
            Hedit is distributed under an open-source license, and your use of the Software must comply with the terms of the license specified at <a href="https://github.com/valtlfelipe/hedit/blob/master/LICENSE" className="underline hover:no-underline">https://github.com/valtlfelipe/hedit/blob/master/LICENSE</a>. Specifically, you agree not to:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Use Hedit in violation of the terms of the license</li>
            <li>Remove or obscure any copyright, trademark, or other proprietary notices included in the Software</li>
          </ul>
          <h2 className="text-2xl font-bold mb-2">Ownership and Intellectual Property</h2>
          <p className="mb-4">
            Hedit, including all intellectual property rights, is and remains the sole property of FVM Tec.. All rights not expressly granted to you under these Terms are reserved by FVM Tec..
          </p>
          <p className="mb-4">
            By using Hedit, you grant FVM Tec. permission to use your company name and logo on the Hedit website and related marketing materials for the purpose of identifying you as a customer.
          </p>
          <h2 className="text-2xl font-bold mb-2">Updates and Support</h2>
          <p className="mb-4">
            We may, from time to time, release updates, bug fixes, or improvements to Hedit ("Updates"). You agree that Updates may be installed automatically. We are not obligated to provide technical support but may choose to do so at our discretion.
          </p>
          <h2 className="text-2xl font-bold mb-2">Privacy and Data Collection</h2>
          <p className="mb-4">
            Hedit is designed to be privacy friendly and does not transmit any personal data to FVM Tec.. However, we may collect minimal telemetry or licensing data during activation or updates. For more details, please review our Privacy Policy.
          </p>
          <h2 className="text-2xl font-bold mb-2">Disclaimer of Warranties</h2>
          <p className="mb-4">
            Hedit is provided "as is" without warranties of any kind, either express or implied. To the fullest extent permitted by law, we disclaim all warranties, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not guarantee that Hedit will meet your requirements, operate uninterrupted, or be error-free.
          </p>
          <h2 className="text-2xl font-bold mb-2">Limitation of Liability</h2>
          <p className="mb-4">
            To the fullest extent permitted by law, FVM Tec. will not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or business opportunities, arising from or related to your use of Hedit. Our total liability under these Terms is limited to the amount you paid for Hedit in the 12 months preceding the claim.
          </p>
          <h2 className="text-2xl font-bold mb-2">Termination</h2>
          <p className="mb-4">
            These Terms are effective until terminated by either party. You may terminate these Terms by uninstalling and ceasing all use of Hedit. We may terminate your license at any time if you violate these Terms. Upon termination, you must delete all copies of Hedit in your possession.
          </p>
          <h2 className="text-2xl font-bold mb-2">Governing Law</h2>
          <p className="mb-4">
            These Terms are governed by the federal laws of Brazil applicable therein, without regard to its conflict of law principles. Any disputes arising out of or related to these Terms will be resolved exclusively in the courts located in Brazil.
          </p>
          <h2 className="text-2xl font-bold mb-2">Changes to These Terms</h2>
          <p className="mb-4">
            We may update these Terms from time to time. The most current version will be available on our website. By continuing to use Hedit after changes to the Terms become effective, you agree to be bound by the updated Terms.
          </p>
          <h2 className="text-2xl font-bold mb-2">Contact Information</h2>
          <p className="mb-4">
            If you have any questions about these Terms, please contact us at: hello@hedit.app
          </p>
          <hr className="my-4" />
          <p className="mb-4">
            These Terms were last updated on 15 August 2025.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Terms
