

interface TimelinePointProps {
  isActive: boolean;
}

export default function TimelinePoint({ isActive }: TimelinePointProps) {
  return (
    <div className="absolute -left-[9px] flex items-center justify-center">
      <div className={`w-4 h-4 rounded-full border-2 ${
        isActive 
          ? 'bg-blue-400 border-blue-400' 
          : 'bg-gray-900 border-blue-500/30'
      }`} />
      {isActive && (
        <div className="absolute w-4 h-4 rounded-full bg-blue-400 animate-ping" />
      )}
    </div>
  );
}