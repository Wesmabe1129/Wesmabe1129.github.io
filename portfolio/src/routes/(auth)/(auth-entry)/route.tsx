import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/(auth)/(auth-entry)')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Outlet />
}
