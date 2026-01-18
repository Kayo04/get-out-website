"use client";

import { useEffect, useState } from "react";

const LAUNCH_DATE = new Date("2026-03-24T00:00:00");

export default function LaunchCountdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = new Date();
    const diff = LAUNCH_DATE.getTime() - now.getTime();

    if (diff <= 0) {
      return null;
    }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 60000); // atualiza a cada minuto

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) {
    return <p>🚀 We are live!</p>;
  }

  return (
    <div className="countdown">
      <span><strong>{timeLeft.days}</strong> days</span>
      <span>·</span>
      <span><strong>{timeLeft.hours}</strong> hours</span>
      <span>·</span>
      <span><strong>{timeLeft.minutes}</strong> min</span>
    </div>
  );
}
