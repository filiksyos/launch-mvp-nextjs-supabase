'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '$0',
    period: '/month',
    description: 'Perfect for trying out',
    features: [
      'Basic features',
      'Up to 10 users',
      'Community support',
      '1 GB storage',
    ],
    cta: 'Get Started',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$29',
    period: '/month',
    description: 'Best for professionals',
    features: [
      'All Starter features',
      'Unlimited users',
      'Priority support',
      '100 GB storage',
      'Advanced analytics',
      'Custom integrations',
    ],
    cta: 'Start Free Trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large organizations',
    features: [
      'All Pro features',
      'Dedicated support',
      'Unlimited storage',
      'Custom SLA',
      'Advanced security',
      'On-premise option',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
];

export function PricingSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {plans.map((plan, index) => (
        <motion.div
          key={plan.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className={`relative rounded-2xl p-8 ${
            plan.highlighted
              ? 'bg-primary dark:bg-primary-light text-white shadow-2xl scale-105'
              : 'bg-white dark:bg-neutral-dark border border-slate-200 dark:border-slate-700'
          }`}
        >
          {plan.highlighted && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent dark:bg-accent-light text-white px-4 py-1 rounded-full text-sm font-semibold">
              Most Popular
            </div>
          )}
          
          <div className="text-center">
            <h3 className={`text-2xl font-bold ${
              plan.highlighted ? 'text-white' : 'text-slate-900 dark:text-white'
            }`}>
              {plan.name}
            </h3>
            <p className={`mt-2 text-sm ${
              plan.highlighted ? 'text-white/80' : 'text-slate-600 dark:text-slate-400'
            }`}>
              {plan.description}
            </p>
            <div className="mt-6">
              <span className={`text-4xl font-bold ${
                plan.highlighted ? 'text-white' : 'text-slate-900 dark:text-white'
              }`}>
                {plan.price}
              </span>
              <span className={`text-sm ${
                plan.highlighted ? 'text-white/80' : 'text-slate-600 dark:text-slate-400'
              }`}>
                {plan.period}
              </span>
            </div>
          </div>

          <ul className="mt-8 space-y-4">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-start">
                <Check className={`h-5 w-5 mr-3 flex-shrink-0 ${
                  plan.highlighted ? 'text-white' : 'text-primary dark:text-primary-light'
                }`} />
                <span className={`text-sm ${
                  plan.highlighted ? 'text-white' : 'text-slate-600 dark:text-slate-300'
                }`}>
                  {feature}
                </span>
              </li>
            ))}
          </ul>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full mt-8 px-6 py-3 rounded-lg font-semibold transition-all ${
              plan.highlighted
                ? 'bg-white text-primary hover:bg-slate-100'
                : 'bg-primary dark:bg-primary-light text-white hover:bg-primary-dark dark:hover:bg-primary'
            }`}
          >
            {plan.cta}
          </motion.button>
        </motion.div>
      ))}
    </div>
  );
}
