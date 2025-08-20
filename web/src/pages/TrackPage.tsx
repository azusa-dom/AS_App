import { useState } from 'react'

export default function TrackPage() {
  const [pain, setPain] = useState<number>(3)
  const [stiff, setStiff] = useState<number>(30)
  const [fatigue, setFatigue] = useState<number>(3)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // TODO: 接入本地存储/数据库
    // 结构示意：{ date, pain, morningStiffnessMin: stiff, fatigue }
    // 先占位：
    // eslint-disable-next-line no-console
    console.log({ pain, morningStiffnessMin: stiff, fatigue })
    alert('已保存（示例，本地存储稍后接入）')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h1 className="text-xl font-semibold">今日打卡</h1>

      <div>
        <label className="block text-sm mb-2">疼痛（0-10）: <span className="font-medium">{pain}</span></label>
        <input type="range" min={0} max={10} step={1} value={pain} onChange={(e) => setPain(Number(e.target.value))} className="w-full" />
      </div>

      <div>
        <label className="block text-sm mb-2">晨僵时长（分钟）: <span className="font-medium">{stiff}</span></label>
        <input type="range" min={0} max={120} step={15} value={stiff} onChange={(e) => setStiff(Number(e.target.value))} className="w-full" />
      </div>

      <div>
        <label className="block text-sm mb-2">疲劳（0-10）: <span className="font-medium">{fatigue}</span></label>
        <input type="range" min={0} max={10} step={1} value={fatigue} onChange={(e) => setFatigue(Number(e.target.value))} className="w-full" />
      </div>

      <div className="pt-2">
        <button type="submit" className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700">保存</button>
      </div>
    </form>
  )
}


