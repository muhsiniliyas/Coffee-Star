export default function CategoryButton({ icon, label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`
        flex flex-col sm:flex-row items-center justify-center
        gap-1 sm:gap-2 md:gap-3
        px-3 sm:px-4 md:px-5 lg:px-6
        py-2 sm:py-3 md:py-4
        rounded-xl sm:rounded-2xl
        transition-all duration-300
        min-w-[80px] sm:min-w-[100px] md:min-w-[120px]
        ${
          active
            ? 'bg-gradient-to-r from-amber-600 to-amber-500 text-white shadow-lg scale-105 hover:from-amber-700 hover:to-amber-600'
            : 'glass-effect hover:shadow-lg hover:scale-105 active:scale-95'
        }
      `}
      aria-pressed={active}
      aria-label={`Filter by ${label}`}
    >
      <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl transition-transform group-hover:scale-110">
        {icon}
      </span>
      <span className="text-xs sm:text-sm md:text-base font-medium uppercase tracking-wide">
        {label}
      </span>
    </button>
  )
}
