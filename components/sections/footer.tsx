export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="my-4 flex justify-center">
      <p className="text-sm text-muted-foreground text-center md:text-left">
        © {currentYear} HEXERVE SOLUTIONS . All rights reserved. GoHighLevel is a
        trademark of its respective owner.
      </p>
    </footer>
  )
}
