module.exports = {
  content: ['./index.html', './desktop/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'drop-down-arrow-image': "url('./assets/dropdownarrow.svg')"  
      },
      backgroundSize: {
        'drop-down-arrow-size': '16px 12px'
      },
      backgroundPosition: {
        'drop-down-arrow-position': 'right 0.75rem center'
      }
    }
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
}
