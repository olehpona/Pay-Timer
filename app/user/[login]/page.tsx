import LoginForm from "@/ui/components/LoginForm";
import SignupForm from "@/ui/components/SignupForm";



export default function Login({ params }: { params: { login: string } }) {
    return (
        <div className="bg-gray-100 mb-2 rounded-lg flex flex-col items-center space-y-8  shadow-neo h-full justify-center w-full">
            {params.login === 'signin' ?
                (<>
                    <div >                    
                        <h2 className={"text-2xl"}>Login</h2>
                        <p>Hello again! Let's login.</p>
                    </div>
                    <LoginForm></LoginForm>
                </>) :
                (<>
                    <div >
                        <h2 className={"text-2xl"}>Sign Up</h2>
                        <p>Hello there! Nice to meet you.</p>
                    </div>
                    <SignupForm></SignupForm>
                </>)
            }
        </div>
    )
}
