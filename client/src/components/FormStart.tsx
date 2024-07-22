import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
  FormItem,
  FormLabel,
  FormMessage,

} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {  useNavigate } from 'react-router-dom'


export const FormStart = () => {

const navigate = useNavigate()
     
const formSchema = z.object({
    username: z.string().min(2,"debes colocar almenos dos caracteres").max(50,"maximos 50 caracteres"),
    desktop: z.coerce.number().min(1)
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      desktop:0
    },
  })
 
 
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    navigate(`/desktop/${values.desktop}/${values.username}`)
  }
    

  return (

<Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-[50%]">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="nombre" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="desktop"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Escritorio</FormLabel>
              <FormControl>
                <Input type="number" placeholder="shadcn" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>

  )
}
