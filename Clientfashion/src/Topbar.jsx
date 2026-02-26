import { useNavigate } from 'react-router-dom';
import './Topbar.css';

export default function Topbar({ title, subtitle }) {
  const navigate = useNavigate();

  return (
    <div className="topbar">
      <div>
        <div className="topbar-title">{title}</div>
        {subtitle && <div className="topbar-sub">{subtitle}</div>}
      </div>
      <div className="topbar-right">
        <button className="topbar-notif-btn" onClick={() => navigate('/notifications')}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/>
            <path d="M13.73 21a2 2 0 01-3.46 0"/>
          </svg>
          <span className="topbar-notif-badge">2</span>
        </button>
        <div className="topbar-avatar" onClick={() => navigate('/profile')}>AO</div>
      </div>
    </div>
  );
}