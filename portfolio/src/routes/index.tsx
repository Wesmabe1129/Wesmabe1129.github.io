import { createFileRoute, Link } from '@tanstack/react-router'
import { Facebook, Github, Linkedin, Mail, Cloud } from 'lucide-react'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div className="min-h-screen bg-white relative">
      {/* Dotted pattern background */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'radial-gradient(circle, #d97706 1px, transparent 1px)',
        backgroundSize: '20px 20px'
      }}></div>

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
          <div className="flex gap-8 text-sm font-medium text-gray-700">
            <a href="#about" className="hover:text-gold-600 transition-colors">About Me</a>
            <a href="#experience" className="hover:text-gold-600 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-gold-600 transition-colors">Projects</a>
            <a href="#resume" className="hover:text-gold-600 transition-colors">Resume</a>
            <a href="#contact" className="hover:text-gold-600 transition-colors">Contact</a>
          </div>
          <Cloud className="text-gold-600 w-6 h-6" />
        </nav>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-8">
              <div>
                <p className="text-gray-600 text-lg mb-2">HELLO! I'M</p>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
                  WILSON <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-600 to-slate-green-400">ESMABE</span>
                </h1>
                <p className="text-xl text-gray-700 mt-4 font-medium">
                  A Junior Fullstack Web Developer
                </p>
              </div>

              {/* Social Icons */}
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full border-2 border-slate-blue-600 flex items-center justify-center text-slate-blue-600 hover:bg-slate-blue-600 hover:text-white transition-all">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border-2 border-slate-blue-600 flex items-center justify-center text-slate-blue-600 hover:bg-slate-blue-600 hover:text-white transition-all">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border-2 border-slate-blue-600 flex items-center justify-center text-slate-blue-600 hover:bg-slate-blue-600 hover:text-white transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border-2 border-slate-blue-600 flex items-center justify-center text-slate-blue-600 hover:bg-slate-blue-600 hover:text-white transition-all">
                  <Mail className="w-5 h-5" />
                </a>
              </div>

              {/* Info */}
              <div className="space-y-2 text-gray-700">
                <p><span className="font-semibold">Location:</span> Philippines</p>
                <p><span className="font-semibold">Status:</span> Available for work</p>
                <p><span className="font-semibold">Experience:</span> Internship & School Projects</p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Soft Skills */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Soft Skills</h2>
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-2 bg-slate-green-600 text-white rounded-full text-sm font-medium">#Creative</span>
                  <span className="px-4 py-2 bg-slate-green-600 text-white rounded-full text-sm font-medium">#Teamwork</span>
                  <span className="px-4 py-2 border-2 border-slate-green-600 text-slate-green-600 rounded-full text-sm font-medium">#Adaptability</span>
                  <span className="px-4 py-2 bg-slate-green-600 text-white rounded-full text-sm font-medium">#Communication</span>
                  <span className="px-4 py-2 border-2 border-slate-green-600 text-slate-green-600 rounded-full text-sm font-medium">#Attention to Detail</span>
                  <span className="px-4 py-2 bg-slate-green-600 text-white rounded-full text-sm font-medium">#Flexibility</span>
                  <span className="px-4 py-2 border-2 border-slate-green-600 text-slate-green-600 rounded-full text-sm font-medium">#Time-Management</span>
                </div>
              </div>

              {/* Profile Picture */}
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-64 h-64 rounded-2xl border-4 border-gold-600 overflow-hidden bg-gold-50">
                    <img
                      src="https://res.cloudinary.com/dbriapahp/image/upload/v1782148178/grad-pic.png"
                      alt="Wilson Esmabe"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Technical Skills */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">Frontend</h2>
                  <div className="flex gap-3 mb-2">
                    <span className="px-3 py-1 bg-gray-100 rounded-lg text-sm font-medium text-gray-700">HTML</span>
                    <span className="px-3 py-1 bg-gray-100 rounded-lg text-sm font-medium text-gray-700">CSS</span>
                    <span className="px-3 py-1 bg-gray-100 rounded-lg text-sm font-medium text-gray-700">JavaScript</span>
                    <span className="px-3 py-1 bg-gray-100 rounded-lg text-sm font-medium text-gray-700">ReactJS</span>
                  </div>
                  <p className="text-sm text-gray-600">Building responsive and interactive user interfaces with modern web technologies</p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">Backend</h2>
                  <div className="flex gap-3 mb-2">
                    <span className="px-3 py-1 bg-gray-100 rounded-lg text-sm font-medium text-gray-700">Node.js</span>
                    <span className="px-3 py-1 bg-gray-100 rounded-lg text-sm font-medium text-gray-700">Python</span>
                  </div>
                  <p className="text-sm text-gray-600">Developing server-side logic and APIs for robust web applications</p>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer with Admin Link */}
        <footer className="max-w-7xl mx-auto px-8 py-6 text-center">
          <Link
            to="/login"
            className="text-gray-400 hover:text-gold-600 text-sm transition-colors"
          >
            Admin Login
          </Link>
        </footer>
      </div>
    </div>
  )
}
