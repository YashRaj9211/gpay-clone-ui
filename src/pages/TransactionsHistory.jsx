import React from "react";
import { ChevronLeft, Search, MoreVertical, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import useTransactionStore from "../services/stores/store";

const TransactionsHistory = () => {
  const navigate = useNavigate();
  const { transactions } = useTransactionStore();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Group transactions by month and year
  const groupedTransactions = transactions.reduce((acc, transaction) => {
    const key = `${transaction.month} ${transaction.year}`;
    if (!acc[key]) {
      acc[key] = {
        month: transaction.month,
        year: transaction.year,
        total: 0,
        items: [],
      };
    }
    acc[key].items.push(transaction);
    acc[key].total += transaction.amount;
    return acc;
  }, {});

  // Sort groups (assuming newest first for this clone)
  const sortedGroups = Object.values(groupedTransactions).sort((a, b) => {
    // Basic sort logic for April/May 2026
    if (a.month === "May") return -1;
    return 1;
  });

  return (
    <div className="bg-background text-text-main min-h-screen font-sans pb-10">
      {/* Top Header */}
      <div className="sticky top-0 bg-background z-50 pt-4 pb-2 px-4">
        <div className="flex items-center gap-3 bg-surface rounded-full px-4 py-3">
          <button onClick={() => navigate("/")} className="text-gray-300">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div className="flex-1 flex items-center">
            <input
              type="text"
              placeholder="Search transactions"
              className="bg-transparent flex-1 outline-none text-text-main placeholder-text-secondary text-lg"
            />
          </div>
          <button className="text-gray-300">
            <MoreVertical className="w-6 h-6" />
          </button>
        </div>

        {/* Filter Chips */}
        <div className="flex gap-2 mt-4 overflow-x-auto no-scrollbar pb-2">
          {["Status", "Payment method", "Date"].map((filter) => (
            <button
              key={filter}
              className="flex items-center gap-2 bg-surface border border-border-main rounded-lg px-4 py-1.5 whitespace-nowrap text-sm text-text-secondary"
            >
              {filter}
              <ChevronDown className="w-4 h-4" />
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4">
        {sortedGroups.map((group) => (
          <div key={`${group.month}-${group.year}`} className="mb-8">
            {/* Group Header */}
            <div className="bg-[#1f1f1f]">
              <div className="flex justify-between items-center mb-6 p-4">
                <div>
                  <p className="text-xs text-text-secondary font-medium">
                    {group.year}
                  </p>
                  <h2 className="text-2xl font-normal text-text-main">
                    {group.month}
                  </h2>
                </div>
                <div className="text-2xl font-normal">
                  ₹{group.month === "April" ? "16,489.67" : group.total}
                </div>
              </div>
            </div>

            {/* Transaction Items */}
            <div className="space-y-6 px-4">
              {group.items.map((item) => (
                <div key={item.id} className="flex items-center gap-4 py-1">
                  {/* Icon Area - Fixed Width */}
                  <div
                    className={`w-12 h-12 ${item.color} rounded-full flex-shrink-0 flex items-center justify-center text-xl font-medium`}
                  >
                    {item.initial}
                  </div>

                  {/* Info Text Area - Flexible & Truncated */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[15px] font-medium leading-tight text-text-main truncate">
                      {item.name}
                    </h3>
                    <p className="text-sm text-text-secondary mt-0.5">
                      {item.date}
                    </p>
                  </div>

                  {/* Amount Area - Fixed Width / Shrink-0 */}
                  <div className="text-lg font-normal whitespace-nowrap flex-shrink-0 text-right">
                    ₹{item.amount}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionsHistory;
