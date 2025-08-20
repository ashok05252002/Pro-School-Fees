import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CreditCard, Shield, Loader, Wallet, Smartphone, CheckCircle, Download } from 'lucide-react';
import { formatCurrency } from '../../utils/formatting';

type PaymentStep = 'method' | 'details' | 'processing' | 'success';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  showToast: (message: string) => void;
  amount: number;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose, showToast, amount }) => {
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'wallet' | 'upi'>('card');
  const [step, setStep] = useState<PaymentStep>('method');
  const [saveCard, setSaveCard] = useState(true);

  const handleClose = () => {
    onClose();
    // Reset state after a short delay to allow for exit animation
    setTimeout(() => {
      setStep('method');
    }, 300);
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('processing');
    setTimeout(() => {
      setStep('success');
    }, 2000);
  };

  const handleDownloadReceipt = () => {
    showToast('Receipt downloaded successfully!');
  };

  const paymentMethods = [
    { id: 'card' as const, name: 'Card', icon: CreditCard },
    { id: 'wallet' as const, name: 'Wallet', icon: Wallet },
    { id: 'upi' as const, name: 'UPI', icon: Smartphone },
  ];

  const renderContent = () => {
    switch (step) {
      case 'method':
        return (
          <>
            <div className="text-center my-6">
              <p className="text-gray-500">Amount to Pay</p>
              <p className="text-4xl font-bold text-gray-900">OMR {formatCurrency(amount)}</p>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {paymentMethods.map(method => (
                <button
                  key={method.id}
                  type="button"
                  onClick={() => {
                    setPaymentMethod(method.id);
                    setStep('details');
                  }}
                  className="py-3 px-2 rounded-xl border-2 transition-all flex flex-col items-center justify-center space-y-1 border-gray-200 bg-white hover:border-blue-500 hover:bg-blue-50"
                >
                  <method.icon className="w-6 h-6 text-gray-600" />
                  <span className="text-sm font-medium">{method.name}</span>
                </button>
              ))}
            </div>
          </>
        );

      case 'details':
        return (
          <form onSubmit={handlePaymentSubmit} className="space-y-4">
            {paymentMethod === 'card' && (
              <>
                <h3 className="font-semibold text-lg text-center">Enter Card Details</h3>
                <input type="text" placeholder="Card Number" className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300" required />
                <div className="grid grid-cols-2 gap-3">
                  <input type="text" placeholder="MM/YY" className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300" required />
                  <input type="text" placeholder="CVC" className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300" required />
                </div>
                <div className="flex items-center justify-between pt-2">
                  <label className="flex items-center text-sm text-gray-600">
                    <input type="checkbox" checked={saveCard} onChange={e => setSaveCard(e.target.checked)} className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                    <span className="ml-2">Save card for future payments</span>
                  </label>
                </div>
              </>
            )}
            {paymentMethod === 'wallet' && (
              <>
                <h3 className="font-semibold text-lg text-center">Pay with Wallet</h3>
                <div className="bg-blue-50 p-4 rounded-xl text-center">
                    <p className="text-sm text-blue-800">Available Balance</p>
                    <p className="text-2xl font-bold text-blue-900">OMR {formatCurrency(54)}</p>
                </div>
                <p className="text-center text-sm text-red-600">Insufficient balance. Please add money to your wallet.</p>
              </>
            )}
            {paymentMethod === 'upi' && (
              <>
                <h3 className="font-semibold text-lg text-center">Enter UPI ID</h3>
                <input type="text" placeholder="yourname@bank" className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300" required />
              </>
            )}
            <motion.button
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-4 rounded-2xl flex items-center justify-center"
            >
              <Shield className="w-5 h-5 mr-2" /> Pay OMR {formatCurrency(amount)} Securely
            </motion.button>
          </form>
        );

      case 'processing':
        return (
          <div className="text-center py-12">
            <Loader className="w-12 h-12 text-blue-600 animate-spin mx-auto" />
            <p className="mt-4 text-lg font-semibold text-gray-800">Processing Payment...</p>
            <p className="text-sm text-gray-500">Please do not refresh or close the window.</p>
          </div>
        );

      case 'success':
        return (
          <div className="text-center py-8">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
            <h2 className="mt-4 text-2xl font-bold text-gray-900">Payment Successful!</h2>
            <p className="text-gray-600 mt-1">Your payment of OMR {formatCurrency(amount)} has been received.</p>
            <div className="mt-8 space-y-3">
              <button onClick={handleDownloadReceipt} className="w-full bg-blue-100 text-blue-700 font-semibold py-3 rounded-xl flex items-center justify-center">
                <Download className="w-5 h-5 mr-2" /> Download Receipt
              </button>
              <button onClick={handleClose} className="w-full bg-gray-100 text-gray-800 font-semibold py-3 rounded-xl">
                Done
              </button>
            </div>
          </div>
        );
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-end justify-center z-[100] p-4"
          onClick={handleClose}
        >
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "100%" }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="bg-white rounded-t-3xl p-6 w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-900">Online Payment</h2>
              <button onClick={handleClose} className="p-1 rounded-full hover:bg-gray-100">
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            {renderContent()}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PaymentModal;
