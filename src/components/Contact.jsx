import React from 'react';
import { Rocket, ChevronRight } from 'lucide-react';

const Contact = ({ email = "sugandhrevankar@gmail.com" }) => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-12">
      <div className="bg-[#111] border border-white/10 rounded-2xl p-8 md:p-12 relative overflow-hidden group">
        
        {/* Glow Effect */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 group-hover:bg-purple-500/20 transition-all duration-500"></div>

        <div className="relative z-10 flex flex-col items-start">
          
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-indigo-500/10 rounded-full border border-indigo-500/10">
              <Rocket className="w-6 h-6 text-indigo-400" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Let's work together
            </h2>
          </div>

          <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl mb-8">
            I'm available for freelance projects and would love to explore potential collaborations. 
            Feel free to email me, and let's discuss how we can work together!
          </p>

          {/* UPDATED: "mailto:" ensures the email client opens. 
             You can also add a subject line automatically using ?subject=
          */}
          <a 
            href={`mailto:${email}?subject=Project Inquiry`}
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 rounded-xl text-white font-medium hover:bg-white/5 hover:border-white/40 transition-all duration-300 group/btn"
          >
            Get in touch
            <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </a>

        </div>
      </div>
    </div>
  );
};

export default Contact;