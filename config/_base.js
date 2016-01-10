import path from 'path';
import { argv } from 'yargs'

const config = {
  env : process.env.NODE_ENV,
  path_base  : path.resolve(__dirname, '../'),
  dir_src    : path.resolve('./src'),
  dir_dist   : path.resolve('./dist'),
  dir_server : path.resolve('./server'),
  dir_test   : path.resolve('./tests'),
  hmr        : true
};

config.globals = {
   'NODE_ENV'     : config.env,
   '__DEV__'      : config.env === 'development',
   '__PROD__'     : config.env === 'production',
   '__DEBUG__'    : config.env === 'development' && argv.debugging,
};

export default config;
