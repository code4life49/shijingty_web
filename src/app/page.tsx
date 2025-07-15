export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Navigation */}
      <nav className="p-6 border-b border-gray-700">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-xl font-bold">ShiJing TongYue</div>
          <div className="flex space-x-6 text-sm">
            <a href="#about" className="hover:text-blue-400 transition-colors">
              About
            </a>
            <a href="#services" className="hover:text-blue-400 transition-colors">
              Products
            </a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">ShiJing TongYue</h1>
          <h2 className="text-xl md:text-2xl text-gray-300 mb-8">ShijingTY Technologies</h2>
          <div className="text-2xl md:text-3xl font-light text-blue-400 mb-6">Indie Hacker · 独立开发者</div>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">Turning creative ideas into digital products that users love</p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full transition-colors font-medium">Explore Our Apps</button>
            <button className="border border-gray-600 hover:border-gray-400 px-8 py-3 rounded-full transition-colors">Get in Touch</button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">About Us</h3>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h4 className="text-xl font-semibold mb-4 text-blue-400">Product-Focused Innovation</h4>
              <p className="text-gray-300 mb-6">We are a creative indie development studio specializing in original app ideas and digital products. Our focus is on building innovative solutions that solve real problems and delight users, with occasional custom development for select partners.</p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300">Original App Development</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300">Creative Digital Products</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300">User-Centered Design</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-4xl font-bold">SJ</span>
              </div>
              <p className="text-gray-400 italic">&ldquo;Transforming creative ideas into apps that users love&rdquo;</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">What We Do</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors">
              <div className="text-blue-400 text-2xl mb-4">🚀</div>
              <h4 className="text-xl font-semibold mb-3">Original Apps</h4>
              <p className="text-gray-400">We create and launch our own mobile and web applications based on innovative ideas and market insights.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors">
              <div className="text-blue-400 text-2xl mb-4">�</div>
              <h4 className="text-xl font-semibold mb-3">Creative Products</h4>
              <p className="text-gray-400">Digital products and tools designed to solve real problems and enhance user experiences in daily life.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors">
              <div className="text-blue-400 text-2xl mb-4">🤝</div>
              <h4 className="text-xl font-semibold mb-3">Select Partnerships</h4>
              <p className="text-gray-400">Custom development services for carefully chosen clients and strategic partners who share our vision.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-gray-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8">Let&rsquo;s Create Together</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">Have an interesting project or want to collaborate? Get in touch and let&rsquo;s discuss how we can bring creative ideas to life.</p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3 rounded-full transition-all font-medium">Start a Conversation</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-700">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="font-bold">诗璟同悦</div>
            <div className="text-sm text-gray-400">ShijingTY Technologies</div>
          </div>
          <div className="text-sm text-gray-400">
            © 2025{" "}
            <a href="https://code4life.net" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              CODE4LIFE
            </a>
            . All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
