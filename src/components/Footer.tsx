// import { Link } from "react-router-dom";

// export function Footer() {
//   return (
//     <footer className="bg-[#0f0f0f] border-t border-zinc-800 pt-12 pb-6 px-6">
//       <div className="max-w-6xl mx-auto">
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
//           <div>
//             <p className="text-white font-bold text-lg mb-3"><img src="/Olive.png" alt="FORRABIX" className="h-5 sm:h-8" /></p>
//             <p className="text-zinc-400 text-sm leading-relaxed mb-5">
//               Aesthetic drop shoulder for modern people. Minimal, raw, and always intentional. Designed for those who move different.
//             </p>
//             <div className="flex gap-2">
//               {['IG', 'TK', 'FB', 'WA'].map(social => (
//                 <a
//                   key={social}
//                   href="#"
//                   className="w-8 h-8 border border-zinc-700 flex items-center justify-center text-zinc-400 text-xs hover:border-zinc-400 hover:text-white transition-colors"
//                 >
//                   {social}
//                 </a>
//               ))}
//             </div>
//           </div>
//           <div>
//             <p className="text-zinc-400 text-xs font-bold tracking-widest mb-4">COMPANY</p>
//             <ul className="space-y-3">
//               {['About Us', 'Contact Us', 'Privacy Policy'].map(link => (
//                 <li key={link}>
//                   <a href="#" className="text-zinc-400 text-sm hover:text-white transition-colors">{link}</a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div>
//             <p className="text-zinc-400 text-xs font-bold tracking-widest mb-4">SUPPORT</p>
//             <ul className="space-y-3">
//               {['Track Order', 'Delivery Policy', 'Return Policy'].map(link => (
//                 <li key={link}>
//                   <Link to="/" className="text-zinc-400 text-sm hover:text-white transition-colors">{link}</Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div>
//             <p className="text-zinc-400 text-xs font-bold tracking-widest mb-4">EXTERNAL LINKS</p>
//             <ul className="space-y-3">
//               {['Order Tracking ↗', 'About Us ↗', 'Contact Us ↗', 'Delivery Policy ↗', 'Return Policy ↗'].map(link => (
//                 <li key={link}>
//                   <a href="#" className="text-zinc-400 text-sm hover:text-white transition-colors">{link}</a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//         <div className="border-t border-zinc-800 pt-5 flex items-center justify-between">
//           <p className="text-zinc-400 text-xs">© 2025 FORRABIX. All rights reserved.</p>
//           <div className="bg-[#d4f53c] text-black text-xs font-bold px-3 py-1.5 tracking-wider">
//             Made for Modern People
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-[#0f0f0f] border-t border-zinc-800 pt-12 pb-6 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div>
            <Link to="/" className="inline-block mb-3">
              <img src="/Olive.png" alt="FORRABIX" className="h-5 sm:h-8" />
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed mb-5">
              Aesthetic drop shoulder for modern people. Minimal, raw, and always intentional. Designed for those who move different.
            </p>
            
          </div>

          {/* COMPANY – internal links */}
          <div>
            <p className="text-zinc-400 text-xs font-bold tracking-widest mb-4">COMPANY</p>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-zinc-400 text-sm hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-zinc-400 text-sm hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/privacy-policy" className="text-zinc-400 text-sm hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* SUPPORT – internal links */}
          <div>
            <p className="text-zinc-400 text-xs font-bold tracking-widest mb-4">SUPPORT</p>
            <ul className="space-y-3">
              <li><Link to="/track" className="text-zinc-400 text-sm hover:text-white transition-colors">Track Order</Link></li>
              <li><Link to="/delivery-policy" className="text-zinc-400 text-sm hover:text-white transition-colors">Delivery Policy</Link></li>
              <li><Link to="/return-policy" className="text-zinc-400 text-sm hover:text-white transition-colors">Return Policy</Link></li>
            </ul>
          </div>

          {/* EXTERNAL LINKS – open in new tab */}
          {/* <div>
            <p className="text-zinc-400 text-xs font-bold tracking-widest mb-4">EXTERNAL LINKS</p>
            <ul className="space-y-3">
              <li><a href="https://track.forrabix.com" target="_blank" rel="noopener noreferrer" className="text-zinc-400 text-sm hover:text-white transition-colors">Order Tracking ↗</a></li>
              <li><a href="https://forrabix.com/about" target="_blank" rel="noopener noreferrer" className="text-zinc-400 text-sm hover:text-white transition-colors">About Us ↗</a></li>
              <li><a href="https://forrabix.com/contact" target="_blank" rel="noopener noreferrer" className="text-zinc-400 text-sm hover:text-white transition-colors">Contact Us ↗</a></li>
              <li><a href="https://forrabix.com/delivery" target="_blank" rel="noopener noreferrer" className="text-zinc-400 text-sm hover:text-white transition-colors">Delivery Policy ↗</a></li>
              <li><a href="https://forrabix.com/returns" target="_blank" rel="noopener noreferrer" className="text-zinc-400 text-sm hover:text-white transition-colors">Return Policy ↗</a></li>
            </ul>
          </div> */}
          <div className="flex sm:flex-row flex-col gap-2">
              {[
                { name: "IG", url: "https://www.instagram.com/forrabixinfo/" },
                { name: "TK", url: "https://tiktok.com/@forrabix" },
                { name: "FB", url: "https://facebook.com/forrabix" },
                { name: "WA", url: "https://wa.me/1234567890" },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 border border-zinc-700 flex items-center justify-center text-zinc-400 text-xs hover:border-zinc-400 hover:text-white transition-colors"
                >
                  {social.name}
                </a>
              ))}
            </div>
        </div>

        <div className="border-t border-zinc-800 pt-5 flex items-center justify-between">
          <p className="text-zinc-400 text-xs">© 2025 FORRABIX. All rights reserved.</p>
          <div className="bg-[#d4f53c] text-black text-xs font-bold px-3 py-1.5 tracking-wider">
            Made for Modern People
          </div>
        </div>
      </div>
    </footer>
  );
}