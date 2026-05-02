import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Search,
  QrCode,
  SendToBack,
  Landmark,
  Smartphone,
  Wifi,
  Rocket,
  Trophy,
  HeartHandshake,
  ChevronDown,
  ChevronRight,
  Lightbulb,
  Tv,
  CarFront,
  CreditCard,
  PlaySquare,
  Gift,
  Tag,
  Users,
  Laugh,
  Banknote,
  Droplet,
  Gauge,
  History,
  ArrowRight
} from 'lucide-react'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="bg-background text-text-main min-h-screen font-sans pb-10">
      {/* Top Section (Header + Banner) */}
      <div className="relative overflow-hidden bg-black min-h-[280px] pt-8">
        {/* Shared Background Image */}
        <img 
          src="/images/Gemini_Generated_Image_8h2jn58h2jn58h2j.png" 
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        {/* Readability Gradient (Left to Right) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent z-0"></div>

        {/* Content Container */}
        <div className="relative z-10">
          {/* Header */}
          <div className="px-4 mb-4">
            <div className="flex items-center gap-4">
              <div className="flex-1 bg-surface/80 backdrop-blur-md rounded-full flex items-center px-5 h-14 border border-white/5">
                <Search className="w-6 h-6 text-gray-400 mr-4" />
                <input
                  type="text"
                  placeholder="Pay anyone on UPI"
                  className="bg-transparent flex-1 outline-none text-text-main placeholder-gray-400 text-lg"
                />
              </div>
              <div className="w-12 h-12 rounded-full bg-[#e67c00] flex items-center justify-center font-normal text-xl shadow-lg border border-white/10">
                Y
              </div>
            </div>
          </div>

          {/* Banner Content */}
          <div className="px-8 pt-4 pb-6">
            <h2 className="text-[26px] font-normal mb-1 tracking-tight text-white">Earn up to ₹51 cashback</h2>
            <p className="text-gray-300 text-[15px] mb-6">On first Pocket Money payment</p>
            <div className="flex items-center gap-4">
              <span className="text-[#a8c7fa] text-lg font-medium">Set up Pocket Money</span>
              <div className="w-11 h-11 rounded-full bg-[#a8c7fa] flex items-center justify-center shadow-lg">
                <ArrowRight className="w-7 h-7 text-[#062e6f]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4">

        {/* Top 4 Actions */}
        <div className="grid grid-cols-4 gap-4 mt-6">
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center mb-2">
              <QrCode className="w-6 h-6 text-white" />
            </div>
            <span className="text-xs text-center text-gray-300">Scan any<br />QR code</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center mb-2">
              <SendToBack className="w-6 h-6 text-white" />
            </div>
            <span className="text-xs text-center text-gray-300">Pay<br />anyone</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center mb-2">
              <Landmark className="w-6 h-6 text-white" />
            </div>
            <span className="text-xs text-center text-gray-300">Bank<br />transfer</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center mb-2">
              <Smartphone className="w-6 h-6 text-white" />
            </div>
            <span className="text-xs text-center text-text-secondary">Mobile<br />recharge</span>
          </div>
        </div>

        {/* Pills */}
        <div className="flex gap-3 mt-6 overflow-x-auto no-scrollbar py-1">
          <div className="flex items-center gap-2 bg-surface border border-border-main rounded-full px-4 py-2 whitespace-nowrap">
            <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center">
              <Wifi className="w-4 h-4 text-blue-400" />
            </div>
            <span className="text-sm">Tap & Pay<br/><span className="text-xs text-gray-400">UPI</span></span>
          </div>
          <div className="flex items-center gap-2 bg-surface border border-border-main rounded-full px-4 py-2 whitespace-nowrap">
            <Rocket className="w-5 h-5 text-orange-400" />
            <span className="text-sm">UPI Lite<br/><span className="text-xs text-gray-400">₹0.52</span></span>
          </div>
          <div className="flex items-center gap-2 bg-surface border border-border-main rounded-full px-4 py-2 whitespace-nowrap">
            <Trophy className="w-5 h-5 text-yellow-500" />
            <span className="text-sm">Rewards<br/><span className="text-xs text-gray-400">New</span></span>
          </div>
        </div>

        {/* People */}
        <div className="mt-8">
          <h2 className="text-lg font-medium mb-4">People</h2>
          <div className="grid grid-cols-4 gap-y-6">
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-[#1f1f1f] rounded-full flex items-center justify-center mb-2 border border-gray-800">
                <HeartHandshake className="w-6 h-6 text-gray-300" />
              </div>
              <span className="text-xs text-gray-300 truncate w-full text-center">Pocket mo...</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-teal-600 rounded-full flex items-center justify-center mb-2 text-xl">M</div>
              <span className="text-xs text-gray-300 truncate w-full text-center uppercase">MAHIPAL ...</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-indigo-500 rounded-full flex items-center justify-center mb-2 text-xl">P</div>
              <span className="text-xs text-gray-300 truncate w-full text-center uppercase">PRIYANSH...</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-purple-700 rounded-full flex items-center justify-center mb-2 text-xl">R</div>
              <span className="text-xs text-gray-300 truncate w-full text-center uppercase">RAMAN K...</span>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-stone-500 rounded-full flex items-center justify-center mb-2 text-xl">A</div>
              <span className="text-xs text-gray-300 truncate w-full text-center uppercase">AKSHITA S...</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-violet-700 rounded-full flex items-center justify-center mb-2 text-xl">A</div>
              <span className="text-xs text-gray-300 truncate w-full text-center">Afjal</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-slate-500 rounded-full flex items-center justify-center mb-2 text-xl">S</div>
              <span className="text-xs text-gray-300 truncate w-full text-center">Sitaram</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-[#1f1f1f] rounded-full flex items-center justify-center mb-2 border border-gray-800">
                <ChevronDown className="w-6 h-6 text-gray-300" />
              </div>
              <span className="text-xs text-gray-300 truncate w-full text-center">More</span>
            </div>
          </div>
        </div>

        {/* Bills & recharges */}
        <div className="mt-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium">Bills & recharges</h2>
            <button className="text-text-accent text-sm flex items-center">
              Manage <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>
          <div className="grid grid-cols-4 gap-y-6">
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-[#0a56d9] rounded-full flex items-center justify-center mb-2">
                 <span className="font-bold text-white text-lg">Jio</span>
              </div>
              <span className="text-xs text-gray-300 text-center">Jio Prepaid</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-[#0a56d9] rounded-full flex items-center justify-center mb-2">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <span className="text-xs text-gray-300 text-center">Mobile<br/>recharge</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-[#0a56d9] rounded-full flex items-center justify-center mb-2">
                <Tv className="w-6 h-6 text-white" />
              </div>
              <span className="text-xs text-gray-300 text-center">DTH / Cable<br/>TV</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-[#0a56d9] rounded-full flex items-center justify-center mb-2">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <span className="text-xs text-gray-300 text-center">Electricity</span>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-[#0a56d9] rounded-full flex items-center justify-center mb-2">
                <CarFront className="w-6 h-6 text-white" />
              </div>
              <span className="text-xs text-gray-300 text-center">FASTag<br/>recharge</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-[#0a56d9] rounded-full flex items-center justify-center mb-2">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <span className="text-xs text-gray-300 text-center">Postpaid<br/>mobile</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-[#0a56d9] rounded-full flex items-center justify-center mb-2">
                <Wifi className="w-6 h-6 text-white" />
              </div>
              <span className="text-xs text-gray-300 text-center">Broadband /<br/>Landline</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-[#0a56d9] rounded-full flex items-center justify-center mb-2">
                <CreditCard className="w-6 h-6 text-white" />
              </div>
              <span className="text-xs text-gray-300 text-center">Credit cards</span>
            </div>
          </div>
        </div>

        {/* Businesses */}
        <div className="mt-8">
          <h2 className="text-lg font-medium mb-4">Businesses</h2>
          <div className="grid grid-cols-4 gap-y-6">
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-purple-700 rounded-full flex items-center justify-center mb-2 text-xl">N</div>
              <span className="text-xs text-gray-300 truncate w-full text-center">New Gajan...</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-pink-600 rounded-full flex items-center justify-center mb-2 text-xl">I</div>
              <span className="text-xs text-gray-300 truncate w-full text-center uppercase">ICCL GRO...</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-green-700 rounded-full flex items-center justify-center mb-2 text-xl">R</div>
              <span className="text-xs text-gray-300 truncate w-full text-center">Rapido</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-[#1f1f1f] rounded-full flex items-center justify-center mb-2 border border-gray-800">
                <ChevronDown className="w-6 h-6 text-gray-300" />
              </div>
              <span className="text-xs text-gray-300 truncate w-full text-center">More</span>
            </div>
          </div>
        </div>

        {/* Gift cards & more */}
        <div className="mt-8">
          <h2 className="text-lg font-medium mb-4">Gift cards & more</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#1f1f1f] rounded-2xl p-4 border border-gray-800">
              <PlaySquare className="w-6 h-6 text-blue-400 mb-3" />
              <h3 className="font-medium text-sm mb-1">Subscriptions</h3>
              <p className="text-xs text-gray-400 mb-4">Buy plans from leading OTT platforms</p>
              <div className="flex -space-x-2">
                <div className="w-6 h-6 rounded-full bg-orange-500 border border-[#1f1f1f] z-10 flex items-center justify-center text-[8px] font-bold">Z</div>
                <div className="w-6 h-6 rounded-full bg-blue-500 border border-[#1f1f1f] z-20 flex items-center justify-center text-[8px] font-bold">*</div>
                <div className="w-6 h-6 rounded-full bg-cyan-500 border border-[#1f1f1f] z-30 flex items-center justify-center text-[8px] font-bold">P</div>
              </div>
            </div>
            <div className="bg-[#1f1f1f] rounded-2xl p-4 border border-gray-800">
              <Gift className="w-6 h-6 text-pink-400 mb-3" />
              <h3 className="font-medium text-sm mb-1">Gift cards</h3>
              <p className="text-xs text-gray-400 mb-4">Buy gift cards from the biggest brands</p>
              <div className="flex -space-x-2">
                <div className="w-6 h-6 rounded-full bg-yellow-500 border border-[#1f1f1f] z-10 flex items-center justify-center text-[8px] font-bold">F</div>
                <div className="w-6 h-6 rounded-full bg-blue-400 border border-[#1f1f1f] z-20 flex items-center justify-center text-[8px] font-bold">A</div>
                <div className="w-6 h-6 rounded-full bg-orange-400 border border-[#1f1f1f] z-30 flex items-center justify-center text-[8px] font-bold">M</div>
              </div>
            </div>
          </div>
        </div>

        {/* Offers & rewards */}
        <div className="mt-8">
          <h2 className="text-lg font-medium mb-4">Offers & rewards</h2>
          <div className="grid grid-cols-4 gap-y-6 mb-6">
            <div className="flex flex-col items-center relative">
              <div className="w-14 h-14 bg-gradient-to-br from-yellow-300 to-yellow-600 rounded-full flex items-center justify-center mb-2">
                <Trophy className="w-7 h-7 text-white" />
              </div>
              <div className="absolute top-0 right-1 w-3 h-3 bg-blue-400 rounded-full border-2 border-[#0f0f0f]"></div>
              <span className="text-xs text-gray-300 text-center">Rewards</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-gradient-to-br from-rose-400 to-rose-600 rounded-full flex items-center justify-center mb-2">
                <Tag className="w-7 h-7 text-white" />
              </div>
              <span className="text-xs text-gray-300 text-center">Offers</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mb-2">
                <Users className="w-7 h-7 text-white" />
              </div>
              <span className="text-xs text-gray-300 text-center">Referrals</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mb-2">
                <Laugh className="w-7 h-7 text-white" />
              </div>
              <span className="text-xs text-gray-300 text-center">T20 Vibes</span>
            </div>
          </div>
          
          {/* Share banner */}
          <div className="bg-[#1f1f1f] rounded-2xl p-5 relative overflow-hidden border border-gray-800 flex justify-between items-center">
            <div className="z-10 w-2/3">
              <h3 className="font-medium mb-1">Share memes and get cashback!</h3>
              <p className="text-gray-400 text-xs mb-4">Earn up to ₹11 plus a laddoo</p>
              <button className="text-blue-400 text-sm font-medium hover:text-blue-300">
                Share now
              </button>
            </div>
            <div className="w-20 h-24 bg-gradient-to-t from-gray-800 to-gray-700 rounded-lg flex items-center justify-center relative transform rotate-6 z-10">
               <span className="text-4xl font-bold text-white">?</span>
            </div>
          </div>
        </div>

        {/* Manage your money */}
        <div className="mt-8 mb-6">
          <h2 className="text-lg font-medium mb-4">Manage your money</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#1f1f1f] rounded-2xl p-4 border border-gray-800">
              <Banknote className="w-6 h-6 text-gray-300 mb-3" />
              <h3 className="font-medium text-sm mb-1">Personal loan</h3>
              <p className="text-xs text-gray-400 mb-4">Up to ₹10 lakh, instant approval</p>
              <button className="text-blue-400 text-sm font-medium">Check details</button>
            </div>
            <div className="bg-[#1f1f1f] rounded-2xl p-4 border border-gray-800">
              <Droplet className="w-6 h-6 text-gray-300 mb-3" />
              <h3 className="font-medium text-sm mb-1">Gold loan</h3>
              <p className="text-xs text-gray-400 mb-4">Interest rate starting at 0.96% monthly</p>
              <button className="text-blue-400 text-sm font-medium">Apply now</button>
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="mt-2 flex flex-col gap-1 pb-8">
          <button className="flex items-center justify-between p-4 hover:bg-[#1a1a1a] rounded-2xl transition-colors">
            <div className="flex items-center gap-4">
              <Gauge className="w-6 h-6 text-blue-400" />
              <div className="flex flex-col items-start">
                <span className="text-sm font-medium text-gray-200">Check your CIBIL score for free</span>
                <span className="text-[10px] bg-blue-600/20 text-blue-400 px-2 py-0.5 rounded-full mt-1">New score available</span>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-500" />
          </button>
          
          <button 
            onClick={() => navigate('/transactions')}
            className="flex items-center justify-between p-4 hover:bg-[#1a1a1a] rounded-2xl transition-colors w-full"
          >
            <div className="flex items-center gap-4">
              <History className="w-6 h-6 text-blue-400" />
              <span className="text-sm font-medium text-gray-200">See transaction history</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-500" />
          </button>
          
          <button className="flex items-center justify-between p-4 hover:bg-[#1a1a1a] rounded-2xl transition-colors">
            <div className="flex items-center gap-4">
              <Landmark className="w-6 h-6 text-blue-400" />
              <span className="text-sm font-medium text-gray-200">Check bank balance</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-500" />
          </button>
        </div>

      </div>
    </div>
  )
}

export default Home