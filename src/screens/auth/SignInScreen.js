import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

const isWeb = Platform.OS === 'web';

export default function SignInScreen({ navigation }) {
  const [email, setEmail]               = useState('');
  const [password, setPassword]         = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [focused, setFocused]           = useState('');

  return (
    <View className={`flex-1 ${isWeb ? 'flex-row' : 'flex-col'} bg-brand-purple-light`}>

      {/* ── LEFT BRANDING PANEL (web only) ── */}
      {isWeb && (
        <View className="flex-1 bg-brand-purple-dark px-12 py-14 justify-center overflow-hidden">

          {/* Logo */}
          <View className="flex-row items-center mb-14">
            <View className="w-3 h-3 rounded-full bg-purple-400 mr-2" />
            <Text className="text-white text-2xl font-black tracking-widest">looply</Text>
          </View>

          {/* Headline */}
          <View className="mb-10">
            <Text className="text-[13px] text-purple-300 font-semibold tracking-[2px] mb-4 uppercase">
              ✦ The Creator's Platform
            </Text>
            <Text className="text-white text-5xl font-black leading-tight mb-5">
              Loop in.{'\n'}Stand out.
            </Text>
            <Text className="text-purple-300 text-base leading-7">
              Join thousands of creators growing their audience, monetizing content,
              and building real communities with Looply.
            </Text>
          </View>

          {/* Stats */}
          <View className="flex-row gap-8 mb-10">
            {[
              { value: '50K+', label: 'Active Creators' },
              { value: '2M+',  label: 'Followers Gained' },
              { value: '98%',  label: 'Satisfaction Rate' },
            ].map((s, i) => (
              <View key={i}>
                <Text className="text-purple-400 text-3xl font-black">{s.value}</Text>
                <Text className="text-gray-400 text-xs mt-0.5">{s.label}</Text>
              </View>
            ))}
          </View>

          {/* Testimonial */}
          <View className="rounded-2xl p-6 border border-purple-800 bg-purple-900/30">
            <Text className="text-purple-100 text-sm leading-6 italic mb-4">
              "Looply completely transformed how I connect with my audience.
              My engagement tripled in just two months!"
            </Text>
            <View className="flex-row items-center gap-3">
              <View className="w-10 h-10 rounded-full bg-brand-purple justify-center items-center">
                <Text className="text-white font-bold text-base">A</Text>
              </View>
              <View>
                <Text className="text-white font-bold text-sm">Aanya Kapoor</Text>
                <Text className="text-gray-400 text-xs mt-0.5">Lifestyle Creator · 1.2M followers</Text>
              </View>
            </View>
          </View>

          {/* Decorative circles */}
          <View className="absolute w-72 h-72 rounded-full bg-purple-500/5 -top-16 -right-16" />
          <View className="absolute w-52 h-52 rounded-full bg-purple-700/10 -bottom-10 -left-10" />
        </View>
      )}

      {/* ── RIGHT FORM PANEL ── */}
      <KeyboardAvoidingView
        className={`${isWeb ? 'w-[480px]' : 'flex-1'} bg-gray-50`}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
          showsVerticalScrollIndicator={false}
          className={isWeb ? 'px-14' : 'px-7'}
        >
          <View className="w-full max-w-sm self-center py-10">

            {/* Mobile logo */}
            {!isWeb && (
              <View className="flex-row items-center mb-8">
                <View className="w-3 h-3 rounded-full bg-brand-purple mr-2" />
                <Text className="text-brand-purple text-2xl font-black tracking-widest">looply</Text>
              </View>
            )}

            {/* Welcome chip */}
            <View className="flex-row items-center bg-purple-50 rounded-xl p-3.5 mb-7 gap-3">
              <Text className="text-3xl">👋</Text>
              <View>
                <Text className="text-brand-purple-dark font-bold text-base">Welcome back!</Text>
                <Text className="text-gray-500 text-xs mt-0.5">Sign in to continue creating</Text>
              </View>
            </View>

            <Text className="text-brand-purple-dark text-3xl font-black mb-1.5">Sign In</Text>
            <View className="flex-row items-center mb-8">
              <Text className="text-gray-500 text-sm">New here? </Text>
              <TouchableOpacity onPress={() => navigation?.navigate('SignUp')} activeOpacity={0.7}>
                <Text className="text-brand-purple font-bold text-sm">Create a free account</Text>
              </TouchableOpacity>
            </View>

            {/* Email */}
            <View className="mb-5">
              <Text className="text-gray-700 text-[13px] font-semibold mb-2">Email Address</Text>
              <View
                className={`flex-row items-center bg-white rounded-xl border-[1.5px] px-3.5 h-13
                  ${focused === 'email' ? 'border-brand-purple bg-purple-50/30' : 'border-gray-200'}`}
              >
                <Text className="text-gray-400 text-base mr-2.5">✉</Text>
                <TextInput
                  className="flex-1 text-brand-purple-dark text-[15px]"
                  placeholder="you@example.com"
                  placeholderTextColor="#A3A3A3"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  value={email}
                  onChangeText={setEmail}
                  onFocus={() => setFocused('email')}
                  onBlur={() => setFocused('')}
                  style={{ outlineStyle: 'none' }}
                />
              </View>
            </View>

            {/* Password */}
            <View className="mb-2">
              <Text className="text-gray-700 text-[13px] font-semibold mb-2">Password</Text>
              <View
                className={`flex-row items-center bg-white rounded-xl border-[1.5px] px-3.5 h-13
                  ${focused === 'password' ? 'border-brand-purple bg-purple-50/30' : 'border-gray-200'}`}
              >
                <Text className="text-gray-400 text-base mr-2.5">🔒</Text>
                <TextInput
                  className="flex-1 text-brand-purple-dark text-[15px]"
                  placeholder="Enter your password"
                  placeholderTextColor="#A3A3A3"
                  secureTextEntry={!showPassword}
                  value={password}
                  onChangeText={setPassword}
                  onFocus={() => setFocused('password')}
                  onBlur={() => setFocused('')}
                  style={{ outlineStyle: 'none' }}
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                  <Text className="text-lg pl-2">{showPassword ? '🙈' : '👁'}</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Options row */}
            <View className="flex-row justify-between mb-7 mt-1">
              <TouchableOpacity>
                <Text className="text-brand-purple font-semibold text-sm">Sign in with OTP</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text className="text-brand-purple font-semibold text-sm">Forgot password?</Text>
              </TouchableOpacity>
            </View>

            {/* Primary CTA */}
            <TouchableOpacity
              className="bg-brand-purple rounded-2xl h-14 justify-center items-center mb-7"
              activeOpacity={0.85}
            >
              <Text className="text-white text-base font-bold tracking-wide">
                Sign In to Looply →
              </Text>
            </TouchableOpacity>

            {/* Divider */}
            <View className="flex-row items-center gap-3 mb-6">
              <View className="flex-1 h-px bg-gray-200" />
              <Text className="text-gray-400 text-xs font-medium">or continue with</Text>
              <View className="flex-1 h-px bg-gray-200" />
            </View>

            {/* Social */}
            <View className="flex-row gap-3">
              {['G  Google', '⬛ Apple'].map((label, i) => (
                <TouchableOpacity
                  key={i}
                  className="flex-1 border-[1.5px] border-gray-200 rounded-xl h-12 justify-center items-center bg-white"
                >
                  <Text className="text-gray-700 text-sm font-semibold">{label}</Text>
                </TouchableOpacity>
              ))}
            </View>

          </View>
        </ScrollView>
      </KeyboardAvoidingView>

    </View>
  );
}
