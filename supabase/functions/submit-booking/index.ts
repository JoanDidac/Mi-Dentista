import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, date, time, service, comments } = await req.json();
    
    console.log('Received booking request:', { name, email, phone, date, time, service });

    const GOOGLE_SHEETS_API_KEY = Deno.env.get('GOOGLE_SHEETS_API_KEY');
    
    if (!GOOGLE_SHEETS_API_KEY) {
      throw new Error('GOOGLE_SHEETS_API_KEY is not configured');
    }

    // Format the date for Google Sheets
    const formattedDate = new Date(date).toLocaleDateString('es-ES');
    const timestamp = new Date().toISOString();

    // Construct the values array for the new row
    const values = [[
      timestamp,
      name,
      email,
      phone,
      formattedDate,
      time,
      service,
      comments || ''
    ]];

    // Google Sheets API endpoint
    // Replace SPREADSHEET_ID with the actual spreadsheet ID
    // The sheet name is "Mi Dentista Citas Web Form"
    const spreadsheetId = 'YOUR_SPREADSHEET_ID'; // User needs to provide this
    const range = 'Mi Dentista Citas Web Form!A:H'; // Assuming columns A-H for the data
    
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}:append?valueInputOption=USER_ENTERED&key=${GOOGLE_SHEETS_API_KEY}`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        values: values,
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Google Sheets API error:', errorData);
      throw new Error(`Failed to submit to Google Sheets: ${errorData}`);
    }

    const result = await response.json();
    console.log('Successfully submitted to Google Sheets:', result);

    return new Response(
      JSON.stringify({ success: true, message: 'Booking submitted successfully' }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    );
  } catch (error) {
    console.error('Error in submit-booking function:', error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error occurred' }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    );
  }
});
