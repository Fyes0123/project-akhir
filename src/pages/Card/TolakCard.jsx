export default function TolakCard() {
  return (
    <div className="bg-white rounded-3xl shadow-sm border overflow-hidden">
      <div className="flex items-start justify-between p-6">
        <div className="flex gap-4">
          <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white font-bold text-xl">
            !
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              Loan Application Rejected
            </h3>

            <p className="text-gray-600 mt-1">
              Mohon Maaf! Pengajuan pinjaman anda tidak disetujui.
              .
            </p>

            <span className="inline-block mt-3 px-3 py-1 text-sm font-medium text-white bg-red-600 rounded-full">
              Loan Status
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-500">
            Just now
          </span>

          <div className="w-3 h-3 rounded-full bg-red-500" />
        </div>
      </div>
    </div>
  )
}