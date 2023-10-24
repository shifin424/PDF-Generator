import { Formik, Field, ErrorMessage, Form } from "formik";
import { message } from 'antd'
import { Link, useNavigate } from "react-router-dom";
import Button from "../../Components/Button/Button";
import { SingUpSchema } from "../../Validations/SignUpPage";
import { userSingUpApi } from "../../Services/UserServices";



const SignUpPage = () => {

    const navigate = useNavigate()

    const initialValues = {
        username: '',
        email: '',
        password: '',
    };

    const handleSubmit = async (values) => {
        try {
            const response = await userSingUpApi(values)
            if (response.status === 201) {
                const token = `Bearer ${response.data.token}`;
                localStorage.setItem('UserJwtToken', token);
                navigate('/')
                message.success("Welcome! Your account is ready now")
            } else {
                message.error("Network error")
            }
        } catch (err) {
            message.error(err.response.data.error)
        }
    }





    return (
        <div>
            <section>
                <div className="flex flex-col items-center justify-center min-h-screen px-6 py-8 mx-auto">
                    <div className="w-full max-w-md bg-white rounded-lg shadow-md dark:border dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Register Now !
                            </h1>
                            <Formik
                                initialValues={initialValues}
                                validationSchema={SingUpSchema}
                                onSubmit={handleSubmit}
                            >
                                <Form className="space-y-4 md:space-y-6">
                                    <div className="flex flex-col">
                                        <label htmlFor="email" className="text-gray-600">username</label>
                                        <Field
                                            type="text"
                                            name="username"
                                            placeholder="Enter your username"
                                            className="w-full rounded-md"
                                        />
                                        <ErrorMessage
                                            name="username"
                                            component="div"
                                            className="text-sm text-red-500"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="email" className="text-gray-600">email</label>
                                        <Field
                                            type="email"
                                            name="email"
                                            placeholder="username@email.com"
                                            className="w-full rounded-md"
                                        />
                                        <ErrorMessage
                                            name="email"
                                            component="div"
                                            className="text-sm text-red-500"
                                        />
                                    </div>

                                    <div className="flex flex-col">
                                        <label htmlFor="password" className="text-gray-600">Password</label>
                                        <Field
                                            type="password"
                                            name="password"
                                            placeholder="••••••••"
                                            className='w-full rounded-md'
                                        />
                                        <ErrorMessage
                                            name="password"
                                            component="div"
                                            className="text-sm text-red-500"
                                        />
                                    </div>
                                    <Button
                                        type="submit"
                                        text="Sign in"
                                        className="w-full text-white items-center font-semibold py-2 px-4 rounded-full shadow-md"
                                    />
                                    <p className="text-sm font-light text-gray-500 dark:text-gray-400 text-center">
                                        Already Have an Account?{' '}
                                        <Link
                                            to="/login"
                                            className="font-medium text-blue-500 hover:underline dark:text-primary-500"
                                        >
                                            Login
                                        </Link>
                                    </p>
                                </Form>
                            </Formik>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SignUpPage