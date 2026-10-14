const path = require('path');
const fs = require('fs');

// Sibling clone (../Viewers) or in-tree clone (extensions/download-manager).
const candidates = [
  path.resolve(__dirname, '../Viewers/babel.config.js'),
  path.resolve(__dirname, '../../babel.config.js'),
];

for (const candidate of candidates) {
  if (fs.existsSync(candidate)) {
    module.exports = require(candidate);
    return;
  }
}

module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    ['@babel/preset-react', { runtime: 'automatic' }],
  ],
};
