/**
 * Tailwind build for the Media Library tool.
 *
 * Nova 5 only ships the utility classes its own UI uses, so the tool compiles
 * its own. Utilities are scoped to #nml-tool so they never leak into Nova, and
 * colors read Nova's CSS variables so the tool follows the Nova theme.
 */
const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]

const novaColor = name =>
  Object.fromEntries(
    // Nova stores colors as comma-separated channels, e.g. "100,116,139".
    shades.map(shade => [shade, `rgba(var(--colors-${name}-${shade}), <alpha-value>)`])
  )

module.exports = {
  content: ['./resources/js/**/*.{vue,js}'],
  important: '#nml-tool',
  darkMode: 'class',
  corePlugins: {
    // Nova already applies its own base styles.
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        primary: novaColor('primary'),
        gray: novaColor('gray'),
        red: novaColor('red'),
        green: novaColor('green'),
      },
    },
  },
}
