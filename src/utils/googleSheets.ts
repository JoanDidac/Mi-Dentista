
// This URL will be replaced by the user after they deploy their Apps Script
// See GOOGLE_SHEETS_SETUP.md for instructions
export const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz9sc4LrRzaLkjl83paRNowRE49MDwE0cAkb9BnjGum6hY0HBB8xVWvzrhfUT-r84nExQ/exec";

export interface ContactFormData {
    name: string;
    phone: string;
    email: string;
    treatment?: string;
    reason?: string;
    privacy: boolean;
    [key: string]: any; // Allow other fields
}

/**
 * Submits form data to a Google Apps Script Web App.
 * Note: Apps Script POST requests from client-side usually return opaque responses (mode: 'no-cors')
 * to avoid CORS errors unless strictly configured. We treat opaque responses as success.
 */
export const submitFormToSheet = async (data: ContactFormData): Promise<boolean> => {
    try {
        // We use 'no-cors' mode because Google Apps Script redirects which triggers CORS checks 
        // that fail in strict browser environments. 
        // 'no-cors' means we can send data but cannot read the response content.
        await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            body: JSON.stringify(data),
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return true;
    } catch (error) {
        console.error("Error submitting to Google Sheet:", error);
        return false;
    }
};
