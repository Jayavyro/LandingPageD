import type { ProductRouteId } from './productRoutes'

const unsplash = (id: string, alt: string) => ({
  src: `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1400&q=80`,
  alt,
})

export const PRODUCT_HERO_IMAGES: Record<
  Exclude<ProductRouteId, 'platform'>,
  { src: string; alt: string }
> = {
  crm: unsplash(
    'photo-1460925895917-afdab827c52f',
    'Project pipeline and client data viewed on a laptop dashboard',
  ),
  billing: unsplash(
    'photo-1554224155-8d04cb21cd6c',
    'Finance team reviewing invoices and project billing on screen',
  ),
  assets: unsplash(
    'photo-1497366216548-37526070297c',
    'Modern office workspace with shared equipment and workstations',
  ),
  proposals: unsplash(
    'photo-1454165804606-c3d57bc86b40',
    'Proposal documents and fee planning open on a laptop',
  ),
  resource: unsplash(
    'photo-1503387762-592deb58ef4e',
    'Project team reviewing schedules and staffing plans on a table',
  ),
  activity: unsplash(
    'photo-1581091226825-a6a2a5aee158',
    'Engineer logging project activity at a workstation',
  ),
  timesheets: unsplash(
    'photo-1524758631624-e2822e304c36',
    'Professional reviewing timesheet entries on a laptop at their desk',
  ),
}

export const PLATFORM_HERO_IMAGE = unsplash(
  'photo-1551288049-bebda4e38f71',
  'Firm-wide analytics and performance metrics on a dashboard screen',
)

export const PLATFORM_MODULE_IMAGES: Record<string, { src: string; alt: string }> = {
  approvals: unsplash(
    'photo-1553877522-43269d4ea984',
    'Manager reviewing pending approvals on a team workflow screen',
  ),
  'bulk-uploader': unsplash(
    'photo-1555949963-aa79dcee981c',
    'Structured data import and file upload on a business laptop',
  ),
  analytics: unsplash(
    'photo-1551288049-bebda4e38f71',
    'Live project profitability and utilization charts on a dashboard',
  ),
  integrations: unsplash(
    'photo-1454165804606-c3d57bc86b40',
    'Connected business tools and project systems on a shared workspace',
  ),
}
