import { useState } from 'react'

export default function SettingsPage() {
  const [senior, setSenior] = useState(false)
  const [dark, setDark] = useState(false)

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">设置</h1>
      <div className="flex items-center justify-between rounded-lg border p-3">
        <span>长辈模式</span>
        <input type="checkbox" checked={senior} onChange={(e) => setSenior(e.target.checked)} />
      </div>
      <div className="flex items-center justify-between rounded-lg border p-3">
        <span>深色模式</span>
        <input type="checkbox" checked={dark} onChange={(e) => setDark(e.target.checked)} />
      </div>
      <p className="text-xs text-gray-500">占位：实际主题切换与字号将在后续接入。</p>
    </div>
  )
}


