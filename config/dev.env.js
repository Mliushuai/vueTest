/**
 * 开发环境配置API
 */
'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API: '"http://192.168.2.8:11110/api/industry"'
})
