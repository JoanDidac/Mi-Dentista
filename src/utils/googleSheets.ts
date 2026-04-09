
// This URL will be replaced by the user after they deploy their Apps Script
// See GOOGLE_SHEETS_SETUP.md for instructions
export const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyfCsOuURcuqnb1rvbbUNX2M9I4vW1R1wRKzlhLqqoRuwHbbIBxQ-F-XEvyytRe_Z8q4Q/exec";

export interface ContactFormData {
    name: string;
    phone: string;
    email: string;
    treatment?: string;
    reason?: string;
    privacy: boolean;
    metadata?: any; // For enriched data (source, device, etc.)
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
