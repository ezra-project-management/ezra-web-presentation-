'use client'

import { useState } from 'react'
import * as Tabs from '@radix-ui/react-tabs'
import { Crown, Camera } from 'lucide-react'
import { cn } from '@/lib/utils'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

const tabsList = [
  { value: 'personal', label: 'Personal Info' },
  { value: 'security', label: 'Security' },
  { value: 'notifications', label: 'Notifications' },
  { value: 'loyalty', label: 'Loyalty' },
]

const notificationSettings = [
  { key: 'email', label: 'Email notifications', desc: 'Receive booking confirmations via email', checked: true },
  { key: 'sms', label: 'SMS notifications', desc: 'Get text messages for updates', checked: true },
  { key: 'reminders', label: 'Booking reminders', desc: 'Reminders before your appointments', checked: true },
  { key: 'promos', label: 'Promotions', desc: 'Special offers and discounts', checked: false },
]

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('personal')

  return (
    <div>
      <AnimatedSection>
        <h1 className="font-display text-2xl text-navy font-semibold">
          My Profile
        </h1>
      </AnimatedSection>

      <Tabs.Root
        value={activeTab}
        onValueChange={setActiveTab}
        className="mt-6"
      >
        <Tabs.List className="flex gap-6 border-b border-charcoal/10 overflow-x-auto">
          {tabsList.map((tab) => (
            <Tabs.Trigger
              key={tab.value}
              value={tab.value}
              className={cn(
                'pb-3 font-sans text-sm font-medium whitespace-nowrap transition-colors',
                activeTab === tab.value
                  ? 'text-navy border-b-2 border-gold'
                  : 'text-charcoal/50 hover:text-navy'
              )}
            >
              {tab.label}
            </Tabs.Trigger>
          ))}
        </Tabs.List>

        {/* Personal Info */}
        <Tabs.Content value="personal" className="mt-6">
          <AnimatedSection>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              {/* Avatar */}
              <div className="flex items-center gap-6 mb-8">
                <div className="relative">
                  <div className="w-20 h-20 rounded-full bg-navy text-white flex items-center justify-center font-sans font-medium text-2xl">
                    JD
                  </div>
                  <button
                    className="absolute bottom-0 right-0 w-7 h-7 rounded-full bg-gold flex items-center justify-center text-white shadow-sm"
                    aria-label="Change photo"
                  >
                    <Camera className="w-3.5 h-3.5" />
                  </button>
                </div>
                <div>
                  <p className="font-sans font-medium text-navy">John Doe</p>
                  <p className="font-sans text-sm text-charcoal/50">
                    Gold Member
                  </p>
                </div>
              </div>

              {/* Form */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { label: 'First Name', value: 'John' },
                  { label: 'Last Name', value: 'Doe' },
                  { label: 'Email', value: 'john@example.com' },
                  { label: 'Phone', value: '+254 700 123 456' },
                  { label: 'Date of Birth', value: '1990-01-15' },
                ].map((field) => (
                  <div key={field.label}>
                    <label className="block font-sans text-sm font-medium text-navy mb-2">
                      {field.label}
                    </label>
                    <input
                      type="text"
                      defaultValue={field.value}
                      className="w-full px-4 py-3 border border-charcoal/20 rounded-lg font-sans text-sm focus:border-gold focus:ring-1 focus:ring-gold outline-none transition"
                    />
                  </div>
                ))}
              </div>

              <button className="mt-6 px-6 py-3 bg-gold text-navy-dark font-sans font-medium rounded-lg hover:bg-gold-light transition-colors">
                Save Changes
              </button>
            </div>
          </AnimatedSection>
        </Tabs.Content>

        {/* Security */}
        <Tabs.Content value="security" className="mt-6">
          <AnimatedSection>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-display text-lg text-navy font-semibold mb-6">
                Change Password
              </h3>
              <div className="space-y-4 max-w-md">
                {['Current Password', 'New Password', 'Confirm New Password'].map(
                  (label) => (
                    <div key={label}>
                      <label className="block font-sans text-sm font-medium text-navy mb-2">
                        {label}
                      </label>
                      <input
                        type="password"
                        className="w-full px-4 py-3 border border-charcoal/20 rounded-lg font-sans text-sm focus:border-gold focus:ring-1 focus:ring-gold outline-none transition"
                      />
                    </div>
                  )
                )}
                <button className="px-6 py-3 bg-gold text-navy-dark font-sans font-medium rounded-lg hover:bg-gold-light transition-colors">
                  Update Password
                </button>
              </div>

              <div className="mt-8 pt-8 border-t border-charcoal/10">
                <div className="flex items-center justify-between max-w-md">
                  <div>
                    <p className="font-sans text-sm font-medium text-navy">
                      Two-Factor Authentication
                    </p>
                    <p className="font-sans text-xs text-charcoal/50 mt-1">
                      Add an extra layer of security
                    </p>
                  </div>
                  <div className="w-12 h-6 bg-charcoal/20 rounded-full relative cursor-pointer">
                    <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 left-0.5 shadow-sm" />
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </Tabs.Content>

        {/* Notifications */}
        <Tabs.Content value="notifications" className="mt-6">
          <AnimatedSection>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-display text-lg text-navy font-semibold mb-6">
                Notification Preferences
              </h3>
              <div className="space-y-6">
                {notificationSettings.map((setting) => (
                  <div
                    key={setting.key}
                    className="flex items-center justify-between"
                  >
                    <div>
                      <p className="font-sans text-sm font-medium text-navy">
                        {setting.label}
                      </p>
                      <p className="font-sans text-xs text-charcoal/50 mt-0.5">
                        {setting.desc}
                      </p>
                    </div>
                    <div
                      className={cn(
                        'w-12 h-6 rounded-full relative cursor-pointer transition-colors',
                        setting.checked ? 'bg-gold' : 'bg-charcoal/20'
                      )}
                    >
                      <div
                        className={cn(
                          'w-5 h-5 bg-white rounded-full absolute top-0.5 shadow-sm transition-transform',
                          setting.checked ? 'translate-x-6' : 'translate-x-0.5'
                        )}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </Tabs.Content>

        {/* Loyalty */}
        <Tabs.Content value="loyalty" className="mt-6">
          <AnimatedSection>
            {/* Tier Card */}
            <div className="bg-gradient-to-br from-gold to-gold-light rounded-xl p-6 text-navy-dark mb-6">
              <div className="flex items-center gap-3">
                <Crown className="w-8 h-8" />
                <div>
                  <p className="font-display text-2xl font-semibold">
                    Gold Member
                  </p>
                  <p className="font-sans text-sm opacity-70">
                    Member since 2024
                  </p>
                </div>
              </div>
            </div>

            {/* Points */}
            <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
              <p className="font-sans text-sm text-charcoal/50">
                Points Balance
              </p>
              <p className="font-display text-4xl text-navy font-bold mt-1">
                2,450
              </p>

              <div className="mt-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-sans text-xs text-charcoal/50">
                    Progress to Platinum
                  </span>
                  <span className="font-sans text-xs text-charcoal/50">
                    2,450 / 5,000
                  </span>
                </div>
                <div className="w-full h-3 bg-charcoal/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gold rounded-full transition-all duration-500"
                    style={{ width: '49%' }}
                  />
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-display text-lg text-navy font-semibold mb-4">
                Recent Activity
              </h3>
              <div className="space-y-4">
                {[
                  { action: 'Spa visit', points: '+150', date: 'March 10' },
                  { action: 'Gym session', points: '+50', date: 'March 8' },
                  { action: 'Room booking', points: '+300', date: 'March 1' },
                ].map((activity) => (
                  <div
                    key={activity.date}
                    className="flex items-center justify-between"
                  >
                    <div>
                      <p className="font-sans text-sm text-navy">
                        {activity.action}
                      </p>
                      <p className="font-sans text-xs text-charcoal/40">
                        {activity.date}
                      </p>
                    </div>
                    <span className="font-sans text-sm font-medium text-gold">
                      {activity.points}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </Tabs.Content>
      </Tabs.Root>
    </div>
  )
}
