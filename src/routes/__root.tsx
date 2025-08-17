import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
    head: () => ({
        links: [
            {
                rel: 'icon',
                href: '/favicon.ico',
            },
        ],
        scripts: [
            {
                src: 'https://umami.bluelab.cloud/script.js',
                defer: true,
                'data-website-id': '4483964e-a22c-4ba7-9857-be25f8b1e55b'
            },
        ],
    }),
    component: () => (
        <>
            <TooltipProvider>
                <Toaster />
                <Sonner />
                <Outlet />
                <TanStackRouterDevtools />
            </TooltipProvider>
        </>
    ),
})