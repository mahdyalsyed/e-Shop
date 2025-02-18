import React from "react";

const Login = () => {
    return (
        <section>
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <form>
                <div className="mb-4">
                    <label className="block text-gray-700">Name</label>
                    <input
                        type="text"
                        className="w-full px-3 py-2 border"
                        placeholder="Enter Name"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Email</label>
                    <input
                        type="email"
                        className="w-full px-3 py-2 border"
                        placeholder="Enter Email"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Password</label>
                    <input
                        type="password"
                        className="w-full px-3 py-2 border"
                        placeholder="Enter Password"
                    />
                </div>
                <div className="mt-4">
                    <button
                        type="submit"
                        className="w-full bg-red-600 text-white py-2">
                        Login
                    </button>
                </div>
            </form>
        </section>
    );
};

export default Login;
