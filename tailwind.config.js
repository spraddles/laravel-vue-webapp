module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
  settings: {
    'tailwindcss': {
      'callees': ['classnames', 'clsx', 'ctl'],
      'config': 'tailwind.config.js',
      // 'groups': defaultGroups, // imported from groups.js
      'prependCustom': false,
      'removeDuplicates': true,
      'whitelist': []
    }
  }
};
