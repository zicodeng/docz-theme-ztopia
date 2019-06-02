const spacings = {
  'spacing-xs': '5px',
  'spacing-s': '10px',
  'spacing-m': '15px',
  'spacing-l': '20px',
  'spacing-xl': '25px',
};

const fonts = {
  'font-size-xs': '12px',
  'font-size-s': '14px',
  'font-size-m': '16px',
  'font-size-l': '18px',
  'font-size-xl': ' 20px',
};

const shadows = {
  'box-shadow-1': '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.3)',
  'box-shadow-2':
    '0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)',
  'box-shadow-3':
    '0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)',
};

const transitions = {
  'transition-slow': 'all 0.6s ease',
  'transition-fast': 'all 0.3s ease',
};

module.exports = {
  ...spacings,
  ...fonts,
  ...shadows,
  ...transitions,
};
