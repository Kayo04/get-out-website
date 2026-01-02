import PhoneScene from "@/components/PhoneScene";

export default function Home() {
  return (
    <main style={{ width: '100vw', height: '100vh', position: 'relative' }}>
      <div className="scene-container">
        <PhoneScene />
      </div>

      <div className="logo-container">
        <h1>GET OUT</h1>
      </div>

      <div className="overlay">
        <button className="cta-button">Download App</button>
      </div>
    </main>
  );
}
