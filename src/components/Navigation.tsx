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
  onBackToHome: () => void;
}

const Navigation = ({
  navigationItems,
  activeSection,
  scrollToSection,
  language,
  setLanguage,
  currentPage,
  onBackToHome
}: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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

  const LanguageToggle = () => (
    <button
      onClick={() => setLanguage(language === 'en' ? 'bn' : 'en')}
      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors duration-200"
      aria-label="Toggle Language"
    >
      <Globe size={16} />
      <span className="text-sm font-medium">{language === 'en' ? 'বাংলা' : 'English'}</span>
    </button>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <button
              onClick={onBackToHome}
              className="text-xl font-bold text-primary hover:text-primary/80 transition-colors duration-200"
            >
              Portfolio
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleMenuClick(item.target || item.id)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSection === item.id || 
                  (currentPage === item.id && ['research', 'blog'].includes(item.id))
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'hover:bg-muted text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.icon}
                <span>{getMenuItemLabel(item.id)}</span>
              </button>
            ))}
          </div>

          {/* Desktop Language Toggle */}
          <div className="hidden lg:block">
            <LanguageToggle />
          </div>

          {/* Mobile Menu Button + Language Toggle */}
          <div className="lg:hidden flex items-center gap-3">
            <LanguageToggle />
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg hover:bg-muted transition-colors duration-200"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border">
            <div className="py-4 space-y-2">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleMenuClick(item.target || item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                    activeSection === item.id || 
                    (currentPage === item.id && ['research', 'blog'].includes(item.id))
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'hover:bg-muted text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {item.icon}
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