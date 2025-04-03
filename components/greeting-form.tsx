"use client"
import { useActionState } from "react"
import { processGreeting } from "@/app/actions"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ReloadIcon } from "@radix-ui/react-icons"

const initialState = {
  message: "",
  error: "",
}

export function GreetingForm() {
  const [state, formAction, pending] = useActionState(processGreeting, initialState)

  return (
    <Card>
      <CardContent className="pt-6">
        <form action={formAction} className="space-y-6">
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Enter your name
            </label>
            <Input id="name" name="name" placeholder="Your name" required className="w-full" />
            {state?.error && <p className="text-sm text-red-500">{state.error}</p>}
          </div>

          <Button type="submit" className="w-full" disabled={pending}>
            {pending ? (
              <>
                <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              "Submit"
            )}
          </Button>

          {state?.message && (
            <div className="mt-4 p-4 bg-green-50 rounded-md">
              <p className="text-center text-lg font-medium">{state.message}</p>
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  )
}

