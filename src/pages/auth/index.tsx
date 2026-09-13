import { useForm, type SubmitHandler } from "react-hook-form"
import { Input } from "../../components/commons"
import { signInSchema, type SignInFormType } from "../../lib/schma-validations"
import { zodResolver } from "@hookform/resolvers/zod"
import { apiClient } from "../../actions/api-client"
import { useNavigate } from "react-router"

export default function AuthPage() {
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
    } = useForm<SignInFormType>({
        resolver: zodResolver(signInSchema),
        defaultValues: {
            username: "emilys",
            password: "emilyspass"
        }
    })

    const onSubmit: SubmitHandler<SignInFormType> = async (data) => {
        try {
            const response = await apiClient.loginUser(data)
            console.log(response)
            navigate("/")
        } catch (error) {
            const message = error instanceof Error ? error.message : "Login failed. Please try again."
            setError("root", { message })
        }
    }

    return (
        <div>
            <h1>Sign In</h1>
            <form
                onSubmit={handleSubmit(onSubmit)}
                style={{ display: "flex", flexDirection: "column", maxWidth: "400px", gap: "20px" }}
            >
                <Input placeholder="username" disabled={isSubmitting} {...register("username")} />
                {errors?.username && <p>{errors.username.message}</p>}

                <Input placeholder="password" type="password" disabled={isSubmitting} {...register("password")} />
                {errors?.password && <p>{errors.password.message}</p>}

                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Logging in..." : "Login"}
                </button>

                {errors?.root?.message && <p style={{ color: "red" }}>{errors.root.message}</p>}
            </form>
        </div>
    )
}