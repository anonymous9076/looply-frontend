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

const features = [
  { emoji: '🚀', text: 'Grow your audience 4x faster with smart scheduling' },
  { emoji: '💬', text: 'Connect directly via personalized DM campaigns' },
  { emoji: '⭐', text: 'Boost engagement with AI-powered content insights' },
  { emoji: '🔗', text: 'Monetize with built-in referral & link tools' },
];

const brands = ['Nike', 'Spotify', 'Adobe', 'Figma', 'Notion', 'Linear'];

export default function SignUpScreen({ navigation }) {
  const [fullName, setFullName]         = useState('');
  const [email, setEmail]               = useState('');
  const [phone, setPhone]               = useState('');
  const [password, setPassword]         = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [focused, setFocused]           = useState('');
  const [agreed, setAgreed]             = useState(false);

  const fieldClass = (field) =>
    `flex-row items-center bg-white rounded-xl border-[1.5px] px-3.5 h-13 ${
      focused === field
        ? 'border-brand-sky bg-sky-50/30'
        : 'border-slate-200'
    }`;

  return (
    <View className={`flex-1 ${isWeb ? 'flex-row' : 'flex-col'} bg-brand-sky-light`}>

      {/* ── LEFT BRANDING PANEL (web only) ── */}
      {isWeb && (
        <View className="flex-1 bg-brand-sky-dark px-12 py-14 justify-center overflow-hidden">

          {/* Logo */}
          <View className="flex-row items-center mb-12">
            <View className="w-3 h-3 rounded-full bg-brand-sky mr-2" />
            <Text className="text-white text-2xl font-black tracking-widest">looply</Text>
          </View>

          {/* Headline */}
          <View className="mb-9">
            <View className="mb-4">
              <Text className="self-start bg-sky-500/15 text-sky-400 px-3.5 py-1.5 rounded-full
                              text-xs font-bold tracking-[1.5px] uppercase overflow-hidden">
                #1 Creator Growth Platform
              </Text>
            </View>
            <Text className="text-white text-5xl font-black leading-tight mb-4">
              Get Started —{'\n'}
              <Text className="text-brand-sky">It's Free.</Text>
            </Text>
            <Text className="text-slate-400 text-base leading-7">
              Transform your content journey with tools built for modern creators.
            </Text>
          </View>

          {/* Feature list */}
          <View className="gap-3.5 mb-10">
            {features.map((f, i) => (
              <View
                key={i}
                className="flex-row items-center bg-sky-500/8 rounded-xl p-3.5 gap-3.5
                           border border-sky-500/15"
              >
                <View className="w-10 h-10 rounded-xl bg-sky-500/15 justify-center items-center">
                  <Text className="text-lg">{f.emoji}</Text>
                </View>
                <Text className="flex-1 text-slate-300 text-sm leading-5">{f.text}</Text>
              </View>
            ))}
          </View>

          {/* Trusted brands */}
          <View>
            <Text className="text-slate-500 text-xs font-semibold tracking-widest uppercase mb-3">
              Trusted by creators at
            </Text>
            <View className="flex-row flex-wrap gap-2">
              {brands.map((b, i) => (
                <View
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-lg px-3 py-1.5"
                >
                  <Text className="text-slate-400 text-xs font-semibold">{b}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Decorative circles */}
          <View className="absolute w-72 h-72 rounded-full bg-sky-500/5 -top-16 -right-16" />
          <View className="absolute w-52 h-52 rounded-full bg-sky-400/5 -bottom-10 -left-10" />
          <View className="absolute w-36 h-36 rounded-full bg-sky-500/4 bottom-28 right-8" />
        </View>
      )}

      {/* ── RIGHT FORM PANEL ── */}
      <KeyboardAvoidingView
        className={`${isWeb ? 'w-[500px]' : 'flex-1'} bg-[#FAFFFE]`}
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
                <View className="w-3 h-3 rounded-full bg-brand-sky mr-2" />
                <Text className="text-brand-sky text-2xl font-black tracking-widest">looply</Text>
              </View>
            )}

            <Text className="text-brand-sky-dark text-3xl font-black mb-2">
              Create your account
            </Text>
            <Text className="text-slate-500 text-sm leading-6 mb-1">
              Start free. No credit card required.
            </Text>
            <View className="flex-row items-center mb-8">
              <Text className="text-slate-500 text-sm">Already have one? </Text>
              <TouchableOpacity onPress={() => navigation?.navigate('SignIn')} activeOpacity={0.7}>
                <Text className="text-brand-sky font-bold text-sm">Sign in here</Text>
              </TouchableOpacity>
            </View>


            {/* Full Name */}
            <View className="mb-5">
              <Text className="text-slate-700 text-[13px] font-semibold mb-2">Full Name</Text>
              <View className={fieldClass('name')}>
                <Text className="text-slate-400 text-base mr-2.5">👤</Text>
                <TextInput
                  className="flex-1 text-brand-sky-dark text-[15px]"
                  placeholder="First & last name"
                  placeholderTextColor="#A3A3A3"
                  value={fullName}
                  onChangeText={setFullName}
                  onFocus={() => setFocused('name')}
                  onBlur={() => setFocused('')}
                  style={{ outlineStyle: 'none' }}
                />
              </View>
            </View>

            {/* Email */}
            <View className="mb-5">
              <Text className="text-slate-700 text-[13px] font-semibold mb-2">Email Address</Text>
              <View className={fieldClass('email')}>
                <Text className="text-slate-400 text-base mr-2.5">✉</Text>
                <TextInput
                  className="flex-1 text-brand-sky-dark text-[15px]"
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

            {/* Mobile */}
            <View className="mb-5">
              <Text className="text-slate-700 text-[13px] font-semibold mb-2">Mobile Number</Text>
              <View className={fieldClass('phone')}>
                <View className="flex-row items-center mr-1">
                  <Text className="text-base mr-1">🇮🇳</Text>
                  <Text className="text-slate-700 font-semibold text-sm">+91</Text>
                  <Text className="text-slate-200 text-lg mx-2.5">|</Text>
                </View>
                <TextInput
                  className="flex-1 text-brand-sky-dark text-[15px]"
                  placeholder="Enter mobile number"
                  placeholderTextColor="#A3A3A3"
                  keyboardType="phone-pad"
                  value={phone}
                  onChangeText={setPhone}
                  onFocus={() => setFocused('phone')}
                  onBlur={() => setFocused('')}
                  style={{ outlineStyle: 'none' }}
                />
              </View>
            </View>

            {/* Password */}
            <View className="mb-1.5">
              <Text className="text-slate-700 text-[13px] font-semibold mb-2">Password</Text>
              <View className={fieldClass('password')}>
                <Text className="text-slate-400 text-base mr-2.5">🔒</Text>
                <TextInput
                  className="flex-1 text-brand-sky-dark text-[15px]"
                  placeholder="Create a strong password"
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
              <Text className="text-slate-400 text-[11px] mt-1.5 ml-1">
                Minimum 8 characters — longer is stronger
              </Text>
            </View>

            {/* Terms checkbox */}
            <TouchableOpacity
              className="flex-row items-start gap-2.5 mb-6 mt-4"
              onPress={() => setAgreed(!agreed)}
              activeOpacity={0.8}
            >
              <View
                className={`w-5 h-5 rounded-md border-[1.5px] justify-center items-center mt-0.5
                  ${agreed
                    ? 'bg-brand-sky border-brand-sky'
                    : 'bg-white border-slate-300'
                  }`}
              >
                {agreed && <Text className="text-white text-xs font-black">✓</Text>}
              </View>
              <Text className="flex-1 text-slate-500 text-[13px] leading-5">
                I agree to the{' '}
                <Text className="text-brand-sky font-bold">Privacy Policy</Text>
                {' '}and{' '}
                <Text className="text-brand-sky font-bold">Terms of Service</Text>
              </Text>
            </TouchableOpacity>

            {/* Primary CTA */}
            <TouchableOpacity
              className={`rounded-2xl h-14 justify-center items-center mb-6
                ${agreed ? 'bg-brand-sky' : 'bg-sky-200'}`}
              activeOpacity={agreed ? 0.85 : 1}
            >
              <Text className="text-white text-base font-bold tracking-wide">
                Create My Free Account 🎉
              </Text>
            </TouchableOpacity>

            {/* Divider */}
            <View className="flex-row items-center gap-3 mb-6">
              <View className="flex-1 h-px bg-slate-200" />
              <Text className="text-slate-400 text-xs font-medium">or sign up with</Text>
              <View className="flex-1 h-px bg-slate-200" />
            </View>

            {/* Social */}
            <View className="flex-row gap-3">
              {['G  Google', '⬛ Apple'].map((label, i) => (
                <TouchableOpacity
                  key={i}
                  className="flex-1 border-[1.5px] border-slate-200 rounded-xl h-12
                             justify-center items-center bg-white"
                >
                  <Text className="text-slate-700 text-sm font-semibold">{label}</Text>
                </TouchableOpacity>
              ))}
            </View>

          </View>
        </ScrollView>
      </KeyboardAvoidingView>

    </View>
  );
}
