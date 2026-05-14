"use client"

import { useEffect, useState } from "react"

async function getLeaderboard() {

  const res = await fetch(
    "https://voidmesh-ai.onrender.com/leaderboard",
    {
      cache: "no-store"
    }
  )

  return res.json()
}

export default function VoidmeshLandingPage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,255,0.12),transparent_35%)] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-3xl rounded-full pointer-events-none" />

      {/* Navbar */}
      <nav className="relative z-10 flex items-center justify-between px-6 md:px-12 py-6 border-b border-zinc-800 backdrop-blur-sm">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-widest text-cyan-400">
            VOIDMESH AI
          </h1>
        </div>

        <div className="hidden md:flex items-center gap-8 text-zinc-300">
          <a href="#features" className="hover:text-cyan-400 transition">
            Features
          </a>

          <a href="#agents" className="hover:text-cyan-400 transition">
            AI Agents
          </a>

          <a href="#pricing" className="hover:text-cyan-400 transition">
            Pricing
          </a>
        </div>

        <button className="px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold transition shadow-[0_0_25px_rgba(34,211,238,0.45)]">
          Launch Dashboard
        </button>
      </nav>

      {/* Hero */}
      <section className="relative z-10 px-6 md:px-12 py-24 md:py-36">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-sm mb-6">
              ⚡ Realtime AI Trading Intelligence
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">
              The AI-Native
              <span className="block text-cyan-400">
                Trading Ecosystem
              </span>
            </h1>

            <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
              Multi-agent AI trading infrastructure with realtime signals,
              adaptive leverage, copy trading, AI battles, portfolio
              intelligence, and autonomous market analysis.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-7 py-4 rounded-2xl bg-cyan-500 text-black font-bold hover:bg-cyan-400 transition shadow-[0_0_35px_rgba(34,211,238,0.45)]">
                Start Free
              </button>

              <button className="px-7 py-4 rounded-2xl border border-zinc-700 hover:border-cyan-500 hover:text-cyan-400 transition">
                View Live Demo
              </button>
            </div>

            <div className="flex flex-wrap gap-8 mt-12 text-zinc-400">
              <div>
                <p className="text-3xl font-bold text-white">24/7</p>
                <p>Realtime AI Monitoring</p>
              </div>

              <div>
                <p className="text-3xl font-bold text-white">Multi-AI</p>
                <p>Competing Trading Agents</p>
              </div>

              <div>
                <p className="text-3xl font-bold text-white">Live</p>
                <p>Portfolio Intelligence</p>
              </div>
            </div>
          </div>

          {/* Hero Dashboard Mock */}
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full" />

            <div className="relative rounded-3xl border border-cyan-500/20 bg-zinc-900/80 backdrop-blur-xl p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-zinc-500 text-sm">Portfolio Value</p>
                  <h2 className="text-4xl font-bold text-cyan-400">
                    $12,480
                  </h2>
                </div>

                <div className="px-4 py-2 rounded-xl bg-green-500/20 text-green-400 border border-green-500/30">
                  +18.4%
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl bg-black/40 border border-zinc-800 p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-zinc-500 text-sm">BTCUSDT</p>
                      <p className="text-xl font-bold text-red-400">SELL</p>
                    </div>

                    <div className="text-right">
                      <p className="text-zinc-500 text-sm">AI Confidence</p>
                      <p className="text-cyan-400 text-xl font-bold">84%</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-black/40 border border-zinc-800 p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-zinc-500 text-sm">ETHUSDT</p>
                      <p className="text-xl font-bold text-green-400">BUY</p>
                    </div>

                    <div className="text-right">
                      <p className="text-zinc-500 text-sm">AI Confidence</p>
                      <p className="text-cyan-400 text-xl font-bold">79%</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-black/40 border border-zinc-800 p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-zinc-500 text-sm">AI Agent Battle</p>
                      <p className="text-xl font-bold text-purple-400">
                        TREND vs SNIPER
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="text-zinc-500 text-sm">Winning Agent</p>
                      <p className="text-cyan-400 text-xl font-bold">
                        SNIPER
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="relative z-10 px-6 md:px-12 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Built For
              <span className="text-cyan-400"> Modern Traders</span>
            </h2>

            <p className="text-zinc-400 max-w-3xl mx-auto text-lg">
              Advanced AI infrastructure combining machine learning,
              realtime execution, adaptive intelligence, and social trading.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Realtime AI Signals",
                desc: "Instant AI-generated trading signals powered by adaptive intelligence.",
              },
              {
                title: "Multi-Agent Battles",
                desc: "Competing AI agents battle live across market conditions.",
              },
              {
                title: "Copy Trading",
                desc: "Follow elite AI traders and automatically mirror trades.",
              },
              {
                title: "Adaptive Leverage",
                desc: "AI dynamically adjusts leverage based on market conditions.",
              },
              {
                title: "AI Heatmaps",
                desc: "Visualize strongest bullish and bearish opportunities instantly.",
              },
              {
                title: "Realtime Portfolio",
                desc: "Live PNL, growth tracking, and execution monitoring.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8 hover:border-cyan-500/40 transition duration-300 hover:shadow-[0_0_35px_rgba(34,211,238,0.15)]"
              >
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-2xl mb-6">
                  ⚡
                </div>

                <h3 className="text-2xl font-bold mb-4 text-white">
                  {feature.title}
                </h3>

                <p className="text-zinc-400 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Agents */}
      <section
        id="agents"
        className="relative z-10 px-6 md:px-12 py-20"
      >
        <div className="max-w-6xl mx-auto rounded-[40px] border border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 p-10 md:p-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-cyan-400 font-semibold tracking-widest uppercase mb-4">
                AI Agent Ecosystem
              </p>

              <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                Multiple AI Minds.
                <span className="block text-purple-400">
                  One Intelligence Network.
                </span>
              </h2>

              <p className="text-zinc-300 text-lg leading-relaxed">
                VOIDMESH AI combines trend-following agents,
                liquidity-sniping agents, mean-reversion systems,
                and adaptive machine learning models into a unified
                realtime intelligence layer.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "TREND_AGENT",
                "SNIPER_AGENT",
                "MEAN_REVERSION_AGENT",
                "ORDERFLOW_AGENT",
              ].map((agent, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-zinc-800 bg-black/40 p-5 flex items-center justify-between"
                >
                  <div>
                    <p className="text-white font-bold">
                      {agent}
                    </p>

                    <p className="text-zinc-500 text-sm">
                      Active AI Strategy
                    </p>
                  </div>

                  <div className="px-3 py-1 rounded-lg bg-green-500/20 border border-green-500/20 text-green-400 text-sm">
                    ACTIVE
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section
        id="pricing"
        className="relative z-10 px-6 md:px-12 py-24"
      >
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Choose Your
            <span className="text-cyan-400"> AI Tier</span>
          </h2>

          <p className="text-zinc-400 text-lg max-w-3xl mx-auto">
            Access realtime AI intelligence, elite copy trading,
            and advanced market analytics.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {/* FREE */}
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8">
            <h3 className="text-3xl font-black mb-2">FREE</h3>

            <p className="text-zinc-400 mb-8">
              Explore VOIDMESH AI
            </p>

            <div className="text-5xl font-black mb-8">
              $0
            </div>

            <ul className="space-y-4 text-zinc-300">
              <li>✓ Delayed AI signals</li>
              <li>✓ Public dashboard</li>
              <li>✓ Leaderboard access</li>
            </ul>

            <button className="w-full mt-10 py-4 rounded-2xl border border-zinc-700 hover:border-cyan-500 hover:text-cyan-400 transition">
              Start Free
            </button>
          </div>

          {/* PRO */}
          <div className="rounded-3xl border border-cyan-500 bg-cyan-500/10 p-8 scale-105 shadow-[0_0_50px_rgba(34,211,238,0.15)]">
            <div className="inline-block px-4 py-1 rounded-full bg-cyan-500 text-black text-sm font-bold mb-4">
              MOST POPULAR
            </div>

            <h3 className="text-3xl font-black mb-2">PRO</h3>

            <p className="text-zinc-300 mb-8">
              Realtime AI intelligence
            </p>

            <div className="text-5xl font-black mb-8 text-cyan-400">
              $29
            </div>

            <ul className="space-y-4 text-zinc-200">
              <li>✓ Realtime AI signals</li>
              <li>✓ AI heatmaps</li>
              <li>✓ Adaptive leverage</li>
              <li>✓ Elite dashboards</li>
            </ul>

            <button className="w-full mt-10 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold transition shadow-[0_0_30px_rgba(34,211,238,0.35)]">
              Upgrade To PRO
            </button>
          </div>

          {/* ELITE */}
          <div className="rounded-3xl border border-purple-500 bg-purple-500/10 p-8">
            <h3 className="text-3xl font-black mb-2 text-purple-400">
              ELITE
            </h3>

            <p className="text-zinc-300 mb-8">
              Advanced AI ecosystem
            </p>

            <div className="text-5xl font-black mb-8">
              $99
            </div>

            <ul className="space-y-4 text-zinc-200">
              <li>✓ AI Agent Battles</li>
              <li>✓ Copy Trading</li>
              <li>✓ VIP AI agents</li>
              <li>✓ Priority execution</li>
            </ul>

            <button className="w-full mt-10 py-4 rounded-2xl bg-purple-500 hover:bg-purple-400 text-white font-bold transition shadow-[0_0_30px_rgba(168,85,247,0.35)]">
              Join ELITE
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 px-6 md:px-12 py-10 text-center text-zinc-500">
        <p>
          VOIDMESH AI © 2026 — Realtime AI Trading Intelligence
        </p>
      </footer>
    </main>
  )
}
