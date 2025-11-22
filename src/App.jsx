import React, { useState, useEffect } from 'react';



import { Menu, X, ChevronRight, Shield, Users, Smartphone, Lock, FileText, CheckCircle, Mail, ExternalLink } from 'lucide-react';

// --- Components ---

const Navbar = ({ currentPage, setPage }) => {

  const [isOpen, setIsOpen] = useState(false);

  return (

    <nav className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex justify-between h-16 items-center">

          <div className="flex items-center cursor-pointer" onClick={() => setPage('home')}>

            <Shield className="h-8 w-8 text-blue-400 mr-2" />

            <span className="font-bold text-xl tracking-tight">Anthroma</span>

          </div>

          

          {/* Desktop Menu */}

          <div className="hidden md:flex space-x-8">

            <button onClick={() => setPage('home')} className={`${currentPage === 'home' ? 'text-blue-400' : 'text-gray-300 hover:text-white'} transition-colors`}>Home</button>

            <button onClick={() => setPage('privacy')} className={`${currentPage === 'privacy' ? 'text-blue-400' : 'text-gray-300 hover:text-white'} transition-colors`}>Privacy Policy</button>

            <button onClick={() => setPage('terms')} className={`${currentPage === 'terms' ? 'text-blue-400' : 'text-gray-300 hover:text-white'} transition-colors`}>Terms of Service</button>

          </div>

          {/* Mobile Menu Button */}

          <div className="md:hidden flex items-center">

            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white p-2">

              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}

            </button>

          </div>

        </div>

      </div>

      {/* Mobile Menu */}

      {isOpen && (

        <div className="md:hidden bg-slate-800 pb-4 px-4">

          <div className="flex flex-col space-y-3 pt-4">

            <button onClick={() => { setPage('home'); setIsOpen(false); }} className="text-left text-gray-300 hover:text-white py-2 border-b border-slate-700">Home</button>

            <button onClick={() => { setPage('privacy'); setIsOpen(false); }} className="text-left text-gray-300 hover:text-white py-2 border-b border-slate-700">Privacy Policy</button>

            <button onClick={() => { setPage('terms'); setIsOpen(false); }} className="text-left text-gray-300 hover:text-white py-2">Terms of Service</button>

          </div>

        </div>

      )}

    </nav>

  );

};

const Footer = ({ setPage }) => (

  <footer className="bg-slate-900 text-slate-400 py-12">

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        <div>

          <div className="flex items-center text-white mb-4">

            <Shield className="h-6 w-6 text-blue-400 mr-2" />

            <span className="font-bold text-lg">Anthroma</span>

          </div>

          <p className="text-sm leading-relaxed">

            Simplifying the immigration journey with transparent, real-time case tracking technology.

          </p>

        </div>

        <div>

          <h3 className="text-white font-semibold mb-4">Legal & Compliance</h3>

          <ul className="space-y-2 text-sm">

            <li><button onClick={() => setPage('privacy')} className="hover:text-blue-400 transition-colors">Privacy Policy</button></li>

            <li><button onClick={() => setPage('terms')} className="hover:text-blue-400 transition-colors">Terms of Service</button></li>

            <li><button onClick={() => setPage('privacy')} className="hover:text-blue-400 transition-colors">Data Deletion Request</button></li>

          </ul>

        </div>

        <div>

          <h3 className="text-white font-semibold mb-4">Contact</h3>

          <ul className="space-y-2 text-sm">

            <li className="flex items-center"><Mail className="h-4 w-4 mr-2" /> support@anthroma.com</li>

            <li>New York, NY</li>

          </ul>

        </div>

      </div>

      <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm">

        &copy; {new Date().getFullYear()} Anthroma LLC. All rights reserved.

      </div>

    </div>

  </footer>

);

// --- Page Views ---

const Home = ({ setPage }) => {

  return (

    <div className="flex flex-col min-h-screen bg-slate-50">

      {/* Hero Section */}

      <section className="bg-white py-20 border-b border-slate-200">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="lg:flex lg:items-center lg:justify-between">

            <div className="lg:w-1/2">

              <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl sm:tracking-tight lg:text-6xl">

                Track your USCIS case <br className="hidden lg:block" />

                <span className="text-blue-600">with confidence.</span>

              </h1>

              <p className="mt-4 text-xl text-slate-500 leading-relaxed">

                Anthroma provides a seamless, transparent, and secure way to monitor your immigration status directly via official USCIS APIs. No more confusion, just clarity.

              </p>

              <div className="mt-8 flex gap-4">

                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-md flex items-center">

                  Download App <Smartphone className="ml-2 h-5 w-5" />

                </button>

                <button onClick={() => setPage('privacy')} className="bg-white text-slate-700 border border-slate-300 px-8 py-3 rounded-lg font-semibold hover:bg-slate-50 transition-all">

                  View Privacy Policy

                </button>

              </div>

            </div>

            <div className="mt-10 lg:mt-0 lg:w-1/2 flex justify-center">

              <div className="relative bg-slate-200 rounded-2xl p-4 w-64 h-auto shadow-2xl border-4 border-white transform rotate-3">

                {/* Abstract Mobile UI Representation */}

                <div className="bg-white rounded-xl overflow-hidden h-full min-h-[400px] flex flex-col">

                    <div className="bg-blue-600 h-16 flex items-center justify-center text-white font-bold">Case Tracker</div>

                    <div className="p-4 space-y-4">

                        <div className="h-24 bg-green-50 rounded-lg border border-green-100 p-3">

                            <div className="text-xs text-green-800 font-bold mb-1">APPROVED</div>

                            <div className="text-sm text-slate-700">Case IOE9238...</div>

                            <div className="text-xs text-slate-400 mt-2">Updated 2 mins ago</div>

                        </div>

                        <div className="h-24 bg-slate-50 rounded-lg border border-slate-100 p-3">

                            <div className="text-xs text-blue-800 font-bold mb-1">PROCESSING</div>

                            <div className="text-sm text-slate-700">Case MSC2190...</div>

                            <div className="text-xs text-slate-400 mt-2">Est. wait: 3 months</div>

                        </div>

                    </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Business Description */}

      <section className="py-16 bg-slate-50">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="lg:text-center mb-12">

            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">About Us</h2>

            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">

              Bridging the Gap in Immigration Tech

            </p>

            <p className="mt-4 max-w-2xl text-xl text-slate-500 lg:mx-auto">

              Anthroma is a technology company dedicated to modernizing the immigration experience.

            </p>

          </div>

          <div className="mt-10">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

              <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">

                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">

                   <CheckCircle className="h-6 w-6 text-blue-600" />

                </div>

                <h3 className="text-lg font-medium text-slate-900">Our Mission</h3>

                <p className="mt-2 text-slate-500 leading-relaxed">

                  To solve the anxiety of uncertainty by providing accurate, timely data visualization for visa applicants.

                </p>

              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">

                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">

                   <Users className="h-6 w-6 text-blue-600" />

                </div>

                <h3 className="text-lg font-medium text-slate-900">Target Audience</h3>

                <p className="mt-2 text-slate-500 leading-relaxed">

                  Immigrants, international students, and visa holders navigating the complex US immigration system.

                </p>

              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">

                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">

                   <Lock className="h-6 w-6 text-blue-600" />

                </div>

                <h3 className="text-lg font-medium text-slate-900">Data Privacy</h3>

                <p className="mt-2 text-slate-500 leading-relaxed">

                   Your privacy is paramount. We employ industry-standard encryption and never sell user data.

                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

       {/* Product Section */}

       <section className="py-16 bg-white border-t border-slate-100">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">

            <div>

               <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Anthroma Case Tracker</h2>

               <p className="text-lg text-slate-500 mb-6 leading-relaxed">

                 Our flagship mobile application connects directly to USCIS public APIs to fetch the latest status of your application. 

               </p>

               <ul className="space-y-4">

                  {[

                    'Real-time push notifications for status changes',

                    'Historical data analysis and prediction',

                    'Secure, local storage of case numbers',

                    'Clean, ad-free interface'

                  ].map((item, i) => (

                    <li key={i} className="flex items-start">

                      <div className="flex-shrink-0">

                        <CheckCircle className="h-6 w-6 text-green-500" />

                      </div>

                      <p className="ml-3 text-base text-slate-600">{item}</p>

                    </li>

                  ))}

               </ul>

               <div className="mt-8 inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium">

                 Current Status: Public Beta

               </div>

            </div>

            <div className="mt-10 lg:mt-0 bg-slate-50 rounded-xl p-8 border border-slate-100">

                {/* Product Mockup Placeholder */}

                <div className="aspect-w-16 aspect-h-9 bg-slate-200 rounded-lg flex items-center justify-center text-slate-400">

                    [App Interface Demo]

                </div>

            </div>

          </div>

        </div>

      </section>

      {/* Team Section */}

      <section className="py-16 bg-slate-50 border-t border-slate-200">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">

            <h2 className="text-3xl font-extrabold text-slate-900">Meet Our Team</h2>

            <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-500">

              A dedicated group of engineers and product thinkers.

            </p>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {[

              { name: 'Roy Luo', role: 'Co-Founder / Engineering' },

              { name: 'Bruce Li', role: 'Co-Founder / Product' },

              { name: 'Lucas Peng', role: 'Lead Developer' },

              { name: 'Harry Wen', role: 'Operations & Strategy' }

            ].map((member) => (

              <div key={member.name} className="bg-white rounded-lg shadow p-6 text-center hover:shadow-lg transition-shadow">

                <div className="w-24 h-24 bg-slate-200 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-slate-400">

                  {member.name.charAt(0)}

                </div>

                <h3 className="text-lg font-medium text-slate-900">{member.name}</h3>

                <p className="text-sm text-blue-600 mb-4">{member.role}</p>

                <div className="flex justify-center space-x-3">

                   <a href="#" className="text-slate-400 hover:text-blue-700">

                     <span className="sr-only">LinkedIn</span>

                     <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>

                   </a>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

    </div>

  );

};

// --- Privacy Policy Component (Strict Compliance with provided image) ---

const PrivacyPolicy = () => {

  return (

    <div className="min-h-screen bg-white py-16">

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate prose-lg">

        <h1 className="text-3xl font-bold text-slate-900 mb-2">Privacy Policy</h1>

        <p className="text-slate-500 mb-8">Effective Date: November 22, 2025</p>

        

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8 text-sm text-blue-800">

          <strong>Note to Users:</strong> We are committed to protecting your privacy. This policy details how Anthroma collects, uses, and protects your information in compliance with strict industry standards.

        </div>

        <section className="mb-10">

          <h2 className="text-xl font-semibold text-slate-900 mb-4">1. Data Collection and Use</h2>

          <p className="text-slate-600 mb-4 leading-relaxed">

            <strong>Types of Data Collected:</strong> We strictly limit data collection to what is necessary for the app's functionality.

          </p>

          <ul className="list-disc pl-5 space-y-2 text-slate-600 mb-4">

            <li><strong>USCIS Case Receipt Numbers:</strong> Collected to query status updates.</li>

            <li><strong>Device Information:</strong> Basic technical data (OS version, device model) for app optimization.</li>

            <li><strong>Usage Data:</strong> Anonymous analytics to improve user experience.</li>

          </ul>

          <p className="text-slate-600 mb-4 leading-relaxed">

            <strong>How Data is Used:</strong>

            <br/>

            We use your case number solely to fetch public status information from USCIS APIs on your behalf. We may use de-identified, aggregated data to calculate average processing times for the community.

          </p>

        </section>

        <section className="mb-10">

          <h2 className="text-xl font-semibold text-slate-900 mb-4">2. Data Sharing and Third Parties</h2>

          <p className="text-slate-600 mb-4 leading-relaxed">

            <strong>We do not sell your data.</strong>

            <br/>

            Anthroma explicitly states that no user data is sold, rented, or traded for profit or other monetary transactions.

          </p>

          <p className="text-slate-600 mb-4 leading-relaxed">

             <strong>Third-Party Disclosure:</strong>

             <br/>

             We prohibit third-party use or disclosure of user information (including de-identified, anonymized, or pseudonymized data) for any reason without your active, explicit consent.

          </p>

          <p className="text-slate-600 leading-relaxed">

            Any third-party service providers we utilize (e.g., cloud hosting) are bound by the terms and conditions of this privacy policy and are strictly prohibited from using your data for their own purposes.

          </p>

        </section>

        <section className="mb-10">

            <h2 className="text-xl font-semibold text-slate-900 mb-4">3. Data Retention and Deletion</h2>

            <p className="text-slate-600 mb-4 leading-relaxed">

                <strong>Retention Policy:</strong> We retain your data only as long as your account is active. If an account becomes dormant for 12 months, personal identifiers are removed.

            </p>

            <div className="bg-slate-100 p-6 rounded-lg border border-slate-200">

                <h3 className="font-semibold text-slate-800 mb-2">How to Delete Your Data</h3>

                <p className="text-slate-600 mb-4">

                    You have the right to request permanent deletion of your data at any time.

                </p>

                <ol className="list-decimal pl-5 space-y-2 text-slate-600">

                    <li>Navigate to "Settings" in the App or email <strong>privacy@anthroma.com</strong>.</li>

                    <li>Submit a "Delete My Account" request.</li>

                    <li><strong>Timeline:</strong> All data associated with your account will be permanently deleted from our servers within <strong>30 days</strong> of your request.</li>

                </ol>

            </div>

        </section>

        <section className="mb-10">

          <h2 className="text-xl font-semibold text-slate-900 mb-4">4. Business Transfers and Ownership Changes</h2>

          <p className="text-slate-600 mb-4 leading-relaxed">

            In the event that Anthroma is acquired, merges with another entity, or sells its assets:

          </p>

          <ul className="list-disc pl-5 space-y-2 text-slate-600">

              <li>We will <strong>notify</strong> all users of the change in ownership via email and an in-app notification.</li>

              <li>We will require the new entity to honor this Privacy Policy.</li>

              <li>If the new entity's policies differ, we will obtain your <strong>active consent</strong> before transferring your data. If you do not consent, you will be given the option to delete your account and data prior to the transfer.</li>

          </ul>

        </section>

        <section className="mb-10">

          <h2 className="text-xl font-semibold text-slate-900 mb-4">5. Health and Sensitive Information</h2>

          <p className="text-slate-600 leading-relaxed">

            Anthroma does <strong>not</strong> collect health, genetic, biometric, or medical information.

          </p>

        </section>

        <section className="mb-10">

            <h2 className="text-xl font-semibold text-slate-900 mb-4">6. Policy Changes</h2>

            <p className="text-slate-600 leading-relaxed">

                We will notify you of any material changes to this policy. For significant changes, we will request your active consent and provide a plain-language summary of what has changed before you continue using the service.

            </p>

        </section>

      </div>

    </div>

  );

};

// --- Terms of Service Component ---

const TermsOfService = () => {

  return (

    <div className="min-h-screen bg-white py-16">

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate prose-lg">

        <h1 className="text-3xl font-bold text-slate-900 mb-2">Terms of Service</h1>

        <p className="text-slate-500 mb-8">Last Updated: November 22, 2025</p>

        <section className="mb-10">

          <h2 className="text-xl font-semibold text-slate-900 mb-4">1. Acceptance of Terms</h2>

          <p className="text-slate-600 leading-relaxed">

            By accessing or using the Anthroma website and Case Tracker application ("Service"), you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the Service.

          </p>

        </section>

        <section className="mb-10">

          <h2 className="text-xl font-semibold text-slate-900 mb-4">2. Use of Service</h2>

          <p className="text-slate-600 leading-relaxed">

            Anthroma grants you a limited, non-exclusive, non-transferable, revocable license to use our Service for personal, non-commercial purposes, specifically for tracking your own immigration case status.

          </p>

          <p className="mt-4 text-slate-600 font-medium">

              You explicitly understand that Anthroma is a private entity and is not affiliated with the United States Citizenship and Immigration Services (USCIS) or any government agency.

          </p>

        </section>

        <section className="mb-10">

          <h2 className="text-xl font-semibold text-slate-900 mb-4">3. User Responsibilities</h2>

          <ul className="list-disc pl-5 space-y-2 text-slate-600">

              <li>You are responsible for maintaining the confidentiality of your account information.</li>

              <li>You agree not to use the Service for any unlawful purpose.</li>

              <li>You agree not to attempt to reverse engineer or disrupt the integrity of the Service.</li>

          </ul>

        </section>

        <section className="mb-10">

          <h2 className="text-xl font-semibold text-slate-900 mb-4">4. Termination</h2>

          <p className="text-slate-600 leading-relaxed">

             We may terminate or suspend your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Service will immediately cease.

          </p>

        </section>

        <section className="mb-10">

          <h2 className="text-xl font-semibold text-slate-900 mb-4">5. Limitation of Liability</h2>

          <p className="text-slate-600 leading-relaxed">

             In no event shall Anthroma, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.

          </p>

        </section>

        <section className="mb-10">

          <h2 className="text-xl font-semibold text-slate-900 mb-4">6. Contact Us</h2>

          <p className="text-slate-600 leading-relaxed">

             If you have any questions about these Terms, please contact us at <strong>legal@anthroma.com</strong>.

          </p>

        </section>

      </div>

    </div>

  );

};

// --- Main App Component ---

const App = () => {

  const [currentPage, setPage] = useState('home');

  // Scroll to top on page change

  useEffect(() => {

    window.scrollTo(0, 0);

  }, [currentPage]);

  return (

    <div className="font-sans antialiased text-slate-900">

      <Navbar currentPage={currentPage} setPage={setPage} />

      

      <main>

        {currentPage === 'home' && <Home setPage={setPage} />}

        {currentPage === 'privacy' && <PrivacyPolicy />}

        {currentPage === 'terms' && <TermsOfService />}

      </main>

      <Footer setPage={setPage} />

    </div>

  );

};

export default App;

