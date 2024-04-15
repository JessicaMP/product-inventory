export const COLORS_HOVER = {
  primary: 'hover:bg-opacity-80',
  'primary-outline': 'hover:bg-[#dc8a00] hover:text-white',
  'secondary-outline': 'hover:bg-[#6B99C3] hover:bg-opacity-20'
}

export const COLORS = {
  primary: `bg-[#dc8a00] border-[#dc8a00] text-white ${COLORS_HOVER.primary}`,
  'primary-outline': `bg-white text-[#dc8a00] border-[#dc8a00] ${COLORS_HOVER['primary-outline']}`,
  'secondary-outline': `text-[#16354D] ${COLORS_HOVER['secondary-outline']} border-none`
}

export const SIZES = {
  small: 'py-1 px-2',
  medium: 'py-2 px-4',
  large: 'py-3 px-6'
}
