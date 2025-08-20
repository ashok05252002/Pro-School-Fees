import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DollarSign, CreditCard, Globe, Settings } from 'lucide-react';

const CurrencyGateway: React.FC = () => {
  const [currencySettings, setCurrencySettings] = useState({
    primaryCurrency: 'OMR',
    exchangeRateUpdate: 'auto',
    decimalPlaces: 3
  });

  const [gatewaySettings, setGatewaySettings] = useState({
    stripe: { enabled: true, publicKey: '', secretKey: '' },
    paypal: { enabled: false, clientId: '', clientSecret: '' },
    razorpay: { enabled: true, keyId: '', keySecret: '' }
  });

  const currencies = [
    { code: 'OMR', name: 'Omani Rial', symbol: 'OMR' },
    { code: 'INR', name: 'Indian Rupee', symbol: '₹' },
    { code: 'USD', name: 'US Dollar', symbol: '$' },
    { code: 'EUR', name: 'Euro', symbol: '€' },
    { code: 'GBP', name: 'British Pound', symbol: '£' },
    { code: 'AUD', name: 'Australian Dollar', symbol: 'A$' }
  ];

  const handleSaveCurrency = () => {
    // Handle currency settings save
    console.log('Currency settings saved:', currencySettings);
  };

  const handleSaveGateway = () => {
    // Handle gateway settings save
    console.log('Gateway settings saved:', gatewaySettings);
  };

  return (
    <div className="p-4 lg:p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Currency & Payment Gateway Settings</h1>
        <p className="text-gray-600">Configure currency settings and payment gateway integrations</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Currency Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
        >
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
              <DollarSign className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Currency Settings</h2>
              <p className="text-gray-500 text-sm">Configure your school's currency preferences</p>
            </div>
          </div>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Primary Currency
              </label>
              <select
                value={currencySettings.primaryCurrency}
                onChange={(e) => setCurrencySettings({ ...currencySettings, primaryCurrency: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 outline-none"
              >
                {currencies.map(currency => (
                  <option key={currency.code} value={currency.code}>
                    {currency.name} ({currency.symbol})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Exchange Rate Update
              </label>
              <select
                value={currencySettings.exchangeRateUpdate}
                onChange={(e) => setCurrencySettings({ ...currencySettings, exchangeRateUpdate: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 outline-none"
              >
                <option value="auto">Automatic</option>
                <option value="manual">Manual</option>
                <option value="daily">Daily</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Decimal Places
              </label>
              <select
                value={currencySettings.decimalPlaces}
                onChange={(e) => setCurrencySettings({ ...currencySettings, decimalPlaces: parseInt(e.target.value) })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 outline-none"
              >
                <option value={3}>3 (OMR Standard)</option>
                <option value={2}>2 (Standard)</option>
                <option value={0}>0 (No decimals)</option>
              </select>
            </div>

            <button
              type="button"
              onClick={handleSaveCurrency}
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-xl hover:bg-blue-700 transition-colors duration-200"
            >
              Save Currency Settings
            </button>
          </form>
        </motion.div>

        {/* Payment Gateway Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
        >
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
              <CreditCard className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Payment Gateways</h2>
              <p className="text-gray-500 text-sm">Configure payment gateway integrations</p>
            </div>
          </div>

          <div className="space-y-6">
            {/* Razorpay */}
            <div className="border border-gray-200 rounded-xl p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-purple-600 font-semibold text-sm">R</span>
                  </div>
                  <h3 className="font-medium text-gray-900">Razorpay</h3>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={gatewaySettings.razorpay.enabled}
                    onChange={(e) => setGatewaySettings({
                      ...gatewaySettings,
                      razorpay: { ...gatewaySettings.razorpay, enabled: e.target.checked }
                    })}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
              
              {gatewaySettings.razorpay.enabled && (
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="Key ID"
                    value={gatewaySettings.razorpay.keyId}
                    onChange={(e) => setGatewaySettings({
                      ...gatewaySettings,
                      razorpay: { ...gatewaySettings.razorpay, keyId: e.target.value }
                    })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 outline-none"
                  />
                  <input
                    type="password"
                    placeholder="Key Secret"
                    value={gatewaySettings.razorpay.keySecret}
                    onChange={(e) => setGatewaySettings({
                      ...gatewaySettings,
                      razorpay: { ...gatewaySettings.razorpay, keySecret: e.target.value }
                    })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 outline-none"
                  />
                </div>
              )}
            </div>
            
            {/* Stripe */}
            <div className="border border-gray-200 rounded-xl p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-indigo-600 font-semibold text-sm">S</span>
                  </div>
                  <h3 className="font-medium text-gray-900">Stripe</h3>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={gatewaySettings.stripe.enabled}
                    onChange={(e) => setGatewaySettings({
                      ...gatewaySettings,
                      stripe: { ...gatewaySettings.stripe, enabled: e.target.checked }
                    })}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>

            {/* PayPal */}
            <div className="border border-gray-200 rounded-xl p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-blue-600 font-semibold text-sm">P</span>
                  </div>
                  <h3 className="font-medium text-gray-900">PayPal</h3>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={gatewaySettings.paypal.enabled}
                    onChange={(e) => setGatewaySettings({
                      ...gatewaySettings,
                      paypal: { ...gatewaySettings.paypal, enabled: e.target.checked }
                    })}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>

            <button
              type="button"
              onClick={handleSaveGateway}
              className="w-full bg-green-600 text-white px-4 py-3 rounded-xl hover:bg-green-700 transition-colors duration-200"
            >
              Save Gateway Settings
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CurrencyGateway;
