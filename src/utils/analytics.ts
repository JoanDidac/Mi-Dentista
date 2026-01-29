
export interface BrowserMetadata {
    sourceUrl: string;
    referrer: string;
    userAgent: string;
    deviceType: 'mobile' | 'desktop' | 'tablet';
    timestamp: string;
    screenResolution: string;
    language: string;
}

export const getBrowserMetadata = (): BrowserMetadata => {
    const width = window.innerWidth;
    let deviceType: 'mobile' | 'desktop' | 'tablet' = 'desktop';

    if (width < 768) {
        deviceType = 'mobile';
    } else if (width < 1024) {
        deviceType = 'tablet';
    }

    return {
        sourceUrl: window.location.href,
        referrer: document.referrer || 'direct',
        userAgent: navigator.userAgent,
        deviceType,
        timestamp: new Date().toISOString(),
        screenResolution: `${window.screen.width}x${window.screen.height}`,
        language: navigator.language
    };
};
