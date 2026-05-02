import { create } from 'zustand'

const useTransactionStore = create((set) => ({
  transactions: [
    {
      id: 1,
      name: "New Gajanan Vada Pav Center",
      date: "1 May",
      month: "May",
      year: "2026",
      amount: 20,
      initial: "N",
      color: "bg-purple-700"
    },
    {
      id: 2,
      name: "New Gajanan Vada Pav Center",
      date: "1 May",
      month: "May",
      year: "2026",
      amount: 50,
      initial: "N",
      color: "bg-purple-700"
    },
    {
      id: 3,
      name: "Rapido",
      date: "30 April",
      month: "April",
      year: "2026",
      amount: 40,
      initial: "R",
      color: "bg-green-700"
    },
    {
      id: 4,
      name: "ROPPEN TRANSPORTATION SERVICES PRIVATE LIMITED",
      date: "30 April",
      month: "April",
      year: "2026",
      amount: 60,
      initial: "R",
      color: "bg-purple-700"
    },
    {
      id: 5,
      name: "SmartQ",
      date: "30 April",
      month: "April",
      year: "2026",
      amount: 70,
      initial: "S",
      color: "bg-blue-600"
    },
    {
      id: 6,
      name: "ROPPEN TRANSPORTATION SERVICES PRIVATE LIMITED",
      date: "30 April",
      month: "April",
      year: "2026",
      amount: 60,
      initial: "R",
      color: "bg-purple-700"
    },
    {
      id: 5,
      name: "SmartQ",
      date: "30 Feb",
      month: "Feb",
      year: "2026",
      amount: 70,
      initial: "S",
      color: "bg-blue-600"
    },
    {
      id: 6,
      name: "ROPPEN TRANSPORTATION SERVICES PRIVATE LIMITED",
      date: "30 Feb",
      month: "Feb",
      year: "2026",
      amount: 60,
      initial: "R",
      color: "bg-purple-700"
    }
  ],
  setTransactions: (transactions) => set({ transactions }),
}))

export default useTransactionStore
