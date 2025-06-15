import { create } from 'zustand';
import { authService } from '../services/api';

const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,

  checkAuth: async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        set({ isAuthenticated: false, user: null });
        return;
      }

      const response = await authService.getProfile();
      if (response.success) {
        set({ isAuthenticated: true, user: response.data });
      } else {
        set({ isAuthenticated: false, user: null });
        localStorage.removeItem('token');
      }
    } catch (error) {
      console.error('Auth check error:', error);
      set({ isAuthenticated: false, user: null });
      localStorage.removeItem('token');
    }
  },

  signin: async (credentials) => {
    set({ isLoading: true, error: null });
    try {
      const response = await authService.signin(credentials);
      if (response.success && response.token) {
        localStorage.setItem('token', response.token);
        set({ 
          isAuthenticated: true, 
          user: response.user,
          isLoading: false 
        });
        return { success: true };
      } else {
        set({ 
          error: response.message || 'Invalid credentials', 
          isLoading: false 
        });
        return { success: false, message: response.message };
      }
    } catch (error) {
      console.error('Signin error:', error);
      set({ 
        error: error.response?.data?.message || 'An error occurred during sign in', 
        isLoading: false 
      });
      return { success: false, message: error.response?.data?.message };
    }
  },

  signup: async (userData) => {
    set({ isLoading: true, error: null });
    try {
      const response = await authService.signup(userData);
      if (response.success && response.token) {
        localStorage.setItem('token', response.token);
        set({ 
          isAuthenticated: true, 
          user: response.user,
          isLoading: false 
        });
        return { success: true };
      } else {
        set({ 
          error: response.message || 'Registration failed', 
          isLoading: false 
        });
        return { success: false, message: response.message };
      }
    } catch (error) {
      console.error('Signup error:', error);
      set({ 
        error: error.response?.data?.message || 'An error occurred during sign up', 
        isLoading: false 
      });
      return { success: false, message: error.response?.data?.message };
    }
  },

  signOut: () => {
    localStorage.removeItem('token');
    set({ user: null, isAuthenticated: false, error: null });
  },

  updateProfile: async (profileData) => {
    set({ isLoading: true, error: null });
    try {
      const response = await authService.updateProfile(profileData);
      if (response.success) {
        set({ user: response.data, isLoading: false });
        return { success: true };
      } else {
        set({ 
          error: response.message || 'Profile update failed', 
          isLoading: false 
        });
        return { success: false, message: response.message };
      }
    } catch (error) {
      console.error('Profile update error:', error);
      set({ 
        error: error.response?.data?.message || 'An error occurred during profile update', 
        isLoading: false 
      });
      return { success: false, message: error.response?.data?.message };
    }
  },

  updatePassword: async (passwordData) => {
    set({ isLoading: true, error: null });
    try {
      const response = await authService.updatePassword(passwordData);
      if (response.success) {
        set({ isLoading: false });
        return { success: true };
      } else {
        set({ 
          error: response.message || 'Password update failed', 
          isLoading: false 
        });
        return { success: false, message: response.message };
      }
    } catch (error) {
      console.error('Password update error:', error);
      set({ 
        error: error.response?.data?.message || 'An error occurred during password update', 
        isLoading: false 
      });
      return { success: false, message: error.response?.data?.message };
    }
  },

  forgotPassword: async (email) => {
    set({ isLoading: true, error: null });
    try {
      const response = await authService.forgotPassword(email);
      if (response.success) {
        set({ isLoading: false });
        return { success: true };
      } else {
        set({ 
          error: response.message || 'Password reset request failed', 
          isLoading: false 
        });
        return { success: false, message: response.message };
      }
    } catch (error) {
      console.error('Forgot password error:', error);
      set({ 
        error: error.response?.data?.message || 'An error occurred during password reset request', 
        isLoading: false 
      });
      return { success: false, message: error.response?.data?.message };
    }
  }
}));

export default useAuthStore; 