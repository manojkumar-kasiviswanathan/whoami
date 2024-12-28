import ProfileImage from './ProfileImage';
import SocialLinks from './SocialLinks';

export default function Header() {
  return (
    <header className="relative min-h-[350px] flex items-center">
      {/* Animated background */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/20 via-gray-900/20 to-blue-900/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_70%_200px,#3B82F6,transparent)]" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start gap-16">
          <div className="flex-1 space-y-8">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                Manojkumar
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-500">
                  Kasiviswanathan
                </span>
              </h1>
            </div>

            <h2 className="text-xl md:text-2xl text-gray-300 font-light max-w-2xl">
              Senior Test Engineer & DevOps Practitioner
            </h2>

            <SocialLinks />
          </div>
          <ProfileImage />
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
    </header>
  );
}