import PricingPage from '@/pages/Pricing'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/pricing')({
    component: PricingPage,
})

// function Index() {
//     return (
//         <div className="p-2">
//             <h3>Welcome Home!</h3>
//         </div>
//     )
// }