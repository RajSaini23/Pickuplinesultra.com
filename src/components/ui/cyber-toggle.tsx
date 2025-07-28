
"use client";

import * as React from 'react';
import { Power } from 'lucide-react';

interface CyberToggleProps {
  id: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  labelOn?: string;
  labelOff?: string;
}

export const CyberToggle: React.FC<CyberToggleProps> = ({
  id,
  checked,
  onCheckedChange,
  labelOn = "On",
  labelOff = "Off"
}) => {
  return (
    <div className="cyber-toggle-wrapper">
      <input
        type="checkbox"
        id={id}
        className="cyber-toggle-checkbox"
        checked={checked}
        onChange={(e) => onCheckedChange(e.target.checked)}
      />
      <label htmlFor={id} className="cyber-toggle">
        <div className="cyber-toggle-track">
          <div className="cyber-toggle-track-glow"></div>
          <div className="cyber-toggle-track-dots">
            <div className="cyber-toggle-track-dot"></div>
            <div className="cyber-toggle-track-dot"></div>
            <div className="cyber-toggle-track-dot"></div>
          </div>
        </div>
        <div className="cyber-toggle-thumb">
          <div className="cyber-toggle-thumb-shadow"></div>
          <div className="cyber-toggle-thumb-highlight"></div>
          <div className="cyber-toggle-thumb-icon">
             <Power size={14} />
          </div>
        </div>
        <div className="cyber-toggle-particles">
          <div className="cyber-toggle-particle"></div>
          <div className="cyber-toggle-particle"></div>
          <div className="cyber-toggle-particle"></div>
          <div className="cyber-toggle-particle"></div>
        </div>
      </label>
      <div className="cyber-toggle-labels">
        <span className="cyber-toggle-label-off">{labelOff}</span>
        <span className="cyber-toggle-label-on">{labelOn}</span>
      </div>
    </div>
  );
};
