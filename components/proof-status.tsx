"use client"

interface ProofStatusProps {
  status: "pending" | "generated" | "failed"
  proof?: any
  error?: string
}

export default function ProofStatus({ status, proof, error }: ProofStatusProps) {
  const statusConfig = {
    pending: {
      icon: (
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100">
          <svg className="animate-spin h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        </div>
      ),
      title: "Generating Your Proof",
      description: "Please wait while we generate your zero-knowledge proof...",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-100",
    },
    generated: {
      icon: (
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100">
          <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
      ),
      title: "Proof Generated Successfully",
      description: "Your zero-knowledge proof has been successfully generated!",
      bgColor: "bg-green-50",
      borderColor: "border-green-100",
    },
    failed: {
      icon: (
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-100">
          <svg className="h-6 w-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
      ),
      title: "Proof Generation Failed",
      description: error || "An error occurred while generating your proof.",
      bgColor: "bg-red-50",
      borderColor: "border-red-100",
    },
  }

  const config = statusConfig[status]

  return (
    <div className={`mt-8 rounded-xl border ${config.borderColor} ${config.bgColor} overflow-hidden`}>
      <div className="p-6">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">{config.icon}</div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{config.title}</h3>
            <p className="text-gray-600 mt-1">{config.description}</p>
          </div>
        </div>

        {status === "pending" && (
          <div className="mt-6 space-y-3">
            <div className="h-2 bg-blue-100 rounded-full overflow-hidden">
              <div className="h-full bg-blue-500 rounded-full animate-progress-indeterminate"></div>
            </div>
            <p className="text-xs text-blue-600 text-center">This may take a few moments</p>
          </div>
        )}

        {status === "generated" && proof && (
          <div className="mt-6">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm font-medium text-gray-700">Proof Details</h4>
                <div className="flex items-center space-x-2">
                  <button className="p-1 text-gray-400 hover:text-gray-700">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                  </button>
                  <button className="p-1 text-gray-400 hover:text-gray-700">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <pre className="text-xs text-gray-600 overflow-x-auto bg-gray-50 p-3 rounded border border-gray-100">
                {JSON.stringify(proof, null, 2)}
              </pre>
            </div>
            <div className="mt-4 flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-3">
              <button className="button-gradient text-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                Verify Proof
              </button>
              <button className="bg-white text-gray-700 px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-all duration-200 flex items-center justify-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
                  />
                </svg>
                Download Proof
              </button>
            </div>
          </div>
        )}

        {status === "failed" && error && (
          <div className="mt-4 bg-white p-4 rounded-lg border border-red-200">
            <div className="flex items-start">
              <svg className="w-5 h-5 text-red-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-sm text-red-600">{error}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
