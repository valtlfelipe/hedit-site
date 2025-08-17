import Privacy from '@/pages/Privacy'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/privacy')({
  component: Privacy,
})

// function RouteComponent() {
//   return <div>Hello "/privacy"!</div>
// }
