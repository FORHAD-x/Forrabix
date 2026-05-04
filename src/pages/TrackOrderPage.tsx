import { useState } from 'react';
import { Package, Truck, CheckCircle } from 'lucide-react';

interface OrderStatus {
  order_id: string;
  status: 'processing' | 'shipped' | 'delivered';
  shipped_date?: string;
  tracking_number?: string;
  estimated_delivery?: string;
}

export function TrackOrderPage() {
  const [orderId, setOrderId] = useState('');
  const [orderStatus, setOrderStatus] = useState<OrderStatus | null>(null);
  const [error, setError] = useState('');

  const mockOrders: Record<string, OrderStatus> = {
    'DROP-2025-001': {
      order_id: 'DROP-2025-001',
      status: 'delivered',
      shipped_date: '2025-04-28',
      tracking_number: 'TRACK123456',
      estimated_delivery: '2025-05-03',
    },
    'DROP-2025-002': {
      order_id: 'DROP-2025-002',
      status: 'shipped',
      shipped_date: '2025-05-01',
      tracking_number: 'TRACK654321',
      estimated_delivery: '2025-05-06',
    },
    'DROP-2025-003': {
      order_id: 'DROP-2025-003',
      status: 'processing',
    },
  };

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    const order = mockOrders[orderId.toUpperCase()];
    if (order) {
      setOrderStatus(order);
      setError('');
    } else {
      setOrderStatus(null);
      setError('Order not found. Please check your order ID.');
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'processing':
        return <Package className="w-6 h-6" />;
      case 'shipped':
        return <Truck className="w-6 h-6" />;
      case 'delivered':
        return <CheckCircle className="w-6 h-6" />;
      default:
        return null;
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'processing':
        return 'Processing';
      case 'shipped':
        return 'Shipped';
      case 'delivered':
        return 'Delivered';
      default:
        return '';
    }
  };

  return (
    <div className="bg-[#000000e3] min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-white font-black text-4xl uppercase tracking-tight mb-2">Track Order</h1>
        <p className="text-zinc-400 text-sm mb-12">Enter your order ID to track your shipment</p>

        <form onSubmit={handleTrack} className="mb-12">
          <div className="flex flex-col sm:flex-row gap-3 mb-2">
            <input
              type="text"
              value={orderId}
              onChange={e => setOrderId(e.target.value)}
              placeholder="e.g., DROP-2025-001"
              className="flex-1 bg-zinc-900 border border-zinc-700 text-white px-4 py-3 focus:outline-none focus:border-[#d4f53c] transition-colors placeholder-zinc-600"
            />
            <button
              type="submit"
              className="bg-[#d4f53c] text-black font-bold px-6 py-3 hover:bg-[#c4e52a] transition-colors tracking-wider whitespace-nowrap"
            >
              TRACK
            </button>
          </div>
          <p className="text-white text-sm">Try: DROP-2025-001, DROP-2025-002, or DROP-2025-003</p>
        </form>

        {error && (
          <div className="border border-red-900 bg-red-950 text-red-200 p-4 mb-8 text-sm">{error}</div>
        )}

        {orderStatus && (
          <div className="border border-zinc-800 p-8 space-y-8">
            <div>
              <h2 className="text-white font-bold text-lg tracking-widest mb-4">ORDER #{orderStatus.order_id}</h2>
              <div className="bg-zinc-900 border border-zinc-700 p-4">
                <p className="text-zinc-500 text-xs tracking-widest mb-1">STATUS</p>
                <div className="flex items-center gap-2">
                  <div className="text-[#d4f53c]">{getStatusIcon(orderStatus.status)}</div>
                  <p className="text-white font-bold text-lg">{getStatusLabel(orderStatus.status)}</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-[#d4f53c] font-bold text-sm tracking-widest mb-4">TRACKING DETAILS</h3>
              <div className="space-y-4">
                {orderStatus.status === 'processing' ? (
                  <p className="text-zinc-300">
                    Your order is being prepared for shipment. You'll receive tracking information soon.
                  </p>
                ) : (
                  <>
                    {orderStatus.tracking_number && (
                      <div className="border border-zinc-700 p-4">
                        <p className="text-zinc-500 text-xs tracking-widest mb-1">TRACKING NUMBER</p>
                        <p className="text-white font-mono text-sm">{orderStatus.tracking_number}</p>
                      </div>
                    )}
                    {orderStatus.shipped_date && (
                      <div className="border border-zinc-700 p-4">
                        <p className="text-zinc-500 text-xs tracking-widest mb-1">SHIPPED DATE</p>
                        <p className="text-white">{new Date(orderStatus.shipped_date).toLocaleDateString()}</p>
                      </div>
                    )}
                    {orderStatus.estimated_delivery && (
                      <div className="border border-zinc-700 p-4">
                        <p className="text-zinc-500 text-xs tracking-widest mb-1">ESTIMATED DELIVERY</p>
                        <p className="text-white">{new Date(orderStatus.estimated_delivery).toLocaleDateString()}</p>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>

            <div className="border-t border-zinc-800 pt-6">
              <h3 className="text-[#d4f53c] font-bold text-sm tracking-widest mb-4">TIMELINE</h3>
              <div className="space-y-3">
                {[
                  { stage: 'Order Confirmed', date: '2025-05-01', completed: true },
                  {
                    stage: 'Processing',
                    date: '2025-05-01 to 2025-05-02',
                    completed: ['shipped', 'delivered'].includes(orderStatus.status),
                  },
                  {
                    stage: 'Shipped',
                    date: orderStatus.shipped_date ? new Date(orderStatus.shipped_date).toLocaleDateString() : 'Pending',
                    completed: orderStatus.status === 'delivered',
                  },
                  {
                    stage: 'Delivered',
                    date: orderStatus.estimated_delivery ? new Date(orderStatus.estimated_delivery).toLocaleDateString() : 'Pending',
                    completed: orderStatus.status === 'delivered',
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div
                      className={`w-2.5 h-2.5 rounded-full mt-1.5 ${
                        item.completed ? 'bg-[#d4f53c]' : 'bg-zinc-700'
                      }`}
                    />
                    <div>
                      <p className={`text-sm ${item.completed ? 'text-white font-semibold' : 'text-zinc-500'}`}>
                        {item.stage}
                      </p>
                      <p className="text-zinc-600 text-xs">{item.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {!orderStatus && !error && (
          <div className="border border-zinc-800 p-12 text-center">
            <Package className="w-12 h-12 text-zinc-700 mx-auto mb-4" />
            <p className="text-zinc-500">Enter your order ID to see tracking information</p>
          </div>
        )}
      </div>
    </div>
  );
}
