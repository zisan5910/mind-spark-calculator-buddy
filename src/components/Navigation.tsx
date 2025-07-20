import { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';

interface NavigationItem {
  id: string;
  icon: React.ReactNode;
  target?: string;
}

interface NavigationProps {
  navigationItems: NavigationItem[];
  activeSection: string;
  scrollToSection: (section: string) => void;
  language: 'en' | 'bn';
  setLanguage: (lang: 'en' | 'bn') => void;
  currentPage: string;
  onBackToHome?: () => void;
}

const Navigation = ({
  navigationItems,
  activeSection,
  scrollToSection,
  language,
  setLanguage,
  currentPage
}: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = (section: string) => {
    scrollToSection(section);
    setIsMenuOpen(false);
  };

  const getMenuItemLabel = (id: string) => {
    const labels = {
      en: {
        profile: 'Profile',
        education: 'Education', 
        courses: 'Courses',
        experience: 'Experience',
        certificates: 'Certificates',
        skills: 'Skills',
        family: 'Family',
        contact: 'Contact',
        research: 'Research',
        blog: 'Blog',
        'social-links': 'Social Links'
      },
      bn: {
        profile: 'প্রোফাইল',
        education: 'শিক্ষা',
        courses: 'কোর্স', 
        experience: 'অভিজ্ঞতা',
        certificates: 'সার্টিফিকেট',
        skills: 'দক্ষতা',
        family: 'পরিবার',
        contact: 'যোগাযোগ',
        research: 'গবেষণা',
        blog: 'ব্লগ',
        'social-links': 'সামাজিক লিংক'
      }
    };
    return labels[language][id as keyof typeof labels['en']] || id;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleMenuClick(item.target || item.id)}
                className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === item.id || (currentPage === item.id && ['research', 'blog'].includes(item.id))
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                <span className="text-blue-500">{item.icon}</span>
                <span>{getMenuItemLabel(item.id)}</span>
              </button>
            ))}
          </div>

          {/* Language Toggle */}
          <button
            onClick={() => setLanguage(language === 'en' ? 'bn' : 'en')}
            className="flex items-center gap-2 px-3 py-2 bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200 transition-colors"
          >
            <Globe size={16} />
            <span className="text-sm font-medium">
              {language === 'en' ? 'বাংলা' : 'English'}
            </span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-blue-600"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t bg-white">
            <div className="py-2">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleMenuClick(item.target || item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                    activeSection === item.id || (currentPage === item.id && ['research', 'blog'].includes(item.id))
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  <span className="text-blue-500">{item.icon}</span>
                  <span className="font-medium">{getMenuItemLabel(item.id)}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;