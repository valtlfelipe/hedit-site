import Human from '@/pages/Human'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/human')({
  component: Human,
})

// function RouteComponent() {
//   return <div>Hello "/human"!</div>
// }
