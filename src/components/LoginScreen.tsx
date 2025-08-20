import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Eye, EyeOff, Briefcase, Shield, Users, Smartphone } from 'lucide-react';
import { UserRole, User } from '../App';

interface LoginScreenProps {
  role: UserRole;
  onLoginSuccess: (user: User) => void;
  onBack: () => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ role, onLoginSuccess, onBack }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loginMethod, setLoginMethod] = useState<'email' | 'mobile'>('email');

  const roleConfig = {
    admin: {
      title: 'Admin Login',
      icon: Briefcase,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100'
    },
    'super-admin': {
      title: 'Super Admin Login',
      icon: Shield,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-50 to-purple-100'
    },
    parent: {
      title: 'Parent Login',
      icon: Users,
      color: 'from-green-500 to-green-600',
      bgColor: 'from-green-50 to-green-100'
    }
  };

  const config = roleConfig[role];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      const mockUser: User = {
        id: '1',
        name: role === 'parent' ? 'Maria Garcia' : role === 'admin' ? 'Admin User' : 'Super Admin',
        role,
        email: formData.email,
        studentName: role === 'parent' ? 'Leo Garcia' : undefined,
      };
      onLoginSuccess(mockUser);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br ${config.bgColor} flex items-center justify-center p-4`}>
      <div className="w-full max-w-md">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <img
            src="https://staging.iproat.com/wp-content/uploads/2025/01/pro-school-new-logo-300x212.png"
            alt="Pro-School Logo"
            className="h-16 w-auto mx-auto"
          />
        </motion.div>

        {/* Login Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-xl p-8 relative"
        >
          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            onClick={onBack}
            className="absolute top-4 left-4 flex items-center text-gray-500 hover:text-gray-800 transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5" />
          </motion.button>
          
          {/* Header */}
          <div className="text-center mb-8 pt-8">
            <div className={`w-16 h-16 bg-gradient-to-br ${config.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
              <config.icon className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              {config.title}
            </h2>
            <p className="text-gray-500">Enter your credentials to continue</p>
          </div>

          {/* Login Method Toggle for Parent */}
          {role === 'parent' && (
            <div className="flex bg-gray-100 rounded-xl p-1 mb-6">
              <button
                type="button"
                onClick={() => setLoginMethod('email')}
                className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all duration-200 ${
                  loginMethod === 'email'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Email Login
              </button>
              <button
                type="button"
                onClick={() => setLoginMethod('mobile')}
                className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all duration-200 ${
                  loginMethod === 'mobile'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                <Smartphone className="w-4 h-4 inline mr-1" />
                Mobile Login
              </button>
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email/Mobile Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {loginMethod === 'mobile' ? 'Mobile Number' : 'Email Address'}
              </label>
              <input
                type={loginMethod === 'mobile' ? 'tel' : 'email'}
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder={loginMethod === 'mobile' ? '+1 (555) 123-4567' : 'Enter your email'}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 outline-none"
                required
              />
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 outline-none"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>

              {role === 'parent' && (
                <button
                  type="button"
                  className="text-sm text-blue-600 hover:text-blue-800 transition-colors duration-200"
                >
                  Forgot password?
                </button>
              )}
            </div>

            {/* Login Button */}
            <motion.button
              type="submit"
              disabled={isLoading}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-3 px-4 rounded-xl text-white font-medium bg-gradient-to-r ${config.color} hover:shadow-lg transform transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed`}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  Signing in...
                </div>
              ) : (
                'Sign In'
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default LoginScreen;
