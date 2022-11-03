module.exports = {
  apps: [
    {
      name: 'vineta',
      exec_mode: 'cluster',
      instances: 'max', // Or a number of instances
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start',
      env: {
        HOST: '127.0.0.1',
        PORT: 3000,
        NODE_ENV: 'production',
      },
    },
  ],
}
