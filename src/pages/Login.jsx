import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // 👈 navigate import
import { Heart, User, Lock } from "lucide-react";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); // 👈 initialize navigate

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};

    // Email Validation
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    // Password Validation
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    // Confirm Password (only for Register)
    if (!isLogin) {
      if (!formData.confirmPassword) {
        newErrors.confirmPassword = "Confirm Password is required";
      } else if (formData.confirmPassword !== formData.password) {
        newErrors.confirmPassword = "Passwords do not match";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      if (isLogin) {
        alert("✅ Login successful!");
        navigate("/dashboard"); // 👈 redirect to dashboard
      } else {
        alert("✅ Registration successful!");
        navigate("/dashboard"); // 👈 redirect to dashboard
      }

      setFormData({ email: "", password: "", confirmPassword: "" });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-50">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
        {/* Logo */}
        <div className="flex items-center justify-center mb-8">
          <Heart className="h-8 w-8 text-green-500 mr-2" />
          <h1 className="text-2xl font-bold text-gray-800">HealthMate</h1>
        </div>

        {/* Tabs */}
        <div className="flex mb-6 bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => setIsLogin(true)}
            className={`flex-1 py-2 px-4 rounded-md transition-colors ${
              isLogin
                ? "bg-white shadow-sm text-green-600"
                : "text-gray-600"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`flex-1 py-2 px-4 rounded-md transition-colors ${
              !isLogin
                ? "bg-white shadow-sm text-green-600"
                : "text-gray-600"
            }`}
          >
            Register
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
              <User className="h-4 w-4 mr-2" />
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
              <Lock className="h-4 w-4 mr-2" />
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="enter your password"
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>

          {/* Confirm Password (Register Only) */}
          {!isLogin && (
            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <Lock className="h-4 w-4 mr-2" />
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="confirm password"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.confirmPassword}
                </p>
              )}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors font-medium"
          >
            {isLogin ? "Login" : "Register"}
          </button>
        </form>

        {/* Toggle link */}
        <p className="text-center text-sm text-gray-600 mt-6">
          {isLogin
            ? "Don't have an account? "
            : "Already have an account? "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-green-500 hover:underline"
          >
            {isLogin ? "Register" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
