import { EnvelopeIcon, PhoneIcon, ClockIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

export default function Footer() {
  return (
    <footer className="bg-[#2B2C2D] text-[#FBF7F0] py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-extrabold text-2xl text-[#FBF7F0] mb-4">Literae</h3>
          <p className="text-sm text-[#A9A9A9] leading-relaxed">
            Temukan petualangan baru di setiap halaman. Literae adalah toko buku online tempat Anda menemukan cerita terbaik.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4 text-[#FBF7F0]">Informasi Toko</h3>
          <ul className="space-y-3 text-sm text-[#A9A9A9]">
            <li className="flex items-center gap-2">
              <ClockIcon className="h-5 w-5 text-[#B58B5C]" />
              <span>Buka setiap hari: 09:00 - 21:00</span>
            </li>
            <li className="flex items-center gap-2">
              <GlobeAltIcon className="h-5 w-5 text-[#B58B5C]" />
              <span>Jl. Teknik Geodesi Blok R no 10</span>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-bold text-lg mb-4 text-[#FBF7F0]">Kontak Kami</h3>
          <ul className="space-y-3 text-sm text-[#A9A9A9]">
            <li className="flex items-center gap-2">
              <EnvelopeIcon className="h-5 w-5 text-[#B58B5C]" />
              <span>radityarakha01@gmail.com</span>
            </li>
            <li className="flex items-center gap-2">
              <PhoneIcon className="h-5 w-5 text-[#B58B5C]" />
              <span>+62 85775525733</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4 text-[#FBF7F0]">Ikuti Kami</h3>
          <div className="flex gap-4 text-xl">
            <a
              href="https://instagram.com/rakharenanda"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#B58B5C] transition-colors"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://linkedin.com/in/raditya-rakha"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#B58B5C] transition-colors"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/lexiiyz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#B58B5C] transition-colors"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-[#A9A9A9]">
        <p>&copy; 2025 Literae. All rights reserved.</p>
      </div>
    </footer>
  );
}
