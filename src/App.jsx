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
  const privacyHTML = `
    <style>
      .legal-content { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
      .legal-content h1 { font-size: 26px; color: #000; margin: 20px 0; }
      .legal-content h2 { font-size: 19px; color: #000; margin: 18px 0 12px 0; }
      .legal-content h3 { font-size: 17px; color: #000; margin: 16px 0 10px 0; }
      .legal-content p { margin: 12px 0; color: #595959; }
      .legal-content ul, .legal-content ol { margin: 12px 0; padding-left: 30px; }
      .legal-content li { margin: 8px 0; color: #595959; }
      .legal-content a { color: #3030F1; text-decoration: underline; }
      .legal-content strong { color: #000; }
    </style>
    <div class="legal-content">
      <strong>
      
       </strong>
       <strong>Last updated 
       </strong>
       <br>
       <br>
       <br>
       This Privacy Notice
       for 
       
       ("<strong>we</strong>," "<strong>us</strong>," or
       "<strong>our</strong>"
       ), describes how and why we might access, collect, store,
       use, and/or share ("<strong>process</strong>") your personal information when you use our services (
       "<strong>Services</strong>"), including when you:
      
       <ul>
       <li>Visit our
       website at 
      
       </li>
       </ul>
      
       <ul>
       <li>Download and
       use our mobile application
       (
      
       </li>
       </ul>
      
       </li>
       </ul>
      
       <ul>
       <li>Engage with
       us in other related ways, including any sales, marketing, or events
       
       </li>
       </ul>
       <strong>Questions or concerns? </strong>Reading this Privacy
       Notice will help you understand your privacy rights and choices. We are responsible for making
       decisions about how your personal information is processed. If you do not agree with our
       policies and practices, please do not use our Services. If
       you still have any questions or concerns, please contact us at support@anthroma.com.
       
       <br>
       <br>
       <strong>
       <h2>SUMMARY OF KEY POINTS</h2>
       </strong>
       <strong><em>This summary provides key points from our Privacy Notice,
       but you can find out more details about any of these topics by clicking the link following
       each key point or by using our </em></strong><a
       href="#toc"><strong><em>table of contents</em></strong></a><strong><em> below to find the section you
       are looking for.</em></strong>
       <br>
       <strong>What
       personal information do we process?</strong> When you visit, use, or navigate our Services, we
       may process personal information depending on how you interact with us and the Services, the choices
       you make, and the products and features you use. Learn more about <a href="#personalinfo">personal
       information you disclose to us</a>.
       
       <br>
       <strong>Do we
       process any sensitive personal information? </strong>Some of the information may be considered
       "special" or "sensitive" in certain jurisdictions, for example your racial or ethnic origins, sexual orientation, and
       religious beliefs. We may process sensitive personal information
       when necessary with your consent or as otherwise permitted by applicable law. Learn more
       about <a href="#sensitiveinfo">sensitive
       information we process</a>.
      
       <br>
       <strong>Do we
       collect any information from third parties?</strong>
       We do not collect any information from third parties.
       
       <br>
       <strong>How do
       we process your information?</strong> We process your information to provide, improve, and
       administer our Services, communicate with you, for security and fraud prevention, and to comply with
       law. We may also process your information for other purposes with your consent. We process your
       information only when we have a valid legal reason to do so. Learn more about <a href="#infouse">how we process your information</a>.
       <br>
       <strong>In
       what situations and with which parties do we share personal
       information?</strong> We may share information in specific situations and with specific third parties. Learn more about <a href="#whoshare">when and with whom we share your personal
       information</a>.
       <br>
       <strong>How do
       we keep your information safe?</strong> We have adequate 
       organizational and technical processes and procedures
       in place to protect your personal information. However, no electronic transmission over the internet
       or information storage technology can be guaranteed to be 100% secure, so we cannot promise or
       guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security
       and improperly collect, access, steal, or modify your information. Learn more about <a href="#infosafe">how we keep your information safe</a>.
      
       <br>
       <strong>What
       are your rights?</strong> Depending on where you are located geographically, the applicable
       privacy law may mean you have certain rights regarding your personal information. Learn more
       about <a href="#privacyrights">your privacy
       rights</a>.
       <br>
       <strong>How do
       you exercise your rights?</strong> The easiest way to exercise your rights is by <a
       href="https://app.termly.io/dsar/da8eb17d-2a96-4aa6-9917-d978f59d49e0" rel="noopener noreferrer">data subject access request</a>
       , or by contacting us. We will consider and act upon any request
       in accordance with applicable data protection laws.
       
       <br>
       Want to learn
       more about what we do with any information we collect? <a
       href="#toc">Review the Privacy Notice in full</a>.
       <br>
       <br>
       <strong>
       <h2>TABLE OF CONTENTS</h2>
       </strong>   
       <a
       href="#infocollect">1. WHAT INFORMATION DO WE
       COLLECT?</a>
       <a href="#infouse">2. HOW DO WE PROCESS YOUR INFORMATION?</a>
       <a href="#whoshare">3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL
       INFORMATION?</a>
       </a>
      
       <a
       href="#inforetain">4. HOW LONG DO WE KEEP YOUR
       INFORMATION?</a>
      
       <a href="#infosafe">5. HOW DO WE KEEP YOUR INFORMATION SAFE?</a>
      
       <a
       href="#infominors">6. DO WE COLLECT INFORMATION FROM
       MINORS?</a>
      
       <a href="#privacyrights">7. WHAT ARE YOUR PRIVACY
       RIGHTS?</a>
       <a href="#DNT">8. CONTROLS FOR DO-NOT-TRACK FEATURES</a>
       <a href="#uslaws">9. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY
       RIGHTS?</a>
      
       <a
       href="#policyupdates">10. DO WE MAKE UPDATES TO THIS
       NOTICE?</a>
       <a href="#contact">11. HOW CAN YOU CONTACT US ABOUT THIS
       NOTICE?</a>
       <a href="#request">12. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM
       YOU?</a>
       <br>
       <br>
       <strong>
       <h2>1. WHAT INFORMATION DO WE COLLECT?</h2>
       </strong><strong>
       <h3>Personal information you disclose to us</h3>
       </strong><strong><em>In
       Short:</em></strong><strong><em> </em></strong><em>We collect personal
       information that you provide to
       us.</em>
       <br>
       We collect
       personal information that you voluntarily provide to us when you 
       
       express an interest in obtaining information
       about us or our products and Services, when you participate in activities on the Services, or
       otherwise when you contact us.
       <br>
      
       <strong>Sensitive Information.</strong>
       When necessary, with your consent or as otherwise permitted by
       applicable law, we process the following categories of sensitive information:
       
       <ul>
       <li>
       
       </li>
       </ul>
      
       <strong>Application Data.</strong> If you use our application(s), we also
       may collect the following information if you choose to provide us with access or permission:</li>
       </ul>
      
       </li>
       </ul>
      
       <ul>
       <li><em>Mobile Device Data.</em> We automatically collect
       device information (such as your mobile device ID, model, and manufacturer), operating
       system, version information and system configuration information, device and application
       identification numbers, browser type and version, hardware model Internet service
       provider and/or mobile carrier, and Internet Protocol (IP) address (or proxy server). If
       you are using our application(s), we may also collect information about the phone
       network associated with your mobile device, your mobile device’s operating system or
       platform, the type of mobile device you use, your mobile device’s unique device ID, and
       information about the features of our application(s) you accessed.</li>
       </ul>
      
       <ul>
       <li><em>Push Notifications.</em> We may request to send you
       push notifications regarding your account or certain features of the application(s). If
       you wish to opt out from receiving these types of communications, you may turn them off
       in your device's settings.
       </li>
       </ul>
       This
       information is primarily needed to maintain the security and operation of our
       application(s), for troubleshooting, and for our internal analytics and reporting
       purposes.
       <br>
      
       All
       personal information that you provide to us must be true, complete, and accurate, and
       you must notify us of any changes to such personal information.
      
       <br>
       <strong>
       <h2>2. HOW DO WE PROCESS YOUR INFORMATION?</h2>
       </strong><strong><em>In Short: </em></strong><em>We
       process your information to provide, improve, and administer our
       Services, communicate with you, for security and fraud prevention, and
       to comply with law. We may also
       process your information for other purposes with your
       consent.</em>
       <br>
       <strong>We process your personal information for a variety
       of reasons, depending on how you interact with our Services, including:</strong>
       
       </li>
       </ul>
      
       </li>
       </ul>
      
       </li>
       </ul>
      
       </li>
       </ul>
      
       </li>
       </ul>
      
       </li>
       </ul>
      
       </li>
       </ul>
      
       <ul>
       <li><strong>To fulfill and
       manage your orders. </strong>We may process your
       information to 
       fulfill
       and manage your orders, payments, returns, and exchanges
       made through the Services.
      
       </li>
       </ul>
      
       </li>
       </ul>
       <p>
      
       </li>
       </ul>
       <p>
      
       </li>
       </ul>
       <p>
      
       </li>
       </ul>
       <p>
      
       </li>
       </ul>
       
       </li>
       </ul>
       
       </li>
       </ul>
       
       </li>
       </ul>
      
       </li>
       </ul>
      
       </li>
       </ul>
      
       </li>
       </ul>
      
       </li>
       </ul>
      
       </li>
       </ul>
      
       </li>
       </ul>
      
       </li>
       </ul>
      
       </li>
       </ul>
      
       </li>
       </ul>
      
       </li>
       </ul>
      
       </li>
       </ul>
      
       </li>
       </ul>
      
       <br>
      
       <strong>
       <h2>3.
       WHEN
       AND
       WITH
       WHOM
       DO
       WE
       SHARE
       YOUR
       PERSONAL
       INFORMATION?
       </h2>
       </strong><strong><em>In
       Short:</em></strong><em> We
       may
       share
       information
       in
       specific
       situations
       described
       in
       this
       section
       and/or
       with
       the
       following
       
       third
       parties.</em>
      
       may
       need
       to
       share
       your
       personal
       information
       in
       the
       following
       situations:
       
       <ul>
       <li>
       <strong>Business
       Transfers.</strong>
       We
       may
       share
       or
       transfer
       your
       information
       in
       connection
       with,
       or
       during
       negotiations
       of,
       any
       merger,
       sale
       of
       company
       assets,
       financing,
       or
       acquisition
       of
       all
       or
       a
       portion
       of
       our
       business
       to
       another
       company.
       </li>
       </ul>
      
       </li>
       </ul>
      
       </li>
       </ul>
      
       </li>
       </ul>
      
       </li>
       </ul>
      
       </li>
       </ul>
      
       <br>
      
       <strong>
       <h2>4.
       HOW
       LONG
       DO
       WE
       KEEP
       YOUR
       INFORMATION?
       </h2>
       </strong><strong><em>In
       Short: </em></strong><em>We
       keep
       your
       information
       for
       as
       long
       as
       necessary
       to
       
       fulfill
       
       the
       purposes
       outlined
       in
       this
       Privacy
       Notice
       unless
       otherwise
       required
       by
       law.</em>
      
       <br>
      
       We
       will
       only
       keep
       your
       personal
       information
       for
       as
       long
       as
       it
       is
       necessary
       for
       the
       purposes
       set
       out
       in
       this
       Privacy
       Notice,
       unless
       a
       longer
       retention
       period
       is
       required
       or
       permitted
       by
       law
       (such
       as
       tax,
       accounting,
       or
       other
       legal
       requirements).
       
       anonymize
       
       such
       information,
       or,
       if
       this
       is
       not
       possible
       (for
       example,
       because
       your
       personal
       information
       has
       been
       stored
       in
       backup
       archives),
       then
       we
       will
       securely
       store
       your
       personal
       information
       and
       isolate
       it
       from
       any
       further
       processing
       until
       deletion
       is
       possible.
      
       <br>
      
       <strong>
       <h2>5.
       HOW
       DO
       WE
       KEEP
       YOUR
       INFORMATION
       SAFE?
       </h2>
       </strong><strong><em>In
       Short: </em></strong><em>We
       aim
       to
       protect
       your
       personal
       information
       through
       a
       system
       of
       
       organizational
       
       and
       technical
       security
       measures.</em>
      
       <br>
      
       We
       have
       implemented
       appropriate
       and
       reasonable
       technical
       and
       
       organizational
       
       security
       measures
       designed
       to
       protect
       the
       security
       of
       any
       personal
       information
       we
       process.
       However,
       despite
       our
       safeguards
       and
       efforts
       to
       secure
       your
       information,
       no
       electronic
       transmission
       over
       the
       Internet
       or
       information
       storage
       technology
       can
       be
       guaranteed
       to
       be
       100%
       secure,
       so
       we
       cannot
       promise
       or
       guarantee
       that
       hackers,
       cybercriminals,
       or
       other
       
       unauthorized
       
       third
       parties
       will
       not
       be
       able
       to
       defeat
       our
       security
       and
       improperly
       collect,
       access,
       steal,
       or
       modify
       your
       information.
       Although
       we
       will
       do
       our
       best
       to
       protect
       your
       personal
       information,
       transmission
       of
       personal
       information
       to
       and
       from
       our
       Services
       is
       at
       your
       own
       risk.
       You
       should
       only
       access
       the
       Services
       within
       a
       secure
       environment.
      
       <br>
      
       <strong>
       <h2>6.
       DO
       WE
       COLLECT
       INFORMATION
       FROM
       MINORS?
       </h2>
       </strong><strong><em>In
       Short:</em></strong><em> We
       do
       not
       knowingly
       collect
       data
       from
       or
       market
       to
       
       children
       under
       18
       years
       of
       age
      
       .
       </em>
      
       <br>
      
       We
       do
       not
       knowingly
       collect,
       solicit
       data
       from,
       or
       market
       to
       children
       under
       18
       years
       of
       age
       
       ,
       nor
       do
       we
       knowingly
       sell
       such
       personal
       information.
       By
       using
       the
       Services,
       you
       represent
       that
       you
       are
       at
       least
       18
       
       or
       that
       you
       are
       the
       parent
       or
       guardian
       of
       such
       a
       minor
       and
       consent
       to
       such
       minor
       dependent’s
       use
       of
       the
       Services.
       If
       we
       learn
       that
       personal
       information
       from
       users
       less
       than
       18
       years
       of
       age
       
       has
       been
       collected,
       we
       will
       deactivate
       the
       account
       and
       take
       reasonable
       measures
       to
       promptly
       delete
       such
       data
       from
       our
       records.
       If
       you
       become
       aware
       of
       any
       data
       we
       may
       have
       collected
       from
       children
       under
       age
       18
       
       ,
       please
       contact
       us
       at
      
       .
      
       <br>
      
       <strong>
       <h2>7.
       WHAT
       ARE
       YOUR
       PRIVACY
       RIGHTS?
       </h2>
       </strong><strong><em>In
       Short:</em></strong><em> <em>
       
       </em> You
       may
       review,
       change,
       or
       terminate
       your
       account
       at
       any
       time,
       depending
       on
       your
       country,
       province,
       or
       state
       of
       residence.</em>
       
       which
       may
       be
       express
       and/or
       implied
       consent
       depending
       on
       the
       applicable
       law,
       
       you
       have
       the
       right
       to
       withdraw
       your
       consent
       at
       any
       time.
       You
       can
       withdraw
       your
       consent
       at
       any
       time
       by
       contacting
       us
       by
       using
       the
       contact
       details
       provided
       in
       the
       section
       
       "
       
       <a
       href="#contact">HOW
       CAN
       YOU
       CONTACT
       US
       ABOUT
       THIS
       NOTICE?</a>
       
       "
       
       below
       
       .
      
       <br>
      
       However,
       please
       note
       that
       this
       will
       not
       affect
       the
       lawfulness
       of
       the
       processing
       before
       its
       withdrawal
       nor,
       
       when
       applicable
       law
       allows,
       
       will
       it
       affect
       the
       processing
       of
       your
       personal
       information
       conducted
       in
       reliance
       on
       lawful
       processing
       grounds
       other
       than
       consent.
      
       <br>
      
       If
       you
       have
       questions
       or
       comments
       about
       your
       privacy
       rights,
       you
       may
       email
       us
       at
       
       .
      
       <br>
      
       <strong>
       <h2>8.
       CONTROLS
       FOR
       DO-NOT-TRACK
       FEATURES
       </h2>
       </strong>Most
       web
       browsers
       and
       some
       mobile
       operating
       systems
       and
       mobile
       applications
       include
       a
       Do-Not-Track
       (
       
       "DNT"
       
       )
       feature
       or
       setting
       you
       can
       activate
       to
       signal
       your
       privacy
       preference
       not
       to
       have
       data
       about
       your
       online
       browsing
       activities
       monitored
       and
       collected.
       At
       this
       stage,
       no
       uniform
       technology
       standard
       for
       
       recognizing
       
       and
       implementing
       DNT
       signals
       has
       been
       
       finalized
       
       .
       As
       such,
       we
       do
       not
       currently
       respond
       to
       DNT
       browser
       signals
       or
       any
       other
       mechanism
       that
       automatically
       communicates
       your
       choice
       not
       to
       be
       tracked
       online.
       If
       a
       standard
       for
       online
       tracking
       is
       adopted
       that
       we
       must
       follow
       in
       the
       future,
       we
       will
       inform
       you
       about
       that
       practice
       in
       a
       revised
       version
       of
       this
       Privacy
       Notice.
      
       <br>
      
       California
       law
       requires
       us
       to
       let
       you
       know
       how
       we
       respond
       to
       web
       browser
       DNT
       signals.
       Because
       there
       currently
       is
       not
       an
       industry
       or
       legal
       standard
       for
       
       recognizing
       
       or
       
       honoring
       
       DNT
       signals,
       we
       do
       not
       respond
       to
       them
       at
       this
       time.
      
       <br>
      
       <strong>
       <h2>9.
       DO
       UNITED
       STATES
       RESIDENTS
       HAVE
       SPECIFIC
       PRIVACY
       RIGHTS?
       </h2>
       </strong><strong><em>In
       Short: </em></strong><em>If
       you
       are
       a
       resident
       of
       
       California,
       Colorado,
       Connecticut,
       Delaware,
       Florida,
       Indiana,
       Iowa,
       Kentucky,
       Maryland,
       Minnesota,
       Montana,
       Nebraska,
       New
       Hampshire,
       New
       Jersey,
       Oregon,
       Rhode
       Island,
       Tennessee,
       Texas,
       Utah,
       or
       Virginia
       
       ,
       you
       may
       have
       the
       right
       to
       request
       access
       to
       and
       receive
       details
       about
       the
       personal
       information
       we
       maintain
       about
       you
       and
       how
       we
       have
       processed
       it,
       correct
       inaccuracies,
       get
       a
       copy
       of,
       or
       delete
       your
       personal
       information.
       You
       may
       also
       have
       the
       right
       to
       withdraw
       your
       consent
       to
       our
       processing
       of
       your
       personal
       information.
       These
       rights
       may
       be
       limited
       in
       some
       circumstances
       by
       applicable
       law.
       More
       information
       is
       provided
       below.</em><strong>
       <h3>Categories
       of
       Personal
       Information
       We
       Collect
       </h3>
       </strong>The
       table
       below
       shows
       the
       categories
       of
       personal
       information
       we
       have
       collected
       in
       the
       past
       twelve
       (12)
       months.
       The
       table
       includes
       illustrative
       examples
       of
       each
       category
       and
       does
       not
       reflect
       the
       personal
       information
       we
       collect
       from
       you.
       For
       a
       comprehensive
       inventory
       of
       all
       personal
       information
       we
       process,
       please
       refer
       to
       the
       section
       
       "
       
       <a
       href="#infocollect">WHAT
       INFORMATION
       DO
       WE
       COLLECT?</a>
       
       "
      
       <br>
       
       <table>
       <thead>
       <tr>
       <th>
       <strong>Category</strong>
       </th>
       <th>
       <strong>Examples</strong>
       </th>
       <th>
       <strong>Collected</strong>
       </th>
       </tr>
       </thead>
       <tbody>
       <tr>
       <td>
       
       A.
       Identifiers
       
       </td>
       <td>
       
       Contact
       details,
       such
       as
       real
       name,
       alias,
       postal
       address,
       telephone
       or
       mobile
       contact
       number,
       unique
       personal
       identifier,
       online
       identifier,
       Internet
       Protocol
       address,
       email
       address,
       and
       account
       name
       
       </td>
       <td>
       
       <br>
      
       NO
      
       <br>
       
       </td>
       </tr>
       </tbody>
       </table>
      
       <table>
       <tbody>
       <tr>
       <td>
       
       B.
       Personal
       information
       as
       defined
       in
       the
       California
       Customer
       Records
       statute
       
       </td>
       <td>
       
       Name,
       contact
       information,
       education,
       employment,
       employment
       history,
       and
       financial
       information
       
       </td>
       <td>
       
       <br>
      
       <br>
       
       </td>
       </tr>
       </tbody>
       </table>
      
       <table>
       <tbody>
       <tr>
       <td>
      
       C
       
       .
       Protected
       classification
       characteristics
       under
       state
       or
       federal
       law
      
       </td>
       <td>
       
       Gender,
       age,
       date
       of
       birth,
       race
       and
       ethnicity,
       national
       origin,
       marital
       status,
       and
       other
       demographic
       data
       
       </td>
       <td>
       
       <br>
      
       NO
      
       <br>
       
       </td>
       </tr>
       <tr>
       <td>
      
       D
       
       .
       Commercial
       information
      
       </td>
       <td>
       
       Transaction
       information,
       purchase
       history,
       financial
       details,
       and
       payment
       information
       
       </td>
       <td>
       
       <br>
      
       NO
      
       <br>
       
       </td>
       </tr>
       <tr>
       <td>
      
       E
       
       .
       Biometric
       information
      
       </td>
       <td>
       
       Fingerprints
       and
       voiceprints
       
       </td>
       <td>
       
       <br>
      
       <br>
       
       </td>
       </tr>
       <tr>
       <td>
      
       F
       
       .
       Internet
       or
       other
       similar
       network
       activity
      
       </td>
       <td>
       
       Browsing
       history,
       search
       history,
       online
       
       behavior
       
       ,
       interest
       data,
       and
       interactions
       with
       our
       and
       other
       websites,
       applications,
       systems,
       and
       advertisements
       
       </td>
       <td>
       
       <br>
      
       NO
      
       <br>
       
       </td>
       </tr>
       <tr>
       <td>
      
       G
       
       .
       Geolocation
       data
      
       </td>
       <td>
       
       Device
       location
       
       </td>
       <td>
       
       <br>
      
       NO
      
       <br>
       
       </td>
       </tr>
       <tr>
       <td>
      
       H
       
       .
       Audio,
       electronic,
       sensory,
       or
       similar
       information
      
       </td>
       <td>
       
       Images
       and
       audio,
       video
       or
       call
       recordings
       created
       in
       connection
       with
       our
       business
       activities
       
       </td>
       <td>
       
       <br>
      
       NO
      
       <br>
       
       </td>
       </tr>
       <tr>
       <td>
      
       I
       
       .
       Professional
       or
       employment-related
       information
      
       </td>
       <td>
       
       Business
       contact
       details
       in
       order
       to
       provide
       you
       our
       Services
       at
       a
       business
       level
       or
       job
       title,
       work
       history,
       and
       professional
       qualifications
       if
       you
       apply
       for
       a
       job
       with
       us
       
       </td>
       <td>
       
       <br>
      
       NO
      
       <br>
       
       </td>
       </tr>
       <tr>
       <td>
      
       J
       
       .
       Education
       Information
      
       </td>
       <td>
       
       Student
       records
       and
       directory
       information
       
       </td>
       <td>
       
       <br>
      
       NO
      
       <br>
       
       </td>
       </tr>
       <tr>
       <td>
      
       K
       
       .
       Inferences
       drawn
       from
       collected
       personal
       information
      
       </td>
       <td>
       
       Inferences
       drawn
       from
       any
       of
       the
       collected
       personal
       information
       listed
       above
       to
       create
       a
       profile
       or
       summary
       about,
       for
       example,
       an
       individual’s
       preferences
       and
       characteristics
       
       </td>
       <td>
       
       <br>
      
       NO
      
       <br>
       
       </td>
       </tr>
       <tr>
       <td>
      
       L
       
       .
       Sensitive
       personal
       Information
       
       </td>
       <td>
       
       </td>
       <td>
       
       <br>
      
       NO
      
       <br>
       
       </td>
       </tr>
       </tbody>
       </table>
      
       <br>
      
       We
       may
       also
       collect
       other
       personal
       information
       outside
       of
       these
       categories
       through
       instances
       where
       you
       interact
       with
       us
       in
       person,
       online,
       or
       by
       phone
       or
       mail
       in
       the
       context
       of:
      
       <ul>
       <li>
       Receiving
       help
       through
       our
       customer
       support
       channels;
      
       </li>
       </ul>
      
       <ul>
       <li>
       Participation
       in
       customer
       surveys
       or
       contests;
       and
      
       </li>
       </ul>
      
       <ul>
       <li>
       Facilitation
       in
       the
       delivery
       of
       our
       Services
       and
       to
       respond
       to
       your
       inquiries.
       
       </li>
       </ul>
      
       </li>
       </ul>
       
       <strong>
       <h3>Sources
       of
       Personal
       Information
       </h3>
       </strong>Learn
       more
       about
       the
       sources
       of
       personal
       information
       we
       collect
       in
       
       "
       
       <a
       href="#infocollect">WHAT
       INFORMATION
       DO
       WE
       COLLECT?</a>
       
       "
      
       <strong>
       <h3>How
       We
       Use
       and
       Share
       Personal
       Information
       </h3>
       </strong>
       
       Learn
       more
       about
       how
       we
       use
       your
       personal
       information
       in
       the
       section,
       
       "
       
       <a
       href="#infouse">HOW
       DO
       WE
       PROCESS
       YOUR
       INFORMATION?</a>
       
       "
      
       <br>
      
       <strong>Will
       your
       information
       be
       shared
       with
       anyone
       else?</strong>
      
       <br>
      
       We
       may
       disclose
       your
       personal
       information
       with
       our
       service
       providers
       pursuant
       to
       a
       written
       contract
       between
       us
       and
       each
       service
       provider.
       Learn
       more
       about
       how
       we
       disclose
       personal
       information
       to
       in
       the
       section,
       
       "
       
       <a
       href="#whoshare">WHEN
       AND
       WITH
       WHOM
       DO
       WE
       SHARE
       YOUR
       PERSONAL
       INFORMATION?</a>
       
       "
      
       <br>
      
       We
       may
       use
       your
       personal
       information
       for
       our
       own
       business
       purposes,
       such
       as
       for
       undertaking
       internal
       research
       for
       technological
       development
       and
       demonstration.
       This
       is
       not
       considered
       to
       be
       
       "selling"
       
       of
       your
       personal
       information.
      
       <br>
      
       We
       have
       not
       disclosed,
       sold,
       or
       shared
       any
       personal
       information
       to
       third
       parties
       for
       a
       business
       or
       commercial
       purpose
       in
       the
       preceding
       twelve
       (12)
       months.
       We will
       not
       sell
       or
       share
       personal
       information
       in
       the
       future
       belonging
       to
       website
       visitors,
       users,
       and
       other
       consumers.
      
       <strong>
       <h3>Your
       Rights
       </h3>
       </strong>You
       have
       rights
       under
       certain
       US
       state
       data
       protection
       laws.
       However,
       these
       rights
       are
       not
       absolute,
       and
       in
       certain
       cases,
       we
       may
       decline
       your
       request
       as
       permitted
       by
       law.
       These
       rights
       include:
      
       <ul>
       <li>
       <strong>Right
       to
       know</strong>
       whether
       or
       not
       we
       are
       processing
       your
       personal
       data
      
       </li>
       </ul>
      
       <ul>
       <li>
       <strong>Right
       to
       access </strong>your
       personal
       data
      
       </li>
       </ul>
      
       <ul>
       <li>
       <strong>Right
       to
       correct </strong>inaccuracies
       in
       your
       personal
       data
      
       </li>
       </ul>
      
       <ul>
       <li>
       <strong>Right
       to
       request</strong>
       the
       deletion
       of
       your
       personal
       data
      
       </li>
       </ul>
      
       <ul>
       <li>
       <strong>Right
       to
       obtain
       a
       copy </strong>of
       the
       personal
       data
       you
       previously
       shared
       with
       us
      
       </li>
       </ul>
      
       <ul>
       <li>
       <strong>Right
       to
       non-discrimination</strong>
       for
       exercising
       your
       rights
      
       </li>
       </ul>
      
       <ul>
       <li>
       <strong>Right
       to
       opt
       out</strong>
       of
       the
       processing
       of
       your
       personal
       data
       if
       it
       is
       used
       for
       targeted
       advertising
       
       (or
       sharing
       as
       defined
       under
       California’s
       privacy
       law)
       
       ,
       the
       sale
       of
       personal
       data,
       or
       profiling
       in
       furtherance
       of
       decisions
       that
       produce
       legal
       or
       similarly
       significant
       effects
       (
       
       "profiling"
       
       )
      
       </li>
       </ul>
      
       Depending
       upon
       the
       state
       where
       you
       live,
       you
       may
       also
       have
       the
       following
       rights:
      
       <ul>
       <li>
       Right
       to
       access
       the
       categories
       of
       personal
       data
       being
       processed
       (as
       permitted
       by
       applicable
       law,
       including
       the
       privacy
       law
       in
       Minnesota)
      
       </li>
       </ul>
      
       <ul>
       <li>
       Right
       to
       obtain
       a
       list
       of
       the
       categories
       of
       third
       parties
       to
       which
       we
       have
       disclosed
       personal
       data
       (as
       permitted
       by
       applicable
       law,
       including
       the
       privacy
       law
       in
       
       California,
       Delaware,
       and
       Maryland
      
       )
      
       </li>
       </ul>
      
       <ul>
       <li>
       Right
       to
       obtain
       a
       list
       of
       specific
       third
       parties
       to
       which
       we
       have
       disclosed
       personal
       data
       (as
       permitted
       by
       applicable
       law,
       including
       the
       privacy
       law
       in
       
       Minnesota
       and
       Oregon
       
       )
       
       </li>
       </ul>
      
       <ul>
       <li>
       Right
       to
       obtain
       a
       list
       of
       third
       parties
       to
       which
       we
       have
       sold
       personal
       data
       (as
       permitted
       by
       applicable
       law,
       including
       the
       privacy
       law
       in
       Connecticut)
       
       </li>
       </ul>
      
       <ul>
       <li>
       Right
       to
       review,
       understand,
       question,
       and
       depending
       on
       where
       you
       live,
       correct
       how
       personal
       data
       has
       been
       profiled
       (as
       permitted
       by
       applicable
       law,
       including
       the
       privacy
       law
       in
       
       Connecticut
       and
       Minnesota
       
       )
      
       </li>
       </ul>
      
       <ul>
       <li>
       Right
       to
       limit
       use
       and
       disclosure
       of
       sensitive
       personal
       data
       (as
       permitted
       by
       applicable
       law,
       including
       the
       privacy
       law
       in
       California)
       
       </li>
       </ul>
      
       <ul>
       <li>
       Right
       to
       opt
       out
       of
       the
       collection
       of
       sensitive
       data
       and
       personal
       data
       collected
       through
       the
       operation
       of
       a
       voice
       or
       facial
       recognition
       feature
       (as
       permitted
       by
       applicable
       law,
       including
       the
       privacy
       law
       in
       Florida)
       
       </li>
       </ul>
      
       <strong>
       <h3>How
       to
       Exercise
       Your
       Rights
       </h3>
       </strong>To
       exercise
       these
       rights,
       you
       can
       contact
       us
       
       by
       submitting
       a <a
       href="https://app.termly.io/dsar/da8eb17d-2a96-4aa6-9917-d978f59d49e0"
       rel="noopener noreferrer">data
       subject
       access
       request</a>,
      
       by
       emailing
       us
       at
       support@anthroma.com
       ,
      
       or
       by
       referring
       to
       the
       contact
       details
       at
       the
       bottom
       of
       this
       document.
      
       <br>
      
       Under
       certain
       US
       state
       data
       protection
       laws,
       you
       can
       designate
       an
       
       authorized
       
       agent
       to
       make
       a
       request
       on
       your
       behalf.
       We
       may
       deny
       a
       request
       from
       an
       
       authorized
       
       agent
       that
       does
       not
       submit
       proof
       that
       they
       have
       been
       validly
       
       authorized
       
       to
       act
       on
       your
       behalf
       in
       accordance
       with
       applicable
       laws.<br><strong>
       <h3>Request
       Verification
       </h3>
       </strong>Upon
       receiving
       your
       request,
       we
       will
       need
       to
       verify
       your
       identity
       to
       determine
       you
       are
       the
       same
       person
       about
       whom
       we
       have
       the
       information
       in
       our
       system.
       We
       will
       only
       use
       personal
       information
       provided
       in
       your
       request
       to
       verify
       your
       identity
       or
       authority
       to
       make
       the
       request.
       However,
       if
       we
       cannot
       verify
       your
       identity
       from
       the
       information
       already
       maintained
       by
       us,
       we
       may
       request
       that
       you
       provide
       additional
       information
       for
       the
       purposes
       of
       verifying
       your
       identity
       and
       for
       security
       or
       fraud-prevention
       purposes.
      
       <br>
      
       If
       you
       submit
       the
       request
       through
       an
       
       authorized
       
       agent,
       we
       may
       need
       to
       collect
       additional
       information
       to
       verify
       your
       identity
       before
       processing
       your
       request
       and
       the
       agent
       will
       need
       to
       provide
       a
       written
       and
       signed
       permission
       from
       you
       to
       submit
       such
       request
       on
       your
       behalf.
       
       <strong>
       <h3>Appeals
       </h3>
       </strong>Under
       certain
       US
       state
       data
       protection
       laws,
       if
       we
       decline
       to
       take
       action
       regarding
       your
       request,
       you
       may
       appeal
       our
       decision
       by
       emailing
       us
       at
      
       .
       We
       will
       inform
       you
       in
       writing
       of
       any
       action
       taken
       or
       not
       taken
       in
       response
       to
       the
       appeal,
       including
       a
       written
       explanation
       of
       the
       reasons
       for
       the
       decisions.
       If
       your
       appeal
       is
       denied,
       you
       may
       submit
       a
       complaint
       to
       your
       state
       attorney
       general.
      
       <strong>
       <h3>California
       
       "Shine
       The
       Light"
       
       Law
       </h3>
       </strong>California
       Civil
       Code
       Section
       1798.83,
       also
       known
       as
       the
       
       "Shine
       The
       Light"
       
       law,
       permits
       our
       users
       who
       are
       California
       residents
       to
       request
       and
       obtain
       from
       us,
       once
       a
       year
       and
       free
       of
       charge,
       information
       about
       categories
       of
       personal
       information
       (if
       any)
       we
       disclosed
       to
       third
       parties
       for
       direct
       marketing
       purposes
       and
       the
       names
       and
       addresses
       of
       all
       third
       parties
       with
       which
       we
       shared
       personal
       information
       in
       the
       immediately
       preceding
       calendar
       year.
       If
       you
       are
       a
       California
       resident
       and
       would
       like
       to
       make
       such
       a
       request,
       please
       submit
       your
       request
       in
       writing
       to
       us
       by
       using
       the
       contact
       details
       provided
       in
       the
       section
       
       "
       
       <a
       href="#contact">HOW
       CAN
       YOU
       CONTACT
       US
       ABOUT
       THIS
       NOTICE?</a>
       
       "
      
       <br>
      
       <strong>
       <h2>10.
       DO
       WE
       MAKE
       UPDATES
       TO
       THIS
       NOTICE?
       </h2>
       </strong><em><strong>In
       Short: </strong>Yes,
       we
       will
       update
       this
       notice
       as
       necessary
       to
       stay
       compliant
       with
       relevant
       laws.</em>
      
       <br>
      
       We
       may
       update
       this
       Privacy
       Notice
       from
       time
       to
       time.
       The
       updated
       version
       will
       be
       indicated
       by
       an
       updated
       
       "Revised"
       
       date
       at
       the
       top
       of
       this
       Privacy
       Notice.
       If
       we
       make
       material
       changes
       to
       this
       Privacy
       Notice,
       we
       may
       notify
       you
       either
       by
       prominently
       posting
       a
       notice
       of
       such
       changes
       or
       by
       directly
       sending
       you
       a
       notification.
       We
       encourage
       you
       to
       review
       this
       Privacy
       Notice
       frequently
       to
       be
       informed
       of
       how
       we
       are
       protecting
       your
       information.
      
       <br>
      
       <strong>
       <h2>11.
       HOW
       CAN
       YOU
       CONTACT
       US
       ABOUT
       THIS
       NOTICE?
       </h2>
       </strong>If
       you
       have
       questions
       or
       comments
       about
       this
       notice,
       you
       may
      
       email
       us
       at
       support@anthroma.com
       or
       contact
       us
       by
       post
       at:
      
       <br>
      
       Anthroma LLC, 418 Broadway STE N, Albany, NY 12207, United States
      
       <br>
      
       <strong>
       <h2>12.
       HOW
       CAN
       YOU
       REVIEW,
       UPDATE,
       OR
       DELETE
       THE
       DATA
       WE
       COLLECT
       FROM
       YOU?
       </h2>
       </strong>
       
       Based
       on
       the
       applicable
       laws
       of
       your
       country
       
       or
       state
       of
       residence
       in
       the
       US
       
       ,
       you
       may
       
       withdraw
       your
       consent
       to
       our
       processing
       of
       your
       personal
       information.
       These
       rights
       may
       be
       limited
       in
       some
       circumstances
       by
       applicable
       law.
       To
       request
       to
       review,
       update,
       or
       delete
       your
       personal
       information,
       please
       
       fill
       out
       and
       submit
       a 
       <a
       href="https://app.termly.io/dsar/da8eb17d-2a96-4aa6-9917-d978f59d49e0"
       rel="noopener noreferrer">data
       subject
       access
       request</a>
       
       .
    </div>
  `;

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" dangerouslySetInnerHTML={{ __html: privacyHTML }} />
    </div>
  );
};

// --- Terms of Service Component ---

const TermsOfService = () => {
  const termsHTML = `
    <style>
      .legal-content { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
      .legal-content h1 { font-size: 26px; color: #000; margin: 20px 0; }
      .legal-content h2 { font-size: 19px; color: #000; margin: 18px 0 12px 0; }
      .legal-content h3 { font-size: 17px; color: #000; margin: 16px 0 10px 0; }
      .legal-content p { margin: 12px 0; color: #595959; }
      .legal-content ul, .legal-content ol { margin: 12px 0; padding-left: 30px; }
      .legal-content li { margin: 8px 0; color: #595959; }
      .legal-content a { color: #3030F1; text-decoration: underline; }
      .legal-content strong { color: #000; }
    </style>
    <div class="legal-content">
      <strong>Last updated</strong><br><br><strong><h2>AGREEMENT TO OUR LEGAL TERMS</h2></strong><a name="_6aa3gkhykvst"></a>We are (" <strong>Company</strong>,
      " " <strong>we</strong>,
      " " <strong>us</strong>,
      " " <strong>our</strong>"), a company registered in New York, United States at 418 Broadway STE N, Albany, NY 12207.<br>We operate the website (the "<strong>Site</strong>"), the mobile application (the "<strong>App</strong>"), as well as any other related products and services that refer or link to these legal terms (the "<strong>Legal Terms</strong>") (collectively, the "<strong>Services</strong>").<br>You can contact us by phone at 347-422-3329, email at support@anthroma.com, or by mail to 418 Broadway STE N, Albany, NY 12207, United States.<br>These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity (" <strong>you</strong>"), and Anthroma LLC, concerning your access to and use of the Services. You agree that by accessing the Services, you have read, understood, and agreed to be bound by all of these Legal Terms. IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.<br><br>The
       Services are intended for users who are at least 18 years old. Persons under the age of 18 are not permitted to use or register for the Services.<br>We recommend that you print a copy of these Legal Terms for your records.<br><strong><h2>TABLE OF CONTENTS</h2></strong><a href="#services">1. OUR SERVICES</a><a href="#ip">2. INTELLECTUAL PROPERTY RIGHTS</a><a href="#userreps"></a><a href="#userreps">3. USER REPRESENTATIONS</a><a href="#products"></a><a href="#products"></a><a href="#purchases"></a><a href="#purchases">4. PURCHASES AND PAYMENT</a><a href="#software"></a><a href="#software"></a><a href="#software"></a><a href="#prohibited"></a><a href="#prohibited">5. PROHIBITED ACTIVITIES</a><a href="#ugc"></a><a href="#ugc">6. USER GENERATED CONTRIBUTIONS</a><a href="#license"></a><a href="#license">7. CONTRIBUTION LICENSE</a><a href="#reviews"></a><a href="#reviews"></a><a href="#mobile"></a><a href="#mobile">8. MOBILE APPLICATION LICENSE</a><a href="#socialmedia"></a><a href="#socialmedia"></a><a href="#thirdparty"></a><a href="#thirdparty">9. THIRD-PARTY WEBSITES AND CONTENT</a><a href="#advertisers"></a><a href="#advertisers"></a><a href="#sitemanage"></a><a href="#sitemanage">10. SERVICES MANAGEMENT</a><a href="#ppyes"></a><a href="#ppyes">11. PRIVACY POLICY</a><a href="#ppno"></a><a href="#ppno"></a><a href="#dmca"></a><a href="#dmca"></a><a href="#terms"></a><a href="#terms">12. TERM AND TERMINATION</a><a href="#modifications"></a><a href="#modifications">13. MODIFICATIONS AND INTERRUPTIONS</a><a href="#law"></a><a href="#law">14. GOVERNING LAW</a><a href="#disputes"></a><a href="#disputes">15. DISPUTE RESOLUTION</a><a href="#corrections"></a><a href="#corrections">16. CORRECTIONS</a><a href="#disclaimer"></a><a href="#disclaimer">17. DISCLAIMER</a><a href="#liability"></a><a href="#liability">18. LIMITATIONS OF LIABILITY</a><a href="#indemnification"></a><a href="#indemnification">19. INDEMNIFICATION</a><a href="#userdata"></a><a href="#userdata">20. USER DATA</a><a href="#electronic"></a><a href="#electronic">21. ELECTRONIC COMMUNICATIONS,
      TRANSACTIONS,
      AND SIGNATURES</a><a href="#california"></a><a href="#california">22. CALIFORNIA USERS AND RESIDENTS</a><a href="#misc"></a><a href="#misc">23. MISCELLANEOUS</a><a href="#contact"></a><a href="#contact">24. CONTACT US</a><a name="_b6y29mp52qvx"></a><br><strong><h2>1. OUR SERVICES</h2></strong>The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly,
      those persons who choose to access the Services from other locations do so on their own initiative and are solely responsible for compliance with local laws,
      if and to the extent local laws are applicable.<br>The Services are not tailored to comply with industry-specific regulations (Health Insurance Portability and Accountability Act (HIPAA), Federal Information Security Management Act (FISMA), etc.),
      so if your interactions would be subjected to such laws,
      you may not use the Services. You may not use the Services in a way that would violate the Gramm-Leach-Bliley Act (GLBA).<br><strong><h2>2. INTELLECTUAL PROPERTY RIGHTS</h2></strong><strong><h3>Our intellectual property</h3></strong>We are the owner or the licensee of all intellectual property rights in our Services, including all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics in the Services (collectively, the " Content"), as well as the trademarks, service marks, and logos contained therein (the " Marks").<br>Our Content and Marks are protected by copyright and trademark laws (and various other intellectual property rights and unfair competition laws) and treaties in the United States and around the world.<br>The Content and Marks are provided in or through the Services " AS IS" for your personal, non-commercial use only.<strong><h3>Your use of our Services</h3></strong>Subject to your compliance with these Legal Terms, including the " <a href="#prohibited">PROHIBITED ACTIVITIES</a>" section below, we grant you a non-exclusive, non-transferable, revocable license to:<ul><li>access the Services; and</li><li>download or print a copy of any portion of the Content to which you have properly gained access,</li></ul>solely for your personal, non-commercial use.<br>Except as set out in this section or elsewhere in our Legal Terms, no part of the Services and no Content or Marks may be copied, reproduced,
       aggregated,
      republished,
      uploaded,
      posted,
      publicly displayed,
      encoded,
      translated,
      transmitted,
      distributed,
      sold,
      licensed,
      or otherwise exploited for any commercial purpose whatsoever,
      without our express prior written permission.<br>If you wish to make any use of the Services, Content, or Marks other than as set out in this section or elsewhere in our Legal Terms, please address your request to: support@anthroma.com. If we ever grant you the permission to post, reproduce, or publicly display any part of our Services or Content, you must identify us as the owners or licensors of the Services, Content, or Marks and ensure that any copyright or proprietary notice appears or is visible on posting, reproducing, or displaying our Content.<br>We reserve all rights not expressly granted to you in and to the Services, Content, and Marks.<br>Any breach of these Intellectual Property Rights will constitute a material breach of our Legal Terms and your right to use our Services will terminate immediately.<strong><h3>Your submissionsPlease review this section and the " <a href="#prohibited">PROHIBITED ACTIVITIES</a>" section carefully prior to using our Services to understand the (a) rights you give us and (b) obligations you have when you post or upload any content through the Services.<br><strong>Submissions:</strong> By directly sending us any question, comment, suggestion, idea, feedback, or other information about the Services (" Submissions"), you agree to assign to us all intellectual property rights in such Submission. You agree that we shall own this Submission and be entitled to its unrestricted use and dissemination for any lawful purpose, commercial or otherwise, without acknowledgment or compensation to you.<br><strong>You are responsible for what you post or upload:</strong> By sending us Submissions through any part of the Services you:<ul><li>confirm that you have read and agree with our " <a href="#prohibited">PROHIBITED ACTIVITIES</a>" and will not post, send, publish, upload, or transmit through the Services any Submission that is illegal, harassing, hateful, harmful, defamatory, obscene, bullying, abusive, discriminatory, threatening to any person or group, sexually explicit, false, inaccurate, deceitful, or misleading;</li><li>to the extent permissible by applicable law, waive any and all moral rights to any such Submission;</li><li>warrant that any such Submission are original to you or that you have the necessary rights and licenses to submit such Submissions and that you have full authority to grant us the above-mentioned rights in relation to your Submissions; and</li><li>warrant and represent that your Submissions do not constitute confidential information.</li></ul>You are solely responsible for your Submissions and you expressly agree to reimburse us for any and all losses that we may suffer because of your breach of (a) this section, (b) any third party’s intellectual property rights, or (c) applicable law.<br><a name=" _5hg7kgyv9l8z"></a><strong><h2>3. USER REPRESENTATIONS</h2></strong>By using the Services, you represent and warrant that: (1) you have the legal capacity and you agree to comply with these Legal Terms; (2) you are not a
       minor in the jurisdiction in which you reside;
      (3) you will not access the Services through automated or non-human means,
      whether through a bot,
      script or otherwise;
      (4) you will not use the Services for any illegal or unauthorizedpurpose;
      and (5) your use of the Services will not violate any applicable law or regulation.<br>If you provide any information that is untrue,
      inaccurate,
      not current,
      or incomplete,
      we have the right to suspend or terminate your account and refuse any and all current or future use of the Services (or any portion thereof).<br><a name="_ynub0jdx8pob"></a><strong><h2>4. PURCHASES AND PAYMENT</h2></strong>All purchases are non-refundable.<br>We accept the following forms of payment:<br><br>You agree to provide current, complete, and accurate purchase and account information for all purchases made via the Services. You further agree to promptly update account and payment information, including email address, payment method, and payment card expiration date, so that we can complete your transactions and contact you as needed. Sales tax will be added to the price of purchases as deemed required by us. We may change prices at any time. All payments shall be in .<br>You agree to pay all charges at the prices then in effect for your purchases and any applicable shipping fees, and you authorize us to charge your chosen payment provider for any such amounts upon placing your order. We reserve the right to correct any errors or mistakes in pricing, even if we have already requested or received payment.<br>We reserve the right to refuse any order placed through the Services. We may, in our sole discretion, limit or cancel quantities purchased per person, per household, or per order. These restrictions may include orders placed by or under the same customer account, the same payment method, and/or orders that use the same billing or shipping address. We reserve the right to limit or prohibit orders that, in our sole judgment, appear to be placed by dealers, resellers, or distributors.<strong><h2>5. PROHIBITED ACTIVITIES</h2></strong>You may not access or use the Services for any purpose other than that for which we make the Services available. The Services may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.<br>As a user of the Services, you agree not to:<ul><li>Systematically retrieve data or other content from the Services to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</li><li>Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.</li><li>Circumvent, disable, or otherwise interfere with security-related features of the Services, including features that prevent or restrict the use or copying of any Content or enforce limitations on the use of the Services and/or the Content contained therein.</li><li>Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Services.</li><li>Use any information obtained from the Services in order to harass, abuse, or harm another person.</li><li>Make improper use of our support services or submit false reports of abuse or misconduct.</li><li>Use the Services in a manner inconsistent with any applicable laws or regulations.</li><li>Engage in unauthorized framing of or linking to the Services.</li><li>Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material, including excessive use of capital letters and spamming (continuous posting of repetitive text), that interferes with any party’s uninterrupted use and enjoyment of the Services or modifies, impairs, disrupts, alters, or interferes with the use, features, functions, operation, or maintenance of the Services.</li><li>Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools.</li><li>Delete the copyright or other proprietary rights notice from any Content.</li><li>Attempt to impersonate another user or person or use the username of another user.</li><li>Upload or transmit (or attempt to upload or to transmit) any material that acts as a passive or active information collection or transmission mechanism, including without limitation, clear graphics interchange formats (" gifs"), 1×1 pixels, web bugs, cookies, or other similar devices (sometimes referred to as " spyware" or " passive collection mechanisms" or " pcms").</li><li>Interfere with, disrupt, or create an undue burden on the Services or the networks or services connected to the Services.</li><li>Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the Services to you.</li><li>Attempt to bypass any measures of the Services designed to prevent or restrict access to the Services, or any portion of the Services.</li><li>Copy or adapt the Services' software, including but not limited to Flash, PHP, HTML, JavaScript, or other code.</li><li>Except as permitted by applicable law, decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Services.</li><li>Except as may be the result of standard search engine or Internet browser usage, use, launch, develop, or distribute any automated system, including without limitation, any spider, robot, cheat utility, scraper, or offline reader that accesses the Services, or use or launch any unauthorized script or other software.</li><li>Use a buying agent or purchasing agent to make purchases on the Services.</li><li>Make any unauthorized use of the Services, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretenses.</li><li>Use the Services as part of any effort to compete with us or otherwise use the Services and/or the Content for any revenue-generating endeavor or commercial enterprise.</li><li></li><li></li></ul><br> The Services does not offer users to submit or post content. We may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or on the Services, including but not limited to text, writings, video, audio, photographs, graphics, comments, suggestions, or personal information or other material (collectively, " Contributions"). Contributions may be viewable by other users of the Services and through third-party websites. As such, any Contributions you transmit may be treated in accordance with the Services' Privacy Policy. When you create or make available any Contributions, you thereby represent and warrant that:<ul><li>The creation, distribution, transmission, public display, or performance, and the accessing, downloading, or copying of your Contributions do not and will not infringe the proprietary rights, including but not limited to the copyright, patent, trademark, trade secret, or moral rights of any third party.</li><li>You are the creator and owner of or have the necessary licenses, rights, consents, releases, and permissions to use and to authorize us, the Services, and other users of the Services to use your Contributions in any manner contemplated by the Services and these Legal Terms.</li><li>You have the written consent, release, and/or permission of each and every identifiable individual person in your Contributions to use the name or likeness of each and every such identifiable individual person to enable inclusion and use of your Contributions in any manner contemplated by the Services and these Legal Terms.</li><li>Your Contributions are not false, inaccurate, or misleading.</li><li>Your Contributions are not unsolicited or unauthorized advertising, promotional materials, pyramid schemes, chain letters, spam, mass mailings, or other forms of solicitation.</li><li>Your Contributions are not obscene, lewd, lascivious, filthy, violent, harassing, libelous, slanderous, or otherwise objectionable (as determined by us).</li><li>Your Contributions do not ridicule, mock, disparage, intimidate, or abuse anyone.</li><li>Your Contributions are not used to harass or threaten (in the legal sense of those terms) any other person and to promote violence against a specific person or class of people.</li><li>Your Contributions do not violate any applicable law, regulation, or rule.</li><li>Your Contributions do not violate the privacy or publicity rights of any third party.</li><li>Your Contributions do not violate any applicable law concerning child pornography, or otherwise intended to protect the health or well-being of minors.</li><li>Your Contributions do not include any offensive comments that are connected to race, national origin, gender, sexual preference, or physical handicap.</li><li>Your Contributions do not otherwise violate, or link to material that violates, any provision of these Legal Terms, or any applicable law or regulation.</li></ul><br>LICENSE</h2></strong>You and Services agree that we may access, store, process, and use any information and personal data that you provide following the terms of the Privacy Policy and your choices (including settings).<br>By submitting suggestions or other feedback regarding the Services, you agree that we can use and share such feedback for any purpose without compensation to you.<br>We do not assert any ownership over your Contributions. You retain full ownership of all of your Contributions and any intellectual property rights or other proprietary rights associated with your Contributions. We are not liable for any statements or representations in your Contributions provided by you in any area on the Services. You are solely responsible for your Contributions to the Services and you expressly agree to exonerate us from any and all responsibility and to refrain from any legal action against us regarding your Contributions.<br><strong><h2>8. MOBILE APPLICATION LICENSE</h2></strong><strong><h3>Use License</h3></strong>If you access the Services via the App, then we grant you a revocable, non-exclusive, non-transferable, limited right to install and use the App on wireless electronic devices owned or controlled by you, and to access and use the App on such devices strictly in accordance with the terms and conditions of this mobile application license contained in these Legal Terms. You shall not: (1) except as permitted by applicable law, decompile, reverse engineer, disassemble, attempt to derive the source code of, or decrypt the App; (2) make any modification, adaptation, improvement, enhancement, translation, or derivative work from the App; (3) violate any applicable laws, rules, or regulations in connection with your access or use of the App; (4) remove, alter, or obscure any proprietary notice (including any notice of copyright or trademark) posted by us or the licensors of the App; (5) use the App for any revenue-generating endeavor, commercial enterprise, or other purpose for which it is not designed or intended; (6) make the App available over a network or other environment permitting access or use by multiple devices or users at the same time; (7) use the App for creating a product, service, or software that is, directly or indirectly, competitive with or in any way a substitute for the App; (8) use the App to send automated queries to any website or to send any unsolicited commercial email; or (9) use any proprietary information or any of our interfaces or our other intellectual property in the design, development, manufacture, licensing, or distribution of any applications, accessories, or devices for use with the App.<strong><h3>Apple and Android Devices</h3></strong>The following terms apply when you use the App obtained from either the Apple Store or Google Play (each an " App Distributor") to access the Services: (1) the license granted to you for our App is limited to a non-transferable license to use the application on a device that utilizes the Apple iOS or Android operating systems, as applicable, and in accordance with the usage rules set forth in the applicable App Distributor’s terms of service; (2) we are responsible for providing any maintenance and support services with respect to the App as specified in the terms and conditions of this mobile application license contained in these Legal Terms or as otherwise required under applicable law, and you acknowledge that each App Distributor has no obligation whatsoever to furnish any maintenance and support services with respect to the App; (3) in the event of any failure of the App to conform to any applicable warranty, you may notify the applicable App Distributor, and the App Distributor, in accordance with its terms and policies, may refund the purchase price, if any, paid for the App, and to the maximum extent permitted by applicable law, the App Distributor will have no other warranty obligation whatsoever with respect to the App; (4) you represent and warrant that (i) you are not located in a country that is subject to a US government embargo, or that has been designated by the US government as a " terrorist supporting" country and (ii) you are not listed on any US government list of prohibited or restricted parties; (5) you must comply with applicable third-party terms of agreement when using the App, e.g., if you have a VoIP application, then you must not be in violation of their wireless data service agreement when using the App; and (6) you acknowledge and agree that the App Distributors are third-party beneficiaries of the terms and conditions in this mobile application license contained in these Legal Terms, and that each App Distributor will have the right (and will be deemed to have accepted the right) to enforce the terms and conditions in this mobile application license contained in these Legal Terms against you as a third-party beneficiary thereof.<br> <strong><h2>9. THIRD-PARTY WEBSITES AND CONTENT</h2></strong>The Services may contain (or you may be sent via the Site or App) links to other websites (" Third-Party Websites") as well as articles, photographs, text, graphics, pictures, designs, music, sound, video, information, applications, software, and other content or items belonging to or originating from third parties (" Third-Party Content"). Such Third-Party Websites and Third-Party Content are not investigated, monitored, or checked for accuracy, appropriateness, or completeness by us, and we are not responsible for any Third-Party Websites accessed through the Services or any Third-Party Content posted on, available through, or installed from the Services, including the content, accuracy, offensiveness, opinions, reliability, privacy practices, or other policies of or contained in the Third-Party Websites or the Third-Party Content. Inclusion of, linking to, or permitting the use or installation of any Third-Party Websites or any Third-Party Content does not imply approval or endorsement thereof by us. If you decide to leave the Services and access the Third-Party Websites or to use or install any Third-Party Content, you do so at your own risk, and you should be aware these Legal Terms no longer govern. You should review the applicable terms and policies, including privacy and data gathering practices, of any website to which you navigate from the Services or relating to any applications you use or install from the Services. Any purchases you make through Third-Party Websites will be through other websites and from other companies, and we take no responsibility whatsoever in relation to such purchases which are exclusively between you and the applicable third party. You agree and acknowledge that we do not endorse the products or services offered on Third-Party Websites and you shall hold us blameless from any harm caused by your purchase of such products or services. Additionally, you shall hold us blameless from any losses sustained by you or harm caused to you relating to or resulting in any way from any Third-Party Content or any contact with Third-Party Websites.<br><strong><h2>10. SERVICES MANAGEMENT</h2></strong>We reserve the right, but not the obligation, to: (1) monitor the Services for violations of these Legal Terms; (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or these Legal Terms, including without limitation, reporting such user to law enforcement authorities; (3) in our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your Contributions or any portion thereof; (4) in our sole discretion and without limitation, notice, or liability, to remove from the Services or otherwise disable all files and content that are excessive in size or are in any way burdensome to our systems; and (5) otherwise manage the Services in a manner designed to protect our rights and property and to facilitate the proper functioning of the Services.<br><strong><h2>11. PRIVACY POLICY</h2></strong>We care about data privacy and security. Please review our Privacy Policy:<strong> </strong>. By using the Services, you agree to be bound by our Privacy Policy, which is incorporated into these Legal Terms. Please be advised the Services are hosted in the . If you access the Services from any other region of the world with laws or other requirements governing personal data collection, use, or disclosure that differ from applicable laws in the , then through your continued use of the Services, you are transferring your data to the , and you expressly consent to have your data transferred to and processed in the .<br><strong><h2>12. TERM AND TERMINATION</h2></strong>These Legal Terms shall remain in full force and effect while you use the Services. WITHOUT LIMITING ANY OTHER PROVISION OF THESE LEGAL TERMS, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SERVICES (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE LEGAL TERMS OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR USE OR PARTICIPATION IN THE SERVICES OR DELETE ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION.<br>If we terminate or suspend your account for any reason, you are prohibited from registering and creating a new account under your name, a fake or borrowed name, or the name of any third party, even if you may be acting on behalf of the third party. In addition to terminating or suspending your account, we reserve the right to take appropriate legal action, including without limitation pursuing civil, criminal, and injunctive redress.<br><strong><h2>13. MODIFICATIONS AND INTERRUPTIONS</h2></strong>We reserve the right to change, modify, or remove the contents of the Services at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Services. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Services.<br>We cannot guarantee the Services will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the Services, resulting in interruptions, delays, or errors. We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the Services at any time or for any reason without notice to you. You agree that we have no liability whatsoever for any loss, damage, or inconvenience caused by your inability to access or use the Services during any downtime or discontinuance of the Services. Nothing in these Legal Terms will be construed to obligate us to maintain and support the Services or to supply any corrections, updates, or releases in connection therewith.<br><strong><h2>14. GOVERNING LAW</h2></strong>These Legal Terms and your use of the Services are governed by and construed in accordance with the laws of applicable to agreements made and to be entirely performed within, without regard to its conflict of law principles.<br><strong><h2>15. DISPUTE RESOLUTION</h2></strong>Any legal action of whatever nature brought by either you or us (collectively, the " Parties" and individually, a " Party") shall be commenced or prosecuted in the state and federal courts located in , , and the Parties hereby consent to, and waive all defenses of lack of personal jurisdiction and forum non conveniens with respect to venue and jurisdiction in such state and federal courts. Application of the United Nations Convention on Contracts for the International Sale of Goods and the Uniform Computer Information Transaction Act (UCITA) are excluded from these Legal Terms. In no event shall any claim, action, or proceeding brought by either Party related in any way to the Services be commenced more than years after the cause of action arose.<br><strong><h2>16. CORRECTIONS</h2></strong>There may be information on the Services that contains typographical errors, inaccuracies, or omissions, including descriptions, pricing, availability, and various other information. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the Services at any time, without prior notice.<br><strong><h2>17. DISCLAIMER</h2></strong>THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SERVICES AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SERVICES' CONTENT OR THE CONTENT OF ANY WEBSITES OR MOBILE APPLICATIONS LINKED TO THE SERVICES AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS, (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE SERVICES, (3) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN, (4) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE SERVICES, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE SERVICES BY ANY THIRD PARTY, AND/OR (6) ANY ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SERVICES. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE SERVICES, ANY HYPERLINKED WEBSITE, OR ANY WEBSITE OR MOBILE APPLICATION FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES. AS WITH THE PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGMENT AND EXERCISE CAUTION WHERE APPROPRIATE.<br><strong><h2>18. LIMITATIONS OF LIABILITY</h2></strong>IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. mONTH PERIOD PRIOR TO ANY CAUSE OF ACTION ARISINGCERTAIN US STATE LAWS AND INTERNATIONAL LAWS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS APPLY TO YOU,
      SOME OR ALL OF THE ABOVE DISCLAIMERS OR LIMITATIONS MAY NOT APPLY TO YOU,
      AND YOU MAY HAVE ADDITIONAL RIGHTS.<br><strong><h2>19. INDEMNIFICATION</h2></strong>You agree to
       defend,
      indemnify,
      and hold us harmless,
      including our subsidiaries,
      affiliates,
      and all of our respective officers,
      agents,
      partners,
      and employees,
      from and against any loss,
      damage,
      liability,
      claim,
      or demand,
      including reasonable attorneys’ fees and expenses,
      made by any third party due to or arising out of: (1) use of the Services;
      (2) breach of these Legal Terms;
      (3) any breach of your representations and warranties set forth in these Legal Terms;
      (4) your violation of the rights of a third party,
      including but not limited to intellectual property rights;
      or (5) any overt harmful act toward any other user of the Services with whom you connected via the Services. Notwithstanding the foregoing,
      we reserve the right,
      at your expense,
      to assume the exclusive defenseand control of any matter for which you are required to indemnify us,
      and you agree to cooperate,
      at your expense,
      with our defenseof such claims. We will use reasonable efforts to notify you of any such claim,
      action,
      or proceeding which is subject to this indemnification upon becoming aware of it.<br><strong><h2>20. USER DATA</h2></strong>We will maintain
       certain data that you transmit to the Services for the purpose of managing the performance of the Services,
      as well as data relating to your use of the Services. Although we perform regular routine backups of data,
      you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the Services. You agree that we shall have no liability to you for any loss or corruption of any such data,
      and you hereby waive any right of action against us arising from any such loss or corruption of such data.<br><strong><h2>21. ELECTRONIC COMMUNICATIONS,
      TRANSACTIONS,
      AND SIGNATURES</h2></strong>Visiting the Services, sending us emails, and completing online forms constitute electronic communications. You consent to receive electronic communications, and you agree that all agreements, notices, disclosures, and other communications we provide to you electronically, via email and on the Services, satisfy any legal requirement that such communication be in writing. YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE SERVICES. You hereby waive any rights or requirements under any statutes, regulations, rules, ordinances, or other laws in any jurisdiction which require an original signature or delivery or retention of non-electronic records, or to payments or the granting of credits by any means other than electronic means.<br><strong><h2>22. CALIFORNIA USERS AND RESIDENTS</h2></strong>If any complaint
       with us is not satisfactorily resolved,
      you can contact the Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs in writing at 1625 North Market Blvd.,
      Suite N 112,
      Sacramento,
      California 95834 or by telephone at (800) 952-5210 or (916) 445-1254.<br><strong><h2>23. MISCELLANEOUS</h2></strong>These Legal Terms and any policies or operating rules posted by us on the Services or in respect to the Services constitute the entire agreement and understanding between you and us. Our failure to exercise or enforce any right or provision of these Legal Terms shall not operate as a waiver of such right or provision. These Legal Terms operate to the fullest extent permissible by law. We may assign any or all of our rights and obligations to others at any time. We shall not be responsible or liable for any loss, damage, delay, or failure to act caused by any cause beyond our reasonable control. If any provision or part of a provision of these Legal Terms is determined to be unlawful, void, or unenforceable, that provision or part of the provision is deemed severable from these Legal Terms and does not affect the validity and enforceability of any remaining provisions. There is no joint venture, partnership, employment or agency relationship created between you and us as a result of these Legal Terms or use of the Services. You agree that these Legal Terms will not be construed against us by virtue of having drafted them. You hereby waive any and all defenses you may have based on the electronic form of these Legal Terms and the lack of signing by the parties hereto to execute these Legal Terms.<br><strong><h2>24. CONTACT US</h2></strong>In order to resolve a complaint regarding the Services or to receive further information regarding use of the Services, please contact us at:<br><strong>Anthroma LLC</strong><br>418 Broadway STE N<br>Albany, NY 12207<br>United States<br><strong>Phone: </strong>347-422-3329<br><strong>Email: </strong><a href="mailto:support@anthroma.com">support@anthroma.com</a>
    </div>
  `;

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" dangerouslySetInnerHTML={{ __html: termsHTML }} />
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

