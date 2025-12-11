// Admin layout placeholder
// This will be implemented in future phases for admin panel functionality

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow p-8">
          <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
          <p className="text-gray-600">
            Admin functionality will be implemented in future phases.
          </p>
          {children}
        </div>
      </div>
    </div>
  )
}

