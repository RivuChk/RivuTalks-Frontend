{
  mode: 'development',
  resolve: {
    modules: [
      'node_modules'
    ]
  },
  plugins: [
    ProgressPlugin {
      profile: false,
      handler: [Function: handler],
      modulesCount: 5000,
      dependenciesCount: 10000,
      showEntries: true,
      showModules: true,
      showDependencies: true,
      showActiveModules: false,
      percentBy: undefined
    },
    TeamCityErrorPlugin {}
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'source-map-loader'
        ],
        enforce: 'pre'
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {}
          },
          {
            loader: 'css-loader',
            options: {}
          }
        ],
        exclude: undefined,
        include: undefined
      }
    ]
  },
  entry: {
    main: [
      '/Users/rivu/rivu-talks/rivu-talks-frontend/build/js/packages/rivu-talks-frontend/kotlin/rivu-talks-frontend.js'
    ]
  },
  output: {
    path: '/Users/rivu/rivu-talks/rivu-talks-frontend/build/distributions',
    filename: [Function: filename],
    library: 'rivu-talks-frontend',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  devtool: 'eval-source-map',
  ignoreWarnings: [
    /Failed to parse source map/
  ],
  devServer: {
    open: true,
    static: [
      '/Users/rivu/rivu-talks/rivu-talks-frontend/build/processedResources/js/main'
    ],
    client: {
      overlay: {
        errors: true,
        warnings: false
      }
    }
  },
  stats: {
    warnings: false,
    errors: false
  }
}