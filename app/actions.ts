"use server"

interface GreetingState {
  message: string
  error: string
}

export async function processGreeting(prevState: GreetingState, formData: FormData) {
  // Simulate a small delay to demonstrate server processing
  await new Promise((resolve) => setTimeout(resolve, 500))

  const name = formData.get("name")

  // Validate input
  if (!name || typeof name !== "string" || name.trim() === "") {
    return {
      message: "",
      error: "Please enter a valid name",
    }
  }

  // Return the greeting message
  return {
    message: `Hello ${name}!`,
    error: "",
  }
}

