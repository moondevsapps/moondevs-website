import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, BellRing, Bell, Layers, Activity, Battery, Vibrate, Zap } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const NewAppPrivacyPolicy = () => {
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
            Alarm<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Up</span>
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
                Effective Date: June 30, 2026
              </div>
            </div>
            
            <div>
              <p>
                AlarmUp ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how our application functions and details the permissions required for it to operate effectively.
              </p>
            </div>

            <div>
              <h2>1. Data Collection and Usage</h2>
              <p>AlarmUp does not collect, store, transmit, or share any personal data. The app operates 100% locally on your device and does not even request permission to connect to the Internet. Your alarm configurations, preferences, and schedules are stored securely on your local device storage.</p>
              <p>If you have Android Auto-Backup enabled on your device, your local app preferences may be securely backed up to your personal Google Drive account by the Android operating system. We do not have access to this data.</p>
            </div>

            <div>
              <h2>2. Permissions Required by the App</h2>
              <p>To provide core alarm clock functionalities, AlarmUp requires specific Android device permissions. We strictly use these permissions for their intended purpose:</p>
              
              <div className="not-prose space-y-8 mt-8 mb-12">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Alarms & Reminders</h3>
                  <p className="text-white/70 leading-relaxed text-base">
                    <span className="text-cyan-400 font-medium">Why it is needed:</span> This is the core function of the app. It allows AlarmUp to trigger alarms at the exact millisecond you specify, rather than being delayed by the Android operating system.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Notifications</h3>
                  <p className="text-white/70 leading-relaxed text-base">
                    <span className="text-cyan-400 font-medium">Why it is needed:</span> Used to display an icon in your status bar when an alarm is set, and to show the ringing alarm screen when it goes off.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Display Over Other Apps</h3>
                  <p className="text-white/70 leading-relaxed text-base">
                    <span className="text-cyan-400 font-medium">Why it is needed:</span> When an alarm triggers while you are actively using another app, this permission allows AlarmUp to bring the alarm dismissal screen to the front so you can turn it off.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Foreground Services</h3>
                  <p className="text-white/70 leading-relaxed text-base">
                    <span className="text-cyan-400 font-medium">Why it is needed:</span> Required to reliably play your selected alarm sounds continuously in the background until you dismiss the alarm.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Ignore Battery Optimizations</h3>
                  <p className="text-white/70 leading-relaxed text-base">
                    <span className="text-cyan-400 font-medium">Why it is needed:</span> Modern Android devices aggressively put apps to sleep to save battery (Doze mode). This permission ensures the Android system does not kill the alarm clock process while you sleep, guaranteeing your alarm rings on time.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Vibration Control</h3>
                  <p className="text-white/70 leading-relaxed text-base">
                    <span className="text-cyan-400 font-medium">Why it is needed:</span> Allows the app to vibrate the device when an alarm triggers.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Run at Startup</h3>
                  <p className="text-white/70 leading-relaxed text-base">
                    <span className="text-cyan-400 font-medium">Why it is needed:</span> If you restart your phone, this permission allows AlarmUp to automatically wake up and reschedule your active alarms so you don't miss them.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2>3. Third-Party Services</h2>
              <p>AlarmUp does not use any third-party analytics trackers, advertising networks, or crash reporting software. There are no hidden tracking SDKs installed in the app.</p>
            </div>

            <div>
              <h2>4. Children’s Privacy</h2>
              <p>Because our app does not collect personal data, it is safe for all ages. We do not knowingly collect any personally identifiable information from children under the age of 13.</p>
            </div>

            <div>
              <h2>5. Changes to This Privacy Policy</h2>
              <p>We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately after they are posted.</p>
            </div>

            <div>
              <h2>6. Contact Us</h2>
              <p>If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at:</p>
              <div className="mt-6 p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 inline-block">
                <strong className="text-white text-lg block mb-2">AlarmUp</strong>
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

export default NewAppPrivacyPolicy;
