import { Logo } from "@/components/Logo"
import { Button } from "@/components/ui/button"
import { Field, FieldError, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { useLogin } from "@/hooks/useLogin"
import { zodResolver } from "@hookform/resolvers/zod"
import { Eye, EyeOff, Lock, Mail } from "lucide-react"
import { useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { loginSchema, type LoginFormData } from "./schema"
export function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  })
  const { mutate, isPending } = useLogin()
  const handleSubmit = form.handleSubmit(({ email, password }) => {
    mutate({ email, password })
  })
  return (
    <div className="flex min-h-screen w-full flex-col items-center p-5">
      {/* LOGO */}
      <div className="mt-10">
        <Logo />
      </div>

      {/* TITULO */}
      <div className="mt-16">
        <h1 className="text-5xl font-medium">Login</h1>
      </div>

      {/* FORM */}
      <div className="mt-12 flex w-full justify-center">
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
          {/* EMAIL */}
          <Controller
            control={form.control}
            name="email"
            render={({ field, fieldState }) => (
              <Field>
                <FieldLabel className="text-sm font-medium text-accent-foreground">
                  E-mail
                </FieldLabel>

                <div className="relative">
                  <Mail
                    className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2"
                    style={{ color: "hsl(215 20% 40%)" }}
                  />

                  <Input
                    {...field}
                    type="email"
                    placeholder="seu@email.com"
                    className="bg-gray-3 h-12 w-full pl-11 text-primary placeholder:text-primary/35"
                  />
                </div>

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          {/* SENHA */}
          <Controller
            control={form.control}
            name="password"
            render={({ field, fieldState }) => (
              <Field>
                <FieldLabel className="text-sm font-medium text-accent-foreground">
                  Senha
                </FieldLabel>

                <div className="relative">
                  <Lock
                    className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2"
                    style={{ color: "hsl(215 20% 40%)" }}
                  />

                  <Input
                    {...field}
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="bg-gray-3 h-12 w-full pl-11 text-primary placeholder:text-primary/35"
                  />

                  <Button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute top-1/2 right-3 -translate-y-1/2"
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </Button>
                </div>

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          {/* BOTÃO */}
          <div className="pt-12">
            <Button
              type="submit"
              className="h-12 w-full rounded-xl text-sm font-semibold"
              disabled={isPending}
            >
              {isPending ? "Entrando..." : "Entrar"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
