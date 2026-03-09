import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-navy flex items-center justify-center px-4">
      <div className="text-center">
        <p className="text-8xl md:text-9xl font-display font-bold text-gold">
          404
        </p>
        <h1 className="mt-6 text-3xl md:text-4xl font-display text-white">
          Page Not Found
        </h1>
        <p className="mt-4 text-white/60 font-sans max-w-md mx-auto">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center px-8 py-3 bg-gold text-navy-dark font-sans font-medium rounded-lg hover:bg-gold-light transition-colors duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}
