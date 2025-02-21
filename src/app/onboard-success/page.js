// src/app/onboard-success/page.js
import Image from 'next/image';
import Link from 'next/link';

export default function OnboardSuccess() {
  const managers = [
    'Reply manager',
    'Inbox manager',
    'Campaign manager',
    'Lead manager',
    'Client manager',
    'Onboarding manager'
  ];

  return (
    <div className="min-h-screen bg-[#EEF1FF] p-2">
      <div className="max-w-xl mx-auto bg-white rounded-2xl p-8 mt-8">
        {/* Logo */}
        <div className="flex items-center gap-2 justify-center mb-12">
          <div className="w-6 h-6 bg-blue-600 rounded-lg"></div>
          <span className="text-base font-medium text-gray-900">Leadshike</span>
        </div>

        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 relative">
            <Image
              src="/img/blue-tick.png"
              alt="Success"
              width={64}
              height={64}
              priority
            />
          </div>
        </div>

        {/* Success Message */}
        <div className="text-center mb-4">
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">
            You just hired AI workforces.
          </h1>
          <p className="text-xl font-medium text-gray-900 mb-6">
            Connect
          </p>
        </div>

        {/* Managers List */}
        <div className="flex flex-col items-center mb-8">
          {managers.map((manager, index) => (
            <p key={index} className="text-gray-600 leading-7">
              {manager}
            </p>
          ))}
        </div>

        {/* Let's Start Button */}
        <Link href="/campaign-setup">
        <button
          type="button"
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          Let's Start!
        </button>
        </Link>
      </div>

      {/* Floating Icon */}
      <div className="fixed bottom-6 right-6 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
        J
      </div>
    </div>
  );
}