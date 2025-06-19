import { Home, User, Settings, Menu } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-white shadow-sm flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <Menu size={28} className="md:hidden cursor-pointer" onClick={() => setSidebarOpen(!sidebarOpen)} />
          <Home size={28} className="text-blue-600" />
          <span className="font-bold text-xl text-blue-700">Springer Secure LMS</span>
        </div>
        <div className="flex items-center gap-4">
          <User size={24} />
          <span className="hidden md:inline text-gray-700 font-medium">Elsbeth Headley</span>
          <Settings size={24} className="cursor-pointer" />
        </div>
      </header>
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className={`fixed md:static z-20 top-0 left-0 h-full bg-white shadow-md w-64 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-200 ease-in-out`}>
          <nav className="flex flex-col gap-2 p-6 pt-8">
            <Link href="/" className="flex items-center gap-2 text-blue-700 font-semibold hover:bg-blue-50 px-3 py-2 rounded">
              <Home size={20} />
              Dashboard
            </Link>
            <Link href="/" className="flex items-center gap-2 text-gray-700 hover:bg-blue-50 px-3 py-2 rounded">
              <User size={20} />
              My Profile
            </Link>
            <Link href="/" className="flex items-center gap-2 text-gray-700 hover:bg-blue-50 px-3 py-2 rounded">
              <Settings size={20} />
              Settings
            </Link>
          </nav>
        </aside>
        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-30 z-10 md:hidden" onClick={() => setSidebarOpen(false)}></div>
        )}
        {/* Main Content */}
        <main className="flex-1 ml-0 md:ml-64">{children}</main>
      </div>
      <footer className="bg-white border-t py-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Springer Nature Surgery. All rights reserved.
      </footer>
    </div>
  );
}