import { useForm, type SubmitHandler } from "react-hook-form"
import { Input } from "../../components/commons"
import { signInSchema, type SignInFormType } from "../../lib/schma-validations"
import { zodResolver } from "@hookform/resolvers/zod"
import { apiClient } from "../../actions/api-client"

export default function AuthPage() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm<SignInFormType>({
        resolver: zodResolver(signInSchema)
    })

    const onSubmit: SubmitHandler<SignInFormType> = async (data) => {
        const response = await apiClient.loginUser(data)
        console.log(response)
    }
    return (
        <div>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", "maxWidth": "400px", "gap": "20px" }}>
                <Input placeholder="username" {...register("username")} />
                {errors?.username && <p>{errors?.username?.message}</p>}

                <Input placeholder="password" type="password" {...register("password")} />
                {errors?.password && <p>{errors?.password?.message}</p>}

                <button type="submit">{isSubmitting ? "Login..." : "Login"}</button>
            </form>
        </div>
    )
}