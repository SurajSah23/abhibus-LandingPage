import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="bg-gray-50 border-t border-gray-200 py-2 px-2 md:px-16">
            <p className="text-gray-600 text-sm">
                <span className="font-medium">AbhIBus | Ixigo | Confirm Tkt</span>
                <span className="text-gray-400 text-xs"> © 2025 Le Travenues Technology Ltd. India.</span>
                <span className="text-gray-400 text-xs">
                    All brands are trademarks of their respective owners •
                    <Link to="/privacy" className="hover:text-blue-600"> Privacy</Link> •
                    <Link to="/terms" className="hover:text-blue-600"> Terms of Use</Link> •
                    <Link to="/career" className="hover:text-blue-600"> Career</Link> •
                    <Link to="/support" className="hover:text-blue-600"> Customer Service</Link>
                </span>
            </p>

            {/* Social Media Icons Aligned to Right */}
            <div className="flex justify-end pt-4 space-x-4">
                <Link to="/facebook" className="text-gray-500 hover:text-gray-700 transition-colors duration-300">
                    <img src="https://i.ibb.co/p6gNpjmC/Screenshot-2025-05-06-230154-removebg-preview.png" alt="Facebook" className="w-6 h-6" />
                </Link>
                <Link to="/twitter" className="text-gray-500 hover:text-gray-700 transition-colors duration-300">
                    <img src="https://i.ibb.co/sJFtRgFd/Screenshot-2025-05-06-230505-removebg-preview.png" alt="Twitter" className="w-6 h-6" />
                </Link>
                <Link to="/instagram" className="text-gray-500 hover:text-gray-700 transition-colors duration-300">
                    <img src="https://i.ibb.co/BVVnSNDd/Screenshot-2025-05-06-230658-removebg-preview.png" alt="Instagram" className="w-6 h-6" />
                </Link>
                <Link to="/linkedin" className="text-gray-500 hover:text-gray-700 transition-colors duration-300">
                    <img src="https://i.ibb.co/847FtNYG/Screenshot-2025-05-06-230843-removebg-preview.png" alt="LinkedIn" className="w-6 h-6" />
                </Link>
                <Link to="/youtube" className="text-gray-500 hover:text-gray-700 transition-colors duration-300">
                    <img src="https://i.ibb.co/65rByyM/Screenshot-2025-05-06-231026-removebg-preview.png" alt="YouTube" className="w-6 h-6" />
                </Link>
            </div>
        </div>
    );
};

export default Footer;
