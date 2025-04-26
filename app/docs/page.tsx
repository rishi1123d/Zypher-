"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Server, Zap, FileText, BookOpen, MessageSquare } from "lucide-react"
import CircuitExplorer from "@/components/docs/circuit-explorer"
import ApiDocs from "@/components/docs/api-docs"
import IntegrationGuide from "@/components/docs/integration-guide"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export default function DocsPage() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Technical Documentation</h1>
        <p className="mt-2 text-muted-foreground">
          Learn how to integrate and implement Zypher's zero-knowledge proof protocol.
        </p>
      </div>

      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search documentation..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <FileText className="mr-2 h-4 w-4" />
            Documentation
          </Button>
          <Button variant="outline" size="sm">
            <BookOpen className="mr-2 h-4 w-4" />
            Guides
          </Button>
          <Button variant="outline" size="sm">
            <MessageSquare className="mr-2 h-4 w-4" />
            Community
          </Button>
        </div>
      </div>

      <Tabs defaultValue="api" className="space-y-8">
        <TabsList className="grid w-full grid-cols-3 md:w-auto">
          <TabsTrigger value="api">API Documentation</TabsTrigger>
          <TabsTrigger value="circuit">Circuit Explorer</TabsTrigger>
          <TabsTrigger value="integration">Integration Guides</TabsTrigger>
        </TabsList>

        <TabsContent value="api">
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Code className="mr-2 h-5 w-5 text-blue-500" />
                API Documentation
              </CardTitle>
              <CardDescription>
                Comprehensive documentation for integrating with Zypher's API endpoints.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ApiDocs />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="circuit">
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Zap className="mr-2 h-5 w-5 text-purple-500" />
                Circuit Explorer
              </CardTitle>
              <CardDescription>
                Explore the zero-knowledge circuits that power Zypher's verification system.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CircuitExplorer />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="integration">
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Server className="mr-2 h-5 w-5 text-cyan-500" />
                Integration Guides
              </CardTitle>
              <CardDescription>
                Step-by-step guides for integrating Zypher with various platforms and services.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <IntegrationGuide />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
