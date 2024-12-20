
import ProfileImage from './ProfileImage';
import SocialLinks from './SocialLinks';

export default function Header() {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-gray-900"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop')] opacity-10 bg-cover bg-center"></div>
      <div className="relative container mx-auto px-4 py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-2/3 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white tracking-tight">
              Manojkumar Kasiviswanathan
            </h1>
            <h2 className="text-2xl md:text-3xl text-blue-200 mb-8 font-light">
                Senior Test Engineer & DevOps Practitioner
            </h2>
            <SocialLinks />
          </div>
          <ProfileImage />
        </div>
      </div>
    </header>
  );
}