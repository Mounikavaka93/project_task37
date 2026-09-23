import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { performanceSeries } from '../../data/marketData'
import { formatCurrency } from '../../utils/format'

export default function PerformanceChart({ height = 280 }) {
  return (
    <div className="h-[240px] w-full sm:h-[280px]" style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={performanceSeries} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="pv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3ef0c5" stopOpacity={0.35} />
              <stop offset="100%" stopColor="#3ef0c5" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="#243352" strokeDasharray="3 6" vertical={false} />
          <XAxis dataKey="month" tick={{ fill: '#8b9bb8', fontSize: 12 }} axisLine={false} tickLine={false} />
          <YAxis
            tick={{ fill: '#8b9bb8', fontSize: 12 }}
            axisLine={false}
            tickLine={false}
            tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`}
            width={48}
          />
          <Tooltip
            contentStyle={{
              background: '#111a2e',
              border: '1px solid #243352',
              borderRadius: 12,
              color: '#fff',
            }}
            formatter={(value) => [formatCurrency(value), 'Value']}
          />
          <Area type="monotone" dataKey="value" stroke="#3ef0c5" strokeWidth={2.4} fill="url(#pv)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
