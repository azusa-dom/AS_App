import { NavLink, Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="min-h-full flex flex-col">
      <main className="flex-1 container mx-auto px-4 py-4">
        <Outlet />
      </main>
      <nav className="sticky bottom-0 border-t bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-gray-900 dark:border-gray-800">
        <ul className="grid grid-cols-4 gap-2 max-w-md mx-auto py-2 text-sm">
          <li>
            <NavLink to="/home" className={({ isActive }) => isActive ? 'text-blue-600 font-medium' : 'text-gray-600'}>首页</NavLink>
          </li>
          <li>
            <NavLink to="/track" className={({ isActive }) => isActive ? 'text-blue-600 font-medium' : 'text-gray-600'}>打卡</NavLink>
          </li>
          <li>
            <NavLink to="/reports" className={({ isActive }) => isActive ? 'text-blue-600 font-medium' : 'text-gray-600'}>趋势</NavLink>
          </li>
          <li>
            <NavLink to="/settings" className={({ isActive }) => isActive ? 'text-blue-600 font-medium' : 'text-gray-600'}>设置</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default App
