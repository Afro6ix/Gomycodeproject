'use client';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <section className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div key={item.id} className="flex gap-4 border-b pb-4">
              <Image src={item.image} alt={item.name} width={80} height={80} />
              <div className="flex-1">
                <p className="font-semibold">{item.name}</p>
                <p>₦{item.price.toLocaleString()}</p>
                <div className="flex items-center gap-2 mt-2">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="bg-gray-300 px-2 hover:bg-gray-400 hover:cursor-pointer">-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="bg-gray-300 px-2 hover:bg-gray-400 hover:cursor-pointer">+</button>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-3 py-1 rounded w-[100px] h-[50px] hover:bg-red-600 hover:cursor-pointer"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="text-right mt-4">
            <p className="text-lg font-bold">
              Total: ₦{total.toLocaleString()}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
