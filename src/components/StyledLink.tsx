export default function StyledLink() {
  return (
    <a
      href="https://react.dev"
      target="_blank"
      className="inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
    >
      <svg
        width="14"
        height="14"
        role="img"
        aria-label="React logo"
        className="mr-1"
      >
        {/* Dein SVG-Inhalt hier */}
      </svg>
      React
    </a>
  );
}
