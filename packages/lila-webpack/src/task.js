import webpack from 'webpack';
import run from './run';

export default ({ entry, args, argv, cmd, config, lila }) => cb => {
  const { getSetting } = lila;
  const webpackConfigGenerator = getSetting('webpackConfigGenerator');

  if (!webpackConfigGenerator)
    throw new Error('webpackConfigGenerator not configured');

  const makeWebpackConfig = webpackConfigGenerator(webpack);

  if (typeof makeWebpackConfig !== 'function')
    throw new Error('webpackConfigGenerator should return a function');

  const webpackConfig = makeWebpackConfig({
    entry,
    args,
    argv,
    cmd,
    config,
    lila,
  });

  if (!Array.isArray(webpackConfig)) {
    // single config

    run(lila, webpackConfig, () => {
      cb();
    });
  } else {
    // multiple

    let index = 0;
    // go on
    const goon = () => {
      run(lila, webpackConfig[index], () => {
        index += 1;

        if (index >= webpackConfig.length) cb();
        else goon();
      });
    };

    goon();
  }
};
