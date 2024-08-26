const { FusesPlugin } = require('@electron-forge/plugin-fuses')
const { FuseV1Options, FuseVersion } = require('@electron/fuses')

module.exports = {
  packagerConfig: {
    asar: true,
    icon: path.join(process.cwd(), 'main', 'build', 'icon'),
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        bin: 'Dashboard CCTV',
      },
    },
    {
      name: '@electron-forge/maker-dmg',
      config: {
        bin: 'Dashboard CCTV',
      },
    },
    {
      name: '@electron-forge/maker-deb',
      config: {
        bin: 'Dashboard CCTV',
        options: {
          icon: path.join(process.cwd(), 'main', 'build', 'icon.png'),
        },
      },
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {
        bin: 'Dashboard CCTV',
        icon: path.join(process.cwd(), 'main', 'build', 'icon.png'),
      },
    },
  ],
  plugins: [
    {
      name: '@electron-forge/plugin-auto-unpack-natives',
      config: {},
    },
    // Fuses are used to enable/disable various Electron functionality
    // at package time, before code signing the application
    new FusesPlugin({
      version: FuseVersion.V1,
      [FuseV1Options.RunAsNode]: false,
      [FuseV1Options.EnableCookieEncryption]: true,
      [FuseV1Options.EnableNodeOptionsEnvironmentVariable]: false,
      [FuseV1Options.EnableNodeCliInspectArguments]: false,
      [FuseV1Options.EnableEmbeddedAsarIntegrityValidation]: true,
      [FuseV1Options.OnlyLoadAppFromAsar]: true,
    }),
  ],
  publishers: [
    {
      name: '@electron-forge/publisher-github',
      config: {
        repository: {
          owner: 'rafifn',
          name: 'dashboard-cctv',
        },
        prerelease: true,
      },
    },
  ],
}