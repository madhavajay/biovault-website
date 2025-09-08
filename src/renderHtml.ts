export function renderHtml(message?: string) {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>BioVault - Join the Waitlist</title>
        <!-- Google tag (gtag.js) -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-4D2KBBR5W5"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-4D2KBBR5W5');
        </script>
        <script
            src="https://metrics.syftbox.net/api/script.js"
            data-site-id="3"
            defer
        ></script>
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
          }
          .container {
            background: white;
            border-radius: 20px;
            padding: 40px;
            max-width: 450px;
            width: 100%;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          }
          h1 {
            color: #333;
            margin-bottom: 10px;
            font-size: 32px;
            text-align: center;
          }
          .subtitle {
            color: #666;
            margin-bottom: 30px;
            text-align: center;
            font-size: 16px;
          }
          .form-group {
            margin-bottom: 20px;
          }
          label {
            display: block;
            margin-bottom: 8px;
            color: #555;
            font-weight: 500;
          }
          input[type="email"] {
            width: 100%;
            padding: 12px 16px;
            border: 2px solid #e0e0e0;
            border-radius: 10px;
            font-size: 16px;
            transition: border-color 0.3s;
          }
          input[type="email"]:focus {
            outline: none;
            border-color: #667eea;
          }
          button {
            width: 100%;
            padding: 14px 24px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            border-radius: 10px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: transform 0.2s, box-shadow 0.3s;
          }
          button:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
          }
          .message {
            padding: 12px;
            border-radius: 8px;
            margin-bottom: 20px;
            text-align: center;
          }
          .message.success {
            background: #d4edda;
            color: #155724;
          }
          .message.error {
            background: #f8d7da;
            color: #721c24;
          }
        </style>
      </head>
    
      <body>
        <div class="container">
          <h1>BioVault</h1>
          <p class="subtitle">Join our waitlist to be the first to know when we launch!</p>
          
          ${message ? `
            <div class="message ${message.startsWith('Success') ? 'success' : 'error'}">
              ${message}
            </div>
          ` : ''}
          
          <form method="POST" action="/api/waitlist">
            <div class="form-group">
              <label for="email">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="you@example.com" 
                required
              />
            </div>
            <button type="submit">Join Waitlist</button>
          </form>
        </div>
      </body>
    </html>
`;
}