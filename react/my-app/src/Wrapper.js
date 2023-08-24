export const Wrapper = ({ children }) => (
    <div style={
        {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '30px'
        }
    }>
        {children}
    </div>
)