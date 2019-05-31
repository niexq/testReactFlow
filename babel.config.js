module.exports = function (api) {
  api.cache(true);

  const presets = [
    "@babel/preset-flow",
    "@babel/preset-react",
    [
      "@babel/preset-env",
      {
        "useBuiltIns": false,
        "modules": false,
        "targets": {
          "browsers": ["ie >= 11", "chrome >= 56"]
        }
      }
    ],
  ];
  const plugins = [
    "@babel/plugin-syntax-dynamic-import",
    [
      "@babel/plugin-proposal-class-properties",
      { "loose": true }
    ]
  ];

  return {
    presets,
    plugins
  };
}