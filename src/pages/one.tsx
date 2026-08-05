import React, { useState } from 'react';
import InteractiveVideo from '../components/InteractiveVideo';
import channels from '../data/channels';

const OnePage: React.FC = () => {
  const [selected, setSelected] = useState<number>(0);
  const channel = channels[selected];

  return (
    <div style={{ display: 'flex', gap: 20, padding: 24 }}>
      <aside style={{ width: 260 }}>
        <h2>Channels</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {channels.map((c, i) => (
            <li key={c.id} style={{ marginBottom: 12 }}>
              <button
                onClick={() => setSelected(i)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  width: '100%',
                  padding: '8px 10px',
                  borderRadius: 6,
                  border: selected === i ? '2px solid #1976d2' : '1px solid #ddd',
                  background: selected === i ? '#e8f0fe' : '#fff',
                  cursor: 'pointer',
                }}
              >
                <div style={{ flex: 1, textAlign: 'left' }}>
                  <div style={{ fontWeight: 600 }}>{c.name}</div>
                  <div style={{ fontSize: 12, color: '#666' }}>{c.streamUrl}</div>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </aside>

      <main style={{ flex: 1, minHeight: 360 }}>
        <h2 style={{ marginTop: 0 }}>{channel.name}</h2>
        <div style={{ width: '100%', height: 420, borderRadius: 6, overflow: 'hidden', background: '#000' }}>
          <InteractiveVideo
            src={channel.streamUrl}
            poster={channel.poster}
            controls
            autoPlay={false}
            muted={false}
          />
        </div>
      </main>
    </div>
  );
};

export default OnePage;
