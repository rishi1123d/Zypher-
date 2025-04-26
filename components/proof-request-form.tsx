"use client"

import type React from "react"
import { useState } from "react"

interface ProofRequestFormProps {
  onProofRequested: (request: string) => void
}

export default function ProofRequestForm({ onProofRequested }: ProofRequestFormProps) {
  const [request, setRequest] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (request.trim()) {
      onProofRequested(request)
    }
  }

  const suggestions = [
    { id: "1", category: "finance", text: "I earn over $50k annually" },
    { id: "2", category: "personal", text: "I'm over 18 years old" },
    { id: "3", category: "identity", text: "I have a valid driver's license" },
    { id: "4", category: "citizenship", text: "I'm a US citizen" },
    { id: "5", category: "education", text: "I have a college degree" },
    { id: "6", category: "finance", text: "I have a credit score above 700" },
    { id: "7", category: "personal", text: "I'm a homeowner" },
    { id: "8", category: "identity", text: "I have a valid passport" },
  ]

  const categories = [
    { id: "all", name: "All" },
    { id: "finance", name: "Finance" },
    { id: "personal", name: "Personal" },
    { id: "identity", name: "Identity" },
    { id: "citizenship", name: "Citizenship" },
    { id: "education", name: "Education" },
  ]

  const filteredSuggestions =
    selectedCategory === "all" ? suggestions : suggestions.filter((s) => s.category === selectedCategory)

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="proof-request" className="block text-sm font-medium text-gray-700 mb-2">
            What would you like to prove?
          </label>
          <div className="relative">
            <input
              id="proof-request"
              type="text"
              value={request}
              onChange={(e) => setRequest(e.target.value)}
              placeholder="e.g., 'I earn over $50k annually'"
              className="input-field pl-10"
              required
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="w-full button-gradient py-3 px-6 rounded-xl shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          disabled={!request.trim()}
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
          Generate Proof
        </button>
      </form>

      <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-medium text-gray-700">Popular Proof Templates</h3>
          <div className="relative">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="text-xs bg-white border border-gray-200 text-gray-700 py-1 pl-2 pr-7 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary-500"
            >
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {filteredSuggestions.map((suggestion) => (
            <button
              key={suggestion.id}
              onClick={() => setRequest(suggestion.text)}
              className="px-3 py-2 bg-white hover:bg-gray-50 text-gray-700 text-sm rounded-lg border border-gray-200 transition-colors duration-200 flex items-center"
            >
              <span className="w-2 h-2 rounded-full bg-primary-400 mr-2"></span>
              {suggestion.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
