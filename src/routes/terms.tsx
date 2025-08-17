import Terms from '@/pages/Terms'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/terms')({
  component: Terms,
})

// function RouteComponent() {
//   return <div>Hello "/terms"!</div>
// }
