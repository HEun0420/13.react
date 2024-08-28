function Header(){
    const headerStyle = {
        color: 'white',
        backgroundColor: '#333',
        padding: '20px',
        textAlign: 'center',
        borderRadius: '8px',
        fontFamily: 'Arial, sans-serif',
        fontSize: '2em',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        maxWidth: '600px',
        margin: '0 auto',
        display: 'inline-block'
    };

    return(
        <h1 style={headerStyle}>🍖🍗열린 레스토랑 닫힘💨</h1>
    )
}

export default Header;