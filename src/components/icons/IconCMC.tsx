interface IconCMCProps {
  size?: string | number
  className?: string
}

export function IconCMC({ size, className }: IconCMCProps) {
  return (
    <svg
      height={size}
      className={className}
      viewBox="0 0 76.52 77.67"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m66.54 46.41a4.09 4.09 0 0 1 -4.17.28c-1.54-.87-2.37-2.91-2.37-5.69v-8.52c0-4.09-1.62-7-4.33-7.79-4.58-1.34-8 4.27-9.32 6.38l-8.1 13.11v-16c-.09-3.69-1.29-5.9-3.56-6.56-1.5-.44-3.75-.26-5.94 3.08l-18.11 29.07a32 32 0 0 1 -3.64-14.94c0-17.52 14-31.77 31.25-31.77s31.3 14.25 31.3 31.77v.09s0 .06 0 .09c.17 3.39-.93 6.09-3 7.4zm10-7.57v-.17c-.14-21.35-17.26-38.67-38.29-38.67s-38.25 17.42-38.25 38.83 17.16 38.84 38.25 38.84a37.81 37.81 0 0 0 26-10.36 3.56 3.56 0 0 0 .18-5 3.43 3.43 0 0 0 -4.86-.23 30.93 30.93 0 0 1 -44.57-2.08l16.3-26.2v12.09c0 5.81 2.25 7.69 4.14 8.24s4.78.17 7.81-4.75l9-14.57c.28-.47.55-.87.79-1.22v7.41c0 5.43 2.18 9.77 6 11.91a11 11 0 0 0 11.21-.45c4.2-2.73 6.49-7.67 6.25-13.62z"
        fill="currentColor"
      />
    </svg>
  )
}
