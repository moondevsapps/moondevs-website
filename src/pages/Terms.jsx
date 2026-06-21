import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Terms = () => {
  return (
    <div className="relative min-h-screen bg-[#0B0B0B] overflow-hidden flex flex-col">
      <Navbar />
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none opacity-50" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 pt-32 pb-24 max-w-[900px] relative z-10 flex-grow">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 mb-6 shadow-[0_0_30px_-5px_rgba(6,182,212,0.3)]">
            <ShieldCheck size={32} className="text-cyan-400" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            Nexus <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Todo</span>
          </h1>
          <p className="text-lg text-white/50 max-w-[500px] mx-auto font-light">
            Terms & Conditions. Everything you need to know about the rules and guidelines for using our services.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="p-8 md:p-16 rounded-[40px] border border-white/10 bg-[#0F0F0F]/80 backdrop-blur-2xl shadow-2xl relative overflow-hidden"
        >
          {/* Subtle inner top reflection */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          <div className="prose prose-invert max-w-none space-y-12 text-white/70 prose-headings:text-white prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:pb-4 prose-h2:border-b prose-h2:border-white/10 prose-h3:text-xl prose-h3:text-white/90 prose-h3:mt-8 prose-h3:mb-4 prose-p:leading-relaxed prose-li:leading-relaxed">
            
            <div className="border-b border-white/10 pb-8 mb-4">
              <h2 className="text-3xl font-bold text-white !mt-0 !mb-6 !border-none !pb-0">Terms & Conditions</h2>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium">
                Effective Date: June 20, 2026
              </div>
            </div>
            
            <div>
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing or using MoonDevs websites, applications, and services (collectively, the "Services"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our Services.
              </p>
            </div>

            <div>
              <h2>2. About MoonDevs</h2>
              <p>MoonDevs develops software applications, productivity tools, and digital services designed to help users improve their workflows and daily productivity.</p>
            </div>

            <div>
              <h2>3. User Accounts</h2>
              <p>Some Services may require you to create an account.</p>
              <p>You are responsible for:</p>
              <ul className="list-disc pl-6 space-y-2 marker:text-cyan-500">
                <li>Maintaining the confidentiality of your account credentials.</li>
                <li>All activities that occur under your account.</li>
                <li>Providing accurate and up-to-date information.</li>
              </ul>
              <p>You agree not to share your account with others.</p>
            </div>

            <div>
              <h2>4. Acceptable Use</h2>
              <p>You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2 marker:text-cyan-500">
                <li>Use the Services for unlawful purposes.</li>
                <li>Attempt to gain unauthorized access to our systems.</li>
                <li>Interfere with the operation of the Services.</li>
                <li>Reverse engineer, copy, modify, or distribute our software without permission.</li>
                <li>Upload malicious code, viruses, or harmful content.</li>
              </ul>
            </div>

            <div>
              <h2>5. Intellectual Property</h2>
              <p>All content, branding, logos, software, designs, and materials provided through MoonDevs are the property of MoonDevs unless otherwise stated.</p>
              <p>You may not reproduce, distribute, or commercially exploit any part of the Services without prior written permission.</p>
            </div>

            <div>
              <h2>6. User Content</h2>
              <p>You retain ownership of any tasks, notes, data, or other content you create within our applications.</p>
              <p>By using the Services, you grant MoonDevs the limited rights necessary to store, process, and synchronize your content solely for providing the Service.</p>
            </div>

            <div>
              <h2>7. Service Availability</h2>
              <p>We strive to provide reliable Services, but we do not guarantee uninterrupted availability.</p>
              <p>Services may be modified, suspended, or discontinued at any time without prior notice.</p>
            </div>

            <div>
              <h2>8. Disclaimer of Warranties</h2>
              <p>The Services are provided on an "as is" and "as available" basis.</p>
              <p>MoonDevs makes no warranties, express or implied, regarding:</p>
              <ul className="list-disc pl-6 space-y-2 marker:text-cyan-500">
                <li>Availability of the Services</li>
                <li>Accuracy of information</li>
                <li>Reliability or fitness for a particular purpose</li>
                <li>Error-free operation</li>
              </ul>
              <p>Your use of the Services is at your own risk.</p>
            </div>

            <div>
              <h2>9. Limitation of Liability</h2>
              <p>To the maximum extent permitted by applicable law, MoonDevs shall not be liable for:</p>
              <ul className="list-disc pl-6 space-y-2 marker:text-cyan-500">
                <li>Loss of data</li>
                <li>Loss of profits</li>
                <li>Business interruption</li>
                <li>Indirect, incidental, special, or consequential damages</li>
              </ul>
              <p>arising from the use or inability to use the Services.</p>
            </div>

            <div>
              <h2>10. Privacy</h2>
              <p>Your use of the Services is also governed by our Privacy Policy.</p>
              <p>Please review the applicable Privacy Policy for information regarding how your data is collected, used, and protected.</p>
            </div>

            <div>
              <h2>11. Termination</h2>
              <p>We reserve the right to suspend or terminate access to the Services if a user violates these Terms or engages in activities that may harm the Services or other users.</p>
            </div>

            <div>
              <h2>12. Changes to These Terms</h2>
              <p>We may update these Terms from time to time.</p>
              <p>Any changes will become effective upon posting the updated version on our website or within our applications.</p>
              <p>Continued use of the Services after such updates constitutes acceptance of the revised Terms.</p>
            </div>

            <div>
              <h2>13. Contact</h2>
              <p>If you have any questions regarding these Terms of Service, please contact:</p>
              <div className="mt-6 p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 inline-block">
                <strong className="text-white text-lg block mb-2">MoonDevs</strong>
                <span className="text-white/60">Email: </span> 
                <a href="mailto:atul1995og@gmail.com" className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors">
                  atul1995og@gmail.com
                </a>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;
