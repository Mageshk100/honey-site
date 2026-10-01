import React, { useState } from 'react';
import { Mail, CheckCircle, Sparkles, Send } from 'lucide-react';
import { useToast } from '../../context/ToastContext';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { addToast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      addToast('Please enter a valid email address', 'error');
      return;
    }

    setIsSubscribed(true);
    addToast('Thank you for subscribing! Your 10% coupon code is MADHURUM10', 'success');
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-amber-950 via-stone-900 to-amber-950 text-white relative overflow-hidden">
      
      {/* Decorative honeycomb texture */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ backgroundImage: `url('/assets/honeycomb-Dve-Y5Qw.png')`, backgroundRepeat: 'repeat' }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-honey-500/20 border border-honey-400/30 text-honey-300 text-xs font-semibold mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Seasonal Harvest Alerts</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight mb-4">
          Join Our Honey Harvest Circle
        </h2>

        <p className="text-stone-300 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
          Be the first to know when limited seasonal harvests (like Jamun and Moringa) arrive from our hives. 
          Enjoy exclusive beekeeper updates and 10% off your initial order.
        </p>

        {isSubscribed ? (
          <div className="bg-emerald-950/80 border border-emerald-500/50 p-6 rounded-3xl max-w-md mx-auto text-emerald-100 flex items-center justify-center gap-3 animate-in fade-in">
            <CheckCircle className="w-6 h-6 text-emerald-400 shrink-0" />
            <div className="text-left text-sm">
              <p className="font-bold">You're on the list!</p>
              <p className="text-xs text-emerald-200">Use coupon <strong className="text-honey-300">MADHURUM10</strong> at checkout for 10% off.</p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Mail className="absolute left-4 top-3.5 w-5 h-5 text-stone-400" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address..."
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-stone-800/90 border border-stone-700 text-white placeholder-stone-400 text-sm focus:outline-none focus:ring-2 focus:ring-honey-normal"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-honey-normal hover:bg-honey-dark text-white rounded-2xl font-bold text-sm shadow-honey transition-all shrink-0"
            >
              <span>Subscribe</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        )}

        <p className="text-stone-400 text-xs mt-4">
          We respect your privacy. No spam, ever. Unsubscribe with one click anytime.
        </p>

      </div>
    </section>
  );
}
