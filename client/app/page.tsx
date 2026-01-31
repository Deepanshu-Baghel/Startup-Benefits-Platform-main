'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center pt-20 pb-20 px-4 sm:px-6 lg:px-8">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto space-y-8"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-purple-300 mb-4"
        >
          <Zap size={14} className="fill-purple-300" />
          <span>Exclusive for Startups & Indie Hackers</span>
        </motion.div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          Scale your startup with <br />
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Premium Deals
          </span>
        </h1>

        <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Access thousands of dollars in credits and discounts on the world's best software.
          Verify your startup and start saving today.
        </p>

        <div className="flex items-center justify-center gap-4 mt-8">
          <Link href="/deals" className="group relative inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-gray-200 transition-all hover:scale-105">
            Explore Deals
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="/register" className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/10 text-white rounded-full font-bold text-lg hover:bg-white/20 transition-all">
            Get Access
          </Link>
        </div>
      </motion.div>

      {/* Features Grid */}
      <div id="features" className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-32 max-w-6xl w-full">
        {[
          { title: "Instant Access", desc: "No waiting. Get access to public deals immediately upon signup." },
          { title: "Verified Savings", desc: "Unlock premium tiers with simple startup verification." },
          { title: "Curated Stack", desc: "Tools selected specifically for high-growth tech teams." }
        ].map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors"
          >
            <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
              <CheckCircle2 className="text-purple-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-400">{feature.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Integrations Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mt-32 max-w-6xl w-full text-center"
      >
        <h2 className="text-4xl font-bold mb-8">Integrations</h2>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          Seamlessly connect with your favorite tools and platforms.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { name: "Stripe", logo: "/logos/stripe.svg" },
            { name: "Vercel", logo: "/logos/vercel.svg" },
            { name: "Notion", logo: "/logos/notion.svg" },
            { name: "HubSpot", logo: "/logos/hubspot.svg" }
          ].map((integration, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors flex flex-col items-center justify-center"
            >
              <img src={integration.logo} alt={integration.name} className="w-12 h-12 mb-4" />
              <h3 className="text-lg font-semibold">{integration.name}</h3>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* FAQs Section */}
      <motion.div
        id="faqs"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-32 max-w-4xl w-full"
      >
        <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            {
              question: "How do I verify my startup?",
              answer: "Simply provide your company details and we'll verify your startup status. This unlocks premium deals and higher credit limits."
            },
            {
              question: "Are the deals really exclusive?",
              answer: "Yes! These are negotiated rates specifically for verified startups and indie hackers that you won't find publicly."
            },
            {
              question: "What's the minimum team size?",
              answer: "We accept solo founders and teams of any size. The key requirement is that you're building something innovative."
            },
            {
              question: "How long do deals last?",
              answer: "Most deals are ongoing partnerships, but some have time-limited offers. Check individual deal details for specifics."
            }
          ].map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
              <p className="text-gray-400">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
