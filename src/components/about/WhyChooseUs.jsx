import { motion } from 'framer-motion'
import { BarChart3, Lock, Radio, Sparkles } from 'lucide-react'
import { whyChoose } from '../../data/marketData'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

const icons = [Lock, Radio, Sparkles, BarChart3]

export default function WhyChooseUs() {
  return (
    <section className="shell py-10 lg:py-12">
      <Reveal>
        <SectionHeading
          eyebrow="Why Meridian"
          title="Built for serious, simple investing"
          copy="The same principles we use on a trading floor — clarity, speed, and control — without the clutter."
        />
      </Reveal>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {whyChoose.map((item, i) => {
          const Icon = icons[i]
          return (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.55 }}
              whileHover={{ y: -6, borderColor: 'rgba(62,240,197,0.35)' }}
              className="rounded-3xl border border-line bg-panel p-6"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-mint/12 text-mint">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-soft">{item.text}</p>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}
