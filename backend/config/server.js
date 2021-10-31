module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '79589dacc73b1c26541f0f4339df554b'),
    },
  },
  cron: {
    enabled: true,
  },
})
