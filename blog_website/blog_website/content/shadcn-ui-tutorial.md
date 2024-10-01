---
title: shadcn/ui Tutorial
description: This is a shadcn/ui tutorial for building beautiful and accessible React components
slug: shadcn-ui-tutorial
date: 02/03/2024
author: Aman
image: /shadcn.png
---

Welcome to this comprehensive shadcn/ui tutorial! Whether you're a React developer looking to enhance your UI components or you're new to component libraries, this guide will take you through the fundamentals of shadcn/ui and introduce you to more advanced concepts as you progress.

## Introduction to shadcn/ui

shadcn/ui is a collection of re-usable components built using Radix UI and Tailwind CSS. It's not a component library, but rather a set of beautifully designed, accessible components that you can copy and paste into your apps.

### Why Use shadcn/ui?

- **Customizable**: All components are built with Tailwind CSS, making them easy to customize.
- **Accessible**: Built on top of Radix UI primitives, ensuring accessibility.
- **Developer Experience**: Copy and paste what you need, allowing for easy customization and minimal bundle size.
- **Beautiful Design**: Comes with a beautiful default design that you can easily modify.

## Setting Up shadcn/ui

To start using shadcn/ui, you'll need to set up your development environment. Here are the basics:

1. **Install Dependencies**: shadcn/ui requires React, Tailwind CSS, and other dependencies.
2. **Choose a Framework**: Works with Next.js, Vite, and other React frameworks.
3. **Initialize shadcn/ui**: Use the CLI to add shadcn/ui to your project.

```bash
# For Next.js 13 (App Router)
npx create-next-app@latest my-app --typescript --tailwind --eslint

# Navigate to your project
cd my-app

# Initialize shadcn/ui
npx shadcn-ui@latest init
```

## shadcn/ui Basics

Let's start with the fundamentals of shadcn/ui. In this section, we'll cover:

- **Installing Components**: Learn how to add components to your project.
- **Basic Components**: Explore some of the basic components provided by shadcn/ui.
- **Customizing Components**: Understand how to customize components using Tailwind CSS.

### Installing Components

```bash
npx shadcn-ui@latest add button
```

### Basic Components

```jsx
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div>
      <Button variant="outline">Click me</Button>
      <Button variant="destructive">Delete</Button>
    </div>
  )
}
```

### Customizing Components

```jsx
// You can customize components by editing the CSS in the respective component file
// components/ui/button.tsx

import { cva } from "class-variance-authority"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input hover:bg-accent hover:text-accent-foreground",
        // Add your custom variant here
        custom: "bg-purple-500 text-white hover:bg-purple-600",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)
```

## Intermediate shadcn/ui

Once you're comfortable with the basics, it's time to explore more advanced features of shadcn/ui:

- **Form Components**: Learn how to use form-related components.
- **Dialog and Modals**: Understand how to create dialogs and modals.
- **Data Display**: Explore components for displaying data effectively.

### Form Components

```jsx
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

export function ProfileForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
```

### Dialog and Modals

```jsx
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger>Open</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your account
            and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
```

### Data Display

```jsx
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export function TableDemo() {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">INV001</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell className="text-right">$250.00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
```

## Advanced shadcn/ui

Now that you're comfortable with intermediate topics, let's explore some advanced shadcn/ui concepts:

- **Theming**: Learn how to create and switch between themes.
- **Animations**: Understand how to add animations to your components.
- **Accessibility**: Explore best practices for maintaining accessibility.

### Theming

```jsx
// In your globals.css
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
 
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
 
    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;
 
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
 
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
 
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;
 
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;

    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 222.2 84% 4.9%;
 
    --radius: 0.5rem;
  }
 
  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
 
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
 
    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;
 
    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 11.2%;
 
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
 
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
 
    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;
 
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
 
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 212.7 26.8% 83.9%;
  }
}
```

### Animations

```jsx
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function AnimatedButton() {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <Button>Animated Button</Button>
    </motion.div>
  )
}
```

### Accessibility

```jsx
import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b", className)}
    {...props}
  />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
      className
    )}
    {...props}
  >
    <div className="pb-4 pt-0">{children}</div>
  </AccordionPrimitive.Content>
))
AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
```

## Conclusion

Congratulations on making it through this shadcn/ui tutorial! You've covered everything from the basics of setting up and using components to advanced topics like theming and accessibility. shadcn/ui provides a powerful set of tools for building beautiful, accessible React components, and with this knowledge, you're well-equipped to create stunning user interfaces for your web applications.

Happy coding with shadcn/ui!