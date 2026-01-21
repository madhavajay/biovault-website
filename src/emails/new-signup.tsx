interface NewSignupEmailProps {
    email: string;
    source?: string;
    page?: string;
    country?: string;
}

export function NewSignupEmail({ email, source, page, country }: NewSignupEmailProps) {
    return (
        <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', padding: '20px', maxWidth: '600px' }}>
            <h2 style={{ color: '#333', marginBottom: '20px' }}>New Waitlist Signup</h2>
            
            <div style={{ background: '#f5f5f5', padding: '16px', borderRadius: '8px', marginBottom: '16px' }}>
                <p style={{ margin: '0 0 8px 0', color: '#666', fontSize: '14px' }}>Email</p>
                <p style={{ margin: '0', color: '#000', fontSize: '16px', fontWeight: '500' }}>{email}</p>
            </div>

            {(source || page || country) && (
                <div style={{ borderTop: '1px solid #eee', paddingTop: '16px' }}>
                    <p style={{ margin: '0 0 12px 0', color: '#666', fontSize: '14px', fontWeight: '500' }}>Details</p>
                    {source && <p style={{ margin: '0 0 4px 0', color: '#666', fontSize: '14px' }}>Source: {source}</p>}
                    {page && <p style={{ margin: '0 0 4px 0', color: '#666', fontSize: '14px' }}>Page: {page}</p>}
                    {country && <p style={{ margin: '0 0 4px 0', color: '#666', fontSize: '14px' }}>Country: {country}</p>}
                </div>
            )}
        </div>
    );
}

export default NewSignupEmail;