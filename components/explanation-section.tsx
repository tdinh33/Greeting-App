"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ExplanationSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>How This App Works</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="server-actions">
            <AccordionTrigger>Server Actions</AccordionTrigger>
            <AccordionContent>
              <p className="text-sm text-muted-foreground mb-2">
                Server Actions are a Next.js feature that allows you to define asynchronous functions that run on the
                server but can be called from client components.
              </p>
              <p className="text-sm text-muted-foreground mb-2">
                In this app, the <code className="bg-muted px-1 rounded">processGreeting</code> function in{" "}
                <code className="bg-muted px-1 rounded">app/actions.ts</code> is a Server Action that:
              </p>
              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                <li>Receives form data from the client</li>
                <li>Validates the input</li>
                <li>Returns a greeting message or error</li>
              </ul>
              <p className="text-sm text-muted-foreground mt-2">
                The <code className="bg-muted px-1 rounded">useActionState</code> hook from React 19 manages the form
                state and handles the server action.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="shadcn-ui">
            <AccordionTrigger>Shadcn UI Components</AccordionTrigger>
            <AccordionContent>
              <p className="text-sm text-muted-foreground mb-2">This app uses several Shadcn UI components:</p>
              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                <li>
                  <strong>Card</strong>: Container for the form and explanation sections
                </li>
                <li>
                  <strong>Input</strong>: For the name entry field
                </li>
                <li>
                  <strong>Button</strong>: For the submit button with loading state
                </li>
                <li>
                  <strong>Accordion</strong>: For the collapsible explanation sections
                </li>
              </ul>
              <p className="text-sm text-muted-foreground mt-2">
                Shadcn UI provides accessible, customizable components built on Radix UI primitives and styled with
                Tailwind CSS.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="nextjs-features">
            <AccordionTrigger>Next.js 15.1 Features</AccordionTrigger>
            <AccordionContent>
              <p className="text-sm text-muted-foreground mb-2">
                This app demonstrates several key Next.js 15.1 features:
              </p>
              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                <li>
                  <strong>App Router</strong>: Using the modern file-based routing system
                </li>
                <li>
                  <strong>Server Actions</strong>: Processing form data on the server without API routes
                </li>
                <li>
                  <strong>React 19 Integration</strong>: Using the new{" "}
                  <code className="bg-muted px-1 rounded">useActionState</code> hook for form state management
                </li>
                <li>
                  <strong>Server and Client Components</strong>: Mixing server-rendered and client-interactive
                  components
                </li>
              </ul>
              <p className="text-sm text-muted-foreground mt-2">
                Next.js 15.1 introduced improved caching semantics and better support for React 19 features like the
                React Compiler.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  )
}

