import React from 'react';
import { Twitter, Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <a href="https://virtuestech.com/" target="_blank" rel="noopener noreferrer">
                <img 
                  src="/virtuestech.png" 
                  alt="Virtuelity" 
                  className="h-8 w-auto"
                />
              </a>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Leading cybersecurity service provider specializing in SOC as a Service solutions. 
              Protecting organizations worldwide with advanced threat detection and response capabilities.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-blue-600 hover:bg-blue-700 p-3 rounded-lg transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-blue-600 hover:bg-blue-700 p-3 rounded-lg transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="bg-blue-600 hover:bg-blue-700 p-3 rounded-lg transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="bg-blue-600 hover:bg-blue-700 p-3 rounded-lg transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">SOC as a Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Threat Detection</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Incident Response</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Security Monitoring</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Compliance Management</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="text-gray-400 space-y-2">
              <div>
                <div className="text-white font-medium mb-1">Our Location</div>
                <div className="text-sm leading-relaxed">
                  AO-06, Block A, Indu Fortune Fields -<br />
                  The Annexe, K P H B Phase 7, Kukatpally,<br />
                  Hyderabad, Telangana - 500085
                </div>
              </div>
              <div className="pt-2">
                <div className="text-white font-medium">Phone</div>
                <div className="text-orange-400">+91 733 746 2335</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2020-2025 All Rights Reserved. VirtuesTech ® is a registered trademark of Virtue Software Technologies Private Limited.
            </div>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Security</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;