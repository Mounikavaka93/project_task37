export const formatCurrency = (value, digits = 2) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(Number(value) || 0)

export const formatNumber = (value, digits = 2) =>
  new Intl.NumberFormat('en-US', {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(Number(value) || 0)

export const formatCompact = (value) =>
  new Intl.NumberFormat('en-US', {
    notation: 'compact',
    maximumFractionDigits: 2,
  }).format(Number(value) || 0)

export const formatPercent = (value, digits = 2) => {
  const n = Number(value) || 0
  const sign = n > 0 ? '+' : ''
  return `${sign}${n.toFixed(digits)}%`
}
