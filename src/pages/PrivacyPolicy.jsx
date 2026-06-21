import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
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
            Privacy Policy. Everything you need to know about how we handle and protect your data.
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
              <h2 className="text-3xl font-bold text-white !mt-0 !mb-6 !border-none !pb-0">Privacy Policy</h2>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium">
                Effective Date: June 20, 2026
              </div>
            </div>
            
            <div>
              <h2>1. Overview</h2>
              <p>
                Nexus Todo ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains what information we collect, how we use it, and how we protect it when you use the Nexus Todo application.
              </p>
              <p>
                We only collect information necessary to provide core functionality, including account management, task synchronization, and productivity features.
              </p>
            </div>

            <div>
              <h2>2. Information We Collect</h2>
              <h3>Account Information</h3>
              <p>When you create an account, we may collect:</p>
              <ul className="list-disc pl-6 space-y-2 marker:text-cyan-500">
                <li>Email address</li>
                <li>Display name</li>
                <li>Profile picture (if provided)</li>
              </ul>

              <h3>App Data</h3>
              <p>While using Nexus Todo, we may collect and store:</p>
              <ul className="list-disc pl-6 space-y-2 marker:text-cyan-500">
                <li>Tasks and task descriptions</li>
                <li>Due dates and reminders</li>
                <li>Task completion status</li>
                <li>Pomodoro and focus session data</li>
                <li>App preferences and settings</li>
              </ul>
            </div>

            <div>
              <h2>3. How We Store and Sync Your Data</h2>
              <h3>Local Storage</h3>
              <p>Your tasks, settings, and application preferences are stored locally on your device to support offline functionality and fast access.</p>

              <h3>Cloud Synchronization</h3>
              <p>If you sign in to Nexus Todo, your data may be securely synchronized using Google Firebase Firestore. This allows your information to be backed up and accessed across supported devices.</p>
            </div>

            <div>
              <h2>4. Third-Party Services</h2>
              <p>Nexus Todo uses the following Google services:</p>
              
              <h3>Firebase Authentication</h3>
              <p>Used to securely manage user accounts, including:</p>
              <ul className="list-disc pl-6 space-y-2 marker:text-cyan-500">
                <li>Email and Password Sign-In</li>
                <li>Google Sign-In</li>
              </ul>
              
              <h3>Firebase Firestore</h3>
              <p>Used to securely store and synchronize user data in the cloud.</p>
              <p className="mt-6 p-5 rounded-xl bg-white/5 border border-white/10 italic text-white/80">
                We do not sell, rent, or share your personal information with third parties for advertising purposes.
              </p>
            </div>

            <div>
              <h2>5. Device Permissions</h2>
              <p>Nexus Todo may request the following permissions:</p>
              
              <h3>Notifications & Vibration</h3>
              <p>Used to:</p>
              <ul className="list-disc pl-6 space-y-2 marker:text-cyan-500">
                <li>Deliver task reminders</li>
                <li>Notify users when Pomodoro sessions end</li>
                <li>Provide productivity-related alerts</li>
              </ul>
              
              <h3>Photo and Media Access</h3>
              <p>Used only when you choose to upload or change your profile picture.</p>
              <p>The app does not access your files or media without your permission.</p>
            </div>

            <div>
              <h2>6. Data Security</h2>
              <p>We implement reasonable security measures to protect your information. Data transmitted to and stored within Firebase services is protected using industry-standard security practices provided by Google.</p>
              <p>While we strive to protect your information, no method of electronic storage or transmission is completely secure.</p>
            </div>

            <div>
              <h2>7. Data Retention</h2>
              <p>Your account information and synchronized data are retained for as long as your account remains active or as necessary to provide the service.</p>
              <p>You may request deletion of your account and associated cloud data by contacting us.</p>
            </div>

            <div>
              <h2>8. Children's Privacy</h2>
              <p>Nexus Todo is not intended for children under the age of 13. We do not knowingly collect personal information from children.</p>
            </div>

            <div>
              <h2>9. Changes to This Privacy Policy</h2>
              <p>We may update this Privacy Policy from time to time to reflect new features, legal requirements, or improvements to our services.</p>
              <p>Any updates will be posted on this page with a revised effective date.</p>
            </div>

            <div>
              <h2>10. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy or the way Nexus Todo handles your information, please contact:</p>
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

export default PrivacyPolicy;
