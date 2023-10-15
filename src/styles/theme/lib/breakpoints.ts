const breakpoints = {
  xs: 0,
  sm: 768,
  md: 1025,
  lg: 1200,
  xl: 1440,
} as const

// mobile first
export const from = {
  xs: `@media screen and (min-width: ${breakpoints.xs}px)`,
  sm: `@media screen and (min-width: ${breakpoints.sm}px)`,
  md: `@media screen and (min-width: ${breakpoints.md}px)`,
  lg: `@media screen and (min-width: ${breakpoints.lg}px)`,
  xl: `@media screen and (min-width: ${breakpoints.xl}px)`,
}

// desktop first
export const to = {
  xs: `@media screen and (max-width: ${breakpoints.xs - 1}px)`,
  sm: `@media screen and (max-width: ${breakpoints.sm - 1}px)`,
  md: `@media screen and (max-width: ${breakpoints.md - 1}px)`,
  lg: `@media screen and (max-width: ${breakpoints.lg - 1}px)`,
  xl: `@media screen and (max-width: ${breakpoints.xl - 1}px)`,
}

export default Object.freeze(breakpoints)
