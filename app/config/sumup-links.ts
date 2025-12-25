// SumUp Payment Links Configuration
// Jamia Masjid West Drayton Trust

export const sumupLinks = {
  general: {
    preset: {
      '10': 'https://pay.sumup.com/b2c/QG7NVEJM',
      '20': 'https://pay.sumup.com/b2c/QW6VTL0O',
      '50': 'https://pay.sumup.com/b2c/QBX10HY1',
      '100': 'https://pay.sumup.com/b2c/QVOV9RH0',
    },
    variable: 'https://pay.sumup.com/b2c/QRUJIG4W',
  },
  sadaqah: {
    variable: 'https://pay.sumup.com/b2c/QZ3IOJSM',
  },
  zakat: {
    variable: 'https://pay.sumup.com/b2c/QHNGSYKZ',
  },
  ramadan: {
    variable: 'https://pay.sumup.com/b2c/QXOJMBMD',
  },
  other: {
    variable: 'https://pay.sumup.com/b2c/QDGTHSWX',
  },
} as const

export type DonationType = keyof typeof sumupLinks

