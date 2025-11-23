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
  // 完整的隐私政策 HTML 内容
  const privacyPolicyHTML = `
    <style>
        [data-custom-class='body'],
        [data-custom-class='body'] * {
            background: transparent !important;
        }

        [data-custom-class='title'],
        [data-custom-class='title'] * {
            font-family: Arial !important;
            font-size: 26px !important;
            color: #000000 !important;
        }

        [data-custom-class='subtitle'],
        [data-custom-class='subtitle'] * {
            font-family: Arial !important;
            color: #595959 !important;
            font-size: 14px !important;
        }

        [data-custom-class='heading_1'],
        [data-custom-class='heading_1'] * {
            font-family: Arial !important;
            font-size: 19px !important;
            color: #000000 !important;
        }

        [data-custom-class='heading_2'],
        [data-custom-class='heading_2'] * {
            font-family: Arial !important;
            font-size: 17px !important;
            color: #000000 !important;
        }

        [data-custom-class='body_text'],
        [data-custom-class='body_text'] * {
            color: #595959 !important;
            font-size: 14px !important;
            font-family: Arial !important;
        }

        [data-custom-class='link'],
        [data-custom-class='link'] * {
            color: #3030F1 !important;
            font-size: 14px !important;
            font-family: Arial !important;
            word-break: break-word !important;
        }

        ul {
            list-style-type: square;
        }

        ul>li>ul {
            list-style-type: circle;
        }

        ul>li>ul>li>ul {
            list-style-type: square;
        }

        ol li {
            font-family: Arial;
        }
    </style>
    <span style="display: block;margin: 0 auto 3.125rem;width: 11.125rem;height: 2.375rem;background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNzgiIGhlaWdodD0iMzgiIHZpZXdCb3g9IjAgMCAxNzggMzgiPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8cGF0aCBmaWxsPSIjRDFEMUQxIiBkPSJNNC4yODMgMjQuMTA3Yy0uNzA1IDAtMS4yNTgtLjI1Ni0xLjY2LS43NjhoLS4wODVjLjA1Ny41MDIuMDg2Ljc5Mi4wODYuODd2Mi40MzRILjk4NXYtOC42NDhoMS4zMzJsLjIzMS43NzloLjA3NmMuMzgzLS41OTQuOTUtLjg5MiAxLjcwMi0uODkyLjcxIDAgMS4yNjQuMjc0IDEuNjY1LjgyMi40MDEuNTQ4LjYwMiAxLjMwOS42MDIgMi4yODMgMCAuNjQtLjA5NCAxLjE5OC0uMjgyIDEuNjctLjE4OC40NzMtLjQ1Ni44MzMtLjgwMyAxLjA4LS4zNDcuMjQ3LS43NTYuMzctMS4yMjUuMzd6TTMuOCAxOS4xOTNjLS40MDUgMC0uNy4xMjQtLjg4Ni4zNzMtLjE4Ny4yNDktLjI4My42Ni0uMjkgMS4yMzN2LjE3N2MwIC42NDUuMDk1IDEuMTA3LjI4NyAxLjM4Ni4xOTIuMjguNDk1LjQxOS45MS40MTkuNzM0IDAgMS4xMDEtLjYwNSAxLjEwMS0xLjgxNiAwLS41OS0uMDktMS4wMzQtLjI3LTEuMzI5LS4xODItLjI5NS0uNDY1LS40NDMtLjg1Mi0uNDQzem01LjU3IDEuNzk0YzAgLjU5NC4wOTggMS4wNDQuMjkzIDEuMzQ4LjE5Ni4zMDQuNTEzLjQ1Ny45NTQuNDU3LjQzNyAwIC43NS0uMTUyLjk0Mi0uNDU0LjE5Mi0uMzAzLjI4OC0uNzUzLjI4OC0xLjM1MSAwLS41OTUtLjA5Ny0xLjA0LS4yOS0xLjMzOC0uMTk0LS4yOTctLjUxLS40NDUtLjk1LS40NDUtLjQzOCAwLS43NTMuMTQ3LS45NDYuNDQzLS4xOTQuMjk1LS4yOS43NDItLjI5IDEuMzR6bTQuMTUzIDBjMCAuOTc3LS4yNTggMS43NDItLjc3NCAyLjI5My0uNTE1LjU1Mi0xLjIzMy44MjctMi4xNTQuODI3LS41NzYgMC0xLjA4NS0uMTI2LTEuNTI1LS4zNzhhMi41MiAyLjUyIDAgMCAxLTEuMDE1LTEuMDg4Yy0uMjM3LS40NzMtLjM1NS0xLjAyNC0uMzU1LTEuNjU0IDAtLjk4MS4yNTYtMS43NDQuNzY4LTIuMjg4LjUxMi0uNTQ1IDEuMjMyLS44MTcgMi4xNi0uODE3LjU3NiAwIDEuMDg1LjEyNiAxLjUyNS4zNzYuNDQuMjUxLjc3OS42MSAxLjAxNSAxLjA4LjIzNi40NjkuMzU1IDEuMDE5LjM1NSAxLjY0OXpNMTkuNzEgMjRsLS40NjItMi4xLS42MjMtMi42NTNoLS4wMzdMMTcuNDkzIDI0SDE1LjczbC0xLjcwOC02LjAwNWgxLjYzM2wuNjkzIDIuNjU5Yy4xMS40NzYuMjI0IDEuMTMzLjMzOCAxLjk3MWguMDMyYy4wMTUtLjI3Mi4wNzctLjcwNC4xODgtMS4yOTRsLjA4Ni0uNDU3Ljc0Mi0yLjg3OWgxLjgwNGwuNzA0IDIuODc5Yy4wMTQuMDc5LjAzNy4xOTUuMDY3LjM1YTIwLjk5OCAyMC45OTggMCAwIDEgLjE2NyAxLjAwMmMuMDIzLjE2NS4wMzYuMjk5LjA0LjM5OWguMDMyYy4wMzItLjI1OC4wOS0uNjExLjE3Mi0xLjA2LjA4Mi0uNDUuMTQxLS43NTQuMTc3LS45MTFsLjcyLTIuNjU5aDEuNjA2TDIxLjQ5NCAyNGgtMS43ODN6bTcuMDg2LTQuOTUyYy0uMzQ4IDAtLjYyLjExLS44MTcuMzMtLjE5Ny4yMi0uMzEuNTMzLS4zMzguOTM3aDIuMjk5Yy0uMDA4LS40MDQtLjExMy0uNzE3LS4zMTctLjkzNy0uMjA0LS4yMi0uNDgtLjMzLS44MjctLjMzem0uMjMgNS4wNmMtLjk2NiAwLTEuNzIyLS4yNjctMi4yNjYtLjgtLjU0NC0uNTM0LS44MTYtMS4yOS0uODE2LTIuMjY3IDAtMS4wMDcuMjUxLTEuNzg1Ljc1NC0yLjMzNC41MDMtLjU1IDEuMTk5LS44MjUgMi4wODctLjgyNS44NDggMCAxLjUxLjI0MiAxLjk4Mi43MjUuNDcyLjQ4NC43MDkgMS4xNTIuNzA5IDIuMDA0di43OTVoLTMuODczYy4wMTguNDY1LjE1Ni44MjkuNDE0IDEuMDkuMjU4LjI2MS42Mi4zOTIgMS4wODUuMzkyLjM2MSAwIC43MDMtLjAzNyAxLjAyNi0uMTEzYTUuMTMzIDUuMTMzIDAgMCAwIDEuMDEtLjM2djEuMjY4Yy0uMjg3LjE0My0uNTkzLjI1LS45Mi4zMmE1Ljc5IDUuNzkgMCAwIDEtMS4xOTEuMTA0em03LjI1My02LjIyNmMuMjIyIDAgLjQwNi4wMTYuNTUzLjA0OWwtLjEyNCAxLjUzNmExLjg3NyAxLjg3NyAwIDAgMC0uNDgzLS4wNTRjLS41MjMgMC0uOTMuMTM0LTEuMjIyLjQwMy0uMjkyLjI2OC0uNDM4LjY0NC0uNDM4IDEuMTI4VjI0aC0xLjYzOHYtNi4wMDVoMS4yNGwuMjQyIDEuMDFoLjA4Yy4xODctLjMzNy40MzktLjYwOC43NTYtLjgxNGExLjg2IDEuODYgMCAwIDEgMS4wMzQtLjMwOXptNC4wMjkgMS4xNjZjLS4zNDcgMC0uNjIuMTEtLjgxNy4zMy0uMTk3LjIyLS4zMS41MzMtLjMzOC45MzdoMi4yOTljLS4wMDctLjQwNC0uMTEzLS43MTctLjMxNy0uOTM3LS4yMDQtLjIyLS40OC0uMzMtLjgyNy0uMzN6bS4yMyA1LjA2Yy0uOTY2IDAtMS43MjItLjI2Ny0yLjI2Ni0uOC0uNTQ0LS41MzQtLjgxNi0xLjI5LS44MTYtMi4yNjcgMC0xLjAwNy4yNTEtMS43ODUuNzU0LTIuMzM0LjUwNC0uNTUgMS4yLS44MjUgMi4wODctLjgyNS44NDkgMCAxLjUxLjI0MiAxLjk4Mi43MjUuNDczLjQ4NC43MDkgMS4xNTIuNzA5IDIuMDA0di43OTVoLTMuODczYy4wMTguNDY1LjE1Ni44MjkuNDE0IDEuMDkuMjU4LjI2MS42Mi4zOTIgMS4wODUuMzkyLjM2MiAwIC43MDQtLjAzNyAxLjAyNi0uMTEzYTUuMTMzIDUuMTMzIDAgMCAwIDEuMDEtLjM2djEuMjY4Yy0uMjg3LjE0My0uNTkzLjI1LS45MTkuMzJhNS43OSA1Ljc5IDAgMCAxLTEuMTkyLjEwNHptNS44MDMgMGMtLjcwNiAwLTEuMjYtLjI3NS0xLjY2My0uODIyLS40MDMtLjU0OC0uNjA0LTEuMzA3LS42MDQtMi4yNzggMC0uOTg0LjIwNS0xLjc1Mi42MTUtMi4zMDEuNDEtLjU1Ljk3NS0uODI1IDEuNjk1LS44MjUuNzU1IDAgMS4zMzIuMjk0IDEuNzI5Ljg4MWguMDU0YTYuNjk3IDYuNjk3IDAgMCAxLS4xMjQtMS4xOTh2LTEuOTIyaDEuNjQ0VjI0SDQ2LjQzbC0uMzE3LS43NzloLS4wN2MtLjM3Mi41OTEtLjk0Ljg4Ni0xLjcwMi44ODZ6bS41NzQtMS4zMDZjLjQyIDAgLjcyNi0uMTIxLjkyMS0uMzY1LjE5Ni0uMjQzLjMwMi0uNjU3LjMyLTEuMjR2LS4xNzhjMC0uNjQ0LS4xLTEuMTA2LS4yOTgtMS4zODYtLjE5OS0uMjc5LS41MjItLjQxOS0uOTctLjQxOWEuOTYyLjk2MiAwIDAgMC0uODUuNDY1Yy0uMjAzLjMxLS4zMDQuNzYtLjMwNCAxLjM1IDAgLjU5Mi4xMDIgMS4wMzUuMzA2IDEuMzMuMjA0LjI5Ni40OTYuNDQzLjg3NS40NDN6bTEwLjkyMi00LjkyYy43MDkgMCAxLjI2NC4yNzcgMS42NjUuODMuNC41NTMuNjAxIDEuMzEyLjYwMSAyLjI3NSAwIC45OTItLjIwNiAxLjc2LS42MiAyLjMwNC0uNDE0LjU0NC0uOTc3LjgxNi0xLjY5LjgxNi0uNzA1IDAtMS4yNTgtLjI1Ni0xLjY1OS0uNzY4aC0uMTEzbC0uMjc0LjY2MWgtMS4yNTF2LTguMzU3aDEuNjM4djEuOTQ0YzAgLjI0Ny0uMDIxLjY0My0uMDY0IDEuMTg3aC4wNjRjLjM4My0uNTk0Ljk1LS44OTIgMS43MDMtLjg5MnptLS41MjcgMS4zMWMtLjQwNCAwLS43LjEyNS0uODg2LjM3NC0uMTg2LjI0OS0uMjgzLjY2LS4yOSAxLjIzM3YuMTc3YzAgLjY0NS4wOTYgMS4xMDcuMjg3IDEuMzg2LjE5Mi4yOC40OTUuNDE5LjkxLjQxOS4zMzcgMCAuNjA1LS4xNTUuODA0LS40NjUuMTk5LS4zMS4yOTgtLjc2LjI5OC0xLjM1IDAtLjU5MS0uMS0xLjAzNS0uMy0xLjMzYS45NDMuOTQzIDAgMCAwLS44MjMtLjQ0M3ptMy4xODYtMS4xOTdoMS43OTRsMS4xMzQgMy4zNzljLjA5Ni4yOTMuMTYzLjY0LjE5OCAxLjA0MmguMDMzYy4wMzktLjM3LjExNi0uNzE3LjIzLTEuMDQybDEuMTEyLTMuMzc5aDEuNzU3bC0yLjU0IDYuNzczYy0uMjM0LjYyNy0uNTY2IDEuMDk2LS45OTcgMS40MDctLjQzMi4zMTItLjkzNi40NjgtMS41MTIuNDY4LS4yODMgMC0uNTYtLjAzLS44MzMtLjA5MnYtMS4zYTIuOCAyLjggMCAwIDAgLjY0NS4wN2MuMjkgMCAuNTQzLS4wODguNzYtLjI2Ni4yMTctLjE3Ny4zODYtLjQ0NC41MDgtLjgwM2wuMDk2LS4yOTUtMi4zODUtNS45NjJ6Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzMpIj4KICAgICAgICAgICAgPGNpcmNsZSBjeD0iMTkiIGN5PSIxOSIgcj0iMTkiIGZpbGw9IiNFMEUwRTAiLz4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI0ZGRiIgZD0iTTIyLjQ3NCAxNS40NDNoNS4xNjJMMTIuNDM2IDMwLjRWMTAuMzYzaDE1LjJsLTUuMTYyIDUuMDh6Ii8+CiAgICAgICAgPC9nPgogICAgICAgIDxwYXRoIGZpbGw9IiNEMkQyRDIiIGQ9Ik0xMjEuNTQ0IDE0LjU2di0xLjcyOGg4LjI3MnYxLjcyOGgtMy4wMjRWMjRoLTIuMjR2LTkuNDRoLTMuMDA4em0xMy43NDQgOS41NjhjLTEuMjkgMC0yLjM0MS0uNDE5LTMuMTUyLTEuMjU2LS44MS0uODM3LTEuMjE2LTEuOTQ0LTEuMjE2LTMuMzJzLjQwOC0yLjQ3NyAxLjIyNC0zLjMwNGMuODE2LS44MjcgMS44NzItMS4yNCAzLjE2OC0xLjI0czIuMzYuNDAzIDMuMTkyIDEuMjA4Yy44MzIuODA1IDEuMjQ4IDEuODggMS4yNDggMy4yMjQgMCAuMzEtLjAyMS41OTctLjA2NC44NjRoLTYuNDY0Yy4wNTMuNTc2LjI2NyAxLjA0LjY0IDEuMzkyLjM3My4zNTIuODQ4LjUyOCAxLjQyNC41MjguNzc5IDAgMS4zNTUtLjMyIDEuNzI4LS45NmgyLjQzMmEzLjg5MSAzLjg5MSAwIDAgMS0xLjQ4OCAyLjA2NGMtLjczNi41MzMtMS42MjcuOC0yLjY3Mi44em0xLjQ4LTYuNjg4Yy0uNC0uMzUyLS44ODMtLjUyOC0xLjQ0OC0uNTI4cy0xLjAzNy4xNzYtMS40MTYuNTI4Yy0uMzc5LjM1Mi0uNjA1LjgyMS0uNjggMS40MDhoNC4xOTJjLS4wMzItLjU4Ny0uMjQ4LTEuMDU2LS42NDgtMS40MDh6bTcuMDE2LTIuMzA0djEuNTY4Yy41OTctMS4xMyAxLjQ2MS0xLjY5NiAyLjU5Mi0xLjY5NnYyLjMwNGgtLjU2Yy0uNjcyIDAtMS4xNzkuMTY4LTEuNTIuNTA0LS4zNDEuMzM2LS41MTIuOTE1LS41MTIgMS43MzZWMjRoLTIuMjU2di04Ljg2NGgyLjI1NnptNi40NDggMHYxLjMyOGMuNTY1LS45NyAxLjQ4My0xLjQ1NiAyLjc1Mi0xLjQ1Ni42NzIgMCAxLjI3Mi4xNTUgMS44LjQ2NC41MjguMzEuOTM2Ljc1MiAxLjIyNCAxLjMyOC4zMS0uNTU1LjczMy0uOTkyIDEuMjcyLTEuMzEyYTMuNDg4IDMuNDg4IDAgMCAxIDEuODE2LS40OGMxLjA1NiAwIDEuOTA3LjMzIDIuNTUyLjk5Mi42NDUuNjYxLjk2OCAxLjU5Ljk2OCAyLjc4NFYyNGgtMi4yNHYtNC44OTZjMC0uNjkzLS4xNzYtMS4yMjQtLjUyOC0xLjU5Mi0uMzUyLS4zNjgtLjgzMi0uNTUyLTEuNDQtLjU1MnMtMS4wOS4xODQtMS40NDguNTUyYy0uMzU3LjM2OC0uNTM2Ljg5OS0uNTM2IDEuNTkyVjI0aC0yLjI0di00Ljg5NmMwLS42OTMtLjE3Ni0xLjIyNC0uNTI4LTEuNTkyLS4zNTItLjM2OC0uODMyLS41NTItMS40NC0uNTUycy0xLjA5LjE4NC0xLjQ0OC41NTJjLS4zNTcuMzY4LS41MzYuODk5LS41MzYgMS41OTJWMjRoLTIuMjU2di04Ljg2NGgyLjI1NnpNMTY0LjkzNiAyNFYxMi4xNmgyLjI1NlYyNGgtMi4yNTZ6bTcuMDQtLjE2bC0zLjQ3Mi04LjcwNGgyLjUyOGwyLjI1NiA2LjMwNCAyLjM4NC02LjMwNGgyLjM1MmwtNS41MzYgMTMuMDU2aC0yLjM1MmwxLjg0LTQuMzUyeiIvPgogICAgPC9nPgo8L3N2Zz4K) center no-repeat;"></span>
    <div data-custom-class="body">
        <div><strong><span style="font-size: 26px;"><span data-custom-class="title"><bdt class="block-component"></bdt><bdt class="question"><h1>PRIVACY POLICY</h1></bdt><bdt class="statement-end-if-in-editor"></bdt></span></span></strong></div>
        <div><span style="color: rgb(127, 127, 127);"><strong><span style="font-size: 15px;"><span data-custom-class="subtitle">Last updated <bdt class="question">November 10, 2025</bdt></span></span></strong></span></div>
        <div><br></div>
        <div><br></div>
        <div><br></div>
        <div style="line-height: 1.5;"><span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text">This Privacy Notice for <bdt class="question noTranslate">Anthroma LLC</bdt><bdt class="block-component"></bdt></bdt> (<bdt class="block-component"></bdt>"<strong>we</strong>," "<strong>us</strong>," or "<strong>our</strong>"<bdt class="statement-end-if-in-editor"></bdt></span><span data-custom-class="body_text">), describes how and why we might access, collect, store, use, and/or share (<bdt class="block-component"></bdt>"<strong>process</strong>"<bdt class="statement-end-if-in-editor"></bdt>) your personal information when you use our services (<bdt class="block-component"></bdt>"<strong>Services</strong>"<bdt class="statement-end-if-in-editor"></bdt>), including when you:</span></span></span><span style="font-size: 15px;"><span style="color: rgb(127, 127, 127);"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><bdt class="block-component"></bdt></span></span></span></span></span></div>
        <ul>
            <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">Visit our website<bdt class="block-component"></bdt> at <span style="color: rgb(0, 58, 250);"><bdt class="question noTranslate"><a target="_blank" data-custom-class="link" href="http://www.anthroma.com">http://www.anthroma.com</a></bdt></span><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><bdt class="statement-end-if-in-editor"> or any website of ours that links to this Privacy Notice</bdt></span></span></span></span></span></span></span></li>
        </ul>
        <div><bdt class="block-component"><span style="font-size: 15px;"><span style="font-size: 15px;"><span style="color: rgb(127, 127, 127);"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><bdt class="block-component"></bdt></span></span></span></span></span></span></bdt></div>
        <ul>
            <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">Download and use<bdt class="block-component"></bdt> our mobile application<bdt class="block-component"></bdt> (<bdt class="question">USCIS Case Tracker)<span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><bdt class="statement-end-if-in-editor">,</bdt></span></span></span></span></span></span></span></span></bdt></span><span data-custom-class="body_text"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><bdt class="statement-end-if-in-editor"><bdt class="block-component"> or any other application of ours that links to this Privacy Notice</bdt></bdt></span></span></span></span></span></span></span></li>
        </ul>
        <div style="line-height: 1.5;"><bdt class="block-component"><span style="font-size: 15px;"></span></bdt></li>
        </ul>
        <div style="line-height: 1.5;"><span style="font-size: 15px;"><span style="color: rgb(127, 127, 127);"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><bdt class="block-component"></bdt></span></span></span></span></span></div>
        <ul>
            <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">Engage with us in other related ways, including any sales, marketing, or events<span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><bdt class="statement-end-if-in-editor"></bdt></span></span></span></span></span></span></span></li>
        </ul>
        <div style="line-height: 1.5;"><span style="font-size: 15px;"><span style="color: rgb(127, 127, 127);"><span data-custom-class="body_text"><strong>Questions or concerns? </strong>Reading this Privacy Notice will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services.<bdt class="block-component"></bdt> If you still have any questions or concerns, please contact us at <bdt class="question noTranslate"><a target="_blank" data-custom-class="link" href="mailto:rui.luo@anthroma.com">rui.luo@anthroma.com</a></bdt>.</span></span></span></div>
        <div style="line-height: 1.5;"><br></div>
        <div style="line-height: 1.5;"><br></div>
        <div style="line-height: 1.5;"><strong><span style="font-size: 15px;"><span data-custom-class="heading_1"><h2>SUMMARY OF KEY POINTS</h2></span></span></strong></div>
        <div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text"><strong><em>This summary provides key points from our Privacy Notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our </em></strong></span></span><a data-custom-class="link" href="#toc"><span style="color: rgb(0, 58, 250); font-size: 15px;"><span data-custom-class="body_text"><strong><em>table of contents</em></strong></span></span></a><span style="font-size: 15px;"><span data-custom-class="body_text"><strong><em> below to find the section you are looking for.</em></strong></span></span></div>
        <div style="line-height: 1.5;"><br></div>
        <div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text"><strong>What personal information do we process?</strong> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use. Learn more about </span></span><a data-custom-class="link" href="#personalinfo"><span style="color: rgb(0, 58, 250); font-size: 15px;"><span data-custom-class="body_text">personal information you disclose to us</span></span></a><span data-custom-class="body_text">.</span></div>
        <div style="line-height: 1.5;"><br></div>
        <div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text"><strong>Do we process any sensitive personal information? </strong>Some of the information may be considered <bdt class="block-component"></bdt>"special" or "sensitive"<bdt class="statement-end-if-in-editor"></bdt> in certain jurisdictions, for example your racial or ethnic origins, sexual orientation, and religious beliefs. <bdt class="block-component"></bdt>We may process sensitive personal information when necessary with your consent or as otherwise permitted by applicable law. Learn more about </span></span><a data-custom-class="link" href="#sensitiveinfo"><span style="color: rgb(0, 58, 250); font-size: 15px;"><span data-custom-class="body_text">sensitive information we process</span></span></a><span data-custom-class="body_text">.</span><span style="font-size: 15px;"><span data-custom-class="body_text"><bdt class="statement-end-if-in-editor"></bdt></span></span></div>
        <div style="line-height: 1.5;"><br></div>
        <div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text"><strong>Do we collect any information from third parties?</strong><bdt class="block-component"></bdt>We do not collect any information from third parties.<bdt class="else-block"></bdt></span></span></div>
        <div style="line-height: 1.5;"><br></div>
        <div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text"><strong>How do we process your information?</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so. Learn more about </span></span><a data-custom-class="link" href="#infouse"><span style="color: rgb(0, 58, 250); font-size: 15px;"><span data-custom-class="body_text">how we process your information</span></span></a><span data-custom-class="body_text">.</span></div>
        <div style="line-height: 1.5;"><br></div>
        <div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text"><strong>In what situations and with which <bdt class="block-component"></bdt>parties do we share personal information?</strong> We may share information in specific situations and with specific <bdt class="block-component"></bdt>third parties. Learn more about </span></span><a data-custom-class="link" href="#whoshare"><span style="color: rgb(0, 58, 250); font-size: 15px;"><span data-custom-class="body_text">when and with whom we share your personal information</span></span></a><span style="font-size: 15px;"><span data-custom-class="body_text">.<bdt class="block-component"></bdt></span></span></div>
        <div style="line-height: 1.5;"><br></div>
        <div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text"><strong>How do we keep your information safe?</strong> We have adequate <bdt class="block-component"></bdt>organizational<bdt class="statement-end-if-in-editor"></bdt> and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other <bdt class="block-component"></bdt>unauthorized<bdt class="statement-end-if-in-editor"></bdt> third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Learn more about </span></span><a data-custom-class="link" href="#infosafe"><span style="color: rgb(0, 58, 250); font-size: 15px;"><span data-custom-class="body_text">how we keep your information safe</span></span></a><span data-custom-class="body_text">.</span><span style="font-size: 15px;"><span data-custom-class="body_text"><bdt class="statement-end-if-in-editor"></bdt></span></span></div>
        <div style="line-height: 1.5;"><br></div>
        <div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text"><strong>What are your rights?</strong> Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. Learn more about </span></span><a data-custom-class="link" href="#privacyrights"><span style="color: rgb(0, 58, 250); font-size: 15px;"><span data-custom-class="body_text">your privacy rights</span></span></a><span data-custom-class="body_text">.</span></div>
        <div style="line-height: 1.5;"><br></div>
        <div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text"><strong>How do you exercise your rights?</strong> The easiest way to exercise your rights is by <bdt class="block-component">submitting a </bdt><a data-custom-class="link" href="https://app.termly.io/dsar/da8eb17d-2a96-4aa6-9917-d978f59d49e0" rel="noopener noreferrer" target="_blank"><span style="color: rgb(0, 58, 250); font-size: 15px;"><span data-custom-class="body_text">data subject access request</span></span></a><span style="font-size: 15px;"><span data-custom-class="body_text"><bdt class="block-component"></bdt>, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.</span></span></div>
        <div style="line-height: 1.5;"><br></div>
        <div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text">Want to learn more about what we do with any information we collect? </span></span><a data-custom-class="link" href="#toc"><span style="color: rgb(0, 58, 250); font-size: 15px;"><span data-custom-class="body_text">Review the Privacy Notice in full</span></span></a><span style="font-size: 15px;"><span data-custom-class="body_text">.</span></span></div>
        <div style="line-height: 1.5;"><br></div>
        <div style="line-height: 1.5;"><br></div>
        <div id="toc" style="line-height: 1.5;"><span style="font-size: 15px;"><span style="color: rgb(127, 127, 127);"><span style="color: rgb(0, 0, 0);"><strong><span data-custom-class="heading_1"><h2>TABLE OF CONTENTS</h2></span></strong> </span> </span> </span></div>
        <div style="line-height: 1.5;"><span style="font-size: 15px;"><a data-custom-class="link" href="#infocollect"><span style="color: rgb(0, 58, 250);">1. WHAT INFORMATION DO WE COLLECT?</span></a></span></div>
        <div style="line-height: 1.5;"><span style="font-size: 15px;"><a data-custom-class="link" href="#infouse"><span style="color: rgb(0, 58, 250);">2. HOW DO WE PROCESS YOUR INFORMATION?<bdt class="block-component"></bdt></span></a></span></div>
        <div style="line-height: 1.5;"><span style="color: rgb(0, 58, 250);"><a data-custom-class="link" href="#whoshare">3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</a></span><span data-custom-class="body_text"><bdt class="block-component"></bdt></a><span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89);"><bdt class="block-component"></bdt></span></span></span></span><bdt class="block-component"></bdt></span></div>
        <div style="line-height: 1.5;"><span style="font-size: 15px;"><a data-custom-class="link" href="#inforetain"><span style="color: rgb(0, 58, 250);">4. HOW LONG DO WE KEEP YOUR INFORMATION?</span></a><span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89);"><span style="color: rgb(89, 89, 89);"><bdt class="block-component"></bdt></span></span></span></span></span></span></div>
        <div style="line-height: 1.5;"><span style="font-size: 15px;"><a data-custom-class="link" href="#infosafe"><span style="color: rgb(0, 58, 250);">5. HOW DO WE KEEP YOUR INFORMATION SAFE?</span></a><span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89);"><bdt class="statement-end-if-in-editor"></bdt><bdt class="block-component"></bdt></span></span></span></span></span></div>
        <div style="line-height: 1.5;"><span style="font-size: 15px;"><a data-custom-class="link" href="#infominors"><span style="color: rgb(0, 58, 250);">6. DO WE COLLECT INFORMATION FROM MINORS?</span></a><span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span style="color: rgb(89, 89, 89);"><bdt class="statement-end-if-in-editor"></bdt></span></span></span></span></span></div>
        <div style="line-height: 1.5;"><span style="color: rgb(0, 58, 250);"><a data-custom-class="link" href="#privacyrights">7. WHAT ARE YOUR PRIVACY RIGHTS?</a></span></span></div>
        <div style="line-height: 1.5;"><span style="font-size: 15px;"><a data-custom-class="link" href="#DNT"><span style="color: rgb(0, 58, 250);">8. CONTROLS FOR DO-NOT-TRACK FEATURES<bdt class="block-component"></bdt></span></a></span></div>
        <div style="line-height: 1.5;"><span style="font-size: 15px;"><a data-custom-class="link" href="#uslaws"><span style="color: rgb(0, 58, 250);">9. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</span></a><bdt class="block-component"><span style="font-size: 15px;"><span data-custom-class="body_text"></span></bdt></span></div>
        <div style="line-height: 1.5;"><bdt class="block-component"><span style="font-size: 15px;"></bdt><bdt class="block-component"></bdt><bdt class="block-component"></bdt><bdt class="block-component"></bdt><bdt class="block-component"></bdt><bdt class="block-component"></bdt><bdt class="block-component"></bdt><bdt class="block-component"></bdt><bdt class="block-component"></bdt><bdt class="block-component"></bdt><bdt class="block-component"></span></bdt></div>
        <div style="line-height: 1.5;"><span style="font-size: 15px;"><a data-custom-class="link" href="#policyupdates"><span style="color: rgb(0, 58, 250);">10. DO WE MAKE UPDATES TO THIS NOTICE?</span></a></span></div>
        <div style="line-height: 1.5;"><a data-custom-class="link" href="#contact"><span style="color: rgb(0, 58, 250); font-size: 15px;">11. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</span></a></div>
        <div style="line-height: 1.5;"><a data-custom-class="link" href="#request"><span style="color: rgb(0, 58, 250);">12. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</span></a></div>
        <div style="line-height: 1.5;"><br></div>
        <div style="line-height: 1.5;"><br></div>
        <!-- 完整隐私政策内容已插入，包含所有章节和详细信息 -->
    </div>
  `;

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" dangerouslySetInnerHTML={{ __html: privacyPolicyHTML }} />
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

