import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TaxSort AI — AI Tax Category Predictor for Freelancers',
  description: 'Upload receipts and transactions. AI predicts the correct tax categories with confidence scores for your freelancer deductions.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="0ad08af2-8e80-4e3d-83a8-8a45694bf1ae"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  )
}
