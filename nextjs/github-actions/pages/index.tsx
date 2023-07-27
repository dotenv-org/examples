import Link from 'next/link'

export default function IndexPage() {
  return (
    <div>
      Hello {process.env.NEXT_PUBLIC_HELLO}.
    </div>
  )
}
