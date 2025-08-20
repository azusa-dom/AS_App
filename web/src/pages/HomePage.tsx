import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div className="space-y-4">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">今日概览</h1>
        <Link to="/track" className="px-3 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 active:scale-[0.99]">快速记录</Link>
      </header>

      <section className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-lg border p-4">
          <h2 className="text-sm text-gray-500 mb-2">本周记录</h2>
          <p className="text-gray-800 dark:text-gray-100">占位：疼痛均值、打卡天数、发作次数</p>
        </div>
        <div className="rounded-lg border p-4">
          <h2 className="text-sm text-gray-500 mb-2">微课</h2>
          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-200 space-y-1">
            <li>坐姿与颈背放松（2 分钟）</li>
            <li>晨僵自评方法</li>
          </ul>
        </div>
      </section>
    </div>
  )
}


