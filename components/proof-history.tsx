"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Mock data for proof history
const mockProofs = [
  {
    id: "proof-1",
    statement: "I earn over $50k annually",
    timestamp: "2023-04-15T14:32:21Z",
    status: "verified",
    type: "income",
  },
  {
    id: "proof-2",
    statement: "I am over 18 years old",
    timestamp: "2023-04-10T09:15:43Z",
    status: "verified",
    type: "identity",
  },
  {
    id: "proof-3",
    statement: "I have a valid driver's license",
    timestamp: "2023-03-28T16:45:12Z",
    status: "verified",
    type: "credential",
  },
  {
    id: "proof-4",
    statement: "I have a credit score above 700",
    timestamp: "2023-03-15T11:22:09Z",
    status: "expired",
    type: "finance",
  },
]

export default function ProofHistory() {
  const [proofs] = useState(mockProofs)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(date)
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "verified":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Verified</Badge>
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Pending</Badge>
      case "expired":
        return <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">Expired</Badge>
      default:
        return <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">{status}</Badge>
    }
  }

  const getTypeBadge = (type: string) => {
    switch (type) {
      case "income":
        return (
          <Badge variant="outline" className="border-blue-200 text-blue-700">
            Income
          </Badge>
        )
      case "identity":
        return (
          <Badge variant="outline" className="border-purple-200 text-purple-700">
            Identity
          </Badge>
        )
      case "credential":
        return (
          <Badge variant="outline" className="border-emerald-200 text-emerald-700">
            Credential
          </Badge>
        )
      case "finance":
        return (
          <Badge variant="outline" className="border-amber-200 text-amber-700">
            Finance
          </Badge>
        )
      default:
        return <Badge variant="outline">{type}</Badge>
    }
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium text-gray-900">Your Proof History</h3>
        <Button variant="outline" size="sm" className="text-xs">
          <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
            />
          </svg>
          Filter
        </Button>
      </div>

      {proofs.length > 0 ? (
        <div className="border rounded-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Statement</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {proofs.map((proof) => (
                <TableRow key={proof.id}>
                  <TableCell className="font-medium">{proof.statement}</TableCell>
                  <TableCell>{getTypeBadge(proof.type)}</TableCell>
                  <TableCell>{formatDate(proof.timestamp)}</TableCell>
                  <TableCell>{getStatusBadge(proof.status)}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                        />
                      </svg>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ) : (
        <div className="text-center py-8 border rounded-lg">
          <div className="mx-auto w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-3">
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          </div>
          <p className="text-gray-500">You haven't generated any proofs yet</p>
        </div>
      )}
    </div>
  )
}
