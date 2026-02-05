import React from 'react';

export const DentalPattern = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <defs>
            <pattern id="dental-pattern-fill" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                <g fill="none" stroke="#8C3573" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    {/* Tooth (Based on Hero SVG, simplified) */}
                    <path d="M40,50 C32,50 28,58 28,68 C28,78 32,100 40,100 C44,100 45,78 50,78 C55,78 56,100 60,100 C68,100 72,78 72,68 C72,58 68,50 60,50 C56,50 54,54 50,54 C46,54 44,50 40,50 Z" transform="translate(10, 10) scale(0.8)" />

                    {/* Sparkle 1 */}
                    <path d="M120 40 L123 48 L131 51 L123 54 L120 62 L117 54 L109 51 L117 48 Z" />

                    {/* Smiling Molar */}
                    <path d="M145 120 C135 120 130 130 135 145 C137 155 140 158 145 153 C150 158 153 155 155 145 C160 130 155 120 145 120 Z" transform="translate(10, 0) scale(1.2)" /> {/* Body */}
                    <circle cx="178" cy="155" r="1.5" fill="#8C3573" stroke="none" /> {/* Right Eye */}
                    <circle cx="188" cy="155" r="1.5" fill="#8C3573" stroke="none" /> {/* Left Eye */}
                    <path d="M180 160 Q183 163 186 160" /> {/* Smile */}

                    {/* Bubbles/Circles */}
                    <circle cx="90" cy="110" r="3" />
                    <circle cx="160" cy="50" r="5" />
                    <circle cx="30" cy="140" r="4" />

                    {/* Implant Screw simple representation */}
                    <path d="M160 80 L160 100 M155 82 L165 82 M155 86 L165 86 M155 90 L165 90 M155 94 L165 94 M157 100 L163 100 L160 106 Z" transform="translate(-20, 80) rotate(15)" />
                </g>
            </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dental-pattern-fill)" />
    </svg>
);
