import { Calendar, Tag } from 'lucide-react'
import { useApp } from '../../context/AppContext'
import Modal from '../ui/Modal'

export default function NewsModal() {
  const { newsItem, setNewsItem } = useApp()
  if (!newsItem) return null

  return (
    <Modal open onClose={() => setNewsItem(null)} title={newsItem.title} wide>
      <div className="mb-4 flex flex-wrap gap-3 text-xs text-soft">
        <span className="inline-flex items-center gap-1">
          <Tag size={12} className="text-mint" /> {newsItem.category}
        </span>
        <span className="inline-flex items-center gap-1">
          <Calendar size={12} /> {newsItem.date}
        </span>
      </div>
      <p className="text-sm leading-relaxed text-soft">{newsItem.excerpt}</p>
      <p className="mt-4 text-sm leading-relaxed text-white/85">{newsItem.body}</p>
    </Modal>
  )
}
